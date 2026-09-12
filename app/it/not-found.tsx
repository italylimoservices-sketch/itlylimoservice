import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data/destinations";
import { destinationNames_it } from "@/lib/i18n/data.it";

export const metadata: Metadata = {
  title: "Pagina Non Trovata",
  robots: { index: false, follow: true },
};

const suggestions = destinations.slice(0, 4);

export default function NotFoundIt() {
  return (
    <section className="bg-ivory">
      <div className="container-luxe py-24 md:py-32 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-navy">Questa Pagina Non Esiste</h1>
        <p className="mt-5 max-w-md mx-auto text-[0.98rem] leading-relaxed text-stone">
          La pagina che stai cercando non esiste o potrebbe essere stata spostata. Ecco alcuni
          punti da cui ripartire.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/it"
            className="inline-flex items-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
          >
            Torna alla Homepage
          </Link>
          <Link
            href="/it/contact"
            className="inline-flex items-center rounded-sm border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold transition-colors"
          >
            Richiedi un Preventivo
          </Link>
        </div>

        <div className="mt-14">
          <p className="text-xs uppercase tracking-wide text-stone mb-4">Destinazioni Popolari</p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map((d) => (
              <Link
                key={d.slug}
                href={`/it/destinations/${d.slug}`}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
              >
                Autista Privato a {destinationNames_it[d.slug]?.name ?? d.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
