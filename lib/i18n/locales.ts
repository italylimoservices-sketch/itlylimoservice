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
export const translatedPaths = new Set<string>(["/"]);

export function hasTranslation(path: string): boolean {
  return translatedPaths.has(path);
}

export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  if (!hasTranslation(path)) return clean || "/"; // no IT version yet — link to EN
  return `/it${clean}`;
}
