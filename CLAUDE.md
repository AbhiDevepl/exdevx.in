# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

ExDevX marketing/agency site: a React 19 + Vite 6 SPA that is **prerendered to static HTML at build time** (SSG) for full crawlability, plus one serverless chat endpoint.

## Commands

```bash
npm run dev            # Vite dev server on http://localhost:5000 (also mounts /api/chat as middleware)
npm run build          # full SSG build: client bundle → SSR bundle → prerender each route (scripts/prerender.ts)
npm run build:client   # client-only Vite build (skips prerender) — rarely what you want
npm run preview        # serve the built dist/
npm run lint           # tsc --noEmit — this is the ONLY check; there is no ESLint
```

No test runner is configured. The chat handler has a standalone guard test:
`node api/chat.js --selfcheck` (no network/key needed — exercises 405 + 400 paths only).

## Architecture

**SSG prerender is the core pattern.** `npm run build` does NOT just run `vite build` — it runs [scripts/prerender.ts](scripts/prerender.ts), which: (1) builds the client bundle to `dist/`, (2) builds an SSR bundle from [src/entry-server.tsx](src/entry-server.tsx) to `dist/server/`, (3) renders each route with `renderToString` and injects the HTML into `dist/index.html` at the `<!--ssr-outlet-->` marker, writing one static file per route.

**Adding a route requires two edits in lockstep:** the `<Route>` in [src/App.tsx](src/App.tsx) AND the `routes` array in [scripts/prerender.ts](scripts/prerender.ts). Miss the second and the page ships as an empty (non-crawlable) SPA shell.

**`AppInner` is router-agnostic and must stay that way.** [src/App.tsx](src/App.tsx) exports `AppInner` (layout + `<Routes>`, no `<Router>`). The client wraps it in `BrowserRouter` ([main.tsx](src/main.tsx)); the SSR entry wraps it in `MemoryRouter` ([entry-server.tsx](src/entry-server.tsx)). `MemoryRouter` is used on the server deliberately — `StaticRouter` breaks under Vite SSR + react-router-dom v7. Don't move a `<Router>` into `AppInner`.

**Client mount auto-detects prerendered vs dev.** [main.tsx](src/main.tsx) calls `hydrateRoot` when `#root` has element children (prod, prerendered HTML) and `createRoot` otherwise (dev, where the only child is the `<!--ssr-outlet-->` comment — comment nodes don't count as element children). This is what keeps dev flicker-free without a build.

**One chat handler serves two runtimes.** [api/chat.js](api/chat.js) is a Vercel serverless function AND is imported by [vite.config.ts](vite.config.ts) as dev middleware, so `npm run dev` and prod run identical logic. Because of this, `getBody()` tolerates both Vercel's pre-parsed `req.body` and a raw request stream. Keep the handler runtime-neutral (no Vercel-only or Vite-only assumptions).

**Chat model:** Groq via `groq-sdk`, model `llama-3.3-70b-versatile`, non-streaming, returns `{ text }`. The frontend ([components/Chatbot.tsx](src/components/Chatbot.tsx)) depends on that `res.json()` `{ text }` contract — do not introduce streaming without changing both ends. 429s return a branded capacity message, not an error. Note: `llama-3.3-70b-versatile` is measurably weaker at prompt-injection/scope defense than the prior `gpt-oss-120b`.

## Conventions & gotchas

- **`GROQ_API_KEY` is server-side only** — no `VITE_` prefix (that would ship it to the browser). [vite.config.ts](vite.config.ts) copies it into `process.env` for the dev middleware.
- **README.md is stale** on the chatbot: it says Gemini / `GEMINI_API_KEY`, but the code uses Groq / `GROQ_API_KEY`. Trust the code.
- **Some components are grouped per file:** [Hero.tsx](src/components/Hero.tsx) exports `Hero`, `Marquee`, `Services`; [Locations.tsx](src/components/Locations.tsx) exports `Locations` and `FAQ`. Grep for the export, don't assume one-component-per-file.
- **SEO is content, not decoration.** Per-page `<SEO>` ([components/SEO.tsx](src/components/SEO.tsx)) via react-helmet-async, plus JSON-LD schema in `index.html`. The whole point of the SSG pipeline is that crawlers/AI bots see this rendered — verify new pages actually appear in `dist/<route>/index.html` after a build.
- **Rate limiting is at the edge**, not in code — Vercel Firewall rule (10 req/min per IP on `/api/chat`). Deploy is Vercel; SPA routes rewrite to `/index.html` except `/api/*` ([vercel.json](vercel.json)).
- **`@` path alias** resolves to the repo root (not `src/`).
