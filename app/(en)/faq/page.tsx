import type { Metadata } from "next";
import { faqCategories } from "@/lib/data/faqs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqAccordion from "@/components/ui/FaqAccordion";
import JsonLd from "@/components/ui/JsonLd";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking a private chauffeur in Italy, including pricing, airport transfers, luggage, accessibility, multi-day bookings and private tours.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((c) =>
      c.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <JsonLd data={jsonLd} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">FAQ</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Answers to common questions about booking a private chauffeur in Italy. For anything
            not covered here, our team is happy to help directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-3xl space-y-12">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h2 className="font-display text-2xl text-navy mb-4">{category.title}</h2>
              <FaqAccordion items={category.items} />
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
