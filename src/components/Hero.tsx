/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Globe, Smartphone, Brain, Database, Layers, ShoppingCart, PenTool, TrendingUp } from 'lucide-react';

/** Strong ease-out — matches --ease-out-expo in index.css. */
const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Hero() {
  const techs = ["React", "Next.js", "Vue", "Node.js", "PostgreSQL", "GraphQL", "React Native", "Flutter", "OpenAI", "LangChain", "Stripe", "Figma"];

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(12px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
        className="z-10 relative"
      >
        <div className="inline-flex items-center space-x-2 border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-8">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span className="font-mono text-[10px] md:text-xs text-primary uppercase tracking-wider">Pune · Maharashtra · India</span>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
          We Build <br/>
          <span className="text-primary">Digital Products</span>
        </h1>
        
        <p className="text-zinc-400 text-base md:text-xl max-w-xl mb-10 md:mb-12 leading-relaxed">
          ExDevX builds high-performance websites, mobile apps, AI systems, and SaaS products for startups and businesses across Pune, Ahilyanagar, Shrigonda & Maharashtra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0">
          <a href="#contact" className="btn btn-primary btn-lg w-full sm:w-auto group">
            START A PROJECT
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a href="#services" className="btn btn-secondary btn-lg w-full sm:w-auto">
            VIEW SERVICES
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
          <div>
            <div className="font-display text-2xl md:text-3xl font-bold text-primary">5+</div>
            <div className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase mt-1">Projects Shipped</div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl font-bold text-white">2022</div>
            <div className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase mt-1">Founded · Founder-Led</div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl font-bold text-zinc-400">&lt;24h</div>
            <div className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase mt-1">Response Time</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, transform: 'translateY(16px) scale(0.98)' }}
        animate={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
        transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
        className="relative"
      >
        <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Tech Stack</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
            {techs.map(tech => (
              <div key={tech} className="p-3 border border-white/[0.03] bg-white/[0.02] rounded font-mono text-[10px] md:text-xs text-center text-zinc-400">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Marquee() {
  const items = ["Pune-based agency", "Founded by Abhay Jadhav", "Web & mobile experts", "AI integration ready", "Maharashtra-wide service"];
  
  return (
    <div className="border-y border-white/5 bg-zinc-900/30 py-4 md:py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="font-mono text-[10px] md:text-xs text-zinc-500 flex items-center px-8 md:px-12 tracking-widest shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  { id: '01', title: 'Web Development', desc: 'Your website is often the first impression of your business. We build fast, accessible sites that turn visitors into enquiries.', icon: Globe, tags: ['REACT', 'NEXT.JS', 'VUE'], color: 'text-primary' },
  { id: '02', title: 'Mobile App Development', desc: 'Reach customers where they are. One codebase, both app stores — React Native and Flutter with native-level performance.', icon: Smartphone, tags: ['REACT NATIVE', 'FLUTTER'], color: 'text-white' },
  { id: '03', title: 'AI Integration', desc: 'Automate support and manual workflows. We build LLM-powered features into products your team and customers actually use.', icon: Brain, tags: ['OPENAI', 'LANGCHAIN'], color: 'text-primary' },
  { id: '04', title: 'Backend & API', desc: 'Infrastructure that stays reliable as you grow. Node.js, PostgreSQL, REST & GraphQL systems designed for scale.', icon: Database, tags: ['NODE.JS', 'POSTGRESQL'], color: 'text-white' },
  { id: '05', title: 'SaaS Development', desc: 'From first paying customer to thousands of users. Auth, billing, multi-tenancy, and dashboards done properly.', icon: Layers, tags: ['SAAS', 'STRIPE'], color: 'text-primary' },
  { id: '06', title: 'E-commerce', desc: 'Stores engineered to convert — clean catalogs, frictionless checkout, and payments that just work.', icon: ShoppingCart, tags: ['PAYMENTS', 'CARTS'], color: 'text-white' },
  { id: '07', title: 'UI/UX Design', desc: 'Interfaces designed around how your users actually behave. Wireframes and Figma prototypes before a line of code.', icon: PenTool, tags: ['FIGMA', 'SYSTEMS'], color: 'text-primary' },
  { id: '08', title: 'SEO Strategy', desc: 'A site nobody finds is a site nobody buys from. Technical SEO, Core Web Vitals, and local search handled from day one.', icon: TrendingUp, tags: ['GOOGLE', 'RANKING'], color: 'text-white' },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">What we build</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight tracking-tight">Full-Stack Engineering & Digital Solutions</h2>
        <p className="text-zinc-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl leading-relaxed">
          From high-converting business websites to complex SaaS platforms — ExDevX delivers production-grade software for businesses across Maharashtra.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l sm:border-t border-white/5">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ delay: idx * 0.04, duration: 0.4, ease: EASE_OUT }}
            className="p-8 md:p-10 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors group relative"
          >
            <div className="font-mono text-xs text-zinc-500 mb-6 md:mb-8">{service.id}</div>
            <service.icon className={`w-7 h-7 md:w-8 md:h-8 mb-5 md:mb-6 ${service.color}`} strokeWidth={1.5} />
            <h3 className="font-display text-lg md:text-xl font-bold mb-3 md:mb-4">{service.title}</h3>
            <p className="text-zinc-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">{service.desc}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {service.tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] md:text-xs text-zinc-500 tracking-wider">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, transform: 'translateY(16px)' }}
        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
        className="mt-16 md:mt-20 border border-white/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
      >
        <div className="flex-1">
          <div className="font-mono text-[10px] md:text-xs text-primary mb-3 tracking-widest uppercase font-bold">Selected work</div>
          <h3 className="font-display text-xl md:text-2xl font-bold">ssnlc.in</h3>
          <p className="text-zinc-500 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
            A production platform built end-to-end for a real institution — Next.js and Express.js,
            designed, engineered, and shipped live by ExDevX.
          </p>
        </div>
        <a
          href="https://ssnlc.in"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary shrink-0 self-start md:self-center"
        >
          VIEW LIVE SITE
          <ArrowRight className="w-3.5 h-3.5 -rotate-45" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
