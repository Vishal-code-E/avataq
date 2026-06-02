"use client";
import { useState, useEffect } from "react";
import { Box, Workflow, BarChart3, Rocket, ArrowRight, Quote } from "lucide-react";

/* ② Logos marquee */
export function Logos() {
  const names = ["Northwind", "Vertex Labs", "Lumen", "Cobalt", "Atlas Foods", "Hexa", "Meridian"];
  const row = [...names, ...names];
  return (
    <section className="section section--panel" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="wrap reveal">
        <p className="eyebrow eyebrow--muted no-rule" style={{ justifyContent: "center", textAlign: "center", display: "flex", marginBottom: 40 }}>
          Trusted by teams shipping AI-native systems
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((n, i) => (
            <span className="logo-slot" key={i}><span className="dot" />{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ③ Services */
const SERVICES = [
  { icon: Box, title: "AI Systems", desc: "Production agents with a shared kernel — identity, memory, and policy." },
  { icon: Workflow, title: "Automation", desc: "Wire every workflow into one observable graph that runs itself." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Pipelines and dashboards that turn raw signal into decisions." },
  { icon: Rocket, title: "Growth Engineering", desc: "Instrumented funnels and experiments that compound over time." },
];

export function Services({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">What we do</p>
          <h2 className="h2">Capabilities, engineered as <em>one system</em>.</h2>
          <p className="lead">Four disciplines that share a kernel — so what we build for you compounds instead of fragmenting.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 56 }} className="svc-grid">
          {SERVICES.map((s, i) => (
            <div className="card card--svc reveal" key={s.title} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="ico-tile"><s.icon size={24} /></div>
              <h3 className="h3" style={{ marginTop: 24 }}>{s.title}</h3>
              <p className="body" style={{ marginTop: 12 }}>{s.desc}</p>
              <a className="txtlink" href="#" style={{ marginTop: 24 }}
                onClick={(e) => { e.preventDefault(); onNav("Services"); }}>
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ④ Value Prop */
const STATS = [
  { num: "4", suffix: "×", label: "Faster delivery", desc: "Shared kernel means we ship in weeks, not quarters." },
  { num: "100", suffix: "+", label: "Systems shipped", desc: "Across fintech, commerce, and operations teams." },
  { num: "99.9", suffix: "%", label: "Pipeline uptime", desc: "Observability built into every workflow we run." },
];

export function ValueProp() {
  return (
    <section className="section section--panel">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 64 }}>
          <p className="eyebrow">Why AVATAQ</p>
          <h2 className="h2">Built like infrastructure, <em>measured like a product</em>.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="stat-grid">
          {STATS.map((s, i) => (
            <div className="reveal" key={s.label} style={{
              transitionDelay: `${i * 0.08}s`,
              paddingTop: 32, borderTop: "1px solid var(--line-strong)",
            }}>
              <div className="stat-num">{s.num}<span className="suffix">{s.suffix}</span></div>
              <h3 className="h3" style={{ marginTop: 20 }}>{s.label}</h3>
              <p className="body" style={{ marginTop: 12, maxWidth: 320 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ⑤ Case Studies */
function CaseMedia({ kind }: { kind: string }) {
  if (kind === "chart") {
    const bars = [38, 60, 46, 78, 92, 70, 100];
    return (
      <div className="case-media">
        <div className="blueprint" style={{ opacity: 0.6 }} />
        <div style={{ position: "relative", display: "flex", alignItems: "flex-end", gap: 14, height: 180, zIndex: 2 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              width: 30, height: `${h}%`,
              background: i === bars.length - 1 ? "var(--blue)" : "rgba(255,255,255,0.16)",
              borderRadius: 4,
            }} />
          ))}
        </div>
        <span style={{ position: "absolute", top: 24, left: 24 }} className="tag">Revenue · QoQ</span>
      </div>
    );
  }
  const dot = (l: number, t: number, accent?: boolean) => (
    <span style={{
      position: "absolute", left: l, top: t, width: 64, height: 40, borderRadius: 8,
      border: `1px solid ${accent ? "var(--blue)" : "var(--line-strong)"}`,
      background: accent ? "rgba(26,23,222,0.18)" : "#141414",
    }} />
  );
  return (
    <div className="case-media">
      <div className="blueprint" style={{ opacity: 0.6 }} />
      <div style={{ position: "relative", width: 280, height: 200, zIndex: 2 }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M52 40 C 130 40, 130 100, 200 100" stroke="rgba(124,123,255,0.6)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
          <path d="M84 160 C 150 160, 150 110, 200 110" stroke="rgba(124,123,255,0.6)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
        </svg>
        {dot(0, 20)}
        {dot(20, 150)}
        {dot(200, 80, true)}
      </div>
      <span style={{ position: "absolute", top: 24, left: 24 }} className="tag">Agent graph</span>
    </div>
  );
}

const CASES = [
  { tag: "Fintech · Ops", title: "Cobalt cut manual review by 82% with an agent graph", metric: "82% less manual review · 6-week build", kind: "flow" },
  { tag: "Commerce", title: "Northwind turned raw reviews into a defect radar", metric: "4× faster defect triage · live dashboards", kind: "chart" },
];

export function CaseStudies({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="section" id="case-studies">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Systems in production, <em>measured in outcomes</em>.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {CASES.map((c) => (
            <a className="case reveal" key={c.title} href="#"
              onClick={(e) => { e.preventDefault(); onNav("Case Studies"); }}>
              <CaseMedia kind={c.kind} />
              <div className="case-body">
                <span className="tag">{c.tag}</span>
                <h3 className="h2" style={{ fontSize: "clamp(26px,2.6vw,34px)" }}>{c.title}</h3>
                <p className="lead" style={{ color: "var(--blue)", fontWeight: 600, fontSize: 16 }}>{c.metric}</p>
                <span className="txtlink" style={{ marginTop: 8 }}>
                  Read case study <ArrowRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ⑥ Testimonials */
const QUOTES = [
  { quote: (<>AVATAQ didn&apos;t hand us scripts — they handed us a <em>system</em>. Six weeks in, our ops team stopped firefighting.</>), name: "Dana Okafor", role: "VP Operations, Cobalt" },
  { quote: (<>The graph they built shows us <em>every workflow</em> in one place. We finally trust our automation.</>), name: "Marc Reyes", role: "CTO, Northwind" },
  { quote: (<>They think like infrastructure engineers and ship like a product team. <em>Rare combination.</em></>), name: "Priya Anand", role: "Head of Data, Lumen" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const q = QUOTES[idx];
  return (
    <section className="section section--panel">
      <div className="wrap">
        <div className="sec-head center reveal" style={{ marginBottom: 56 }}>
          <p className="eyebrow no-rule">What clients say</p>
        </div>
        <div className="reveal" style={{ maxWidth: 920, margin: "0 auto", textAlign: "center", minHeight: 200 }}>
          <Quote size={40} style={{ color: "var(--blue)", marginBottom: 24 }} />
          <blockquote className="quote" style={{ margin: 0 }} key={idx}>{q.quote}</blockquote>
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: 16 }}>{q.name}</span>
            <span className="tag">{q.role}</span>
          </div>
        </div>
        <div className="t-dots reveal" style={{ justifyContent: "center", marginTop: 48 }}>
          {QUOTES.map((_, k) => (
            <span key={k} className={`t-dot${k === idx ? " active" : ""}`}
              onClick={() => setIdx(k)}
              style={{ width: k === idx ? 22 : 8, borderRadius: k === idx ? 4 : 2 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ⑦ Final CTA */
export function FinalCTA({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="final-cta section" style={{ padding: "120px 0" }}>
      <div className="wrap reveal" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 880 }}>
        <h2 className="h2" style={{ color: "#fff" }}>Ready to run your business on a system that runs itself?</h2>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(17px,1.5vw,20px)", lineHeight: 1.55, marginTop: 24 }}>
          Book a demo and we&apos;ll map your first agent graph in 30 minutes.
        </p>
        <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn--on-blue" onClick={() => onNav("Contact")}>Book a Demo</button>
          <button className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,0.5)" }} onClick={() => onNav("Case Studies")}>
            View Our Work <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
