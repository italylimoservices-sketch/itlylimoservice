"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";

const STORAGE_KEY = "cookie-notice-dismissed";
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

function dismiss() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
  listeners.forEach((notify) => notify());
}

export default function CookieNotice({ locale = "en" }: { locale?: Locale }) {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = getDictionary(locale);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 xl:bottom-0 z-50 border-t border-line bg-navy-deep text-ivory-deep">
      <div className="container-luxe flex flex-col sm:flex-row items-center gap-3 py-3.5 text-xs">
        <p className="flex-1 leading-relaxed text-center sm:text-left">
          {t.cookie.text}{" "}
          <Link href={localePath(locale, "/privacy-policy")} className="text-gold-light underline hover:text-gold">
            {t.cookie.privacyPolicy}
          </Link>{" "}
          {t.cookie.forDetails}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-sm bg-gold-light px-4 py-2 text-xs font-semibold text-navy-deep hover:bg-gold-pale transition-colors"
        >
          {t.cookie.gotIt}
        </button>
      </div>
    </div>
  );
}
