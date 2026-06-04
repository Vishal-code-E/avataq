"use client";
import { ArrowRight, LayoutGrid, Workflow, Database, LineChart, Settings, Clock, Inbox, Sparkles } from "lucide-react";
import { SquareMosaic, HERO_MOSAIC_PATTERN } from "./SquareMosaic";

function ProductCanvas({ compact }: { compact?: boolean }) {
  const railIcons = [LayoutGrid, Workflow, Database, LineChart, Settings];

  const node = (
    label: string,
    sub: string,
    Icon: React.ElementType,
    pos: React.CSSProperties,
    accent?: boolean,
  ) => (
    <div
      className="canvas-node"
      style={{
        position: "absolute",
        ...pos,
        borderColor: accent ? "var(--blue)" : "var(--line)",
        background: accent ? "#16162e" : "#141414",
      }}
    >
      <span style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        background: "rgba(26,23,222,0.18)", color: "#8987ff",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={16} />
      </span>
      <div style={{ lineHeight: 1.3 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: "#fff" }}>{label}</div>
        <div className="tag" style={{ fontSize: 10 }}>{sub}</div>
      </div>
    </div>
  );

  return (
    <div className="canvas" style={{ width: "100%", maxWidth: 1120, margin: "0 auto" }}>
      <div className="canvas-top">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/avataq-mark-white.webp" alt="" style={{ height: 18 }} />
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.03em" }}>AVATAQ</span>
          <span className="canvas-dot" style={{ marginLeft: 8 }}>Customer defect analytics</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="canvas-dot" style={{ border: "1px solid var(--line)", borderRadius: 6, padding: "4px 8px" }}>100%</span>
          <span style={{ fontWeight: 600, fontSize: 12, color: "#fff", background: "var(--blue)", borderRadius: 6, padding: "6px 14px" }}>Share</span>
        </div>
      </div>
      <div style={{ display: "flex", height: compact ? 300 : 380 }}>
        <div style={{ width: 56, borderRight: "1px solid var(--line)", display: "flex",
          flexDirection: "column", alignItems: "center", gap: 14, padding: "16px 0" }}>
          {railIcons.map((Icon, i) => (
            <span key={i} style={{
              width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", color: i === 1 ? "#fff" : "rgba(255,255,255,0.45)",
              background: i === 1 ? "var(--blue)" : "transparent",
            }}><Icon size={18} /></span>
          ))}
        </div>
        <div style={{ flex: 1, position: "relative", overflow: "hidden",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path d="M170 86 C 270 86, 270 170, 360 170" stroke="rgba(124,123,255,0.55)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            <path d="M500 170 C 590 170, 590 86, 680 86" stroke="rgba(124,123,255,0.55)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            <path d="M430 204 L 430 268" stroke="rgba(124,123,255,0.55)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
          </svg>
          {node("Daily Trigger", "09:00 AM", Clock, { left: 48, top: 68 })}
          {node("Python", "PII redaction", Inbox, { left: 356, top: 148 })}
          {node("Ingest", "App reviews", Inbox, { left: 660, top: 68 })}
          {node("AI Agent", "Defect classifier", Sparkles, { left: 332, top: 268 }, true)}
        </div>
      </div>
    </div>
  );
}

function HeroCTAs({ onNav }: { onNav: (p: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <button className="btn btn--primary" onClick={() => onNav("Contact")}>Book a Free Strategy Call</button>
        <button className="btn btn--ghost" onClick={() => onNav("Case Studies")}>
          Get a Free Automation Audit <ArrowRight size={18} />
        </button>
      </div>
      <p style={{ margin: 0, fontSize: 13, color: "var(--on-faint)", fontStyle: "italic", letterSpacing: "0.01em" }}>
        No tech background needed. No long onboarding. Just results.
      </p>
    </div>
  );
}

const HERO_COPY = {
  eyebrow: "AI-native systems studio",
  h1a: (<>Your Business Runs on Hard Work. Imagine if It Also Ran on <em>Autopilot</em>.</>),
  h1b: (<>Your Business Runs on Hard Work.<br />Imagine if It Also Ran on <em>Autopilot</em>.</>),
  sub: "You started your business to build something great — not to spend your days chasing follow-ups, copying data between spreadsheets, or manually handling tasks that should have been automated years ago. AVATAQ brings AI-powered automation to businesses like yours, so you can focus on what you actually love doing.",
};

function HeroCanvas({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="hero" style={{ paddingTop: 150 }}>
      <SquareMosaic pattern={HERO_MOSAIC_PATTERN} position="top-right" squareSize={120} centerY={true} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1080, paddingTop: 40 }}>
          <p className="eyebrow reveal">{HERO_COPY.eyebrow}</p>
          <h1 className="h1 reveal" style={{ marginTop: 24 }}>{HERO_COPY.h1a}</h1>
          <p className="lead reveal" style={{ marginTop: 28, maxWidth: 820 }}>{HERO_COPY.sub}</p>
          <div className="reveal" style={{ marginTop: 40 }}><HeroCTAs onNav={onNav} /></div>
        </div>
      </div>
      <div style={{ position: "relative", marginTop: 88, paddingBottom: 0 }}>
        <div className="hero-glow" style={{ left: "50%", transform: "translateX(-50%)", bottom: -40, width: "88%", height: 300 }} />
        <div className="wrap reveal" style={{ position: "relative", zIndex: 2 }}><ProductCanvas /></div>
      </div>
    </section>
  );
}

function HeroStatement({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="hero" style={{ paddingTop: 190, paddingBottom: 40, textAlign: "center" }}>
      <div className="blueprint" />
      <SquareMosaic pattern={HERO_MOSAIC_PATTERN} position="top-right" squareSize={120} centerY={true} opacity={0.5} />
      <div className="hero-glow" style={{ left: "50%", transform: "translateX(-50%)", top: 120, width: 640, height: 360, opacity: 0.6 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <p className="eyebrow no-rule reveal" style={{ justifyContent: "center" }}>{HERO_COPY.eyebrow}</p>
        <h1 className="h1 reveal" style={{ marginTop: 28, maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
          {HERO_COPY.h1b}
        </h1>
        <p className="lead reveal" style={{ marginTop: 28, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>{HERO_COPY.sub}</p>
        <div className="reveal" style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
          <HeroCTAs onNav={onNav} />
        </div>
      </div>
      <div className="wrap reveal" style={{ position: "relative", zIndex: 2, marginTop: 80 }}>
        <ProductCanvas compact />
      </div>
    </section>
  );
}

function HeroSplit({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="hero" style={{ paddingTop: 150, paddingBottom: 40 }}>
      <SquareMosaic pattern={HERO_MOSAIC_PATTERN} position="top-right" squareSize={120} centerY={true} opacity={0.55} />
      <div className="wrap">
        <div className="hero-split-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1.02fr", gap: 56, alignItems: "center",
        }}>
          <div style={{ position: "relative", zIndex: 2 }}>
            <p className="eyebrow reveal">{HERO_COPY.eyebrow}</p>
            <h1 className="h1 reveal" style={{ marginTop: 24, fontSize: "clamp(36px,5vw,62px)" }}>{HERO_COPY.h1b}</h1>
            <p className="lead reveal" style={{ marginTop: 26, maxWidth: 520 }}>{HERO_COPY.sub}</p>
            <div className="reveal" style={{ marginTop: 36 }}><HeroCTAs onNav={onNav} /></div>
          </div>
          <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-glow" style={{ right: -40, top: 20, width: "90%", height: 320 }} />
            <div style={{ position: "relative", zIndex: 2 }}><ProductCanvas compact /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface HeroProps {
  variant?: "canvas" | "statement" | "split";
  onNav: (p: string) => void;
}

export function Hero({ variant = "canvas", onNav }: HeroProps) {
  if (variant === "statement") return <HeroStatement onNav={onNav} />;
  if (variant === "split") return <HeroSplit onNav={onNav} />;
  return <HeroCanvas onNav={onNav} />;
}
