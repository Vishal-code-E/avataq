"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";
import { MediaArt } from "../../components/MediaArt";

type ArtKind = "flow" | "chart" | "grid" | "pulse" | "rings";

const FILTERS = ["All", "Fintech", "Commerce", "Operations", "Data"] as const;

const STUDIES: { tag: string; client: string; title: string; metric: string; kind: ArtKind }[] = [
  { tag: "Local Services", client: "Home Services Co.", title: "AI agent eliminated every missed after-hours lead", metric: "40% more booked jobs", kind: "flow" },
  { tag: "E-commerce", client: "Online Retailer", title: "End-to-end order and customer communication automated", metric: "+22% customer satisfaction", kind: "chart" },
  { tag: "Operations", client: "Meridian", title: "One observable graph for every back-office flow", metric: "11 workflows automated", kind: "grid" },
  { tag: "Data", client: "Lumen", title: "A semantic layer the whole company can query", metric: "60% fewer ad-hoc requests", kind: "pulse" },
  { tag: "Commerce", client: "Atlas Foods", title: "Lifecycle automation that compounds retention", metric: "+18% repeat purchase", kind: "rings" },
  { tag: "Operations", client: "Hexa", title: "Incident response agents with full traceability", metric: "38% faster resolution", kind: "flow" },
];

const FEATURED = {
  tag: "Local Services",
  client: "Home Services Co.",
  title: "How a home services business stopped missing every after-hours lead",
  challenge: "A growing home services company was losing leads because enquiries went unanswered after 6 PM. The owner was manually following up every morning — and still missing potential clients.",
  approach: "AVATAQ deployed an AI agent that instantly responds to all enquiries, qualifies the lead, checks availability, and books the appointment — automatically, at any hour.",
  results: [
    { num: "40%", label: "more booked jobs" },
    { num: "12 hrs", label: "reclaimed per week" },
    { num: "0", label: "after-hours leads missed" },
  ],
};

function CaseCard({ s }: { s: typeof STUDIES[0] }) {
  return (
    <a className="case-card reveal" href="#" onClick={(e) => e.preventDefault()}>
      <div className="case-thumb" style={{ position: "relative" }}>
        <MediaArt kind={s.kind} />
      </div>
      <div className="case-card-body">
        <span className="chip">{s.tag}</span>
        <h3 className="h3" style={{ fontSize: 18 }}>{s.title}</h3>
        <p style={{ color: "var(--blue)", fontWeight: 600, fontSize: 14, margin: 0 }}>{s.metric}</p>
        <span className="txtlink" style={{ marginTop: 4 }}>
          Read more <ArrowRight size={16} />
        </span>
      </div>
    </a>
  );
}

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");
  const shown = filter === "All" ? STUDIES : STUDIES.filter((s) => s.tag === filter);

  return (
    <PageLayout>
      <PageHero
        breadcrumb={["Home", "Case Studies"]}
        eyebrow="Case Studies"
        title={<>Systems in <em>production</em>.</>}
        sub="Selected work, measured in outcomes — not deliverables. Filter by what your team is trying to solve."
      >
        <div className="tabs">
          {FILTERS.map((f) => (
            <button key={f} className={"tab" + (filter === f ? " active" : "")} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Featured */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: 40 }}>
            <p className="eyebrow">Featured</p>
          </div>
          <div className="case reveal">
            <div className="case-media" style={{ position: "relative", minHeight: 360, background: "#0d0d0d" }}>
              <MediaArt kind="flow" label="Agent graph · Cobalt" />
            </div>
            <div className="case-body">
              <span className="chip">{FEATURED.tag} · {FEATURED.client}</span>
              <h2 className="h2" style={{ fontSize: "clamp(22px,2.4vw,34px)" }}>{FEATURED.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 4 }}>
                <div>
                  <span className="eyebrow">Challenge</span>
                  <p className="body" style={{ marginTop: 8 }}>{FEATURED.challenge}</p>
                </div>
                <div>
                  <span className="eyebrow">Approach</span>
                  <p className="body" style={{ marginTop: 8 }}>{FEATURED.approach}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 32, marginTop: 12, flexWrap: "wrap" }}>
                {FEATURED.results.map((r) => (
                  <div key={r.label}>
                    <div style={{ fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", color: "var(--blue)" }}>{r.num}</div>
                    <div className="tag" style={{ marginTop: 4 }}>{r.label}</div>
                  </div>
                ))}
              </div>
              <a className="txtlink" href="#" style={{ marginTop: 8 }} onClick={(e) => e.preventDefault()}>
                Read full case study <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">All work</p>
            <h2 className="h2">Browse the <em>portfolio</em>.</h2>
          </div>
          <div className="case-grid">
            {shown.map((s) => <CaseCard key={s.title} s={s} />)}
          </div>
          {shown.length === 0 && (
            <p className="lead" style={{ marginTop: 40 }}>No case studies in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap cta-band reveal">
          <h2 className="h2">Your project could be the next one.</h2>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href="/contact">Book a Demo</a>
            <a className="btn btn--ghost" href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Explore Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
