import type { BlogPostSummary, Destination, TravelPackage, Review } from "@trinix/shared";

/* ── Destinations ──────────────────────────────────────────────── */
export const destinations: Destination[] = [
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
    hero: { url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80", alt: "Santorini blue domes" },
    gallery: [
      { url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80", alt: "Santorini village" },
      { url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80", alt: "Santorini sunset" },
    ],
    highlights: ["Sunset catamarans", "Cliffside suites", "Curated wine tours"],
    summary: "Aegean cliff views, romance-driven itineraries, and premium hospitality.",
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
    hero: { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80", alt: "Kyoto bamboo grove" },
    gallery: [
      { url: "https://images.unsplash.com/photo-1528164344885-47b1492bc39a?auto=format&fit=crop&w=800&q=80", alt: "Kyoto temple" },
    ],
    highlights: ["Temple circuits", "Ryokan stays", "Tea ceremonies"],
    summary: "Seasonal beauty, culinary depth, and thoughtful cultural discovery.",
  },
  {
    id: "dest-3",
    name: "Dubai",
    slug: "dubai",
    continent: "Asia",
    country: "UAE",
    durationDays: 4,
    priceFrom: 1950,
    rating: 4.7,
    coordinates: [55.2708, 25.2048],
    hero: { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80", alt: "Dubai skyline" },
    gallery: [],
    highlights: ["Skyline stays", "Desert safaris", "VIP transfers"],
    summary: "Fast luxury, iconic architecture, and premium shopping-led escapes.",
  },
  {
    id: "dest-4",
    name: "Machu Picchu",
    slug: "machu-picchu",
    continent: "South America",
    country: "Peru",
    durationDays: 6,
    priceFrom: 1780,
    rating: 4.9,
    coordinates: [-72.545, -13.163],
    hero: { url: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1200&q=80", alt: "Machu Picchu sunrise" },
    gallery: [],
    highlights: ["Inca trail treks", "Sacred Valley", "Luxury lodges"],
    summary: "Ancient wonders, dramatic mountain trails, and cultural immersion.",
  },
  {
    id: "dest-5",
    name: "Cape Town",
    slug: "cape-town",
    continent: "Africa",
    country: "South Africa",
    durationDays: 5,
    priceFrom: 1650,
    rating: 4.8,
    coordinates: [18.4241, -33.9249],
    hero: { url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80", alt: "Cape Town Table Mountain" },
    gallery: [],
    highlights: ["Table Mountain hikes", "Wine routes", "Coastal drives"],
    summary: "Natural beauty, wine riches, and cosmopolitan African charm.",
  },
  {
    id: "dest-6",
    name: "Amalfi Coast",
    slug: "amalfi-coast",
    continent: "Europe",
    country: "Italy",
    durationDays: 6,
    priceFrom: 2200,
    rating: 4.9,
    coordinates: [14.6027, 40.6333],
    hero: { url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1200&q=80", alt: "Amalfi Coast" },
    gallery: [],
    highlights: ["Cliffside drives", "Limoncello tastings", "Private boat tours"],
    summary: "Mediterranean coastline, Italian cuisine, and luxury villa stays.",
  },
  {
    id: "dest-7",
    name: "Maldives",
    slug: "maldives",
    continent: "Asia",
    country: "Maldives",
    durationDays: 7,
    priceFrom: 3200,
    rating: 4.9,
    coordinates: [73.2207, 3.2028],
    hero: { url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80", alt: "Maldives overwater villa" },
    gallery: [],
    highlights: ["Overwater bungalows", "Snorkeling", "Sunset dining"],
    summary: "Crystal waters, private island luxury, and complete serenity.",
  },
  {
    id: "dest-8",
    name: "Patagonia",
    slug: "patagonia",
    continent: "South America",
    country: "Argentina",
    durationDays: 8,
    priceFrom: 2800,
    rating: 4.8,
    coordinates: [-73.2, -50.33],
    hero: { url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80", alt: "Patagonia mountains" },
    gallery: [],
    highlights: ["Glacier trekking", "Wildlife watching", "Lodge stays"],
    summary: "Untamed wilderness, glaciers, and adventure at the edge of the world.",
  },
];

/* ── Packages ──────────────────────────────────────────────────── */
export const packages: TravelPackage[] = [
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
    summary: "Ocean villas, seaplane transfers, and premium all-inclusive dining.",
  },
  {
    id: "pkg-2",
    name: "Swiss Peaks Explorer",
    slug: "swiss-peaks-explorer",
    category: "adventure",
    durationDays: 5,
    price: 2280,
    originalPrice: 2680,
    rating: 4.8,
    mealsIncluded: true,
    hero: { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", alt: "Swiss mountain cable car" },
    summary: "Scenic rail routes, summit views, and boutique alpine stays.",
  },
  {
    id: "pkg-3",
    name: "Bali Family Retreat",
    slug: "bali-family-retreat",
    category: "family",
    durationDays: 7,
    price: 1960,
    originalPrice: 2180,
    rating: 4.7,
    mealsIncluded: false,
    hero: { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80", alt: "Bali rice terrace" },
    summary: "Flexible family pacing, villa stays, and activity-led itineraries.",
  },
  {
    id: "pkg-4",
    name: "Italian Romance",
    slug: "italian-romance",
    category: "honeymoon",
    durationDays: 8,
    price: 3990,
    originalPrice: 4990,
    rating: 4.9,
    mealsIncluded: true,
    hero: { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80", alt: "Tuscany villa" },
    summary: "Tuscany villas, cooking classes, and wine-country romance.",
  },
  {
    id: "pkg-5",
    name: "Japanese Discovery",
    slug: "japanese-discovery",
    category: "luxury",
    durationDays: 10,
    price: 4200,
    originalPrice: 5100,
    rating: 4.8,
    mealsIncluded: true,
    hero: { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80", alt: "Cherry blossom Japan" },
    summary: "Cherry blossom season, bullet train pass, and cultural immersion.",
  },
  {
    id: "pkg-6",
    name: "Kenya Safari Quest",
    slug: "kenya-safari-quest",
    category: "adventure",
    durationDays: 6,
    price: 2890,
    originalPrice: 3400,
    rating: 4.7,
    mealsIncluded: true,
    hero: { url: "https://images.unsplash.com/photo-1516426122078-c23e76b4f2b6?auto=format&fit=crop&w=1200&q=80", alt: "Kenya safari sunset" },
    summary: "Big Five game drives, luxury tented camps, and Masai Mara nights.",
  },
];

/* ── Blog Posts ──────────────────────────────────────────────────── */
export const posts: BlogPostSummary[] = [
  {
    id: "blog-1",
    slug: "premium-travel-booking-patterns",
    title: "The Next Wave of Premium Travel Booking Patterns",
    category: "Luxury",
    excerpt: "Trust cues, transparency, and mobile-first structure shape conversion.",
    readTime: "8 min read",
    hero: { url: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?auto=format&fit=crop&w=1200&q=80", alt: "Aerial beach" },
  },
  {
    id: "blog-2",
    slug: "pricing-premium-multi-stop-trips",
    title: "How to Price Premium Multi-Stop Trips",
    category: "Strategy",
    excerpt: "Margin-aware travel packaging across seasons and supplier tiers.",
    readTime: "6 min read",
    hero: { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", alt: "Mountains" },
  },
  {
    id: "blog-3",
    slug: "hidden-gems-southeast-asia",
    title: "10 Hidden Gems in Southeast Asia Tourists Don't Know About",
    category: "Tips & Tricks",
    excerpt: "Off-the-beaten-path destinations that redefine travel expectations.",
    readTime: "5 min read",
    hero: { url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80", alt: "Southeast Asia temple" },
  },
  {
    id: "blog-4",
    slug: "sustainable-luxury-travel",
    title: "Sustainable Luxury: How Premium Travel is Going Green",
    category: "Sustainability",
    excerpt: "Eco-luxury resorts, carbon-offset programs, and conscious itineraries.",
    readTime: "7 min read",
    hero: { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80", alt: "Forest canopy" },
  },
];

/* ── Testimonials ──────────────────────────────────────────────── */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  body: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Sarah Mitchell",
    location: "Santorini, Greece",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    body: "Absolutely breathtaking experience! Every detail was meticulously planned. The sunset catamaran was the highlight of our trip.",
  },
  {
    id: "t-2",
    name: "James Chen",
    location: "Kyoto, Japan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    body: "The cultural immersion was beyond expectations. From tea ceremonies to hidden temples, every moment felt authentic and special.",
  },
  {
    id: "t-3",
    name: "Elena Rodriguez",
    location: "Maldives",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    body: "Our honeymoon was pure magic. The overwater villa, the private dining on the beach — it was everything we dreamed of and more.",
  },
  {
    id: "t-4",
    name: "Marcus Johnson",
    location: "Cape Town, South Africa",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 4,
    body: "From Table Mountain to the Winelands, every excursion was perfectly organized. The local guides were incredibly knowledgeable.",
  },
];

/* ── Experience Categories ──────────────────────────────────────── */
export const experienceCategories = [
  { icon: "🏖️", label: "Beach Escapes", count: 42 },
  { icon: "🏔️", label: "Mountain Retreats", count: 28 },
  { icon: "🏛️", label: "Cultural Tours", count: 35 },
  { icon: "🍷", label: "Culinary Experiences", count: 19 },
  { icon: "🐘", label: "Wildlife Safaris", count: 15 },
  { icon: "💑", label: "Honeymoon Packages", count: 24 },
];

/* ── Statistics ──────────────────────────────────────────────────── */
export const stats = [
  { label: "Destinations", value: 500, suffix: "+" },
  { label: "Happy Travelers", value: 12000, suffix: "+" },
  { label: "Satisfaction", value: 98, suffix: "%" },
  { label: "Expert Guides", value: 150, suffix: "+" },
];

/* ── Reviews ──────────────────────────────────────────────────── */
export const reviews: Review[] = [
  { id: "r-1", author: "Anna K.", rating: 5, body: "Unforgettable sunset views from our private villa. Service was impeccable.", createdAt: "2026-01-15" },
  { id: "r-2", author: "Michael B.", rating: 4, body: "Great itinerary, food was amazing. Slightly cramped transfer bus on day 2.", createdAt: "2026-01-10" },
  { id: "r-3", author: "Priya S.", rating: 5, body: "Best family vacation we've ever had. Kids loved the snorkeling!", createdAt: "2025-12-28" },
  { id: "r-4", author: "Carlos M.", rating: 5, body: "The local cooking class was a highlight. Highly recommend the premium package.", createdAt: "2025-12-15" },
];

/* ── FAQ ──────────────────────────────────────────────────────── */
export const faqs = [
  { q: "What's included in the package price?", a: "All packages include accommodation, guided tours, transfers, and specified meals. Flights are listed separately unless marked as all-inclusive." },
  { q: "Can I customize my itinerary?", a: "Absolutely! Every trip can be tailored to your preferences. Contact our travel experts for a personalized consultation." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 30 days before departure. 50% refund for cancellations 15–30 days prior. No refund within 15 days." },
  { q: "Do you offer travel insurance?", a: "Yes, we partner with leading insurance providers to offer comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage." },
  { q: "How do I book a group trip?", a: "For groups of 10 or more, we offer special rates and dedicated coordinators. Fill out our group inquiry form or call us directly." },
];

/* ── Team (About page) ──────────────────────────────────────────── */
export const team = [
  { name: "Alexandra Hart", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { name: "David Park", role: "Head of Destinations", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Maria Santos", role: "Lead Experience Designer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
  { name: "Thomas Wright", role: "Chief Technology Officer", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
];
