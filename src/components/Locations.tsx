/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const cities = ["Pune", "Ahilyanagar", "Shrigonda", "Maharashtra"];
const industries = ["Startups", "Local Businesses", "Clinics & Hospitals", "Restaurants", "Real Estate", "Colleges & Institutes", "Coaches & Trainers", "Agencies", "Personal Brands", "SMEs", "Shops & Retailers", "SaaS Founders"];

export function Locations() {
  return (
    <section id="locations" className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12 md:mb-20">
        <div>
          <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">Where we serve</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">Web Development <br/> Across Maharashtra</h2>
        </div>
        <p className="text-zinc-500 text-base md:text-lg max-w-xl mb-2">
          Maharashtra-based agency serving clients locally and remotely across the state and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { id: '01', city: 'Pune', desc: 'Our primary base. Serving startups, enterprises, and local businesses with world-class web and app development.', accent: 'text-primary' },
          { id: '02', city: 'Ahilyanagar', desc: 'Custom business websites and mobile apps for entrepreneurs in Ahilyanagar and surrounding areas.', accent: 'text-white' },
          { id: '03', city: 'Shrigonda', desc: 'React Native app development and business websites for local shops and clinics in Shrigonda.', accent: 'text-zinc-400' }
        ].map((loc) => (
          <div key={loc.id} className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group border-white/5">
            <div className="absolute top-0 right-0 p-6 md:p-8 font-display text-6xl md:text-7xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors font-bold">{loc.id}</div>
            <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 ${loc.accent}`}>{loc.city}</h3>
            <div className="font-mono text-[8px] md:text-[9px] text-zinc-600 mb-6 uppercase tracking-[0.2em]">MAHARASHTRA, INDIA</div>
            <p className="text-zinc-500 leading-relaxed text-xs md:text-sm relative z-10">{loc.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 md:mt-40">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-6 tracking-widest uppercase font-bold">Who we work with</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12">Built for every business</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(industry => (
            <div key={industry} className="p-5 border border-white/5 bg-white/[0.02] flex items-center space-x-4 hover:border-primary/40 transition-colors rounded-lg group">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              <span className="font-mono text-[10px] md:text-xs text-zinc-400 group-hover:text-white transition-colors">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What services does ExDevX offer?", a: "We specialize in custom web applications (React/Next.js/Node.js), cross-platform mobile apps (React Native/Flutter), AI integrations using LLMs, and SaaS architecture." },
  { q: "Who is the founder of ExDevX?", a: "ExDevX was founded by Abhay Jadhav, focusing on bringing high-performance digital solutions to businesses across Maharashtra." },
  { q: "Does ExDevX serve clients outside Pune?", a: "Yes, while based in Pune, we serve businesses in Ahilyanagar, Shrigonda, and remotely across the globe." },
  { q: "How long does it take to build a website?", a: "Typically, a website takes 4-8 weeks depending on complexity. We follow a lean approach to get your product to market efficiently." },
  { q: "Can you build an AI-powered app?", a: "Absolutely. We integrate OpenAI, LangChain, and custom ML models to add intelligent features like chatbots, analysis, and automation." }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20 md:py-32 max-w-3xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">Common Questions</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full py-6 md:py-8 flex justify-between items-center text-left group gap-4"
            >
              <span className={`font-display text-base md:text-lg tracking-tight transition-colors ${openIdx === idx ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: openIdx === idx ? 45 : 0 }}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0"
              >
                <Plus className={`w-4 h-4 ${openIdx === idx ? 'text-primary' : 'text-zinc-600'}`} />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIdx === idx ? 'auto' : 0, opacity: openIdx === idx ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pb-6 md:pb-8 text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl">
                {faq.a}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
