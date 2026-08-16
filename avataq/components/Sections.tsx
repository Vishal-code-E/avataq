"use client";
import { useState, useEffect } from "react";
import { Receipt, CreditCard, BarChart3, FileCheck2, ShieldCheck, RefreshCw, ArrowRight, Quote } from "lucide-react";

/* ② Industries We Work With */
const INDUSTRIES = [
  "Retail & E-commerce",
  "SaaS & Tech",
  "Finance & Fintech",
  "Healthcare & Wellness",
  "Logistics & Operations",
  "Professional Services",
];

export function Logos() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="section section--panel" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="wrap reveal">
        <p className="eyebrow eyebrow--muted no-rule" style={{ justifyContent: "center", textAlign: "center", display: "flex", marginBottom: 40 }}>
          Industries We Work With
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((name, i) => (
            <span className="logo-slot" key={i}><span className="dot" />{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ② Problem Statement */
const PAINS = [
  "Manually sending invoices, reminders, and follow-up emails",
  "Switching between tools that don't talk to each other",
  "Answering the same customer questions over and over",
  "Doing tasks at 11 PM that software should have done at 9 AM",
  "Watching competitors move faster — and wondering how they do it",
];

export function ProblemStatement() {
  return (
    <section className="section section--panel">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "start" }} className="prob-grid">
          <div>
            <div className="sec-head reveal">
              <p className="eyebrow">The Problem</p>
              <h2 className="h2">You&apos;re Working Harder Than You Should Have To.</h2>
            </div>
            <p className="lead reveal" style={{ marginTop: 28 }}>
              Be honest with yourself for a moment. How much of your day looks like this:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
              {PAINS.map((p, i) => (
                <li key={i} className="reveal" style={{ transitionDelay: `${i * 0.06}s`, display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ width: 6, height: 6, background: "var(--blue)", borderRadius: 1, transform: "rotate(45deg)", flexShrink: 0, marginTop: 5 }} />
                  <span className="body" style={{ color: "var(--on-muted)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <blockquote style={{
              borderLeft: "3px solid var(--blue)",
              paddingLeft: 28,
              margin: "0 0 36px",
              fontWeight: 500,
              fontSize: "clamp(17px,1.8vw,24px)",
              lineHeight: 1.45,
              letterSpacing: "-0.02em",
              color: "var(--on)",
              fontStyle: "italic",
            }}>
              &ldquo;Every hour spent on repetitive manual work is an hour not spent growing your business.&rdquo;
            </blockquote>
            <p className="body" style={{ marginBottom: 16 }}>
              This isn&apos;t a personal failing. It&apos;s a systems problem. And it&apos;s costing you more than you realise — in revenue, in energy, and in the growth you&apos;re leaving on the table.
            </p>
            <p className="body">
              The businesses scaling fastest today aren&apos;t working harder. They&apos;ve simply built smarter systems. That&apos;s exactly what AVATAQ does for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ③ Services — curated highlights (6 of 9 financial functions). Full set lives on /services. */
const SERVICES = [
  { icon: Receipt, title: "Order-to-Cash & Accounts Receivable", desc: "Autonomous agents that manage invoicing, collections, and cash application to accelerate inflow and cut manual chasing." },
  { icon: CreditCard, title: "Procure-to-Pay & Accounts Payable", desc: "End-to-end automation of invoice capture, approval routing, and payment execution — no manual re-keying, no chasing approvers." },
  { icon: BarChart3, title: "Financial Close & Reporting", desc: "Agents that shorten the close cycle and turn raw ledger data into decision-ready P&L, balance sheet, and cash-flow reporting." },
  { icon: FileCheck2, title: "Tax & Regulatory Filing", desc: "Fine-tuned agents that keep global tax obligations accurate, current, and filed on time — across every jurisdiction you operate in." },
  { icon: ShieldCheck, title: "Audit, Fraud & Risk Mitigation", desc: "Continuous, 100%-coverage auditing that replaces monthly sampling with always-on oversight over every transaction." },
  { icon: RefreshCw, title: "Billing, Subscriptions & Credit Control", desc: "Recurring revenue and collections automation built for B2B SaaS and subscription models, from proration to revenue recognition." },
];

/* LEGACY — pre-pivot, all-industries services. Not rendered. Parked for later. */
export const LEGACY_HOME_SERVICES = [
  { title: "AI Agents" },
  { title: "Workflow Automation" },
  { title: "Data & Reporting Automation" },
  { title: "AI-Powered Customer Engagement" },
  { title: "Custom AI Integrations" },
];

export function Services({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="eyebrow">What we automate</p>
          <h2 className="h2">Full-Stack Financial Automation, <em>Built Around Your Books</em>.</h2>
          <p className="lead">AVATAQ builds autonomous agents that run your finance and compliance operations end-to-end — from invoicing to audit-ready reporting. Here&apos;s where we start.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }} className="svc-grid">
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
        <div className="reveal" style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <a className="txtlink" href="#" style={{ fontSize: 15 }}
            onClick={(e) => { e.preventDefault(); onNav("Services"); }}>
            View All Financial Services <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ④ Value Prop */
const STATS = [
  { num: "4", suffix: "×", label: "Faster delivery", desc: "Shared kernel means we ship in weeks, not quarters." },
  { num: "5", suffix: "+", label: "Systems shipped", desc: "Across fintech, commerce, and operations teams." },
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

/* LEGACY — pre-pivot, all-industries homepage case studies. Not rendered. Parked for later. */
export const LEGACY_HOME_CASES = [
  { slug: "local-services-lead-agent", tag: "Local Services", title: "AI agent eliminated every missed after-hours lead for a home services company", metric: "40% more booked jobs · 12 hrs/week reclaimed" },
  { slug: "ecommerce-order-communication", tag: "E-commerce", title: "E-commerce brand automated order-to-delivery communication end-to-end", metric: "3 hrs/day saved · +22% customer satisfaction" },
];

const CASES = [
  { anchor: "ar-order-to-cash", tag: "Order-to-Cash & AR", title: "How a 40-person distributor stopped chasing its own money", metric: "60–80% less manual invoicing & collections effort", kind: "flow" },
  { anchor: "bank-reconciliation", tag: "Close & Reconciliation", title: "Reconciling 20+ bank accounts in minutes, not weeks", metric: "≈85% of reconciliation time saved", kind: "chart" },
];

export function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Real Finance Teams. <em>Real Results.</em></h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {CASES.map((c) => (
            <a className="case reveal" key={c.title} href={`/case-studies#${c.anchor}`}>
              <CaseMedia kind={c.kind} />
              <div className="case-body">
                <span className="tag">{c.tag}</span>
                <h3 className="h2" style={{ fontSize: "clamp(22px,2.2vw,30px)" }}>{c.title}</h3>
                <p className="lead" style={{ color: "var(--blue)", fontWeight: 600, fontSize: 14 }}>{c.metric}</p>
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
  { quote: (<>I was skeptical that AI could actually help a business like mine. Within three weeks of working with AVATAQ, I had systems running that I didn&apos;t even know were possible. My team is happier, my customers are getting faster responses, and <em>I&apos;m sleeping better.</em></>), name: "Priya R.", role: "Founder — Retail Brand" },
  { quote: (<>AVATAQ didn&apos;t just automate our workflows. They made us look at how we were running the business differently. <em>The ROI was real and fast</em> — I wish we&apos;d done this two years ago.</>), name: "Marcus T.", role: "Director — Marketing Agency" },
  { quote: (<>I kept thinking automation was for big companies with tech teams. AVATAQ showed me it&apos;s for businesses <em>exactly like mine.</em> The whole process was smooth, and they were genuinely invested in our success.</>), name: "Sunita M.", role: "Owner — Healthcare Services" },
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
            <span style={{ fontWeight: 600, fontSize: 14 }}>{q.name}</span>
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

/* ⑦ Tech Stack */
const PLATFORMS = [
  { name: "n8n", desc: "open-source workflow automation with full data privacy" },
  { name: "Make (Integromat)", desc: "visual automation connecting 1,500+ apps" },
  { name: "Zapier", desc: "rapid deployment for common business workflows" },
];
const AI_TOOLS = [
  { name: "OpenAI (GPT-4o)", desc: "state-of-the-art language understanding and generation" },
  { name: "Anthropic Claude", desc: "nuanced, reliable AI for complex reasoning tasks" },
  { name: "Custom fine-tuned models", desc: "when your business needs something unique" },
];
const INTEGRATIONS = ["Shopify", "WooCommerce", "HubSpot", "Salesforce", "Notion", "Airtable", "Google Workspace", "Slack", "WhatsApp Business", "Typeform", "Stripe", "QuickBooks"];

function ToolRow({ name, desc, last }: { name: string; desc: string; last?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: last ? "none" : "1px solid var(--line)" }}>
      <span style={{ width: 5, height: 5, background: "var(--blue)", borderRadius: 1, transform: "rotate(45deg)", flexShrink: 0, marginTop: 7 }} />
      <div>
        <div style={{ fontWeight: 600, fontSize: 13, color: "var(--on)", marginBottom: 3 }}>{name}</div>
        <div className="body" style={{ fontSize: 12 }}>{desc}</div>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="section section--panel">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Under the hood</p>
          <h2 className="h2">Built on Tools You Can <em>Trust</em>.</h2>
          <p className="lead">We don&apos;t build our own proprietary black box. We use the industry&apos;s most reliable, battle-tested automation and AI platforms — and we make them work together brilliantly for your business.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="tech-stack-grid">
          <div className="card reveal">
            <p className="eyebrow" style={{ marginBottom: 20 }}>Automation Platforms</p>
            {PLATFORMS.map((t, i) => <ToolRow key={t.name} name={t.name} desc={t.desc} last={i === PLATFORMS.length - 1} />)}
          </div>
          <div className="card reveal" style={{ transitionDelay: "0.08s" }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>AI &amp; Intelligence</p>
            {AI_TOOLS.map((t, i) => <ToolRow key={t.name} name={t.name} desc={t.desc} last={i === AI_TOOLS.length - 1} />)}
          </div>
          <div className="card reveal" style={{ transitionDelay: "0.16s" }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Integration Ecosystem</p>
            <p className="body" style={{ marginBottom: 20 }}>We connect seamlessly with:</p>
            <div className="tech-row">
              {INTEGRATIONS.map((t) => (
                <span className="tech-pill" key={t}>
                  <span style={{ width: 5, height: 5, background: "var(--blue)", borderRadius: 1, transform: "rotate(45deg)", display: "inline-block" }} />
                  {t}
                </span>
              ))}
            </div>
            <p className="body" style={{ marginTop: 20, fontStyle: "italic", color: "var(--on-faint)" }}>and hundreds more.</p>
          </div>
        </div>
        <p className="body reveal" style={{ marginTop: 48, textAlign: "center", fontStyle: "italic", color: "var(--on-faint)", maxWidth: 580, margin: "48px auto 0" }}>
          You don&apos;t need to understand any of this. You just need to know it works — and that we&apos;ve already made it work for businesses like yours.
        </p>
      </div>
    </section>
  );
}

/* ⑧ Final CTA */
export function FinalCTA({ onNav }: { onNav: (p: string) => void }) {
  return (
    <section className="final-cta section" style={{ padding: "120px 0" }}>
      <div className="wrap reveal" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 880 }}>
        <h2 className="h2" style={{ color: "#fff" }}>Your Business Deserves to Run Like a <em>Well-Oiled Machine</em>.</h2>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.55, marginTop: 24 }}>
          You&apos;ve spent years building something worth automating. Now it&apos;s time to make it work as hard as you do — even when you&apos;re not in the room.
        </p>
        <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn--on-blue" onClick={() => onNav("Contact")}>Book a Free Audit</button>
          <button className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,0.5)" }} onClick={() => onNav("Case Studies")}>
            View Our Work <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}