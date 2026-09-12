import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote",
  description:
    "Contact Italy Limo Service to request a quote — airport transfers, city-to-city transportation, tours and corporate travel across Italy.",
  alternates: { canonical: "/contact", languages: { en: "/contact", it: "/it/contact", "x-default": "/contact" } },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Contact Us</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Request a Quote or Book Your Chauffeur
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Share your journey details and we&apos;ll confirm availability and a fixed price. For
            corporate accounts, events or multi-day itineraries, feel free to contact us directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="font-display text-2xl text-navy mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-md border border-line bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                  <Icon name="email" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-navy hover:text-gold">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-md border border-gold/30 bg-gold-pale/20 p-5">
              <p className="text-sm font-semibold text-navy">Corporate & Event Enquiries</p>
              <p className="mt-2 text-sm text-stone leading-relaxed">
                For corporate accounts, conferences, roadshows or{" "}
                <Link href="/event-transportation" className="text-gold hover:underline">
                  event transportation
                </Link>
                , mention this in your special requirements and our team will follow up directly.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
