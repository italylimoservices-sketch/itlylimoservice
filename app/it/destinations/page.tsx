import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import { destinationNames_it } from "@/lib/i18n/data.it";
import { getMacroRegion, macroRegionLabels, macroRegionOrder } from "@/lib/data/destinationRegions";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Destinazioni in Italia",
  description:
    "Il nostro servizio di autista privato nelle migliori destinazioni italiane: Roma, Milano, Firenze, Lago di Como, Costiera Amalfitana e Sicilia.",
  alternates: { canonical: "/it/destinations", languages: { en: "/destinations", it: "/it/destinations", "x-default": "/destinations" } },
};

const variants = ["gold", "navy", "ivory"] as const;

const regionIntro: Record<string, string> = {
  north: "Da Milano e i suoi quartieri d'affari ai borghi lacustri del Lago di Como e alla costa ligure — snodi dell'alta velocità e resort lacustri.",
  central: "Roma, Firenze e la campagna toscana che le separa — l'itinerario classico per chi visita l'Italia per la prima volta, e la regione con più richieste di gite di un giorno.",
  south: "Napoli come porta d'accesso alla Costiera Amalfitana, Sorrento e il Golfo di Napoli — strade costiere che un autista esperto conosce bene.",
  islands: "Sicilia e Sardegna, da esplorare al meglio con un autista privato per più giorni anziché con un singolo trasferimento.",
};

const variantBySlug = new Map(
  macroRegionOrder
    .flatMap((macro) => destinations.filter((d) => getMacroRegion(d.region) === macro))
    .map((d, i) => [d.slug, variants[i % variants.length]] as const)
);

export default function DestinationsIndexPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Destinazioni" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Destinazioni in Italia</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Copertura con Autista Privato in Tutta Italia
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Dalle antiche vie della capitale alle strade costiere del sud, i nostri autisti
            offrono trasporto privato in ogni destinazione italiana principale. Seleziona una
            destinazione qui sotto per percorsi locali, punti di ritiro e consigli di viaggio.
          </p>
        </div>
      </section>

      {macroRegionOrder.map((macro, sectionIndex) => {
        const group = destinations.filter((d) => getMacroRegion(d.region) === macro);
        if (group.length === 0) return null;
        return (
          <section key={macro} className={`py-16 md:py-20 ${sectionIndex % 2 === 0 ? "bg-ivory" : "bg-ivory-deep/40"}`}>
            <div className="container-luxe">
              <SectionHeading title={macroRegionLabels[macro].it} subtitle={regionIntro[macro]} />
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.map((d) => {
                  const it = destinationNames_it[d.slug];
                  return (
                    <Link key={d.slug} href={`/it/destinations/${d.slug}`} className="group block">
                      <ImageBlock label={it?.name ?? d.name} variant={variantBySlug.get(d.slug)!} src={d.image || undefined} />
                      <p className="mt-3 text-sm font-semibold text-navy">{it?.name ?? d.name}</p>
                      <p className="text-xs text-stone">{it?.region ?? d.region}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA locale="it" />
    </>
  );
}
