/**
 * Server-only Gemini proxy handler.
 * Reads GEMINI_API_KEY from the server environment (never shipped to the client)
 * and returns only the response text. Used by both server.js (prod) and the
 * Vite dev middleware (vite.config.ts) so there is one code path.
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

// ── Per-IP rate limit: 10 req / 60s, in-memory ───────────────────────────────
// ponytail: single-instance in-memory limiter. If you scale to multiple
// instances, move this to a shared store (Redis) — one process's Map won't
// see another's counts.
const LIMIT = 10;
const WINDOW_MS = 60_000;
const hits = new Map(); // ip -> { count, resetAt }

export function isLimited(ip, now = Date.now()) {
  const e = hits.get(ip);
  if (!e || now > e.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    if (hits.size > 10_000) prune(now); // ponytail: cheap unbounded-growth guard
    return false;
  }
  if (e.count >= LIMIT) return true;
  e.count++;
  return false;
}

function prune(now) {
  for (const [ip, e] of hits) if (now > e.resetAt) hits.delete(ip);
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (fwd ? String(fwd).split(',')[0].trim() : '') || req.socket?.remoteAddress || 'unknown';
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => {
      data += c;
      if (data.length > 100_000) reject(new Error('payload too large')); // cheap DoS guard
    });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(obj));
}

/** Node/Express-compatible handler: (req, res) => Promise<void> */
export async function handleChat(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' });

  const ip = clientIp(req);
  if (isLimited(ip)) return send(res, 429, { error: 'Rate limit exceeded. Try again in a minute.' });

  if (!process.env.GEMINI_API_KEY) {
    console.error('[chat] GEMINI_API_KEY is not set in the server environment');
    return send(res, 500, { error: 'Server misconfigured.' });
  }

  let body;
  try { body = await readJson(req); } catch { return send(res, 400, { error: 'Invalid request body.' }); }

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

// ── self-check: `node api/chat.js --selfcheck` ───────────────────────────────
if (process.argv.includes('--selfcheck')) {
  const assert = (c, m) => { if (!c) { console.error('FAIL:', m); process.exit(1); } };
  const ip = 'test-ip';
  const t0 = 1_000_000;
  for (let i = 0; i < LIMIT; i++) assert(!isLimited(ip, t0), `req ${i + 1} should pass`);
  assert(isLimited(ip, t0), '11th req in window should be limited');
  assert(!isLimited(ip, t0 + WINDOW_MS + 1), 'req after window resets should pass');
  console.log('OK: rate limiter (10/min per IP)');
}
