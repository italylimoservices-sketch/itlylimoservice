import { cruisePorts } from "@/lib/data/ports";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CruisePortsList() {
  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Ports We Serve"
          title="Private Transfers at Italy's Major Cruise Ports"
          subtitle="Each port connects to a different part of Italy — here's what to expect at each."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cruisePorts.map((p) => (
            <div key={p.slug} className="rounded-md border border-line bg-white p-6">
              <p className="eyebrow mb-2 text-[0.65rem]">{p.region}</p>
              <h3 className="font-display text-lg text-navy">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
