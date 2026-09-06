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
            d="M18 21 L32 43 L46 21"
            fill="none"
            stroke="#cba565"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="25" y1="49" x2="39" y2="49" stroke="#cba565" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
