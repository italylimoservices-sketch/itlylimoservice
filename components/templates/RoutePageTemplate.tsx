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
        {
          question: "Quale veicolo è adatto a questa tratta?",
          answer: "Dipende dal numero di passeggeri e bagagli — una berlina è comoda per 1-3 persone, mentre un SUV o van è più adatto a gruppi o bagagli extra. Indica i dettagli quando richiedi il preventivo e ti consiglieremo il veicolo più adatto.",
        },
        {
          question: "Quanto costa questo transfer?",
          answer: "Il prezzo dipende dal veicolo, dalla data e da eventuali soste — richiedi un preventivo per un prezzo fisso su questa tratta specifica.",
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
        {
          question: "Which vehicle suits this route?",
          answer: "It depends on your passenger and luggage count — a sedan works well for 1-3 people, while an SUV or van suits groups or extra luggage. Tell us your numbers when requesting a quote and we'll recommend a suitable vehicle.",
        },
        {
          question: "How much does this transfer cost?",
          answer: "Price depends on the vehicle, date and any stops requested — request a quote for a fixed price on this specific route.",
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              eyebrow={it ? "Perché un Autista Privato" : "Why a Private Chauffeur"}
              title={it ? `${from} - ${to}: Meglio del Treno o del Taxi?` : `${route.from} to ${route.to}: Why Not Just the Train?`}
            />
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                {it
                  ? "Porta a porta: nessun cambio, nessuna stazione, nessun trasporto dei bagagli tra treni."
                  : "Door-to-door: no station changes, no connections, no dragging luggage between platforms."}
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                {it
                  ? "Orario flessibile, adattato al tuo volo, check-out o programma — non a un orario fisso."
                  : "Flexible timing built around your flight, check-out or schedule, not a fixed departure board."}
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                {it
                  ? "Spazio privato per te e il tuo gruppo, non una carrozza condivisa."
                  : "A private vehicle for your group only, not a shared carriage or shuttle."}
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow={it ? "Chi Prenota Questa Tratta" : "Who Books This Route"}
              title={it ? "Adatto a Diversi Tipi di Viaggiatori" : "Suited to Different Kinds of Travelers"}
            />
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {it
                  ? "Viaggiatori d'affari con orari da rispettare e bagagli da gestire senza stress."
                  : "Business travelers with a schedule to keep and luggage they'd rather not manage through a station."}
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {it
                  ? "Famiglie e gruppi che preferiscono viaggiare insieme in un unico veicolo comodo."
                  : "Families and groups who'd rather travel together in one comfortable vehicle than split across train seats."}
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {it
                  ? "Viaggiatori che vogliono aggiungere una sosta panoramica lungo il percorso."
                  : "Travelers who'd like to add a scenic or practical stop along the way."}
              </li>
            </ul>
            <p className="mt-6 text-sm text-stone leading-relaxed">
              {it ? "Non sei sicuro del veicolo o del prezzo?" : "Not sure which vehicle or price to expect?"}{" "}
              <Link href={localePath(locale, "/fleet")} className="text-gold hover:underline">
                {it ? "Confronta la flotta" : "Compare the fleet"}
              </Link>{" "}
              {it ? "o consulta la nostra" : "or see our"}{" "}
              <a href="/pricing" className="text-gold hover:underline">
                {it ? "guida ai prezzi" : "pricing guide"}
              </a>
              .
            </p>
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
