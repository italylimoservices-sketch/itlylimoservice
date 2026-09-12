import { Airport } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/ui/JsonLd";
import { type Locale } from "@/lib/i18n/locales";

/**
 * Official reference information for an airport — name, IATA/ICAO, location,
 * type, terminals, official website. Deliberately does NOT cover transfer
 * logistics, chauffeur meeting process or fleet recommendations; those are
 * airport-transfer-page content, not airport-identity content, and already
 * live elsewhere on the page (AirportPageTemplate's own sections). Every
 * field here is optional and only rendered when the underlying airport
 * data has verified it — see lib/data/airports.ts for sourcing.
 */
export default function AirportInformation({ airport, locale = "en" }: { airport: Airport; locale?: Locale }) {
  const it = locale === "it";

  const hasDetails = Boolean(airport.icao || airport.region || airport.airportType);
  const hasTerminals = Boolean(airport.singleTerminal || (airport.terminals && airport.terminals.length > 0));

  const airportJsonLd = airport.officialWebsite
    ? {
        "@context": "https://schema.org",
        "@type": "Airport",
        name: airport.officialName || airport.name,
        iataCode: airport.code,
        ...(airport.icao ? { icaoCode: airport.icao } : {}),
        url: airport.officialWebsite,
        ...(airport.region
          ? {
              address: {
                "@type": "PostalAddress",
                addressLocality: airport.city,
                addressRegion: airport.region,
                addressCountry: "IT",
              },
            }
          : {}),
      }
    : null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        {airportJsonLd && <JsonLd data={airportJsonLd} />}
        <SectionHeading
          eyebrow={it ? "Informazioni Aeroporto" : "Airport Information"}
          title={it ? `${airport.name} in Sintesi` : `${airport.name} at a Glance`}
        />

        <div className="mt-10 rounded-md border border-line bg-ivory overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 p-6 md:p-8">
            <div className="flex flex-col items-center justify-center gap-1 rounded-md bg-navy-deep text-ivory px-8 py-6 shrink-0 self-start mx-auto md:mx-0">
              <span className="font-display text-4xl tracking-wide leading-none">{airport.code}</span>
              <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-light">
                {it ? "Codice IATA" : "IATA Code"}
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl text-navy">{airport.name}</h3>
              {airport.officialName && airport.officialName !== airport.name && (
                <p className="mt-0.5 text-sm text-stone">{airport.officialName}</p>
              )}

              {hasDetails && (
                <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                    <dt className="text-stone">{it ? "Codice IATA" : "IATA Code"}</dt>
                    <dd className="font-semibold text-navy">{airport.code}</dd>
                  </div>
                  {airport.icao && (
                    <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                      <dt className="text-stone">{it ? "Codice ICAO" : "ICAO Code"}</dt>
                      <dd className="font-semibold text-navy">{airport.icao}</dd>
                    </div>
                  )}
                  <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                    <dt className="text-stone">{it ? "Località" : "Location"}</dt>
                    <dd className="font-semibold text-navy text-right sm:text-left">{airport.city}</dd>
                  </div>
                  {airport.airportType && (
                    <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                      <dt className="text-stone">{it ? "Tipo" : "Type"}</dt>
                      <dd className="font-semibold text-navy text-right sm:text-left">{airport.airportType}</dd>
                    </div>
                  )}
                </dl>
              )}
            </div>
          </div>

          {hasTerminals && (
            <div className="border-t border-line p-6 md:p-8">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-stone mb-4">
                {it ? "Terminal" : "Terminals"}
              </h4>
              {airport.terminals && airport.terminals.length > 0 ? (
                <ul className="space-y-2.5">
                  {airport.terminals.map((t) => (
                    <li
                      key={t.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-sm border border-line bg-white px-4 py-3"
                    >
                      <span className="font-semibold text-navy text-sm">{t.name}</span>
                      {t.function && <span className="text-sm text-stone">{t.function}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-stone">
                  {it
                    ? "Questo aeroporto dispone di un unico terminal passeggeri."
                    : "This airport operates a single passenger terminal."}
                </p>
              )}
            </div>
          )}

          <div className="border-t border-line p-6 md:p-8 flex flex-wrap gap-4">
            {airport.officialWebsite && (
              <a
                href={airport.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold transition-colors"
                aria-label={it ? `Sito ufficiale di ${airport.name} (si apre in una nuova scheda)` : `Official website of ${airport.name} (opens in a new tab)`}
              >
                {it ? "Sito Ufficiale Aeroporto" : "Official Airport Website"} ↗
              </a>
            )}
            <a
              href="#quote-form"
              className="inline-flex items-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
            >
              {it ? "Prenota Transfer Privato" : "Book Private Airport Transfer"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
