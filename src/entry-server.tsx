/**
 * Server-side rendering entry point.
 * Used by scripts/prerender.ts to generate static HTML at build time.
 *
 * Uses MemoryRouter (not StaticRouter) to avoid the react-router-dom/server
 * subpath resolution issue with Vite SSR + react-router-dom v7.
 */

import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppInner } from './App';

export function render(url: string): { html: string } {
  const html = renderToString(
    <HelmetProvider>
      <MemoryRouter initialEntries={[url]} initialIndex={0}>
        <AppInner />
      </MemoryRouter>
    </HelmetProvider>
  );
  return { html };
}
