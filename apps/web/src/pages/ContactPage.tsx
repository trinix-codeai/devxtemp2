import { useState } from "react";
import { faqs } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });
  const faqRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  return (
    <div className="pt-24 pb-20">
      <section className="container-shell mb-10">
        <h1 className="text-display-sm md:text-display-md font-heading">Contact Us</h1>
        <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
          Have a question or ready to plan your dream trip? We'd love to hear from you.
        </p>
      </section>

      <div className="container-shell grid lg:grid-cols-2 gap-12" ref={formRef}>
        {/* Form */}
        <div className="card-surface p-8 sr-item">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <span className="text-3xl text-emerald-500">✓</span>
              </div>
              <h2 className="font-heading text-xl font-bold">Message Sent!</h2>
              <p className="mt-2 text-neutral-500">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">Send Another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <h2 className="font-heading text-xl font-bold mb-2">Send a Message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Name</label>
                  <input type="text" required placeholder="Your name" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Email</label>
                  <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Subject</label>
                <select className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Booking Support</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Message</label>
                <textarea rows={5} required placeholder="How can we help?" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-4">Send Message →</button>
            </form>
          )}
        </div>

        {/* Info + Map */}
        <div className="space-y-8 sr-item">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "📍", title: "Visit Us", info: "123 Travel Lane, NYC, NY 10001" },
              { icon: "📧", title: "Email", info: "hello@trinixtravel.com" },
              { icon: "📞", title: "Call Us", info: "+1 (555) 123-4567" },
              { icon: "⏰", title: "Hours", info: "Mon-Fri: 9AM - 7PM EST" },
            ].map((c) => (
              <div key={c.title} className="card-surface p-5">
                <span className="text-2xl mb-2 block">{c.icon}</span>
                <h4 className="font-heading font-semibold text-sm">{c.title}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{c.info}</p>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="card-surface overflow-hidden">
            <div className="h-64 bg-neutral-200 dark:bg-neutral-800 grid place-items-center">
              <div className="text-center">
                <span className="text-4xl block mb-2">🗺️</span>
                <p className="text-sm text-neutral-500">Google Maps Integration</p>
                <p className="text-xs text-neutral-400">123 Travel Lane, New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="container-shell mt-20" ref={faqRef}>
        <h2 className="text-display-sm font-heading text-center mb-10 sr-item">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="sr-item card-surface overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openFaq === i}
              >
                <span className="font-heading font-semibold text-sm pr-4">{faq.q}</span>
                <span className={`text-xl transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-5 pb-5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
