import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = "Astra X1 - Smartphone AI thế hệ mới";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 18% 20%, rgba(96, 165, 250, 0.45), transparent 28%), linear-gradient(135deg, #060914 0%, #111827 48%, #172554 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
          <div
            style={{
              display: "flex",
              width: 360,
              border: "1px solid rgba(147, 197, 253, 0.45)",
              borderRadius: 999,
              padding: "12px 22px",
              color: "#93c5fd",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Smartphone AI cao cấp
          </div>
          <h1
            style={{
              margin: "34px 0 22px",
              fontSize: 82,
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              fontSize: 32,
              lineHeight: 1.35,
            }}
          >
            Camera AI, màn hình 120Hz, hiệu năng mạnh mẽ và pin dùng trọn ngày.
          </p>
        </div>
        <div
          style={{
            width: 285,
            height: 455,
            display: "flex",
            border: "16px solid #f8fafc",
            borderRadius: 58,
            padding: 18,
            background: "linear-gradient(160deg, #2563eb, #7c3aed)",
            boxShadow: "0 30px 90px rgba(37, 99, 235, 0.45)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 38,
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.55), transparent 20%), rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
