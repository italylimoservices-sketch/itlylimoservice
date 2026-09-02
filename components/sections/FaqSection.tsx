import { FaqItem } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import JsonLd from "@/components/ui/JsonLd";

export default function FaqSection({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container-luxe max-w-3xl">
        <JsonLd data={jsonLd} />
        {title && <SectionHeading eyebrow={eyebrow} title={title} align="center" />}
        <div className={title ? "mt-10" : ""}>
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
