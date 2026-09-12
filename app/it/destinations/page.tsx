import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import { destinationNames_it } from "@/lib/i18n/data.it";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Destinazioni in Italia",
  description:
    "Il nostro servizio di autista privato nelle migliori destinazioni italiane: Roma, Milano, Firenze, Lago di Como, Costiera Amalfitana e Sicilia.",
  alternates: { canonical: "/it/destinations", languages: { en: "/destinations", it: "/it/destinations", "x-default": "/destinations" } },
};

const variants = ["gold", "navy", "ivory"] as const;

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

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d, i) => {
            const it = destinationNames_it[d.slug];
            return (
              <Link key={d.slug} href={`/it/destinations/${d.slug}`} className="group block">
                <ImageBlock label={it?.name ?? d.name} variant={variants[i % variants.length]} src={d.image || undefined} />
                <p className="mt-3 text-sm font-semibold text-navy">{it?.name ?? d.name}</p>
                <p className="text-xs text-stone">{it?.region ?? d.region}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <FinalCTA locale="it" />
    </>
  );
}
