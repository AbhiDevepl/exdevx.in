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
 * Use hydrateRoot only when the root contains actual element children
 * (i.e. pre-rendered HTML from the SSG build).
 *
 * childElementCount counts only Element nodes — NOT comment nodes like
 * <!--ssr-outlet--> — so this correctly falls back to createRoot during
 * Vite dev mode where the placeholder comment is the only child.
 */
if (rootEl.childElementCount > 0) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
