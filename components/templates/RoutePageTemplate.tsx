import Link from "next/link";
import { RouteInfo, FaqItem } from "@/lib/types";
import { getDestinationBySlug } from "@/lib/data/destinations";
import { routes } from "@/lib/data/routes";
import { routeDetails_it } from "@/lib/i18n/data.it.routes";
import { destinationDetails_it } from "@/lib/i18n/data.it.destinations";
import { destinationNames_it, distance_it, duration_it } from "@/lib/i18n/data.it";
import { localePath, type Locale } from "@/lib/i18n/locales";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function RoutePageTemplate({ route, locale = "en" }: { route: RouteInfo; locale?: Locale }) {
  const it = locale === "it";
  const rd = it ? routeDetails_it[route.slug] : undefined;
  const from = it ? destinationNames_it[route.fromSlug]?.name ?? route.from : route.from;
  const to = it ? destinationNames_it[route.toSlug]?.name ?? route.to : route.to;
  const intro = rd?.intro ?? route.intro;
  const highlights = rd?.highlights ?? route.highlights;

  const fromDestination = getDestinationBySlug(route.fromSlug);
  const toDestination = getDestinationBySlug(route.toSlug);
  const otherRoutes = routes.filter((r) => r.slug !== route.slug).slice(0, 5);

  const faqs: FaqItem[] = it
    ? [
        {
          question: `Quanto dura il transfer da ${from} a ${to}?`,
          answer: `Il viaggio richiede ${duration_it(route.durationApprox).toLowerCase()}, per una distanza di ${distance_it(route.distanceApprox).toLowerCase()}, a seconda del traffico ed eventuali soste richieste.`,
        },
        {
          question: "È un transfer privato e diretto?",
          answer: "Sì, si tratta di un transfer privato porta a porta riservato a te e al tuo gruppo — non una navetta condivisa.",
        },
        {
          question: "Posso richiedere una sosta lungo il percorso?",
          answer: "Sì, è generalmente possibile organizzare soste panoramiche o pratiche — indicale quando richiedi il preventivo.",
        },
      ]
    : [
        {
          question: `How long does the transfer from ${route.from} to ${route.to} take?`,
          answer: `The journey takes approximately ${route.durationApprox.toLowerCase()}, covering around ${route.distanceApprox.toLowerCase()}, depending on traffic and any requested stops.`,
        },
        {
          question: "Is this a private, direct transfer?",
          answer: "Yes, this is a private, door-to-door transfer for you and your group only — not a shared shuttle.",
        },
        {
          question: "Can I request a stop along the way?",
          answer: "Yes, scenic or practical stops can usually be arranged — mention them when requesting your quote.",
        },
      ];

  return (
    <>
      <Breadcrumbs
        locale={locale}
        items={[
          { label: it ? "Tratte" : "Routes", href: localePath(locale, "/routes") },
          { label: it ? `${from} - ${to}` : `${route.from} to ${route.to}` },
        ]}
      />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{it ? "Transfer Privato" : "Private Transfer"}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              {it ? `Transfer Privato con Autista da ${from} a ${to}` : `${route.from} to ${route.to} Private Chauffeur Transfer`}
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-xs uppercase tracking-wide text-gold-light">{it ? "Distanza" : "Distance"}</p>
                <p className="text-sm font-semibold mt-1">{it ? distance_it(route.distanceApprox) : route.distanceApprox}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gold-light">{it ? "Durata" : "Duration"}</p>
                <p className="text-sm font-semibold mt-1">{it ? duration_it(route.durationApprox) : route.durationApprox}</p>
              </div>
            </div>
          </div>
          <QuoteForm compact locale={locale} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              eyebrow={it ? "Punti di Forza della Tratta" : "Route Highlights"}
              title={it ? "Cosa Rende Facile Questo Transfer" : "What Makes This Transfer Easy"}
            />
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow={it ? "Partenza e Arrivo" : "Departure & Arrival"}
              title={it ? "Informazioni sulle Destinazioni" : "About Your Destinations"}
            />
            <div className="mt-6 space-y-4">
              {fromDestination && (
                <Link
                  href={localePath(locale, `/destinations/${fromDestination.slug}`)}
                  className="block rounded-md border border-line bg-white p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wide text-gold">{it ? "Partenza da" : "Departing From"}</p>
                  <p className="font-display text-lg text-navy mt-1">{from}</p>
                  <p className="text-sm text-stone mt-1">
                    {it ? destinationDetails_it[fromDestination.slug]?.summary ?? fromDestination.summary : fromDestination.summary}
                  </p>
                </Link>
              )}
              {toDestination && (
                <Link
                  href={localePath(locale, `/destinations/${toDestination.slug}`)}
                  className="block rounded-md border border-line bg-white p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wide text-gold">{it ? "Arrivo a" : "Arriving In"}</p>
                  <p className="font-display text-lg text-navy mt-1">{to}</p>
                  <p className="text-sm text-stone mt-1">
                    {it ? destinationDetails_it[toDestination.slug]?.summary ?? toDestination.summary : toDestination.summary}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={it ? "Altre Tratte Popolari" : "More Popular Routes"}
            title={it ? "Altri Transfer Privati" : "Other Private Transfers"}
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherRoutes.map((r) => (
              <Link
                key={r.slug}
                href={localePath(locale, `/routes/${r.slug}`)}
                className="flex items-center justify-between gap-3 rounded-sm border border-line bg-white px-5 py-4 hover:border-gold/50 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">
                  {it ? destinationNames_it[r.fromSlug]?.name ?? r.from : r.from}{" "}
                  <span className="text-gold">→</span>{" "}
                  {it ? destinationNames_it[r.toSlug]?.name ?? r.to : r.to}
                </p>
                <span className="text-gold text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks locale={locale} />
      <FaqSection
        items={faqs}
        title={it ? `${from} - ${to} — Domande Frequenti` : `${route.from} to ${route.to} — Frequently Asked Questions`}
      />
      <FinalCTA locale={locale} />
    </>
  );
}
