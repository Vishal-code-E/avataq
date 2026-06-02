"use client";
import { useState, useEffect } from "react";
import {
  Box, Workflow, BarChart3, Rocket,
  Check, ArrowRight,
} from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";

const SERVICES = [
  {
    id: "ai-systems",
    Icon: Box,
    name: "AI Systems",
    desc: "Production-grade agents that share a kernel — identity, memory, policy, and observability — so every model you ship inherits the same guardrails instead of reinventing them.",
    deliverables: [
      "Agent architecture & kernel design",
      "Retrieval and memory layers",
      "Evaluation & guardrail harness",
      "Human-in-the-loop review flows",
      "Cost & latency budgeting",
      "Production monitoring",
    ],
    tech: ["Python", "TypeScript", "Postgres", "Vector DB", "LLM APIs"],
  },
  {
    id: "automation",
    Icon: Workflow,
    name: "Automation",
    desc: "We map every workflow your business runs on into one observable graph, then automate the paths that drain your team — with full traceability on each run.",
    deliverables: [
      "Workflow discovery & mapping",
      "Event-driven orchestration",
      "Integration & API plumbing",
      "Failure handling & retries",
      "Audit logging",
      "Run-level observability",
    ],
    tech: ["Temporal", "Webhooks", "Queues", "REST / GraphQL"],
  },
  {
    id: "data",
    Icon: BarChart3,
    name: "Data & Analytics",
    desc: "Pipelines and dashboards that turn raw signal into decisions — modeled cleanly so the same numbers power your agents, your reporting, and your team.",
    deliverables: [
      "Pipeline architecture",
      "Warehouse & semantic modeling",
      "Real-time dashboards",
      "Data quality monitoring",
      "Self-serve metrics",
      "Governance & access",
    ],
    tech: ["dbt", "Snowflake", "Airflow", "Metabase"],
  },
  {
    id: "growth",
    Icon: Rocket,
    name: "Growth Engineering",
    desc: "Instrumented funnels and experiment systems that compound — every test feeds a shared model of what moves your business, not a one-off slide.",
    deliverables: [
      "Event taxonomy & tracking",
      "Experimentation platform",
      "Funnel & retention analysis",
      "Lifecycle automation",
      "Attribution modeling",
      "Growth dashboards",
    ],
    tech: ["Segment", "PostHog", "Feature flags", "A/B testing"],
  },
];

const PROCESS = [
  { step: "01", name: "Discover", desc: "We map your workflows, data, and goals into a single system diagram." },
  { step: "02", name: "Design", desc: "We architect the kernel and the agent graph, with budgets and guardrails up front." },
  { step: "03", name: "Build", desc: "We ship in tight increments — observable from the first run, not the last." },
  { step: "04", name: "Scale", desc: "We harden, monitor, and hand over a system your team can extend with confidence." },
];

function ServiceBlock({ s }: { s: typeof SERVICES[0] }) {
  return (
    <div className="svc-block reveal" id={s.id}>
      <div className="ico-tile ico-tile--lg">
        <s.Icon size={28} strokeWidth={1.8} />
      </div>
      <h2 className="h2" style={{ marginTop: 24, fontSize: "clamp(28px,3vw,40px)" }}>{s.name}</h2>
      <p className="lead" style={{ marginTop: 16, maxWidth: 720 }}>{s.desc}</p>
      <p className="eyebrow" style={{ marginTop: 32 }}>Key deliverables</p>
      <ul className="checklist">
        {s.deliverables.map((d) => (
          <li key={d}>
            <span className="ck"><Check size={18} strokeWidth={2.5} /></span>
            {d}
          </li>
        ))}
      </ul>
      <div className="tech-row">
        {s.tech.map((t) => (
          <span className="tech-pill" key={t}>
            <span style={{ width: 6, height: 6, background: "var(--blue)", borderRadius: 1, transform: "rotate(45deg)", display: "inline-block" }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState(SERVICES[0].id);

  useEffect(() => {
    const onScroll = () => {
      let cur = SERVICES[0].id;
      for (const s of SERVICES) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 200) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };

  return (
    <PageLayout>
      <PageHero
        breadcrumb={["Home", "Services"]}
        eyebrow="Services"
        title={<>Our <em>Services</em></>}
        sub="Four disciplines, engineered as one system. We don't sell point tools — we build the connected infrastructure your business runs on."
      />

      <section className="section">
        <div className="wrap">
          <div className="svc-layout">
            <aside className="svc-side">
              {SERVICES.map((s, i) => (
                <a
                  key={s.id}
                  className={active === s.id ? "active" : ""}
                  onClick={() => go(s.id)}
                >
                  <span className="num">0{i + 1}</span>
                  {s.name}
                </a>
              ))}
            </aside>
            <div>
              {SERVICES.map((s) => <ServiceBlock key={s.id} s={s} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">How we work</p>
            <h2 className="h2">A process built like <em>infrastructure</em>.</h2>
            <p className="lead">Every engagement runs on the same four steps — predictable, observable, and handed over clean.</p>
          </div>
          <div className="timeline">
            {PROCESS.map((p, i) => (
              <div className="step reveal" key={p.step} style={{ transitionDelay: i * 0.08 + "s" }}>
                <span className="step-num">{p.step}</span>
                <h3 className="h3">{p.name}</h3>
                <p className="body" style={{ marginTop: 12 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-band reveal">
          <p className="eyebrow no-rule" style={{ justifyContent: "center", display: "flex" }}>Not sure which fits?</p>
          <h2 className="h2" style={{ marginTop: 20 }}>Tell us the problem. We&apos;ll scope the <em>system</em>.</h2>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href="/contact">Book a free consultation</a>
            <a className="btn btn--ghost" href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              View Our Work <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
