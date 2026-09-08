import type { Metadata } from "next";
import { generalFaqs } from "@/lib/data/faqs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking a private chauffeur in Italy, including pricing, airport transfers, multi-day bookings and private tours.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ" }]} />
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

      <FaqSection items={generalFaqs} eyebrow="" title="" />
      <FinalCTA />
    </>
  );
}
