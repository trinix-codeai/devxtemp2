import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = ["Travel Details", "Passenger Info", "Payment", "Confirmation"];

export function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    cardNumber: "", expiry: "", cvc: "",
  });
  const sectionRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="pt-24 pb-20">
      <div className="container-narrow" ref={sectionRef}>
        <h1 className="text-display-sm font-heading mb-2 sr-item">Checkout</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-10 sr-item">
          Complete your booking in a few simple steps.
        </p>

        {/* Progress Bar */}
        <div className="sr-item flex items-center justify-between mb-12 relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-700" />
          <div
            className="absolute top-5 left-0 h-0.5 bg-coral-500 transition-all duration-500"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((label, i) => (
            <div key={label} className="relative z-10 flex flex-col items-center">
              <span
                className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold transition-all duration-300 ${i <= step
                    ? "bg-coral-500 text-white shadow-glow"
                    : "bg-neutral-200 dark:bg-neutral-700 text-neutral-400"
                  }`}
              >
                {i < step ? "✓" : i + 1}
              </span>
              <span
                className={`mt-2 text-xs font-medium transition-colors ${i <= step ? "text-coral-500" : "text-neutral-400"
                  }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="lg:flex lg:gap-10">
          {/* Main Content */}
          <div className="flex-1">
            {step === 0 && (
              <div className="card-surface p-8 space-y-6 sr-item">
                <h2 className="font-heading text-xl font-bold">Travel Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Destination</label>
                    <select className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors appearance-none">
                      <option>Santorini, Greece</option>
                      <option>Kyoto, Japan</option>
                      <option>Maldives</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Package</label>
                    <select className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors appearance-none">
                      <option>Luxury Suite — 5 nights</option>
                      <option>Premium — 7 nights</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Check-in Date</label>
                    <input type="date" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Guests</label>
                    <select className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors appearance-none">
                      <option>1 Guest</option><option>2 Guests</option><option>3+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="card-surface p-8 space-y-6 sr-item">
                <h2 className="font-heading text-xl font-bold">Passenger Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", key: "firstName", type: "text", placeholder: "John" },
                    { label: "Last Name", key: "lastName", type: "text", placeholder: "Doe" },
                    { label: "Email", key: "email", type: "email", placeholder: "john@example.com" },
                    { label: "Phone", key: "phone", type: "tel", placeholder: "+1 234 567 890" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(form as any)[field.key]}
                        onChange={(e) => update(field.key, e.target.value)}
                        className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Special Requests</label>
                  <textarea rows={3} placeholder="Any dietary requirements or special requests..." className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors resize-none" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="card-surface p-8 space-y-6 sr-item">
                <h2 className="font-heading text-xl font-bold">Payment</h2>
                <div className="flex gap-3 mb-4">
                  {["💳 Credit Card", "🅿️ PayPal", "🍎 Apple Pay"].map((m) => (
                    <button key={m} className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-700 py-3 text-sm font-medium hover:border-coral-500 transition-colors text-center">
                      {m}
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Card Number</label>
                    <input type="text" placeholder="4242 4242 4242 4242" value={form.cardNumber} onChange={(e) => update("cardNumber", e.target.value)} className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Expiry</label>
                      <input type="text" placeholder="MM/YY" value={form.expiry} onChange={(e) => update("expiry", e.target.value)} className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">CVC</label>
                      <input type="text" placeholder="123" value={form.cvc} onChange={(e) => update("cvc", e.target.value)} className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span>🔒</span> Your payment information is encrypted and secure.
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="card-surface p-10 text-center sr-item">
                <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <span className="text-4xl text-emerald-500">✓</span>
                </div>
                <h2 className="font-heading text-2xl font-bold">Booking Confirmed!</h2>
                <p className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                  Your trip has been booked successfully. A confirmation email has been sent to your inbox.
                </p>
                <p className="mt-4 text-sm font-mono text-coral-500">Booking #TRX-2026-04821</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link to="/dashboard" className="btn-primary">View Dashboard</Link>
                  <Link to="/" className="btn-ghost border border-neutral-200 dark:border-neutral-700">Back to Home</Link>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step < 3 && (
              <div className="flex justify-between mt-8">
                <button onClick={prev} disabled={step === 0} className="btn-ghost border border-neutral-200 dark:border-neutral-700 disabled:opacity-40">
                  ← Back
                </button>
                <button onClick={next} className="btn-primary">
                  {step === 2 ? "Confirm & Pay" : "Continue →"}
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <aside className="lg:w-80 shrink-0 mt-8 lg:mt-0">
            <div className="card-surface p-6 sticky top-24 space-y-4">
              <h3 className="font-heading font-bold">Order Summary</h3>
              <div className="rounded-xl overflow-hidden aspect-video">
                <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80" alt="Destination" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-heading font-semibold">Santorini Luxury Suite</p>
                <p className="text-sm text-neutral-400">5 nights · 2 guests</p>
              </div>
              <div className="space-y-2 text-sm border-t border-neutral-100 dark:border-neutral-700 pt-4">
                <div className="flex justify-between"><span className="text-neutral-500">Package</span><span>$1,499</span></div>
                <div className="flex justify-between"><span className="text-neutral-500">Taxes & Fees</span><span>$149</span></div>
                <div className="flex justify-between"><span className="text-neutral-500">Insurance</span><span>$89</span></div>
              </div>
              <div className="flex justify-between border-t border-neutral-100 dark:border-neutral-700 pt-4 font-heading font-bold text-lg">
                <span>Total</span><span className="text-coral-500">$1,737</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
