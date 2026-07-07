/**
 * Vercel Serverless Function: server-only Gemini proxy.
 * Reads GEMINI_API_KEY from the server environment (never shipped to the client)
 * and returns only the response text.
 *
 * Rate limiting is NOT done here — it lives at the edge via Vercel Firewall
 * (dashboard rule: 10 req/min per IP on /api/chat). Stateless functions can't
 * hold a reliable in-memory counter, so keeping it out of code is deliberate.
 *
 * The same default export is reused by the Vite dev middleware (vite.config.ts)
 * so `npm run dev` and `vercel dev` run identical handler logic — one code path.
 */
import { GoogleGenAI } from '@google/genai';

const MODEL = 'gemini-3-flash-preview';

const SYSTEM_INSTRUCTION = `
  You are the official AI assistant for ExDevX, a high-performance digital solutions agency based in Maharashtra, India.

  Company Details:
  - Name: ExDevX
  - Founder: Abhay Jadhav
  - Founded: 2022
  - Locations: Pune (Primary base), Ahilyanagar, Shrigonda.
  - Core Services: Web Development (React, Next.js, Vue), Mobile App Development (React Native, Flutter), AI System Integration, SaaS Products, and UI/UX Design (Figma).
  - Tech Stack: Node.js, PostgreSQL, GraphQL, OpenAI, LangChain, Stripe.
  - Philosophy: High-performance, production-grade software for startups and businesses.
  - Goal: Help clients build scalable, modern digital products.

  Instructions:
  - Be professional, tech-forward, and helpful.
  - If someone asks to start a project, encourage them to use the contact form or email hello@exdevx.in.
  - Keep responses concise and focused on how ExDevX can solve their problems.
  - Emphasize the Maharashtra context (Pune, local expertise).
  - If asked about Abhay Jadhav, mention he is the expert founder leading the engineering efforts.
`;

function readStream(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => {
      data += c;
      if (data.length > 100_000) reject(new Error('payload too large')); // cheap DoS guard
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

// Vercel pre-parses JSON into req.body; the Vite dev middleware does not.
// Tolerate both so one handler serves both runtimes.
async function getBody(req) {
  if (req.body !== undefined && req.body !== null) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }
  const raw = await readStream(req);
  return raw ? JSON.parse(raw) : {};
}

function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(obj));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' });

  if (!process.env.GEMINI_API_KEY) {
    console.error('[chat] GEMINI_API_KEY is not set in the server environment');
    return send(res, 500, { error: 'Server misconfigured.' });
  }

  let body;
  try { body = await getBody(req); } catch { return send(res, 400, { error: 'Invalid request body.' }); }

  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const history = Array.isArray(body.messages) ? body.messages : [];
  if (!message) return send(res, 400, { error: 'Message is required.' });

  const contents = [
    { role: 'user', parts: [{ text: SYSTEM_INSTRUCTION }] },
    ...history
      .filter((m) => m && typeof m.content === 'string')
      .map((m) => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
    { role: 'user', parts: [{ text: message }] },
  ];

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({ model: MODEL, contents });
    return send(res, 200, { text: response.text || '' });
  } catch (err) {
    console.error('[chat] Gemini error:', err?.message || err);
    return send(res, 502, { error: 'Upstream AI error.' });
  }
}

// ── self-check: `node api/chat.js --selfcheck` (no network, no key needed) ────
if (process.argv.includes('--selfcheck')) {
  const assert = (c, m) => { if (!c) { console.error('FAIL:', m); process.exit(1); } };
  const fakeRes = () => ({ statusCode: 0, headers: {}, body: '', setHeader(k, v) { this.headers[k] = v; }, end(b) { this.body = b; } });

  // non-POST → 405
  let r = fakeRes();
  handler({ method: 'GET', headers: {} }, r);
  assert(r.statusCode === 405, 'GET should be 405');

  // POST, key set, empty message → 400 (validation runs before Gemini)
  process.env.GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'dummy-for-selfcheck';
  r = fakeRes();
  await handler({ method: 'POST', headers: {}, body: { message: '' } }, r);
  assert(r.statusCode === 400, 'empty message should be 400');
  assert(JSON.parse(r.body).error === 'Message is required.', '400 error text');

  console.log('OK: handler guards (405 non-POST, 400 empty message)');
}
