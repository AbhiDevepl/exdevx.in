/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Hero, Marquee, Services } from './components/Hero';
import { Locations, FAQ } from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

const Chatbot = lazy(() => import('./components/Chatbot'));

/**
 * Mounts the chatbot in its own chunk after the browser is idle, so it never
 * competes with first paint. Renders nothing during SSR (useEffect doesn't run),
 * which also keeps hydration consistent.
 */
function DeferredChatbot() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setReady(true));
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);
  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <Chatbot />
    </Suspense>
  );
}

function Home() {
  return (
    <>
      <SEO
        title="ExDevX | Web & App Development Agency, Pune India"
        description="ExDevX is a Pune-based web & app development agency in Maharashtra, India. We build React websites, mobile apps, AI integrations & SaaS platforms for startups. Get a free consultation."
        keywords="web developer pune, app developer maharashtra, website development company pune, software company maharashtra, ExDevX, Abhay Jadhav, react native developer pune, saas development india, AI integration pune, web design shrigonda, web design ahilyanagar"
        pageType="homepage"
      />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <Locations />
        </div>
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

/**
 * AppInner — router-agnostic layout used by both the client app (BrowserRouter)
 * and the SSR prerender entry (StaticRouter). Keep this export stable.
 */
export function AppInner() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <DeferredChatbot />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
