/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
            <Zap className="text-primary w-6 h-6 fill-primary" />
            <span className="font-display text-2xl font-bold text-white tracking-tighter">ExDevX</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
            High-performance web &amp; app development agency founded by Abhay Jadhav in Pune, Maharashtra, India. Est. 2022.
          </p>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <a
              href="mailto:hello@exdevx.in"
              className="font-mono text-xs text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
            >
              hello@exdevx.in
            </a>
            <a
              href="tel:+918830174066"
              className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              +91 88301 74066
            </a>
            <address className="font-mono text-[10px] text-zinc-700 not-italic">
              Pune, Maharashtra, India
            </address>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-8">Services</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">AI Systems</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">SaaS Platforms</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">E-commerce</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Design</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-8">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#locations" className="hover:text-primary transition-colors">Locations</a></li>
            <li>
              <a
                href="https://ssnlc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Portfolio: ssnlc.in
              </a>
            </li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-8">Connect</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li>
              <a
                href="https://www.linkedin.com/in/abhay-jadhav-56a623309/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn — Abhay Jadhav
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AbhiDevepl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub — AbhiDevepl
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dev.abhayyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-4">Serving</h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Pune · Ahilyanagar · Shrigonda<br />
              Maharashtra · India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center gap-6">
        <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
          © 2026 ExDevX. All rights reserved. Web &amp; App Development Agency — Pune, Maharashtra, India.
        </p>
        <div className="flex space-x-8">
          <Link to="/privacy-policy" className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest hover:text-zinc-500">Privacy Policy</Link>
          <Link to="/terms-of-service" className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest hover:text-zinc-500">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
