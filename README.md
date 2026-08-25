<div align="center">
  <img width="1200" height="475" alt="ExDevX Banner" src="https://ik.imagekit.io/exdev/file.jpg?updatedAt=1762525888800" />

  <h1>ExDevX</h1>
  <p><strong>High-performance web & app development agency — Pune, Maharashtra, India</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite" alt="Vite 6" />
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/SSG-Prerendered-brightgreen?style=flat-square" alt="SSG" />
  </p>

  <p>
    <a href="https://exdevx.in">🌐 exdevx.in</a> ·
    <a href="https://github.com/AbhiDevepl">GitHub</a> ·
    <a href="https://www.linkedin.com/in/abhay-jadhav-56a623309/">LinkedIn</a>
  </p>
</div>

---

## About

**ExDevX** is the portfolio and agency website for Abhay Jadhav — a full-stack software engineer based in Maharashtra, India. The site showcases services, locations, and a contact form, and is fully optimised for SEO, GEO (AI search engines), and AEO (answer engines).

Built as a **React + Vite SPA** with **static site generation (SSG)** prerendering — meaning every page is server-rendered to full HTML at build time, so search engine crawlers and AI bots see complete content without executing JavaScript.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 6 |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS v4 |
| Animations | Motion/React v12 |
| Routing | React Router DOM v7 |
| SEO | react-helmet-async |
| AI Chatbot | Google Gemini AI |
| SSG | Custom `renderToString` prerender pipeline |

---

## Features

- **Static prerendering (SSG)** — all routes rendered to HTML at build time; fully crawlable by Google, Perplexity, ChatGPT Search, and AI bots
- **Full SEO/GEO/AEO optimisation** — title tags, meta descriptions, Open Graph, Twitter Cards, canonical URLs, FAQPage schema, LocalBusiness schema, Organization schema, geo meta tags
- **AI chatbot** powered by Gemini AI (`GEMINI_API_KEY`)
- **Smooth section navigation** — hash-based scrolling for Services, Locations, FAQ, Contact
- **Responsive design** — mobile-first with dark theme
- **React hydration** — `hydrateRoot` in production, `createRoot` in development (no flicker)

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
# 1. Install dependencies
npm install

# 2. Set your Gemini API key
echo "GEMINI_API_KEY=your_key_here" > .env.local

# 3. Start the dev server (http://localhost:5000)
npm run dev
```

---

## Build & Prerender

The production build runs a **two-stage SSG pipeline**:

1. **Client build** — Vite bundles the React app to `dist/`
2. **SSR bundle** — Vite compiles `src/entry-server.tsx` to `dist/server/`
3. **Prerender** — each route is rendered via `renderToString` and injected into `dist/index.html`

```bash
npm run build
```

Output: fully pre-rendered static HTML files in `dist/` ready to deploy anywhere.

| Route | Output file |
|---|---|
| `/` | `dist/index.html` |
| `/privacy-policy` | `dist/privacy-policy/index.html` |
| `/terms-of-service` | `dist/terms-of-service/index.html` |

---

## Project Structure

```
├── public/
│   ├── favicon.svg        # Brand favicon (lightning bolt, indigo)
│   ├── robots.txt         # Crawler directives (allows GPTBot, PerplexityBot, etc.)
│   └── sitemap.xml        # XML sitemap
├── scripts/
│   └── prerender.ts       # SSG prerender script (runs at build time)
├── src/
│   ├── components/        # UI components (Hero, Navbar, Services, FAQ, Footer…)
│   ├── entry-server.tsx   # SSR render entry (used by prerender script)
│   ├── App.tsx            # App shell — exports AppInner (router-agnostic)
│   └── main.tsx           # Client entry — hydrateRoot or createRoot
└── index.html             # HTML shell with all SEO meta tags + JSON-LD schemas
```

---

## Deployment

Deployed on **Vercel** (Vite preset). The prerendered site is served as static
files from `dist/`, and `POST /api/chat` runs as a Vercel Serverless Function
(`api/chat.js`). Config lives in `vercel.json`.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Env vars:** set `GEMINI_API_KEY` in Project Settings → Environment Variables (Production + Preview + Development). No `VITE_` prefix — it must stay server-side.
- **Rate limiting:** `/api/chat` is throttled at the edge via **Vercel Firewall** (dashboard rule: 10 req/min per IP). Custom firewall rules require the **Pro** plan.
- **Live site:** [exdevx.in](https://exdevx.in)

Local API dev: `npm run dev` (Vite mounts the same `api/chat.js` handler as
middleware) or `vercel dev` (runs the function under the Vercel runtime). Both
use one handler — no divergent code path.

After deploying, submit the sitemap in Google Search Console:  
`https://exdevx.in/sitemap.xml`

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes | Google Gemini API key for the AI chatbot |

---

## Founder

**Abhay Jadhav** — Full-stack engineer, Maharashtra, India  
GitHub: [github.com/AbhiDevepl](https://github.com/AbhiDevepl) · LinkedIn: [abhay-jadhav-56a623309](https://www.linkedin.com/in/abhay-jadhav-56a623309/)

---

<div align="center">
  <p>© 2026 ExDevX · Pune, Maharashtra, India · <a href="https://exdevx.in">exdevx.in</a></p>
</div>
