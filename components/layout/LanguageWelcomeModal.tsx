"use client";

import { useRouter, usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { getDictionary } from "@/lib/i18n/dictionary";
import { hasTranslation, type Locale } from "@/lib/i18n/locales";

const STORAGE_KEY = "language-choice-made";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return false;
}

function markChosen() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
  listeners.forEach((notify) => notify());
}

function stripLocale(pathname: string): string {
  if (pathname === "/it" || pathname.startsWith("/it/")) {
    const rest = pathname.slice(3);
    return rest || "/";
  }
  return pathname;
}

export default function LanguageWelcomeModal({ locale = "en" }: { locale?: Locale }) {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const router = useRouter();
  const pathname = usePathname();
  const t = getDictionary(locale);

  if (!visible) return null;

  function choose(target: Locale) {
    markChosen();
    if (target === locale) return;
    const base = stripLocale(pathname);
    if (target === "en") {
      router.push(base);
      return;
    }
    const dest = hasTranslation(base) ? (base === "/" ? "/it" : `/it${base}`) : "/it";
    router.push(dest);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm rounded-md bg-white p-8 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
        <p className="eyebrow mb-3">{t.languageModal.welcome}</p>
        <h2 className="font-display text-2xl text-navy">{t.languageModal.title}</h2>
        <p className="mt-2 text-sm text-stone">{t.languageModal.subtitle}</p>
        <p className="text-sm italic text-stone">{t.languageModal.subtitleIt}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => choose("en")}
            className="flex flex-col items-center gap-2 rounded-md border border-line p-4 hover:border-gold transition-colors"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-xs font-bold tracking-wide text-navy"
              aria-hidden
            >
              EN
            </span>
            <span className="text-sm font-semibold text-navy">{t.languageModal.english}</span>
            <span className="text-xs text-gold">Continue</span>
          </button>
          <button
            type="button"
            onClick={() => choose("it")}
            className="flex flex-col items-center gap-2 rounded-md border border-line p-4 hover:border-gold transition-colors"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-xs font-bold tracking-wide text-navy"
              aria-hidden
            >
              IT
            </span>
            <span className="text-sm font-semibold text-navy">{t.languageModal.italian}</span>
            <span className="text-xs text-gold">Continua</span>
          </button>
        </div>

        <p className="mt-6 text-xs text-stone/70">{t.languageModal.changeAnytime}</p>
      </div>
    </div>
  );
}
