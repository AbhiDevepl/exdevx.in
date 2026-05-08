import { motion } from 'motion/react';
import SEO from './SEO';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy | ExDevX"
        description="Privacy policy for ExDevX. Learn how we handle your data."
      />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-zinc max-w-none"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-12">Last Updated: May 8, 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-zinc-400 mb-4">
              We collect information that you provide directly to us through our contact forms, such as your name, email address, phone number, and project details.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-zinc-400 mb-4">
              We use the information we collect to communicate with you about your project, provide customer support, and improve our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p className="text-zinc-400 mb-4">
              We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-zinc-400 mb-4">
              We may use third-party services like Google Analytics or AI models (Gemini) to improve our user experience and service delivery. These services have their own privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p className="text-zinc-400 mb-4">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@exdevx.in" className="text-primary hover:underline">hello@exdevx.in</a>.
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
