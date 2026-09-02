export interface Destination {
  slug: string;
  name: string;
  region: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  highlights: string[];
  popularPickups: string[];
  nearestAirports: string[]; // airport slugs
  relatedRoutes: string[]; // route slugs
  relatedDestinations: string[]; // destination slugs
  image: string;
}

export interface Airport {
  slug: string;
  name: string;
  code: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  distanceInfo: string;
  nearestDestinations: string[]; // destination slugs
  image: string;
}

export interface RouteInfo {
  slug: string;
  from: string;
  to: string;
  fromSlug: string; // destination slug if exists
  toSlug: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  distanceApprox: string;
  durationApprox: string;
  highlights: string[];
  relatedDestinations: string[];
  image: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  intro: string[];
  benefits: string[];
  whoFor: string[];
  included: string[];
  icon: string;
}

export interface Tour {
  slug: string;
  name: string;
  region: string;
  description: string;
  highlights: string[];
}

export interface FleetCategory {
  slug: string;
  name: string;
  passengers: string;
  luggage: string;
  description: string;
  amenities: string[];
  idealFor: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  placeholder: true;
}

export interface FaqItem {
  question: string;
  answer: string;
}
