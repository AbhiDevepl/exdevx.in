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
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
            Building modern web & mobile experiences for businesses across Maharashtra. Focused on performance and reliability.
          </p>
          <a href="mailto:hello@exdevx.in" className="font-mono text-xs text-primary border-b border-primary/30 pb-1">hello@exdevx.in</a>
        </div>

        <div>
          <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-8">Services</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-primary transition-colors">Web Apps</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">AI Systems</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">SaaS Platforms</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">E-commerce</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-8">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-8">Social</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="https://www.linkedin.com/in/abhay-jadhav-56a623309/" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/AbhiDevepl/" className="hover:text-primary transition-colors">GitHub</a></li>
            <li><a href="https://www.instagram.com/dev.abhayyy/" className="hover:text-primary transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center gap-6">
        <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
          © 2024 ExDevX. All rights reserved. Agency in Pune, Maharashtra.
        </p>
        <div className="flex space-x-8">
          <Link to="/privacy-policy" className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest hover:text-zinc-500">Privacy Policy</Link>
          <Link to="/terms-of-service" className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest hover:text-zinc-500">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
