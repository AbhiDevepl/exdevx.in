/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SEO from './SEO';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service | ExDevX"
        description="Terms of service for ExDevX. Read our terms and conditions."
      />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-zinc max-w-none"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-12">Last Updated: May 8, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-400 mb-4">
              By accessing and using the services of ExDevX, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-zinc-400 mb-4">
              ExDevX provides web development, mobile app development, AI integration, and other digital solutions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
            <p className="text-zinc-400 mb-4">
              Users agree not to use the service for any illegal or unauthorized purpose and to provide accurate information when requested.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-zinc-400 mb-4">
              All content and materials provided by ExDevX are the property of ExDevX or its licensors and are protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-zinc-400 mb-4">
              ExDevX shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p className="text-zinc-400 mb-4">
              These terms are governed by the laws of Maharashtra, India.
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
