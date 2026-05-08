/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Zap, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow">
            <Zap className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter text-white uppercase">ExDevX</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-primary text-white px-6 py-3 font-mono text-[10px] font-bold tracking-widest rounded-lg shadow-lg shadow-primary/20"
          >
            START A PROJECT
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-lg border border-white/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 bg-background z-40 border-t border-white/5 px-6 py-12 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl font-bold text-white tracking-tight border-b border-white/5 pb-4 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-primary text-white py-5 font-mono text-xs font-bold tracking-[0.2em] rounded-xl mt-8"
              >
                START A PROJECT
              </motion.button>
              
              <div className="pt-12">
                <div className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-4">Pune · Ahilyanagar · Shrigonda</div>
                <p className="text-zinc-500 text-sm">Building high-performance digital solutions for Maharashtra.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
