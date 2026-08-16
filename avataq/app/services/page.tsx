"use client";
import { useState, useEffect } from "react";
import {
  Receipt, CreditCard, Wallet, Users, BarChart3, FileCheck2,
  ShieldCheck, Handshake, RefreshCw, Check, ArrowRight,
} from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";

/**
 * Financial Services — live service catalog.
 * Sourced from the AVATAQ Financial Services catalog (9 sub-verticals).
 * Ids marked `featured: true` are the curated set surfaced on the homepage
 * and in the Navbar mega-dropdown; all 9 render in full here.
 */
const SERVICES = [
  {
    id: "ar-o2c",
    Icon: Receipt,
    name: "Order-to-Cash & Accounts Receivable",
    featured: true,
    desc: "Autonomous agents that manage invoicing, collections, and cash application to accelerate inflow and cut manual chasing.",
    deliverables: [
      "Agentic invoicing — sync, validate, e-invoice, track delivery & payment",
      "Collections agents with behavior-based reminder cadences",
      "Cash application & reconciliation against bank feeds",
      "AR analytics copilot — DSO, aging, and cash forecasting",
    ],
    tech: ["NetSuite", "QuickBooks", "LLM Agents", "API Integration"],
  },
  {
    id: "ap-p2p",
    Icon: CreditCard,
    name: "Procure-to-Pay & Accounts Payable",
    featured: true,
    desc: "End-to-end automation of invoice capture, approval routing, and payment execution.",
    deliverables: [
      "Touchless invoice processing from PDFs & emails",
      "PO and goods-receipt matching",
      "Rules-based approval routing & approver escalation",
      "Payment orchestration with budget checks & ERP sync",
    ],
    tech: ["SAP", "Tally", "RPA", "ERP Sync"],
  },
  {
    id: "expense-spend",
    Icon: Wallet,
    name: "Spend & Expense Management",
    featured: false,
    desc: "Agent-driven filing, policy enforcement, and reconciliation for corporate spend.",
    deliverables: [
      "Employee expense filing agents from receipts & emails",
      "Policy compliance checks against limits & approval matrices",
      "Card & wallet reconciliation to the general ledger",
      "Real-time spend dashboards by department",
    ],
    tech: ["Zoho Expense", "Stripe", "Policy Engine", "Dashboards"],
  },
  {
    id: "payroll-hr",
    Icon: Users,
    name: "Payroll, Benefits & HR-Linked Finance",
    featured: false,
    desc: "Governed AI agents that resolve payroll exceptions across HR, banking, and ERP systems.",
    deliverables: [
      "Payroll exception detection between HR, timesheets & payroll runs",
      "Benefits & deductions workflows with GL posting",
      "Payslip generation & statutory filing reminders",
    ],
    tech: ["Zoho Payroll", "ERP Sync", "Compliance Rules"],
  },
  {
    id: "close-reporting",
    Icon: BarChart3,
    name: "Financial Close, Reconciliation & Reporting",
    featured: true,
    desc: "Agents that shorten the close cycle and turn raw ledger data into decision-ready reporting.",
    deliverables: [
      "Multi-ledger self-reconciliation across bank, card & ERP feeds",
      "Period close orchestration with checklists & owner reminders",
      "Automated P&L, balance sheet & cash-flow reporting",
      "Depreciation tracking & predictive cash-flow analytics",
    ],
    tech: ["NetSuite", "Power BI", "FP&A Copilot", "GAAP / IFRS Rules"],
  },
  {
    id: "tax-regulatory",
    Icon: FileCheck2,
    name: "Tax & Regulatory Filing Automation",
    featured: true,
    desc: "Fine-tuned LLM agents that keep global tax obligations accurate, current, and filed on time.",
    deliverables: [
      "Autonomous tax classification by jurisdiction",
      "Real-time tax liability forecasting from live revenue & expense",
      "Automated e-filing pipelines to government portals",
      "Cross-border VAT, GST & tariff compliance mapping",
    ],
    tech: ["Fine-Tuned LLMs", "Secure API Filing", "GST / VAT Engine"],
  },
  {
    id: "audit-fraud-risk",
    Icon: ShieldCheck,
    name: "Audit, Fraud & Risk Mitigation",
    featured: true,
    desc: "Continuous, 100%-coverage auditing that replaces monthly sampling with always-on oversight.",
    deliverables: [
      "Continuous transaction auditing in real time",
      "Anomalous spend & duplicate-payment detection",
      "AI-generated audit trails for external review",
      "KYC / KYB compliance screening before onboarding",
    ],
    tech: ["Sanctions / KYC APIs", "Anomaly Detection", "Audit Logging"],
  },
  {
    id: "procurement-vendor",
    Icon: Handshake,
    name: "Procurement & Vendor Onboarding",
    featured: false,
    desc: "Agents that accelerate vendor evaluation, onboarding, and contract lifecycle management.",
    deliverables: [
      "Vendor onboarding with document & compliance checks",
      "RFP / RFQ analysis and shortlist scoring",
      "Contract lifecycle & e-sign workflows with renewal reminders",
    ],
    tech: ["DocuSign", "ERP Sync", "Vendor Risk Scoring"],
  },
  {
    id: "billing-subscriptions",
    Icon: RefreshCw,
    name: "Billing, Subscriptions & Credit Control",
    featured: true,
    desc: "Recurring revenue and collections automation built for B2B SaaS and subscription models.",
    deliverables: [
      "Subscription billing — plan changes, renewals & proration",
      "Multi-provider invoicing automation",
      "ASC 606 revenue recognition workflows",
      "Risk-based credit control & collections journeys",
    ],
    tech: ["Stripe", "Chargebee", "ASC 606 Engine"],
  },
];

/**
 * LEGACY — the pre-pivot, all-industries service lineup.
 * Not rendered anywhere. Parked here so it's a one-line swap to bring
 * back when AVATAQ expands beyond financial services again.
 */
export const LEGACY_SERVICES = [
  { id: "ai-systems", name: "AI Agents" },
  { id: "automation", name: "Workflow Automation" },
  { id: "data", name: "Data & Reporting Automation" },
  { id: "growth", name: "AI-Powered Customer Engagement" },
  { id: "custom-integrations", name: "Custom AI Integrations" },
];

const PROCESS = [
  { step: "01", name: "Discover", desc: "We start with a deep-dive into your finance stack — your ledgers, your approval chains, your close calendar. No generic templates. We map exactly where agentic automation creates the most leverage for your books specifically." },
  { step: "02", name: "Design", desc: "We architect the agent graph — data connectors, approval logic, and audit trails — with compliance guardrails and budgets defined up front." },
  { step: "03", name: "Build", desc: "Our team gets to work, connecting your ERP, banking feeds, and tax systems to purpose-built AI agents. You review. We refine. Until every posting reconciles." },
  { step: "04", name: "Deploy", desc: "We go live. From day one, your close cycle gets shorter and your audit trail gets deeper. We monitor every agent, fix anything that needs fixing, and make sure your team trusts what we've built." },
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
        eyebrow="Financial Services"
        title={<>AI Agents for <em>Financial Operations</em></>}
        sub="Nine functions, one agentic system — from invoicing and tax filing to fraud detection and audit-ready reporting. We don't sell point tools — we build the connected infrastructure your finance team runs on."
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
            <p className="lead">Most finance teams expect automation to be complicated. We&apos;ve designed the entire experience to be the opposite.</p>
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