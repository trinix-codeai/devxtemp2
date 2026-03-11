import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const continents = ["All", ...Array.from(new Set(destinations.map((d) => d.continent)))];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $1,500", min: 0, max: 1500 },
  { label: "$1,500 – $2,500", min: 1500, max: 2500 },
  { label: "$2,500+", min: 2500, max: Infinity },
];
const sortOptions = [
  { label: "Recommended", fn: () => 0 },
  { label: "Price: Low → High", fn: (a: any, b: any) => a.priceFrom - b.priceFrom },
  { label: "Price: High → Low", fn: (a: any, b: any) => b.priceFrom - a.priceFrom },
  { label: "Rating", fn: (a: any, b: any) => b.rating - a.rating },
];

export function DestinationsPage() {
  const [continent, setContinent] = useState("All");
  const [priceIdx, setPriceIdx] = useState(0);
  const [sortIdx, setSortIdx] = useState(0);
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const gridRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  const filtered = useMemo(() => {
    const pr = priceRanges[priceIdx];
    return destinations
      .filter((d) => (continent === "All" || d.continent === continent))
      .filter((d) => d.priceFrom >= pr.min && d.priceFrom < pr.max)
      .filter((d) => !search || d.name.toLowerCase().includes(search.toLowerCase()) || d.country.toLowerCase().includes(search.toLowerCase()))
      .sort(sortOptions[sortIdx].fn);
  }, [continent, priceIdx, sortIdx, search]);

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="container-shell mb-10">
        <h1 className="text-display-sm md:text-display-md font-heading">Destinations</h1>
        <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
          Explore our curated collection of handpicked destinations across the globe.
        </p>
      </section>

      <div className="container-shell lg:flex lg:gap-10">
        {/* ── Sidebar Filters ─────────────────────────────────── */}
        <aside className={`lg:w-72 shrink-0 ${filtersOpen ? "block" : "hidden lg:block"}`}>
          <div className="card-surface p-6 space-y-6 sticky top-24">
            {/* Search */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                Search
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations..."
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500 transition-colors"
                aria-label="Search destinations"
              />
            </div>

            {/* Continent */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                Continent
              </label>
              <div className="flex flex-wrap gap-2">
                {continents.map((c) => (
                  <button
                    key={c}
                    onClick={() => setContinent(c)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${c === continent
                        ? "bg-coral-500 text-white shadow-md"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                Price Range
              </label>
              <div className="space-y-2">
                {priceRanges.map((pr, i) => (
                  <label key={pr.label} className="flex items-center gap-3 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name="price"
                      checked={i === priceIdx}
                      onChange={() => setPriceIdx(i)}
                      className="accent-coral-500"
                    />
                    <span className="text-neutral-600 dark:text-neutral-300">{pr.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                Sort By
              </label>
              <select
                value={sortIdx}
                onChange={(e) => setSortIdx(Number(e.target.value))}
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors appearance-none"
                aria-label="Sort destinations"
              >
                {sortOptions.map((opt, i) => (
                  <option key={opt.label} value={i}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        {/* Mobile filter toggle */}
        <button
          className="lg:hidden mb-6 btn-ghost border border-neutral-200 dark:border-neutral-700 w-full"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          {filtersOpen ? "Hide Filters" : "Show Filters"} ({filtered.length} results)
        </button>

        {/* ── Grid ────────────────────────────────────────────── */}
        <div className="flex-1" ref={gridRef}>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((d) => (
              <Link
                key={d.id}
                to={`/destinations/${d.slug}`}
                className="sr-item group card-surface overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={d.hero.url}
                    alt={d.hero.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-card opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-heading text-lg font-bold text-white">{d.name}</h3>
                    <p className="text-white/70 text-sm">{d.country} · {d.continent}</p>
                  </div>
                  <span className="absolute top-4 right-4 badge bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-xs text-neutral-700 dark:text-neutral-300">
                    {d.durationDays} days
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{d.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-coral-500">
                      From ${d.priceFrom.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-amber-500">
                      ★ {d.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 card-surface">
              <p className="text-4xl mb-4">🌍</p>
              <p className="text-lg font-heading font-semibold text-neutral-700 dark:text-neutral-300">No destinations found</p>
              <p className="mt-2 text-sm text-neutral-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
