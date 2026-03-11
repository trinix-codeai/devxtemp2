import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { packages } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = ["All", "luxury", "adventure", "family", "honeymoon", "group"];

export function PackagesPage() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("recommended");
  const gridRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  const filtered = useMemo(() => {
    let list = cat === "All" ? [...packages] : packages.filter((p) => p.category === cat);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, sort]);

  return (
    <div className="pt-24 pb-20">
      <section className="container-shell mb-10">
        <h1 className="text-display-sm md:text-display-md font-heading">Travel Packages</h1>
        <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
          All-inclusive experiences designed for maximum enjoyment and zero hassle.
        </p>
      </section>

      <div className="container-shell">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold capitalize transition-all duration-200 ${c === cat
                    ? "bg-coral-500 text-white shadow-md"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
              >
                {c === "All" ? "All Packages" : c}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-coral-500 transition-colors appearance-none"
            aria-label="Sort packages"
          >
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" ref={gridRef}>
          {filtered.map((pkg) => (
            <Link
              key={pkg.id}
              to={`/packages/${pkg.slug}`}
              className="sr-item group card-surface overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={pkg.hero.url}
                  alt={pkg.hero.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {pkg.originalPrice && (
                  <span className="absolute top-4 right-4 badge bg-red-500 text-white font-bold">
                    {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                  </span>
                )}
                <span className="absolute top-4 left-4 badge bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 capitalize">
                  {pkg.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white group-hover:text-coral-500 transition-colors">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {pkg.summary}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-neutral-400">
                  <span>📅 {pkg.durationDays} days</span>
                  {pkg.mealsIncluded && <span>🍽️ Meals included</span>}
                  <span className="ml-auto stars text-sm">★ {pkg.rating}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-700 pt-4">
                  <div>
                    {pkg.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through mr-2">${pkg.originalPrice.toLocaleString()}</span>
                    )}
                    <span className="text-xl font-bold text-coral-500">${pkg.price.toLocaleString()}</span>
                    <span className="text-xs text-neutral-400"> / person</span>
                  </div>
                  <span className="text-sm font-medium text-coral-500 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 card-surface">
            <p className="text-4xl mb-4">📦</p>
            <p className="text-lg font-heading font-semibold">No packages found</p>
            <p className="mt-2 text-sm text-neutral-500">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
