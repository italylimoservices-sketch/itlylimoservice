import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

export default function TrustBar({ locale = "en" }: { locale?: Locale }) {
  const items = getDictionary(locale).home.trustBar;

  return (
    <section className="border-b border-line bg-white">
      <div className="container-luxe py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {items.map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <p className="text-sm font-semibold text-navy leading-snug">{item.title}</p>
              <p className="mt-1 text-xs text-stone leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
