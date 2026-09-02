import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

const points = [
  {
    icon: "steering-wheel",
    title: "Experienced Professional Chauffeurs",
    desc: "Every driver is professionally presented, punctual and trained to put passenger comfort first.",
  },
  {
    icon: "check",
    title: "Premium, Comfortable Vehicles",
    desc: "A clean, well-maintained fleet suited to airport transfers, business travel and touring alike.",
  },
  {
    icon: "map",
    title: "Local Knowledge",
    desc: "Drivers who know the routes, restricted zones and timing quirks of each city and region.",
  },
  {
    icon: "clock",
    title: "Punctual Pickups",
    desc: "Flight and schedule monitoring so your chauffeur is ready when you are, not before or after.",
  },
  {
    icon: "sparkles",
    title: "Personalised Service",
    desc: "Itineraries and pickups tailored to your plans, not a fixed group schedule.",
  },
  {
    icon: "plane",
    title: "Airport Meet & Greet",
    desc: "A driver waiting at arrivals with a name board and help with your luggage.",
  },
  {
    icon: "shield",
    title: "Transparent Pricing",
    desc: "A fixed quote agreed before you travel, with no hidden fees added later.",
  },
  {
    icon: "briefcase",
    title: "24/7 Customer Support",
    desc: "Booking assistance and support available around the clock, every day of the year.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built Around Comfort, Safety and Reliability"
          subtitle="Premium transportation is more than a nice car — it's the certainty that your driver, route and timing are handled correctly, every time."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold-light">
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
