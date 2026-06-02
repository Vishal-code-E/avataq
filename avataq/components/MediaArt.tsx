"use client";

type ArtKind = "chart" | "flow" | "pulse" | "rings" | "grid";

interface MediaArtProps {
  kind?: ArtKind;
  label?: string;
}

export function MediaArt({ kind = "grid", label }: MediaArtProps) {
  const wrap = (children: React.ReactNode) => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0d0d0d",
      }}
    >
      <div
        className="blueprint"
        style={{
          opacity: 0.6,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {children}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );

  if (kind === "chart") {
    const bars = [38, 58, 44, 72, 60, 88, 100];
    return wrap(
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: "5%",
          height: "52%",
          width: "64%",
          zIndex: 2,
        }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: h + "%",
              borderRadius: 4,
              background:
                i === bars.length - 1 ? "var(--blue)" : "rgba(255,255,255,0.16)",
            }}
          />
        ))}
      </div>
    );
  }

  if (kind === "flow") {
    return wrap(
      <div style={{ position: "relative", width: "70%", height: "60%", zIndex: 2 }}>
        <svg
          viewBox="0 0 300 200"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path
            d="M60 50 C 140 50, 140 110, 220 110"
            stroke="rgba(124,123,255,0.6)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M90 165 C 160 165, 160 120, 220 120"
            stroke="rgba(124,123,255,0.6)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <rect x="20" y="32" width="72" height="40" rx="8" fill="#141414" stroke="rgba(255,255,255,0.16)" />
          <rect x="36" y="146" width="72" height="40" rx="8" fill="#141414" stroke="rgba(255,255,255,0.16)" />
          <rect
            x="216"
            y="92"
            width="72"
            height="40"
            rx="8"
            fill="rgba(26,23,222,0.2)"
            stroke="#1A17DE"
          />
        </svg>
      </div>
    );
  }

  if (kind === "pulse") {
    return wrap(
      <svg viewBox="0 0 300 140" style={{ width: "72%", zIndex: 2 }}>
        <polyline
          points="0,90 40,90 60,40 90,120 120,70 150,70 170,30 200,110 230,70 300,70"
          fill="none"
          stroke="#1A17DE"
          strokeWidth="2.5"
        />
        <line x1="0" y1="70" x2="300" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  if (kind === "rings") {
    return wrap(
      <svg viewBox="0 0 200 200" style={{ width: "46%", zIndex: 2 }}>
        {[80, 58, 36].map((r, i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke={i === 0 ? "#1A17DE" : "rgba(255,255,255,0.16)"}
            strokeWidth="2"
            strokeDasharray={i === 0 ? "0" : "5 7"}
          />
        ))}
        <circle cx="100" cy="100" r="10" fill="#1A17DE" />
      </svg>
    );
  }

  // grid (default)
  return wrap(
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 10,
        width: "56%",
        zIndex: 2,
      }}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          style={{
            aspectRatio: "1",
            borderRadius: 6,
            background: [0, 4, 8].includes(i) ? "var(--blue)" : "rgba(255,255,255,0.12)",
          }}
        />
      ))}
    </div>
  );
}
