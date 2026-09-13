import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/data/routes";
import { destinationNames_it, distance_it, duration_it } from "@/lib/i18n/data.it";
import { localePath } from "@/lib/i18n/locales";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Tratte di Transfer Privato in Italia",
  description:
    "Sfoglia le tratte di transfer privato con autista più popolari tra le principali città italiane, con prezzi fissi e servizio porta a porta.",
  alternates: { canonical: "/it/routes", languages: { en: "/routes", it: "/it/routes", "x-default": "/routes" } },
};

export default function RoutesIndexPageIt() {
  const domesticRoutes = routes.filter((r) => !r.international);
  const internationalRoutes = routes.filter((r) => r.international);

  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Tratte" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Tratte Popolari</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Tratte di Transfer Privato Città-Città
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Transfer privati diretti porta a porta tra le città più visitate d&apos;Italia. Non trovi
            la tua tratta esatta qui sotto? Richiedi un preventivo e la organizzeremo per te.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domesticRoutes.map((r) => {
            const from = destinationNames_it[r.fromSlug]?.name ?? r.from;
            const to = destinationNames_it[r.toSlug]?.name ?? r.to;
            return (
              <Link
                key={r.slug}
                href={`/it/routes/${r.slug}`}
                className="group flex flex-col justify-between gap-4 rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
              >
                <div>
                  <p className="font-display text-lg text-navy">
                    {from} <span className="text-gold">→</span> {to}
                  </p>
                  <p className="mt-2 text-sm text-stone">{distance_it(r.distanceApprox)} · {duration_it(r.durationApprox)}</p>
                </div>
                <span className="text-sm font-semibold text-gold group-hover:text-gold-light">
                  Vedi dettagli della tratta →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Tratte Internazionali</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-navy">
                Transfer Oltre Confine dall&apos;Italia
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-stone">
                Percorsi privati con autista che collegano l&apos;Italia a Svizzera, Francia, Austria e
                Slovenia. Scopri tutte le tratte sulla pagina dei{" "}
                <Link href="/it/international-border-crossing-transfers" className="text-gold hover:underline">
                  trasferimenti internazionali
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {internationalRoutes.map((r) => {
              const from = destinationNames_it[r.fromSlug]?.name ?? r.from;
              const to = destinationNames_it[r.toSlug]?.name ?? r.to;
              return (
                <Link
                  key={r.slug}
                  href={localePath("it", `/routes/${r.slug}`)}
                  className="group flex flex-col justify-between gap-4 rounded-md border border-line bg-ivory-deep/20 p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
                >
                  <div>
                    <p className="font-display text-lg text-navy">
                      {from} <span className="text-gold">→</span> {to}
                    </p>
                    <p className="mt-2 text-sm text-stone">{distance_it(r.distanceApprox)} · {duration_it(r.durationApprox)}</p>
                  </div>
                  <span className="text-sm font-semibold text-gold group-hover:text-gold-light">
                    Vedi dettagli della tratta →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-deep text-ivory">
        <div className="container-luxe max-w-2xl text-center mx-auto">
          <p className="eyebrow eyebrow-invert mb-3">Non Trovi la Tua Tratta?</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Qualsiasi Città, Aeroporto o Distanza
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Le tratte sopra sono le più richieste, ma non le uniche che offriamo. Organizziamo
            transfer privati tra due punti qualsiasi in Italia, e oltre confine verso Svizzera,
            Francia, Austria e Slovenia, su richiesta. Indicaci ritiro e destinazione e ti
            invieremo un preventivo fisso.
          </p>
          <Link
            href="/it/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-light transition-colors"
          >
            Richiedi una Tratta Personalizzata
          </Link>
        </div>
      </section>

      <FinalCTA locale="it" />
    </>
  );
}
