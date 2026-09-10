import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/ui/Icon";
import { getDictionary } from "@/lib/i18n/dictionary";
import { localePath, type Locale } from "@/lib/i18n/locales";

export default function StickyMobileCTA({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex xl:hidden border-t border-line bg-ivory/97 backdrop-blur px-3 py-2.5 gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <a
        href={`mailto:${siteConfig.email}`}
        aria-label={`Email ${siteConfig.email}`}
        className="flex flex-col items-center justify-center gap-0.5 rounded-sm border border-navy/20 px-3 py-2 text-navy w-16 shrink-0"
      >
        <Icon name="email" className="h-4 w-4" />
        <span className="text-[0.65rem] font-semibold">{t.stickyCta.email}</span>
      </a>
      <Link
        href={localePath(locale, "/contact")}
        className="flex-1 inline-flex items-center justify-center rounded-sm bg-navy text-sm font-semibold text-ivory"
      >
        {t.stickyCta.getQuote}
      </Link>
    </div>
  );
}
