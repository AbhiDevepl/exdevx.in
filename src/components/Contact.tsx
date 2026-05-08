/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Github, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">Get Started</div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">Start Your Project <br className="hidden sm:block"/> with ExDevX</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        <div className="lg:col-span-5 space-y-8 md:space-y-12">
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
            We respond within 24 hours. Serving Pune, Ahilyanagar, Shrigonda & all of Maharashtra.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              { icon: Mail, label: 'Email', value: 'hello@exdevx.in', sub: 'Always active', color: 'text-primary' },
              { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra', sub: 'India', color: 'text-white' },
              { icon: Clock, label: 'Hours', value: '9am - 8pm IST', sub: 'Mon-Sat', color: 'text-zinc-400' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-primary/40 transition-colors shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-[8px] md:text-[9px] text-zinc-600 mb-1 uppercase tracking-widest">{item.label}</div>
                  <div className={`font-display text-sm md:text-base font-medium ${item.color}`}>{item.value}</div>
                  <div className="font-mono text-[8px] md:text-[9px] text-zinc-700 uppercase mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest">Name</label>
                <input type="text" placeholder="Abhay Jadhav" className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none text-zinc-200 text-sm md:text-base" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="abhay@exdevx.in" className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none text-zinc-200 text-sm md:text-base" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest">Service</label>
              <select className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none text-zinc-400 appearance-none text-sm md:text-base">
                <option>Select a service...</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>AI Integration</option>
                <option>SaaS Platform</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest">Message</label>
              <textarea placeholder="Tell us about your digital goals..." rows={4} className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none text-zinc-200 resize-none text-sm md:text-base" />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-primary text-white font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] py-5 md:py-6 rounded-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-colors hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
              GET FREE CONSULTATION
            </motion.button>

            <div className="text-center">
              <span className="font-mono text-[8px] md:text-[9px] text-zinc-700 uppercase tracking-[0.2em]">Response within 24 hours · No spam</span>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-4 font-mono text-zinc-800">or</span></div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-[#25D366] text-white font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] py-5 rounded-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              CHAT ON WHATSAPP
            </motion.a>
          </form>
        </div>
      </div>
    </section>
  );
}
