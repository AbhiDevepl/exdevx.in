Fix the following issues in the exdevx.in codebase (Vite + React 19 + TypeScript + Tailwind, deployed on Vercel). Work through them in this order — later fixes depend on earlier ones being stable.

## 0. Root cause — zero Google indexation (CSR SPA)
Current site is client-side rendered only, so crawlers get an empty shell.
- Migrate to prerendering: add vite-plugin-ssr, or simpler — use `vite-plugin-prerender` / `@prerenderer/rollup-plugin` to statically generate HTML for each route (home, services, about, contact) at build time.
- If routes are dynamic/data-driven, evaluate migrating to Next.js App Router instead (bigger lift — flag effort estimate before starting, don't just do it).
- After prerendering is in place, re-verify with `curl` that each route returns full content in the initial HTML response (not just <div id="root">).
- Update sitemap.xml generation to run post-build against the prerendered routes.

## 1. Security headers (Best Practices)
Add to vercel.json (create if missing), headers for all routes:
- Content-Security-Policy: script-src, style-src, connect-src (must allow Groq API endpoint + any Vercel serverless function routes), img-src, font-src. Use nonces/hashes for inline scripts — no 'unsafe-inline' unless unavoidable.
- Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
- Cross-Origin-Opener-Policy: same-origin
- X-Frame-Options: DENY (or frame-ancestors 'none' in CSP)
- Audit for any dangerouslySetInnerHTML / innerHTML usage; wrap in a Trusted Types policy or refactor it out.

## 2. Performance — render-blocking requests (Est. savings 1660ms)
- Move non-critical CSS to async load (media="print" onload swap) or inline critical CSS in index.html.
- Add rel="preload" for the LCP resource (hero image or web font).
- Lazy-load the chatbot widget on interaction/scroll instead of initial page load.

## 3. Performance — unused JavaScript (Est. savings 130 KiB)
- Add rollup-plugin-visualizer, identify dead chunks.
- Code-split chatbot + below-the-fold sections via React.lazy + Suspense.
- Confirm Tailwind JIT purge content paths are correct so production CSS isn't bloated.

## 4. Performance — long main-thread tasks (4 found)
- Profile via React DevTools Profiler / Lighthouse trace.
- Defer chatbot SDK init and any analytics init to after first paint using requestIdleCallback or a deferred useEffect.
- Virtualize any large unvirtualized list renders.

## 5. Accessibility — select missing accessible name
Contact/quote form `<select name="service">`:
- Add aria-label="Select a service" or an associated <label htmlFor="service"> (sr-only, not display:none).

## 6. Accessibility — insufficient contrast
- Audit text on translucent backgrounds (e.g. bg-white/[0.03]) against WCAG AA (4.5:1 body, 3:1 large text). Adjust Tailwind color/opacity tokens until compliant.

## 7. Accessibility — non-sequential heading order
- Fix heading hierarchy site-wide (h1→h2→h3, no skipped levels). Use CSS for visual sizing, not heading level, where headings were downgraded/upgraded for appearance.

## 8. Agentic Browsing — llms.txt malformed
Fix /public/llms.txt to have a real H1 and real links matching actual routes: