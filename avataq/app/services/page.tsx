"use client";
import { useState, useEffect } from "react";
import {
  Box, Workflow, BarChart3, Rocket, Plug2,
  Check, ArrowRight,
} from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";

const SERVICES = [
  {
    id: "ai-systems",
    Icon: Box,
    name: "AI Agents",
    desc: "Meet your new always-on team member. Our AI agents handle customer queries, qualify leads, process requests, and take action — all without needing a coffee break or a salary increase.",
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
    name: "Workflow Automation",
    desc: "Stop duct-taping your tools together. We build end-to-end automated workflows that connect your CRM, your inbox, your calendar, and your operations into one seamless system that just works.",
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
    name: "Data & Reporting Automation",
    desc: "Stop spending your Mondays building reports manually. We automate your data collection, transformation, and reporting so you walk in each morning with the numbers you need, ready and waiting.",
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
    name: "AI-Powered Customer Engagement",
    desc: "Respond to every customer instantly — at 2 AM on a Sunday, if that's when they reach out. Personalised, intelligent, and always on-brand, without you being on call.",
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
  {
    id: "custom-integrations",
    Icon: Plug2,
    name: "Custom AI Integrations",
    desc: "Already using tools you love? Good. We build custom integrations that make them smarter — connecting platforms like Shopify, HubSpot, Notion, Slack, Gmail, and dozens more into a unified, automated system.",
    deliverables: [
      "Integration architecture & mapping",
      "Webhook & event orchestration",
      "Data transformation pipelines",
      "Authentication & security",
      "Error handling & retries",
      "Integration monitoring",
    ],
    tech: ["Shopify", "HubSpot", "Notion", "Slack", "Gmail", "REST APIs"],
  },
];

const PROCESS = [
  { step: "01", name: "Discover", desc: "We start with a deep-dive into your business — your workflows, your bottlenecks, your goals. No generic templates. We map exactly where automation creates the most leverage for you specifically." },
  { step: "02", name: "Design", desc: "We architect the kernel and the agent graph, with budgets and guardrails up front." },
  { step: "03", name: "Build", desc: "Our team gets to work. Using tools like n8n, Make, and custom AI agents built on OpenAI and other leading models, we build your automation system with precision. You review. We refine. Until it's exactly right." },
  { step: "04", name: "Deploy", desc: "We go live. From day one, your business starts running leaner, faster, and smarter. We monitor the system, fix anything that needs fixing, and make sure you're confident using everything we've built." },
];

function ServiceBlock({ s }: { s: typeof SERVICES[0] }) {
  return (
    <div className="svc-block reveal" id={s.id}>
      <div className="ico-tile ico-tile--lg">
        <s.Icon size={28} strokeWidth={1.8} />
      </div>
      <h2 className="h2" style={{ marginTop: 24, fontSize: "clamp(24px,2.6vw,36px)" }}>{s.name}</h2>
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
            <h2 className="h2">Simple by Design. <em>Powerful in Practice.</em></h2>
            <p className="lead">Most business owners expect automation to be complicated. We&apos;ve designed the entire experience to be the opposite.</p>
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
            <a className="btn btn--primary" href="/contact">Start Your Discovery Session</a>
            <a className="btn btn--ghost" href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              View Our Work <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
