import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/ui/Icon";

export default function WhatsAppBubble() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] hidden xl:flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <Icon name="chat" className="h-6 w-6" />
    </a>
  );
}
