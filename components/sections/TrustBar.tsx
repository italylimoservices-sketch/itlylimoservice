const items = [
  { title: "Professional Chauffeurs", desc: "Experienced, English-speaking drivers" },
  { title: "Premium Vehicles", desc: "Clean, comfortable and well-maintained" },
  { title: "Airport Meet & Greet", desc: "Flight tracking included" },
  { title: "Fixed, Transparent Pricing", desc: "Your fare confirmed before you travel" },
  { title: "24/7 Availability", desc: "Booking support around the clock" },
  { title: "Italy-Wide Coverage", desc: "From major cities to coastal towns" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-luxe py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {items.map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <p className="text-sm font-semibold text-navy leading-snug">{item.title}</p>
              <p className="mt-1 text-xs text-stone leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
