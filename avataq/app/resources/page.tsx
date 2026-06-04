"use client";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";
import { MediaArt } from "../../components/MediaArt";

type ArtKind = "flow" | "chart" | "grid" | "pulse" | "rings";

const CATS = ["All", "Guides", "Case Studies", "Templates", "Videos"] as const;

const FEATURED = {
  cat: "Guide",
  kind: "rings" as ArtKind,
  title: "The AI-native operating system: a field guide",
  excerpt: "Why disconnected automation stalls, and how a shared kernel — identity, policy, observability — turns scattered scripts into a system that compounds.",
  meta: "May 28, 2026 · 12 min read",
};

const ARTICLES: { cat: string; kind: ArtKind; title: string; meta: string }[] = [
  { cat: "Guides", kind: "flow", title: "Designing an agent graph from scratch", meta: "May 20, 2026 · 9 min" },
  { cat: "Case Studies", kind: "chart", title: "How Northwind built a defect radar", meta: "May 14, 2026 · 7 min" },
  { cat: "Templates", kind: "grid", title: "Workflow audit template (free)", meta: "May 9, 2026 · Template" },
  { cat: "Videos", kind: "pulse", title: "Observability for AI systems, in 10 min", meta: "May 2, 2026 · Video" },
  { cat: "Guides", kind: "rings", title: "Guardrails before features: a checklist", meta: "Apr 24, 2026 · 6 min" },
  { cat: "Templates", kind: "grid", title: "Event taxonomy starter kit", meta: "Apr 18, 2026 · Template" },
];

function ArticleCard({ a }: { a: typeof ARTICLES[0] }) {
  return (
    <a className="art-card reveal" href="#" onClick={(e) => e.preventDefault()}>
      <div className="art-thumb" style={{ position: "relative" }}>
        <MediaArt kind={a.kind} />
      </div>
      <div className="art-body">
        <span className="chip chip--solid" style={{ alignSelf: "flex-start" }}>{a.cat}</span>
        <h3 className="h3" style={{ fontSize: 17 }}>{a.title}</h3>
        <span className="art-meta">{a.meta}</span>
      </div>
    </a>
  );
}

export default function ResourcesPage() {
  const [cat, setCat] = useState<typeof CATS[number]>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const shown = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.cat === cat);

  return (
    <PageLayout>
      <PageHero
        breadcrumb={["Home", "Resources"]}
        eyebrow="Resources"
        title={<>Field notes on <em>AI-native</em> systems.</>}
        sub="Guides, templates, and breakdowns from the work we do — written for teams building the real thing."
      >
        <div className="search-wrap">
          <span className="ico"><Search size={18} /></span>
          <input className="field" type="search" placeholder="Search resources…" aria-label="Search resources" />
        </div>
      </PageHero>

      {/* Featured article */}
      <section className="section">
        <div className="wrap">
          <div className="feat-article reveal">
            <div className="feat-media" style={{ position: "relative" }}>
              <MediaArt kind={FEATURED.kind} label="Featured" />
            </div>
            <div className="feat-body">
              <span className="chip chip--solid" style={{ alignSelf: "flex-start" }}>{FEATURED.cat}</span>
              <h2 className="h2" style={{ fontSize: "clamp(22px,2.4vw,34px)" }}>{FEATURED.title}</h2>
              <p className="lead">{FEATURED.excerpt}</p>
              <span className="art-meta" style={{ marginTop: 0 }}>{FEATURED.meta}</span>
              <a className="txtlink" href="#" onClick={(e) => e.preventDefault()}>
                Read article <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories + grid */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Library</p>
            <h2 className="h2">Browse by <em>topic</em>.</h2>
          </div>
          <div className="tabs reveal" style={{ marginTop: 28 }}>
            {CATS.map((c) => (
              <button key={c} className={"tab" + (cat === c ? " active" : "")} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="art-grid">
            {shown.map((a) => <ArticleCard key={a.title} a={a} />)}
          </div>
          {shown.length === 0 && (
            <p className="lead" style={{ marginTop: 40 }}>Nothing here yet — check back soon.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="wrap cta-band reveal" style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <p className="eyebrow no-rule" style={{ justifyContent: "center", display: "flex" }}>Newsletter</p>
          <h2 className="h2" style={{ marginTop: 18 }}>Stay <em>ahead</em>.</h2>
          <p className="lead" style={{ marginTop: 16 }}>One sharp email a month on building AI-native systems. No fluff, no spam.</p>
          {subscribed ? (
            <p className="body" style={{ marginTop: 32, color: "var(--blue)", fontWeight: 600 }}>
              You&apos;re in — we&apos;ll be in touch next month.
            </p>
          ) : (
            <form
              style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            >
              <input
                className="field"
                type="email"
                placeholder="you@company.com"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ maxWidth: 340, flex: "1 1 260px" }}
              />
              <button className="btn btn--primary" type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
