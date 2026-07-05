/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Zap, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Locations', href: '#locations' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  // scroll-triggered style shift (bg/blur), threshold 8px — height never changes, so no layout shift
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close drawer on Escape (keyboard nav)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const isActive = (href: string) =>
    href.startsWith('#') ? hash === href : pathname === href;

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-20 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-zinc-800 shadow-lg shadow-black/20'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <Link to="/" aria-label="ExDevX — home" className="flex items-center gap-2 rounded-lg focus-ring">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow">
            <Zap className="text-zinc-950 w-6 h-6 fill-zinc-950" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter text-white uppercase">ExDevX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`relative font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded transition-colors focus-ring ${
                  active ? 'text-primary' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-px bg-primary"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-primary hover:bg-primary-dark text-zinc-950 px-6 py-3 font-mono text-[10px] font-bold tracking-widest rounded-lg shadow-lg shadow-primary/20 transition-colors focus-ring"
          >
            START A PROJECT
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 hover:bg-white/10 rounded-lg border border-zinc-800 transition-colors focus-ring"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-20 bg-background z-40 border-t border-zinc-800 px-6 py-12 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-4xl font-bold tracking-tight border-b border-zinc-800 pb-4 last:border-0 rounded transition-colors focus-ring ${
                      active ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary hover:bg-primary-dark text-zinc-950 py-5 font-mono text-xs font-bold tracking-[0.2em] rounded-xl mt-8 text-center block transition-colors focus-ring"
              >
                START A PROJECT
              </motion.a>

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
