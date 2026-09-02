import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderOgImage(eyebrow: string, title: string) {
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
