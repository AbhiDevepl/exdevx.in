import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [opening, setOpening] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (opening) return;

    const whatsappNumber = '917020401094';

    const text = `
  New Project Inquiry - ExDevX

  Name: ${formData.name}
  Email: ${formData.email}
  Service: ${formData.service}

  Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    setOpening(true);
    window.open(whatsappURL, '_blank', 'noopener');
    window.setTimeout(() => setOpening(false), 4000);
  };

  return (
    <section
      id="contact"
      className="px-6 py-20 md:py-32 max-w-7xl mx-auto"
    >
      <div className="mb-12 md:mb-20">
        <div className="font-mono text-[10px] md:text-xs text-primary mb-4 tracking-widest uppercase font-bold">
          Get Started
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Start Your Project <br className="hidden sm:block" />
          with ExDevX
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        {/* LEFT SIDE */}
        <div className="lg:col-span-5 space-y-8 md:space-y-12">
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
            We respond within 24 hours. Serving Pune, Ahilyanagar,
            Shrigonda & all of Maharashtra.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'hello@exdevx.in',
                sub: 'Always active',
                color: 'text-primary',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Pune, Maharashtra',
                sub: 'India',
                color: 'text-white',
              },
              {
                icon: Clock,
                label: 'Hours',
                value: '9am - 8pm IST',
                sub: 'Mon-Sat',
                color: 'text-zinc-400',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 md:gap-6 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-primary/40 transition-colors shrink-0">
                  <item.icon
                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <div className="font-mono text-[10px] text-zinc-600 mb-1 uppercase tracking-widest">
                    {item.label}
                  </div>

                  <div
                    className={`font-display text-sm md:text-base font-medium ${item.color}`}
                  >
                    {item.value}
                  </div>

                  <div className="font-mono text-[10px] text-zinc-700 uppercase mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 md:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {/* NAME */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abhay Jadhav"
                  autoComplete="name"
                  required
                  className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none focus-visible:ring-1 focus-visible:ring-primary/60 text-zinc-200 text-sm md:text-base transition-colors"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abhay@exdevx.in"
                  autoComplete="email"
                  required
                  className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none focus-visible:ring-1 focus-visible:ring-primary/60 text-zinc-200 text-sm md:text-base transition-colors"
                />
              </div>
            </div>

            {/* SERVICE */}
            <div className="space-y-2">
              <label htmlFor="contact-service" className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
                Service
              </label>

              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none focus-visible:ring-1 focus-visible:ring-primary/60 text-zinc-400 appearance-none text-sm md:text-base transition-colors"
              >
                <option value="">Select a service...</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>AI Integration</option>
                <option>SaaS Platform</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label htmlFor="contact-message" className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your digital goals..."
                rows={4}
                required
                className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-3 md:py-4 focus:border-primary outline-none text-zinc-200 resize-none text-sm md:text-base"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={opening}
              className="btn btn-primary btn-lg w-full disabled:opacity-70 disabled:pointer-events-none"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              {opening ? 'OPENING WHATSAPP…' : 'GET FREE CONSULTATION'}
            </button>

            {/* INFO */}
            <div className="text-center" aria-live="polite">
              <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.2em]">
                {opening
                  ? 'If WhatsApp didn’t open, email hello@exdevx.in'
                  : 'Response within 24 hours · No spam'}
              </span>
            </div>

            {/* DIVIDER + DIRECT EMAIL CTA */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-background px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Or reach us directly
                </span>
              </div>
            </div>

            <a
              href="mailto:hello@exdevx.in"
              className="flex items-center justify-center gap-2 font-mono text-xs text-zinc-400 hover:text-primary transition-colors focus-ring rounded-sm"
            >
              <Mail className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              hello@exdevx.in
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}