import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects personal data submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl text-navy">Privacy Policy</h1>
          <p className="mt-4 text-sm text-stone">
            Last updated: [Date to be confirmed]. This is a template policy and must be reviewed
            by a qualified professional before publication, particularly regarding GDPR
            obligations for visitors and customers based in the EU.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-navy mb-2">1. Who We Are</h2>
              <p>
                {siteConfig.name} ({siteConfig.legalName}) operates this website and provides
                private chauffeur transportation services across Italy. For any privacy-related
                questions, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">2. Information We Collect</h2>
              <p>When you request a quote or contact us, we may collect:</p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside">
                <li>Contact details (name, email address, phone number)</li>
                <li>Journey details (pickup and drop-off locations, dates, passenger count)</li>
                <li>Any additional information you choose to share in special requirements</li>
                <li>Basic technical data (browser type, device, pages visited) via standard website analytics, where enabled</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">3. How We Use Your Information</h2>
              <p>
                We use the information you provide to respond to quote requests, confirm and
                fulfil bookings, communicate about your journey, and improve our services. We do
                not sell personal data to third parties. [Confirm any additional uses — marketing
                communications, CRM tools, analytics providers — before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">4. Cookies</h2>
              <p>
                This website may use cookies or similar technologies for core functionality and,
                where enabled, analytics. You can control cookies through your browser settings.
                [A full cookie inventory and consent mechanism should be added before launch if
                analytics or marketing cookies are used.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">5. Data Sharing</h2>
              <p>
                We may share necessary booking details with chauffeurs and operational partners
                solely to fulfil your transportation request. [List specific third-party
                processors — e.g. booking software, payment providers — before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">6. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary to fulfil the purposes
                described in this policy, or as required by law. [Confirm specific retention
                periods before launch.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">7. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, delete or
                port your personal data, and to object to or restrict certain processing. To
                exercise these rights, contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">8. Contact</h2>
              <p>
                {siteConfig.name}
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
