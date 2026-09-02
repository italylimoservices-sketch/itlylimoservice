import Link from "next/link";
import { services } from "@/lib/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Offer"
          title="Chauffeur Services Across Italy"
          subtitle="From a single airport pickup to a multi-day private tour, each service is built around comfort, punctuality and local expertise."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group flex flex-col rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy/5 text-gold">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg text-navy">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone flex-1">{s.shortDescription}</p>
              <span className="mt-4 text-sm font-semibold text-gold group-hover:text-gold-light">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
