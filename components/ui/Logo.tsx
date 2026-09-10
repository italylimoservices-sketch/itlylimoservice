import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * The brand mark (gold arch over a Tuscan road) as a transparent PNG/WebP,
 * so it reads correctly on both the light header and dark footer without
 * needing separate light/dark art.
 */
function Monogram({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/logo-icon.webp"
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      aria-hidden
    />
  );
}

/**
 * Full lockup: monogram + wordmark, for the header and other primary placements.
 */
export function LogoFull({ theme = "onLight" }: { theme?: "onLight" | "onDark" }) {
  const textColor = theme === "onLight" ? "text-navy" : "text-ivory";
  return (
    <span className="inline-flex items-center gap-2">
      <Monogram size={28} />
      <span className={`font-display text-xl md:text-2xl tracking-wide whitespace-nowrap ${textColor}`}>
        {siteConfig.name}
      </span>
    </span>
  );
}

/**
 * Compact lockup: monogram only, for tight spaces (mobile header, favicons rendered
 * inline, social avatars). Matches app/icon.png and app/apple-icon.png.
 */
export function LogoCompact({ size = 32 }: { size?: number }) {
  return <Monogram size={size} />;
}
