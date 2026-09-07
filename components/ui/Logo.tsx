import { siteConfig } from "@/lib/siteConfig";

const marks = {
  onLight: { badge: "#0d1526", stroke: "#a9803f" },
  onDark: { badge: "transparent", stroke: "#cba565" },
};

function Monogram({ theme = "onLight", size = 32 }: { theme?: "onLight" | "onDark"; size?: number }) {
  const { badge, stroke } = marks[theme];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      {theme === "onLight" && <rect width="40" height="40" rx="8" fill={badge} />}
      <path
        d="M11 13 L20 27 L29 13"
        stroke={stroke}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="15.5" y1="30.5" x2="24.5" y2="30.5" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Full lockup: monogram + wordmark, for the header and other primary placements.
 */
export function LogoFull({ theme = "onLight" }: { theme?: "onLight" | "onDark" }) {
  const textColor = theme === "onLight" ? "text-navy" : "text-ivory";
  return (
    <span className="inline-flex items-center gap-2">
      <Monogram theme={theme} size={28} />
      <span className={`font-display text-xl md:text-2xl tracking-wide whitespace-nowrap ${textColor}`}>
        {siteConfig.name}
      </span>
    </span>
  );
}

/**
 * Compact lockup: monogram only, for tight spaces (mobile header, favicons rendered
 * inline, social avatars). Matches app/icon.svg and app/apple-icon.tsx.
 */
export function LogoCompact({ theme = "onLight", size = 32 }: { theme?: "onLight" | "onDark"; size?: number }) {
  return <Monogram theme={theme} size={size} />;
}
