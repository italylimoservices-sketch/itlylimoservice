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
 * `compact` shrinks the mark and drops the responsive text bump for narrow
 * contexts (e.g. the footer's brand column) where the default size overflows
 * into neighboring content.
 */
export function LogoFull({
  theme = "onLight",
  compact = false,
}: {
  theme?: "onLight" | "onDark";
  compact?: boolean;
}) {
  const textColor = theme === "onLight" ? "text-navy" : "text-ivory";
  return (
    <span className="inline-flex items-center gap-2">
      <Monogram size={compact ? 32 : 48} />
      <span
        className={`font-display tracking-wide leading-tight ${
          compact ? "text-lg" : "text-xl md:text-2xl whitespace-nowrap"
        } ${textColor}`}
      >
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
