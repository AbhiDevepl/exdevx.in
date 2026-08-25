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
      <div className="mb-12 md:mb-20 max-w-3xl">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">Where we serve</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">Web Development <br/> Across Maharashtra</h2>
        <p className="text-zinc-500 text-base md:text-lg mt-4 md:mt-6 max-w-xl leading-relaxed">
          Maharashtra-based agency serving clients locally and remotely across the state and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5">
        {[
          { id: '01', city: 'Pune', desc: 'Our primary base. Serving startups, enterprises, and local businesses with world-class web and app development.' },
          { id: '02', city: 'Ahilyanagar', desc: 'Custom business websites and mobile apps for entrepreneurs in Ahilyanagar and surrounding areas.' },
          { id: '03', city: 'Shrigonda', desc: 'React Native app development and business websites for local shops and clinics in Shrigonda.' }
        ].map((loc) => (
          <div key={loc.id} className="p-8 md:p-10 border-white/5 [&:not(:last-child)]:md:border-r relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 md:p-8 font-display text-6xl md:text-7xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors font-bold">{loc.id}</div>
            <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-white">{loc.city}</h3>
            <div className="font-mono text-[10px] md:text-xs text-zinc-600 mb-6 uppercase tracking-[0.2em]">MAHARASHTRA, INDIA</div>
            <p className="text-zinc-500 leading-relaxed text-xs md:text-sm relative z-10">{loc.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 md:mt-40">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-6 tracking-widest uppercase font-bold">Who we work with</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Built for every business</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(industry => (
            <div key={industry} className="flex items-center space-x-3">
              <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] md:text-xs text-zinc-400">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What services does ExDevX offer?",
    a: "ExDevX offers custom web development (React, Next.js, Node.js), cross-platform mobile app development (React Native, Flutter), AI system integration using OpenAI and LangChain, SaaS platform architecture, backend and API development (PostgreSQL, GraphQL), e-commerce solutions, and UI/UX design using Figma. We serve startups and businesses across Maharashtra, India."
  },
  {
    q: "Who is the founder of ExDevX?",
    a: "ExDevX was founded in 2022 by Abhay Jadhav, a software engineer based in Maharashtra, India. Abhay leads all engineering at ExDevX and has delivered live production platforms including ssnlc.in, a Next.js and Express.js platform built for a real institution. His GitHub is github.com/AbhiDevepl."
  },
  {
    q: "Where is ExDevX located and which areas do you serve?",
    a: "ExDevX is based in Pune, Maharashtra, India — with active service coverage in Ahilyanagar, Shrigonda, and across Maharashtra. We also work with clients remotely across India and internationally. Reach us at hello@exdevx.in."
  },
  {
    q: "How long does it take to build a website with ExDevX?",
    a: "A standard business website typically takes 4 to 6 weeks from kickoff to launch. Complex web applications or SaaS platforms with custom features may take 8 to 16 weeks depending on scope. ExDevX follows a lean, iterative approach to get your product to market as efficiently as possible."
  },
  {
    q: "Can ExDevX build an AI-powered app or integrate AI into my existing product?",
    a: "Yes. ExDevX integrates OpenAI GPT models, LangChain pipelines, and custom machine learning systems into web and mobile applications. Services include AI chatbots, intelligent automation, document analysis, recommendation systems, and natural language processing features tailored to your business."
  },
  {
    q: "What is the cost of web development at ExDevX?",
    a: "Pricing depends on project scope. A standard business website is affordable for small businesses in Maharashtra, while complex SaaS platforms or mobile apps are priced according to requirements. Contact us at hello@exdevx.in for a free consultation and detailed project estimate."
  },
  {
    q: "Does ExDevX develop React Native and Flutter mobile apps?",
    a: "Yes. ExDevX builds cross-platform mobile applications using React Native and Flutter for both iOS and Android. Our apps deliver native-level performance while sharing a single codebase, reducing cost and development time for startups and businesses across Pune and Maharashtra."
  },
  {
    q: "What makes ExDevX different from other web development agencies in Pune?",
    a: "ExDevX is a production-first agency focused on performance and reliability. Founded in 2022 by Abhay Jadhav, we have delivered live platforms like ssnlc.in for real institutions. We specialize in React, Node.js, AI integration, and SaaS architecture — not just static websites. Every project is designed for scale from the start."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20 md:py-32 max-w-3xl mx-auto">
      <div className="mb-12 md:mb-20">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">Common Questions</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
          Everything you need to know about working with ExDevX — Pune's high-performance web and app development agency.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/5 overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full py-4 md:py-5 flex justify-between items-center text-left group gap-4 rounded-lg focus-ring"
              aria-expanded={openIdx === idx}
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
              <p className="pb-4 md:pb-6 text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl">
                {faq.a}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 text-center px-8 py-10 border border-white/5 rounded-2xl bg-white/[0.01]">
        <p className="text-zinc-400 text-sm md:text-base">Still have questions? We respond within 24 hours.</p>
        <a
          href="mailto:hello@exdevx.in"
          className="inline-block mt-4 font-mono text-xs text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors rounded-sm focus-ring"
        >
          hello@exdevx.in
        </a>
      </div>
    </section>
  );
}
