import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderOgImage(eyebrow: string, title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d1526 0%, #12182a 55%, #1c2438 100%)",
          color: "#faf7f1",
          fontFamily: "sans-serif",
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 64 64"
          style={{ position: "absolute", top: 56, right: 64 }}
        >
          <path
            d="M18 21 L32 43 L46 21"
            fill="none"
            stroke="#cba565"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="25" y1="49" x2="39" y2="49" stroke="#cba565" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#cba565",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 68 : 88,
            marginTop: 28,
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            width: 140,
            height: 4,
            background: "#cba565",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "rgba(250,247,241,0.6)",
          }}
        >
          Vetturino — Private Chauffeurs, Italy-Wide
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
