import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/ui/Icon";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex xl:hidden border-t border-line bg-ivory/97 backdrop-blur px-3 py-2.5 gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <a
        href={siteConfig.phoneHref}
        aria-label="Call now"
        className="flex flex-col items-center justify-center gap-0.5 rounded-sm border border-navy/20 px-3 py-2 text-navy w-16 shrink-0"
      >
        <Icon name="phone" className="h-4 w-4" />
        <span className="text-[0.65rem] font-semibold">Call</span>
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="flex flex-col items-center justify-center gap-0.5 rounded-sm border border-navy/20 px-3 py-2 text-navy w-16 shrink-0"
      >
        <Icon name="chat" className="h-4 w-4" />
        <span className="text-[0.65rem] font-semibold">WhatsApp</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 inline-flex items-center justify-center rounded-sm bg-navy text-sm font-semibold text-ivory"
      >
        Get a Quote
      </Link>
    </div>
  );
}
