/**
 * Static prerender script.
 * Run after `vite build` to inject server-rendered HTML into the built index.html.
 * This makes all page content crawlable by search engines and AI bots
 * without requiring a running server.
 *
 * Usage: tsx scripts/prerender.ts
 */

import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const routes: Array<{ url: string; file: string }> = [
  { url: '/', file: 'index.html' },
  { url: '/privacy-policy', file: 'privacy-policy/index.html' },
  { url: '/terms-of-service', file: 'terms-of-service/index.html' },
];

// ── Step 1: Build client bundle ──────────────────────────────────────────────
console.log('\n[prerender] Building client bundle…');
await build({
  root,
  build: {
    outDir: path.join(root, 'dist'),
    emptyOutDir: true,
  },
});

// ── Step 2: Build SSR bundle ─────────────────────────────────────────────────
console.log('\n[prerender] Building SSR bundle…');
await build({
  root,
  build: {
    ssr: path.join(root, 'src/entry-server.tsx'),
    outDir: path.join(root, 'dist/server'),
    emptyOutDir: true,
    rollupOptions: {
      output: { format: 'es' },
    },
  },
  ssr: {
    // Bundle these so they work in the Node.js prerender context
    noExternal: ['react-helmet-async'],
  },
});

// ── Step 3: Render each route ────────────────────────────────────────────────
console.log('\n[prerender] Rendering pages…');

const serverEntryPath = path.join(root, 'dist/server/entry-server.js');
const { render } = (await import(pathToFileURL(serverEntryPath).href)) as {
  render: (url: string) => { html: string };
};

const template = readFileSync(path.join(root, 'dist/index.html'), 'utf-8');

for (const { url, file } of routes) {
  const { html: appHtml } = render(url);

  const fullHtml = template.replace('<!--ssr-outlet-->', appHtml);

  const outPath = path.join(root, 'dist', file);
  const outDir = path.dirname(outPath);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  writeFileSync(outPath, fullHtml);
  console.log(`  ✓  ${url}  →  dist/${file}`);
}

console.log('\n[prerender] Done. Static HTML is fully crawlable.\n');
