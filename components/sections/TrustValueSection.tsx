import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

const points = [
  {
    icon: "check",
    title: "Fixed Quote Before You Book",
    desc: "See your price upfront and confirm only when you're ready — no obligation to pay just to get a quote.",
  },
  {
    icon: "shield",
    title: "Private Vehicles, Never Shared",
    desc: "Every journey is exclusively yours — not a shared shuttle or a pooled ride with other passengers.",
  },
  {
    icon: "steering-wheel",
    title: "Direct Communication",
    desc: "A real person confirms your booking and stays reachable before, during and after your journey.",
  },
  {
    icon: "clock",
    title: "A Simple, Transparent Process",
    desc: "Request, confirm, meet your chauffeur, travel — no confusing steps or unexpected surprises.",
  },
];

export default function TrustValueSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Booking With Confidence"
          title="Built Around Trust, Not Just Transport"
          subtitle="We'd rather earn your confidence through a clear, honest process than through claims we can't back up."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-md border border-line bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-gold">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
