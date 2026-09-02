import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Request Your Ride",
    desc: "Share your pickup, destination, date and passenger details through our quote form.",
  },
  {
    n: "02",
    title: "Receive Your Quote",
    desc: "We confirm availability and send a fixed, transparent price — no surprises later.",
  },
  {
    n: "03",
    title: "Meet Your Chauffeur",
    desc: "Your driver arrives on time, ready to help with luggage and get you moving.",
  },
  {
    n: "04",
    title: "Enjoy Your Journey",
    desc: "Sit back in comfort while a local professional handles the road ahead.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe">
        <SectionHeading eyebrow="How It Works" title="A Simple, Reliable Booking Process" align="center" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              <span className="font-display text-5xl text-gold">{s.n}</span>
              <h3 className="mt-2 font-display text-lg text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-6 -right-4 text-gold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
