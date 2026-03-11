import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export function BlogPage() {
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");
  const gridRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  const filtered = useMemo(() => {
    return posts
      .filter((p) => cat === "All" || p.category === cat)
      .filter((p) => !search || p.title.toLowerCase().includes(search.toLowerCase()));
  }, [cat, search]);

  return (
    <div className="pt-24 pb-20">
      <section className="container-shell mb-10">
        <h1 className="text-display-sm md:text-display-md font-heading">Travel Blog</h1>
        <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
          Stories, guides, and inspiration for your next adventure.
        </p>
      </section>

      <div className="container-shell">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${c === cat
                    ? "bg-coral-500 text-white shadow-md"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-coral-500 transition-colors w-64"
            aria-label="Search blog posts"
          />
        </div>

        {/* Featured Post */}
        {filtered.length > 0 && (
          <Link
            to={`/blog/${filtered[0].slug}`}
            className="group card-surface overflow-hidden mb-10 grid md:grid-cols-2"
          >
            <div className="overflow-hidden aspect-video md:aspect-auto">
              <img
                src={filtered[0].hero.url}
                alt={filtered[0].hero.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="badge badge-coral w-fit mb-3">{filtered[0].category}</span>
              <h2 className="font-heading text-2xl font-bold group-hover:text-coral-500 transition-colors">
                {filtered[0].title}
              </h2>
              <p className="mt-3 text-neutral-500 dark:text-neutral-400">{filtered[0].excerpt}</p>
              <p className="mt-4 text-xs text-neutral-400">{filtered[0].readTime}</p>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" ref={gridRef}>
          {filtered.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="sr-item group card-surface overflow-hidden"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={post.hero.url}
                  alt={post.hero.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="badge badge-coral text-xs mb-3">{post.category}</span>
                <h3 className="font-heading text-lg font-bold group-hover:text-coral-500 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{post.excerpt}</p>
                <p className="mt-4 text-xs text-neutral-400">{post.readTime}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 card-surface">
            <p className="text-4xl mb-4">📝</p>
            <p className="text-lg font-heading font-semibold">No articles found</p>
            <p className="mt-2 text-sm text-neutral-500">Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
