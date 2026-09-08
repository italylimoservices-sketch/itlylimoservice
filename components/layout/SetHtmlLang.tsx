"use client";

import { useEffect } from "react";

/**
 * The root layout's <html lang> is hardcoded "en" so it (and the rest of the
 * (en) route tree) can stay fully statically prerendered -- reading the
 * locale from a request-time API there would force the entire app dynamic.
 * For the /it tree specifically, correct it client-side after mount.
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);

  return null;
}
