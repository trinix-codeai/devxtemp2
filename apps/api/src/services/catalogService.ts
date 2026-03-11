import type { BlogPostSummary, Destination, TravelPackage } from "@trinix/shared";

const destinationData: Destination[] = [
  {
    id: "dest-1",
    name: "Santorini",
    slug: "santorini",
    continent: "Europe",
    country: "Greece",
    durationDays: 5,
    priceFrom: 1499,
    rating: 4.9,
    coordinates: [25.4615, 36.3932],
    hero: { url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80", alt: "Santorini coastline" },
    gallery: [],
    highlights: ["Sunset catamarans", "Cliffside suites", "Curated transfers"],
    summary: "Aegean cliff views and premium hospitality."
  },
  {
    id: "dest-2",
    name: "Kyoto",
    slug: "kyoto",
    continent: "Asia",
    country: "Japan",
    durationDays: 7,
    priceFrom: 2120,
    rating: 4.8,
    coordinates: [135.7681, 35.0116],
    hero: { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80", alt: "Kyoto lane" },
    gallery: [],
    highlights: ["Temple circuits", "Ryokan stays", "Cultural workshops"],
    summary: "Seasonal beauty, culinary depth, and thoughtful cultural discovery."
  }
];

const packageData: TravelPackage[] = [
  {
    id: "pkg-1",
    name: "Maldives Overwater Escape",
    slug: "maldives-overwater-escape",
    category: "luxury",
    durationDays: 6,
    price: 3440,
    originalPrice: 4300,
    rating: 4.9,
    mealsIncluded: true,
    hero: { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80", alt: "Overwater villa" },
    summary: "Ocean villas, seaplane transfers, and premium dining."
  }
];

const blogData: BlogPostSummary[] = [
  {
    id: "blog-1",
    slug: "premium-travel-booking-patterns",
    title: "The next wave of premium travel booking patterns",
    category: "Luxury",
    excerpt: "Trust cues, transparency, and mobile-first structure shape conversion.",
    readTime: "8 min read",
    hero: { url: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?auto=format&fit=crop&w=1200&q=80", alt: "Aerial beach" }
  }
];

export const catalogService = {
  listDestinations: () => destinationData,
  getDestinationBySlug: (slug: string) => destinationData.find((item) => item.slug === slug) ?? null,
  listPackages: () => packageData,
  getPackageBySlug: (slug: string) => packageData.find((item) => item.slug === slug) ?? null,
  listBlogs: () => blogData,
  getBlogBySlug: (slug: string) => blogData.find((item) => item.slug === slug) ?? null
};
