import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { title: "Business Meetings", desc: "Punctual transport between meetings across a city or region." },
  { title: "Executive Travel", desc: "Discreet, comfortable transport for individual executives." },
  { title: "Airport Transfers", desc: "Meet & greet arrivals and departures for business travellers." },
  { title: "Corporate Events", desc: "Coordinated transport for company events and gatherings." },
  { title: "Roadshows", desc: "Multi-city, multi-day itineraries for investor and sales roadshows." },
  { title: "Conferences", desc: "Group transportation for delegations attending conferences." },
  { title: "Multi-Day Business Travel", desc: "A dedicated chauffeur across an extended business trip." },
];

export default function CorporateUseCases() {
  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <SectionHeading eyebrow="Corporate Use Cases" title="Where Our Corporate Clients Rely On Us" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-md border border-line bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                <Icon name="check" className="h-4 w-4" />
              </div>
              <div>
                <p className="font-display text-base text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-gold/30 bg-gold-pale/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg text-navy">Setting up a corporate account?</p>
            <p className="mt-1 text-sm text-stone">Get in touch and our team will follow up about billing and regular travel needs.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Contact Corporate Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
