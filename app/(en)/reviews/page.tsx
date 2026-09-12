import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Read verified customer reviews of ${siteConfig.name} on Trustpilot, and see how we collect feedback after every trip.`,
  alternates: { canonical: "/reviews" },
};

const placeholderReviews = [1, 2, 3];

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Reviews" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Reviews</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            What Customers Say
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            We’d rather point you to independently verified reviews than write our own. Every
            review on Trustpilot comes from a real customer we’ve driven.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-2xl text-center">
          <SectionHeading
            eyebrow="Verified Reviews"
            title="Read Our Reviews on Trustpilot"
            align="center"
          />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Trustpilot reviews are tied to a real transaction and can’t be edited or removed by
            us — it’s the most reliable place to see honest feedback from past customers.
          </p>
          <a
            href={siteConfig.trustpilotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold-light px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors"
          >
            View Reviews on Trustpilot
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Featured Reviews"
            title="Verified Feedback From Recent Trips"
            subtitle="This section is populated with real, verified reviews as they come in — no review is published here unless it’s genuinely from a customer we’ve driven."
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholderReviews.map((n) => (
              <div key={n} className="rounded-md border border-line bg-white p-6">
                <p className="text-sm text-stone italic leading-relaxed">
                  [REAL CUSTOMER REVIEW — ADD VERIFIED REVIEW HERE]
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-stone">— [Customer name, route or service]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="How It Works" title="How We Collect Reviews" />
          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                <Icon name="check" className="h-4 w-4" />
              </div>
              <p className="text-sm text-stone leading-relaxed">
                After your trip, we send a short follow-up asking how it went and inviting you to
                leave a review — we don’t ask before the journey is complete.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                <Icon name="shield" className="h-4 w-4" />
              </div>
              <p className="text-sm text-stone leading-relaxed">
                Reviews go directly to Trustpilot, an independent platform — we can respond to a
                review but can’t edit or delete it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
