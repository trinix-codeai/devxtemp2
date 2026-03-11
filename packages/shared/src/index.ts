export type UserRole = "user" | "admin";

export interface MediaAsset {
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  body: string;
  createdAt: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  continent: string;
  country: string;
  durationDays: number;
  priceFrom: number;
  rating: number;
  coordinates: [number, number];
  hero: MediaAsset;
  gallery: MediaAsset[];
  highlights: string[];
  summary: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  slug: string;
  category: "adventure" | "luxury" | "family" | "honeymoon" | "group" | "custom";
  durationDays: number;
  price: number;
  originalPrice?: number;
  rating: number;
  mealsIncluded: boolean;
  hero: MediaAsset;
  summary: string;
}

export interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  hero: MediaAsset;
}

export interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  message?: string;
}
