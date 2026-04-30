import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SurgentAI — AI Automation Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#13151a",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Power rail */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          backgroundColor: "#9bf25a",
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            backgroundColor: "#9bf25a",
          }}
        />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#e8ede5",
          }}
        >
          SurgentAI
        </span>
      </div>

      {/* Headline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#e8ede5",
          }}
        >
          Ready to Transform
        </span>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#9bf25a",
          }}
        >
          Your Business With AI?
        </span>
      </div>

      {/* Domain */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "80px",
          fontFamily: "monospace",
          fontSize: "13px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#8a9190",
        }}
      >
        getsurgent.ai
      </div>
    </div>,
    size
  );
}
