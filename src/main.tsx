import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

/**
 * If the root element already has content, the page was server-rendered
 * (prerendered at build time). Use hydrateRoot to attach event listeners
 * without discarding the existing HTML — this is instant and flicker-free.
 *
 * If the root is empty (Vite dev server in development), fall back to
 * createRoot which renders the app from scratch in the browser as a normal SPA.
 */
if (rootEl.innerHTML.trim()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
