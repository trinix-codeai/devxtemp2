import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { BlogPostSummary, Destination, TravelPackage } from "@trinix/shared";

const itemMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" }
};

export function DestinationCard({ item }: { item: Destination }) {
  return (
    <motion.article className="card-surface overflow-hidden" {...itemMotion}>
      <img alt={item.hero.alt} className="h-64 w-full object-cover" src={item.hero.url} />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
            {item.rating.toFixed(1)} ★
          </span>
        </div>
        <p className="text-sm text-slate-500">{item.summary}</p>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{item.continent}</span>
          <span>From ${item.priceFrom}</span>
        </div>
        <Link className="text-sm font-semibold text-brand" to={`/destinations/${item.slug}`}>
          Explore destination
        </Link>
      </div>
    </motion.article>
  );
}

export function PackageCard({ item }: { item: TravelPackage }) {
  return (
    <motion.article className="card-surface overflow-hidden" {...itemMotion}>
      <img alt={item.hero.alt} className="h-64 w-full object-cover" src={item.hero.url} />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize">
            {item.category}
          </span>
          <span className="text-sm font-semibold text-brand">{item.rating.toFixed(1)} ★</span>
        </div>
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm text-slate-500">{item.summary}</p>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-2xl font-bold text-slate-900">${item.price}</span>
          {item.originalPrice ? <span className="text-slate-400 line-through">${item.originalPrice}</span> : null}
        </div>
        <Link className="text-sm font-semibold text-brand" to={`/packages/${item.slug}`}>
          View package
        </Link>
      </div>
    </motion.article>
  );
}

export function BlogCard({ item }: { item: BlogPostSummary }) {
  return (
    <motion.article className="card-surface overflow-hidden" {...itemMotion}>
      <img alt={item.hero.alt} className="h-56 w-full object-cover" src={item.hero.url} />
      <div className="space-y-3 p-6">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-brand-accent">
          {item.category}
        </span>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm text-slate-500">{item.excerpt}</p>
        <Link className="text-sm font-semibold text-brand" to={`/blog/${item.slug}`}>
          {item.readTime}
        </Link>
      </div>
    </motion.article>
  );
}
