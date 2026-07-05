/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'motion/react';
import { MapPin, Globe, Smartphone, Brain, Database, Layers, ShoppingCart, PenTool, TrendingUp } from 'lucide-react';

export function Hero() {
  const techs = ["React", "Next.js", "Vue", "Node.js", "PostgreSQL", "GraphQL", "React Native", "Flutter", "OpenAI", "LangChain", "Stripe", "Figma"];

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 relative"
      >
        <div className="inline-flex items-center space-x-2 border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-8">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span className="font-mono text-[9px] md:text-[10px] text-primary uppercase tracking-wider">Pune · Maharashtra · India</span>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
          We Build <br/>
          <span className="text-primary">Digital Products</span>
        </h1>
        
        <p className="text-zinc-400 text-base md:text-xl max-w-xl mb-10 md:mb-12 leading-relaxed">
          ExDevX builds high-performance websites, mobile apps, AI systems, and SaaS products for startups and businesses across Pune, Ahilyanagar, Shrigonda & Maharashtra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0">
          <a href="#contact" className="bg-primary hover:bg-primary-dark text-zinc-950 px-8 md:px-10 py-4 font-mono text-[10px] md:text-xs font-bold tracking-widest rounded-lg transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.35)] w-full sm:w-auto text-center focus-ring">
            START A PROJECT
          </a>
          <a href="#services" className="border border-white/10 hover:border-primary/40 text-zinc-200 hover:text-white px-8 md:px-10 py-4 font-mono text-[10px] md:text-xs font-bold tracking-widest rounded-lg transition-all w-full sm:w-auto text-center focus-ring">
            VIEW SERVICES
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
          <div>
            <div className="font-display text-2xl md:text-3xl font-bold text-primary">5+</div>
            <div className="font-mono text-[8px] md:text-[10px] text-zinc-500 uppercase mt-1">Projects Delivered</div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl font-bold text-white">99%</div>
            <div className="font-mono text-[8px] md:text-[10px] text-zinc-500 uppercase mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl font-bold text-zinc-400">24h</div>
            <div className="font-mono text-[8px] md:text-[10px] text-zinc-500 uppercase mt-1">Response Time</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-10 md:-inset-20 bg-primary/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
        <div className="glass-card p-6 md:p-8 rounded-2xl relative border-white/10 shadow-2xl overflow-hidden">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Tech Stack</h3>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary animate-pulse" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
            {techs.map(tech => (
              <div key={tech} className="p-3 border border-white/5 bg-white/5 rounded font-mono text-[9px] md:text-[10px] text-center text-zinc-300 hover:border-primary/40 transition-colors">
                {tech}
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between font-mono text-[8px] md:text-[9px] text-zinc-500">
            <span>Founded by Abhay Jadhav</span>
            <span>Est. 2022</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Marquee() {
  const items = ["PUNE-BASED AGENCY", "FOUNDED BY ABHAY JADHAV", "WEB & MOBILE EXPERTS", "AI INTEGRATION READY", "MAHARASHTRA-WIDE SERVICE"];
  
  return (
    <div className="border-y border-white/5 bg-zinc-900/30 py-4 md:py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="font-mono text-[10px] md:text-[11px] text-zinc-500 flex items-center px-8 md:px-12 tracking-widest uppercase shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  { id: '01', title: 'Web Development', desc: 'React, Next.js, Vue — performance-obsessed builds with sub-second load times and mobile-first design.', icon: Globe, tags: ['REACT', 'NEXT.JS', 'VUE'], color: 'text-primary' },
  { id: '02', title: 'Mobile App Development', desc: 'React Native & Flutter apps for iOS and Android. Cross-platform builds with native performance.', icon: Smartphone, tags: ['REACT NATIVE', 'FLUTTER'], color: 'text-white' },
  { id: '03', title: 'AI Integration', desc: 'LLM-powered chatbots, ML pipelines, intelligent automation, and AI-driven features in your product.', icon: Brain, tags: ['OPENAI', 'LANGCHAIN'], color: 'text-primary' },
  { id: '04', title: 'Backend & API', desc: 'Node.js, PostgreSQL, REST & GraphQL APIs. Scalable backend systems built for 99.9% uptime.', icon: Database, tags: ['NODE.JS', 'POSTGRESQL'], color: 'text-white' },
  { id: '05', title: 'SaaS Development', desc: 'End-to-end SaaS architecture — auth, billing, multi-tenancy, and dashboards. Built for scale.', icon: Layers, tags: ['SAAS', 'STRIPE'], color: 'text-primary' },
  { id: '06', title: 'E-commerce', desc: 'Custom e-commerce stores and marketplaces for shops, brands, and retailers.', icon: ShoppingCart, tags: ['PAYMENTS', 'CARTS'], color: 'text-white' },
  { id: '07', title: 'UI/UX Design', desc: 'User-centered design systems, wireframes, and Figma prototypes that convert visitors into customers.', icon: PenTool, tags: ['FIGMA', 'SYSTEMS'], color: 'text-primary' },
  { id: '08', title: 'SEO Strategy', desc: 'Websites built to rank on Google — fast Core Web Vitals, structured data, and local SEO mastery.', icon: TrendingUp, tags: ['GOOGLE', 'RANKING'], color: 'text-white' },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">What we build</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">Full-Stack Engineering & Digital Solutions</h2>
        <p className="text-zinc-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl leading-relaxed">
          From high-converting business websites to complex SaaS platforms — ExDevX delivers production-grade software for businesses across Maharashtra.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l sm:border-t border-white/5">
        {services.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-8 md:p-10 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors group relative"
          >
            <div className="font-mono text-[9px] md:text-[10px] text-zinc-700 mb-6 md:mb-8">{service.id}</div>
            <service.icon className={`w-7 h-7 md:w-8 md:h-8 mb-5 md:mb-6 ${service.color}`} strokeWidth={1.5} />
            <h3 className="font-display text-lg md:text-xl font-bold mb-3 md:mb-4">{service.title}</h3>
            <p className="text-zinc-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">{service.desc}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-white/5 rounded-sm font-mono text-[8px] md:text-[9px] text-zinc-400 border border-white/5">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
