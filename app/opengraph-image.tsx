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
