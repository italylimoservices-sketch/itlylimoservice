import Link from "next/link";
import Icon from "@/components/ui/Icon";

const items = [
  "Business meetings",
  "Executive travel",
  "Airport transfers",
  "Corporate events",
  "Roadshows",
  "Conferences",
  "Multi-day business travel",
];

export default function CorporateSection() {
  return (
    <section className="py-16 md:py-24 bg-navy text-ivory">
      <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow eyebrow-invert mb-3">Corporate Chauffeur Service</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Dependable Transportation for Business Travel
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ivory-deep/80 max-w-lg">
            Punctuality and discretion matter most when business is on the line. We provide
            reliable, professional chauffeur transportation for executives, delegations and
            corporate events across Italy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/corporate-chauffeur"
              className="inline-flex items-center rounded-sm bg-gold-light px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-gold-pale transition-colors"
            >
              Corporate Enquiries
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm border border-ivory/30 px-6 py-3 text-sm font-semibold text-ivory hover:border-gold transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2.5 rounded-sm border border-ivory/10 px-4 py-3.5">
              <Icon name="check" className="h-4 w-4 text-gold-light shrink-0" />
              <span className="text-sm text-ivory-deep/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
