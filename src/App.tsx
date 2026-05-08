/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import { Hero, Marquee, Services } from './components/Hero';
import { Locations, FAQ } from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="ExDevX | High-Performance Digital Solutions in Maharashtra"
        description="ExDevX is a top-rated web & app development agency in Pune, Maharashtra. We build high-performance websites, React Native apps, AI systems, and SaaS products."
        keywords="web developer pune, app developer pune, website development company pune, software company maharashtra, ExDevX, Abhay Jadhav, react native developer, saas development"
      />
      <Navbar />
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
      <Footer />
      <Chatbot />
    </div>
  );
}

