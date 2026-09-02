import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for booking private chauffeur services with ${siteConfig.name}.`,
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl text-navy">Terms & Conditions</h1>
          <p className="mt-4 text-sm text-stone">
            Last updated: [Date to be confirmed]. This is a template and must be reviewed by a
            qualified professional before publication to ensure it reflects your actual booking,
            cancellation and liability terms.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-navy mb-2">1. Booking & Quotes</h2>
              <p>
                Quotes provided through this website are estimates pending confirmation.
                A booking is confirmed once you receive written confirmation from our team.
                [Confirm the exact confirmation and payment process before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">2. Pricing</h2>
              <p>
                Prices are agreed in advance and are fixed for the journey described at booking.
                Additional charges may apply for changes such as extended waiting time, additional
                stops, or route changes requested after confirmation. [Confirm specific
                surcharge policies before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">3. Cancellations & Changes</h2>
              <p>
                [Cancellation windows, refund eligibility and any applicable fees are to be
                confirmed and published here before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">4. Flight Delays & Waiting Time</h2>
              <p>
                For airport transfers, we monitor your flight and adjust pickup timing for
                reasonable delays. [Confirm the specific complimentary waiting period and any
                charges for extended delays before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">5. Passenger Conduct & Safety</h2>
              <p>
                Passengers are expected to behave respectfully toward chauffeurs and to follow
                reasonable safety instructions, including seatbelt use. We reserve the right to
                end a journey early in cases of unsafe or abusive behaviour.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">6. Luggage & Belongings</h2>
              <p>
                Please ensure luggage volume matches the vehicle category booked. We are not
                responsible for items left in the vehicle after drop-off. [Confirm liability
                terms for lost or damaged belongings before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">7. Liability</h2>
              <p>
                [Liability limitations, insurance coverage details and applicable jurisdiction
                should be drafted with a qualified legal professional and inserted here before
                launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of Italy. [Confirm specific jurisdiction and
                dispute resolution process before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">9. Contact</h2>
              <p>
                {siteConfig.legalName}
                <br />
                {siteConfig.addressLine}
                <br />
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
