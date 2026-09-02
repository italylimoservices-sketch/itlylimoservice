import { testimonials } from "@/lib/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Client Experiences"
          title="What Our Passengers Say"
          align="center"
        />
        <p className="mt-2 text-center text-xs text-stone/70 max-w-md mx-auto">
          Placeholder reviews shown below for layout purposes — to be replaced with verified customer testimonials.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-md border border-line bg-white p-6">
              <div className="flex gap-1 text-gold mb-4" aria-hidden>
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>{star}</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink-soft italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-navy">{t.name}</p>
              <p className="text-xs text-stone">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
