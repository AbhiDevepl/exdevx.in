/**
 * Production runtime: serves the prerendered static site from dist/ and hosts
 * the server-only Gemini proxy at POST /api/chat.
 *
 * Replit: set the deployment run command to `node server.js` (not static publish).
 * The GEMINI_API_KEY comes from Replit Secrets / the process environment.
 */
import { config } from 'dotenv';
config({ path: '.env.local' }); // local dev convenience
config();                       // .env fallback; Replit Secrets override both

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleChat } from './api/chat.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const port = process.env.PORT || 5000;

const app = express();
app.post('/api/chat', handleChat); // handler reads the raw body itself
app.use(express.static(dist));
// SPA/SSG fallback: serve prerendered index.html for unknown routes
app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(port, '0.0.0.0', () => console.log(`Serving dist/ + /api/chat on :${port}`));
