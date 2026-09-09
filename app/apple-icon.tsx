import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1526",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 64 64">
          <path
            d="M19 48 L19 27 A13 16 0 0 1 45 27 L45 48"
            fill="none"
            stroke="#cba565"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="14" y1="49" x2="50" y2="49" stroke="#cba565" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
