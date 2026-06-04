"use client";
import { Layers, Activity, Shield, Package, User, ExternalLink, ArrowRight } from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";

const VALUES = [
  { Icon: Layers, name: "Systems, not scripts", desc: "We build connected infrastructure that compounds — never disposable one-offs." },
  { Icon: Activity, name: "Observable by default", desc: "If we can't measure it, we don't ship it. Every run is traceable." },
  { Icon: Shield, name: "Guardrails first", desc: "Identity, policy, and safety are designed in from day one, not bolted on." },
  { Icon: Package, name: "Built to hand over", desc: "We leave you a system your own team can own, extend, and trust." },
];

const TEAM = [
  { name: "Aria Vance", role: "Founder & CEO" },
  { name: "Tobias Lund", role: "Head of Engineering" },
  { name: "Mei Chen", role: "Principal Architect" },
  { name: "Daniel Roy", role: "Head of Data" },
];

const MILESTONES = [
  { num: "5+", label: "Years building AI systems" },
  { num: "150+", label: "Clients shipped" },
  { num: "12", label: "Industries served" },
  { num: "99.9%", label: "Pipeline uptime" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        breadcrumb={["Home", "About"]}
        eyebrow="About AVATAQ"
        title={<>We build the systems that <em>run themselves</em>.</>}
        sub="AVATAQ is an AI-native systems studio. We give ambitious teams the connected infrastructure — agents, automation, data — that big platforms keep for themselves."
      />

      {/* Our Story */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="reveal">
              <p className="eyebrow">Our story</p>
              <h2 className="h2" style={{ marginTop: 18 }}>Founded on a simple frustration.</h2>
              <p className="lead" style={{ marginTop: 22 }}>
                We kept watching good teams drown in disconnected automation — a script here, a model there, nothing that talked to each other or could be trusted in production.
              </p>
              <p className="body" style={{ marginTop: 18 }}>
                So we started AVATAQ to build the missing layer: an operating system for AI-native business, where agents share a kernel and every workflow lives on one observable graph. Five years on, that idea has shipped into production for teams across fintech, commerce, and operations.
              </p>
              <p className="body" style={{ marginTop: 18 }}>
                We&apos;re a small, senior team that thinks like infrastructure engineers and ships like a product studio — and we&apos;d rather hand you a system you own than a dependency on us.
              </p>
            </div>
            <div className="visual-ph reveal">
              <div className="blueprint" />
              <img
                src="/avataq-mark-white.webp"
                alt="AVATAQ mark"
                style={{ width: 120, opacity: 0.9, position: "relative", zIndex: 2 }}
              />
              <span className="ph-label">Brand mark · isometric &quot;A&quot;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Mission &amp; values</p>
            <h2 className="h2">What we <em>stand for</em>.</h2>
            <p className="lead">Our mission: make AI-native infrastructure something any serious team can run — safely, observably, and on their own terms.</p>
          </div>
          <div className="value-grid">
            {VALUES.map((v, i) => (
              <div className="card reveal" key={v.name} style={{ transitionDelay: i * 0.06 + "s" }}>
                <div className="ico-tile"><v.Icon size={24} strokeWidth={1.8} /></div>
                <h3 className="h3" style={{ marginTop: 22 }}>{v.name}</h3>
                <p className="body" style={{ marginTop: 12 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">The team</p>
            <h2 className="h2">Senior by default.</h2>
            <p className="lead">A compact team of architects and engineers — the people who design your system are the people who build it.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div className="team-card reveal" key={m.name} style={{ transitionDelay: i * 0.06 + "s" }}>
                <div className="team-photo">
                  <User size={40} strokeWidth={1.5} />
                </div>
                <h3 className="h3" style={{ fontSize: 18 }}>{m.name}</h3>
                <div className="role">{m.role}</div>
                <a className="team-li" href="#" aria-label={m.name + " on LinkedIn"} onClick={(e) => e.preventDefault()}>
                  <ExternalLink size={18} strokeWidth={1.8} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section milestones" style={{ padding: "96px 0" }}>
        <div className="wrap">
          <div className="ms-grid">
            {MILESTONES.map((m, i) => (
              <div className="reveal" key={m.label} style={{ transitionDelay: i * 0.07 + "s" }}>
                <div className="ms-num">{m.num}</div>
                <div className="ms-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--panel">
        <div className="wrap cta-band reveal">
          <h2 className="h2">Want to work with us?</h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Tell us what you&apos;re trying to build. We&apos;ll tell you straight whether we&apos;re the right team for it.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href="/contact">Book a Demo</a>
            <a className="btn btn--ghost" href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              View Our Work <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
