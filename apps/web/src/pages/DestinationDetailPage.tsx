import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { destinations, reviews } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tabs = ["Overview", "Itinerary", "Reviews", "Map"];

export function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.slug === slug) ?? destinations[0];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const sectionRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  const allImages = [dest.hero, ...dest.gallery];

  return (
    <div className="pt-20 pb-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src={allImages[selectedImg]?.url ?? dest.hero.url}
          alt={allImages[selectedImg]?.alt ?? dest.hero.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-card" />
        <div className="absolute bottom-0 left-0 right-0 container-shell pb-8">
          <Link to="/destinations" className="text-white/70 text-sm hover:text-white transition-colors">
            ← Back to Destinations
          </Link>
          <h1 className="mt-2 text-display-sm md:text-display-md font-heading text-white">{dest.name}</h1>
          <p className="text-white/80 mt-1">{dest.country} · {dest.continent}</p>
        </div>
      </section>

      {/* Gallery Thumbnails */}
      {allImages.length > 1 && (
        <div className="container-shell -mt-6 relative z-10 mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`shrink-0 h-20 w-28 rounded-xl overflow-hidden border-2 transition-all ${i === selectedImg ? "border-coral-500 shadow-glow" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
              >
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="container-shell lg:flex lg:gap-10" ref={sectionRef}>
        {/* Main Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-1 rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-1 mb-8 overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap ${i === activeTab
                    ? "bg-white dark:bg-neutral-700 text-coral-500 shadow-sm"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 0 && (
            <div className="sr-item space-y-6">
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{dest.summary}</p>
              <div>
                <h3 className="font-heading text-lg font-bold mb-3">Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 p-4">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-coral-100 dark:bg-coral-900/30 text-coral-500 text-sm">✓</span>
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="sr-item space-y-4">
              {[1, 2, 3, 4, 5].slice(0, dest.durationDays).map((day) => (
                <div key={day} className="flex gap-4 items-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coral-500 text-white text-sm font-bold">
                    {day}
                  </span>
                  <div className="flex-1 card-surface p-5">
                    <h4 className="font-heading font-semibold">Day {day}</h4>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {day === 1
                        ? "Arrival, hotel check-in, welcome dinner with local specialties."
                        : day === dest.durationDays
                          ? "Final breakfast, departure transfers, farewell gifts."
                          : "Guided excursions, cultural immersion, leisure time for exploration."}
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
                    <div>
                      <p className="font-heading font-semibold text-neutral-800 dark:text-white">{r.author}</p>
                      <p className="text-xs text-neutral-400">{r.createdAt}</p>
                    </div>
                    <span className="stars">{"★".repeat(r.rating)}</span>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 3 && (
            <div className="sr-item card-surface p-8 text-center">
              <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 h-80 grid place-items-center">
                <div>
                  <span className="text-4xl mb-3 block">🗺️</span>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    Interactive map — Google Maps integration placeholder
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Coordinates: {dest.coordinates[1].toFixed(4)}°N, {dest.coordinates[0].toFixed(4)}°E
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Booking Widget (Sticky) ────────────────────────── */}
        <aside className="lg:w-80 shrink-0 mt-8 lg:mt-0">
          <div className="card-surface p-6 sticky top-24 space-y-5">
            <div>
              <span className="text-sm text-neutral-400">Starting from</span>
              <p className="text-3xl font-heading font-bold text-coral-500">
                ${dest.priceFrom.toLocaleString()}
              </p>
              <span className="text-xs text-neutral-400">per person</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Check-in</label>
                <input type="date" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Check-out</label>
                <input type="date" className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Guests</label>
                <select className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors appearance-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3-5 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>
            </div>

            <Link to="/checkout" className="btn-primary w-full text-center py-4">
              Book Now
            </Link>
            <p className="text-xs text-neutral-400 text-center">Free cancellation up to 30 days before</p>

            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-neutral-500">Duration</span><span className="font-medium">{dest.durationDays} days</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">Rating</span><span className="stars">★ {dest.rating}</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
