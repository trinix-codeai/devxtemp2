import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { packages, reviews } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tabs = ["Overview", "Itinerary", "Reviews", "Inclusions"];

export function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find((p) => p.slug === slug) ?? packages[0];
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  const discount = pkg.originalPrice ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100) : 0;

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <img src={pkg.hero.url} alt={pkg.hero.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-card" />
        <div className="absolute bottom-0 left-0 right-0 container-shell pb-8">
          <Link to="/packages" className="text-white/70 text-sm hover:text-white transition-colors">
            ← Back to Packages
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-2">
            <div>
              <span className="badge bg-white/20 backdrop-blur-sm text-white capitalize text-xs mb-2 inline-block">
                {pkg.category}
              </span>
              <h1 className="text-display-sm md:text-display-md font-heading text-white">{pkg.name}</h1>
            </div>
            {pkg.originalPrice && (
              <span className="badge bg-red-500 text-white font-bold text-sm">{discount}% OFF</span>
            )}
          </div>
        </div>
      </section>

      <div className="container-shell lg:flex lg:gap-10 mt-10" ref={sectionRef}>
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-1 rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-1 mb-8 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap ${i === activeTab
                    ? "bg-white dark:bg-neutral-700 text-coral-500 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 0 && (
            <div className="sr-item space-y-6">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{pkg.summary}</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="card-surface p-5 text-center"><p className="text-2xl mb-1">📅</p><p className="font-heading font-semibold">{pkg.durationDays} Days</p><p className="text-xs text-neutral-400">Duration</p></div>
                <div className="card-surface p-5 text-center"><p className="text-2xl mb-1">⭐</p><p className="font-heading font-semibold">{pkg.rating}/5</p><p className="text-xs text-neutral-400">Rating</p></div>
                <div className="card-surface p-5 text-center"><p className="text-2xl mb-1">{pkg.mealsIncluded ? "🍽️" : "🎒"}</p><p className="font-heading font-semibold">{pkg.mealsIncluded ? "All Meals" : "B&B"}</p><p className="text-xs text-neutral-400">Meals</p></div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="sr-item space-y-4">
              {Array.from({ length: pkg.durationDays }, (_, i) => i + 1).map((day) => (
                <div key={day} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-coral-500 text-white text-sm font-bold">{day}</span>
                    {day < pkg.durationDays && <span className="flex-1 w-px bg-coral-200 dark:bg-coral-800 mt-2" />}
                  </div>
                  <div className="card-surface p-5 flex-1 mb-2">
                    <h4 className="font-heading font-semibold">Day {day}</h4>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {day === 1 ? "Welcome reception, hotel check-in, orientation." : day === pkg.durationDays ? "Farewell breakfast, airport transfers." : "Excursions, local experiences, free time."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="sr-item space-y-6">
              {reviews.map((r) => (
                <div key={r.id} className="card-surface p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-heading font-semibold">{r.author}</p>
                    <span className="stars">{"★".repeat(r.rating)}</span>
                  </div>
                  <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">{r.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 3 && (
            <div className="sr-item card-surface p-6 space-y-4">
              <h3 className="font-heading font-bold text-lg">What's Included</h3>
              {["Accommodation in premium hotels/resorts", "Airport transfers", "Guided tours with local experts", "24/7 travel support", pkg.mealsIncluded ? "All meals (breakfast, lunch, dinner)" : "Daily breakfast"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">{item}</span>
                </div>
              ))}
              <h3 className="font-heading font-bold text-lg mt-6">Not Included</h3>
              {["International flights", "Travel insurance", "Personal expenses", "Tips and gratuities"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-red-400">✕</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Booking Widget */}
        <aside className="lg:w-80 shrink-0 mt-8 lg:mt-0">
          <div className="card-surface p-6 sticky top-24 space-y-5">
            <div>
              {pkg.originalPrice && (
                <span className="text-sm text-neutral-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
              )}
              <p className="text-3xl font-heading font-bold text-coral-500">${pkg.price.toLocaleString()}</p>
              <span className="text-xs text-neutral-400">per person</span>
            </div>
            <div className="space-y-3">
              <input type="date" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500" aria-label="Start date" />
              <select className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 appearance-none" aria-label="Guests">
                <option>1 Guest</option><option>2 Guests</option><option>3+ Guests</option>
              </select>
            </div>
            <Link to="/checkout" className="btn-primary w-full text-center py-4">
              Book This Package
            </Link>
            <p className="text-xs text-neutral-400 text-center">Free cancellation up to 30 days</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
