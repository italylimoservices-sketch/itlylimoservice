import Image from "next/image";
import { destinations } from "@/lib/data/destinations";
import { siteConfig } from "@/lib/siteConfig";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import LinkedText from "@/components/ui/LinkedText";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";

interface Stat {
  value: string;
  label: string;
  href?: string;
}

/**
 * Shared hero for index/hub pages (routes, destinations): photo background,
 * heading + intro copy, a docked QuoteForm, and the same real trust strip
 * used across service pages — no fabricated ratings or review counts.
 */
export default function HubHero({
  eyebrow,
  heading,
  intro,
  image,
  stats,
  locale = "en",
}: {
  eyebrow: string;
  heading: string;
  intro: string[];
  image: string;
  /** 3-4 stat tiles for the strip below the fold. Defaults to the site-wide set used on service pages. */
  stats?: Stat[];
  locale?: Locale;
}) {
  const it = locale === "it";
  const trustBar = getDictionary(locale).home.trustBar;
  const highlights: { icon: string; title: string; desc: string }[] = [
    { icon: "steering-wheel", ...trustBar[0] },
    { icon: "sparkles", ...trustBar[1] },
    { icon: "shield", ...trustBar[3] },
  ];

  const defaultStats: Stat[] = [
    { value: String(destinations.length), label: it ? "Destinazioni Coperte" : "Destinations Covered" },
    { value: "24/7", label: it ? "Disponibili Tutto l'Anno" : "Available Year-Round" },
    { value: it ? "Verificate" : "Verified", label: it ? "Recensioni su Trustpilot" : "Reviews on Trustpilot", href: siteConfig.trustpilotUrl },
    { value: "100%", label: it ? "Privato — Solo il Tuo Gruppo" : "Private — Your Group Only" },
  ];
  const statList = stats ?? defaultStats;

  return (
    <section className="relative overflow-hidden bg-navy-deep text-ivory">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 25% 15%, rgba(203,165,101,0.14), transparent 60%), linear-gradient(180deg, rgba(7,11,20,0.93) 0%, rgba(7,11,20,0.84) 45%, rgba(7,11,20,0.94) 100%)",
        }}
        aria-hidden
      />

      <div className="container-luxe relative py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div>
          <p className="eyebrow eyebrow-invert mb-4">{eyebrow}</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">{heading}</h1>
          <div className="mt-6 space-y-4 max-w-xl">
            {intro.map((p, i) => (
              <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                <LinkedText text={p} linkClassName="text-gold-light underline underline-offset-2 hover:text-gold" />
              </p>
            ))}
          </div>
        </div>
        <QuoteForm compact locale={locale} />
      </div>

      <div className="container-luxe relative pb-14 md:pb-16">
        <div className="gold-rule" aria-hidden />
        <div className="mt-6 rounded-sm border border-ivory/10 bg-white/[0.02]">
          <div
            className="grid grid-cols-2 divide-y divide-ivory/10 md:divide-y-0 md:divide-x md:divide-ivory/10"
            style={{ gridTemplateColumns: `repeat(${Math.min(statList.length, 4)}, minmax(0, 1fr))` }}
          >
            {statList.map((s) =>
              s.href ? (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group px-5 py-4 text-center">
                  <p className="font-display text-xl md:text-2xl leading-none text-gold-light group-hover:text-gold transition-colors">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ivory-deep/55 group-hover:text-ivory-deep/80 transition-colors">
                    {s.label}
                  </p>
                </a>
              ) : (
                <div key={s.label} className="px-5 py-4 text-center">
                  <p className="font-display text-xl md:text-2xl leading-none text-gold-light">{s.value}</p>
                  <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ivory-deep/55">
                    {s.label}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-3 grid sm:grid-cols-3 gap-3">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-center gap-3 rounded-sm border border-ivory/10 bg-white/[0.02] px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold-light shrink-0">
                <Icon name={h.icon} className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ivory">{h.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-ivory-deep/60">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
