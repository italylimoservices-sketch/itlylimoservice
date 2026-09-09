import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const alt = `${siteConfig.name} — Private Chauffeur Service in Italy`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          width="64"
          height="64"
          viewBox="0 0 64 64"
          style={{ position: "absolute", top: 56, right: 64 }}
        >
          <path
            d="M19 48 L19 27 A13 16 0 0 1 45 27 L45 48"
            fill="none"
            stroke="#cba565"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="14" y1="49" x2="50" y2="49" stroke="#cba565" strokeWidth="4" strokeLinecap="round" />
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
          Private Chauffeur Service in Italy
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            marginTop: 28,
            fontWeight: 600,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 22,
            color: "rgba(250,247,241,0.75)",
          }}
        >
          {siteConfig.tagline}
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
      </div>
    ),
    { ...size }
  );
}
