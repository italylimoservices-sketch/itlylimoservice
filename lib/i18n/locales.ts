export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/**
 * Paths (English form, no locale prefix) that have a real Italian translation
 * under /it. Expand this as more pages get translated -- every Link built via
 * localePath() automatically starts resolving to /it/... once its path is
 * added here, with zero changes needed at the call site. Until then, an IT
 * link for an untranslated path falls back to the (fully working) English
 * page rather than a 404.
 */
const destinationSlugs = [
  "rome", "milan", "florence", "venice", "naples", "bologna", "turin", "verona",
  "lake-como", "amalfi-coast", "sorrento", "tuscany", "cinque-terre", "portofino",
  "siena", "pisa", "sicily", "sardinia", "bari", "genoa",
];

const airportSlugs = [
  "rome-fiumicino", "rome-ciampino", "milan-malpensa", "milan-linate", "venice-marco-polo",
  "florence", "bologna", "naples", "pisa", "palermo", "catania", "bergamo",
];

const fleetSlugs = ["executive-sedan", "luxury-sedan", "luxury-suv", "executive-van", "luxury-van"];

const routeSlugs = [
  "rome-to-florence", "florence-to-rome", "florence-to-venice", "venice-to-florence",
  "rome-to-naples", "naples-to-rome", "rome-to-sorrento", "sorrento-to-rome",
  "rome-to-amalfi-coast", "florence-to-pisa", "pisa-to-florence", "milan-to-lake-como",
  "milan-to-venice", "venice-to-milan", "florence-to-siena",
];

export const translatedPaths = new Set<string>([
  "/",
  "/destinations",
  "/airport-transfers",
  "/routes",
  "/fleet",
  "/about-us",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-conditions",
  "/chauffeur-service",
  "/city-to-city-transfers",
  "/hourly-chauffeur",
  "/italy-private-tours",
  "/corporate-chauffeur",
  "/event-transportation",
  "/cruise-port-transfers",
  ...destinationSlugs.map((s) => `/destinations/${s}`),
  ...airportSlugs.map((s) => `/airport-transfers/${s}`),
  ...routeSlugs.map((s) => `/routes/${s}`),
  ...fleetSlugs.map((s) => `/fleet/${s}`),
]);

export function hasTranslation(path: string): boolean {
  return translatedPaths.has(path);
}

export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  if (!hasTranslation(path)) return clean || "/"; // no IT version yet — link to EN
  return `/it${clean}`;
}
