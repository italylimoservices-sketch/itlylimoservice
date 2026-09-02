import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex xl:hidden border-t border-line bg-ivory/97 backdrop-blur px-3 py-2.5 gap-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <a
        href={siteConfig.phoneHref}
        className="flex-1 inline-flex items-center justify-center rounded-sm border border-navy/20 py-3 text-sm font-semibold text-navy"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-[1.4] inline-flex items-center justify-center rounded-sm bg-navy py-3 text-sm font-semibold text-ivory"
      >
        Request a Quote
      </Link>
    </div>
  );
}
