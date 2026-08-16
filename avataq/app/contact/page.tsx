"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, AtSign, Globe, Rss, Calendar, ChevronDown } from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";

const INFO = [
  { Icon: Mail, label: "Email", value: "pawan@avataq.in" },
  { Icon: Phone, label: "Phone", value: "+91 96740 29006 , +91 90598 82468" },
  { Icon: MapPin, label: "Location", value: "India · Remote" },
];

const FAQS = [
  {
    q: "Do I need to be technical to work with AVATAQ?",
    a: "Not even slightly. We handle everything technical. Your job is to tell us how your business runs and what's frustrating you. We take it from there.",
  },
  {
    q: "Will this disrupt my existing operations?",
    a: "No. We build around what's already working. Automation goes in alongside your current setup — enhancing it, not replacing it. Most clients see zero disruption during the build phase.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients are fully live within 2–4 weeks. Many report measurable time savings and improved customer response rates within the very first month of deployment.",
  },
  {
    q: "What if something breaks or needs updating?",
    a: "We don't disappear after go-live. Every engagement includes ongoing support, monitoring, and maintenance. If something needs adjusting, we fix it — fast.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need — but we structure engagements to ensure the ROI is clear and measurable. Book a free audit and we'll give you a real, honest picture before you commit to anything.",
  },
  {
    q: "Is this only for large businesses?",
    a: "Absolutely not. Our best results often come from small and mid-sized businesses where automation creates the most dramatic impact. If you have repetitive tasks, you're a perfect candidate.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
        <span className="chev"><ChevronDown size={22} strokeWidth={2} /></span>
      </button>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  return (
    <PageLayout>
      <PageHero
        breadcrumb={["Home", "Contact"]}
        eyebrow="Contact"
        title={<>Let&apos;s <em>talk</em>.</>}
        sub="Tell us about your project. We respond within 24 hours — and we'll tell you straight whether we're the right team for it."
        checker
      />

      {/* Form + info */}
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                setSending(true);
                setError(false);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: data.get("name"),
                      email: data.get("email"),
                      company: data.get("company"),
                      service: data.get("service"),
                      message: data.get("msg"),
                    }),
                  });
                  if (!res.ok) throw new Error("Request failed");
                  setSent(true);
                  form.reset();
                } catch {
                  setError(true);
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="form-row">
                <div>
                  <label className="field-label" htmlFor="name">Name</label>
                  <input className="field" id="name" name="name" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="field-label" htmlFor="email">Email</label>
                  <input className="field" id="email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <label className="field-label" htmlFor="company">Company</label>
                <input className="field" id="company" name="company" placeholder="Company name" />
              </div>
              <div style={{ marginTop: 20 }}>
                <label className="field-label" htmlFor="service">Service interest</label>
                <select className="field" id="service" name="service" defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>AI Systems</option>
                  <option>Automation</option>
                  <option>Data &amp; Analytics</option>
                  <option>Growth Engineering</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div style={{ marginTop: 20 }}>
                <label className="field-label" htmlFor="msg">Message</label>
                <textarea className="field" id="msg" name="msg" placeholder="What are you trying to build?" required />
              </div>
              <button className="btn btn--primary" type="submit" disabled={sending} style={{ width: "100%", marginTop: 24 }}>
                {sending ? "Sending…" : sent ? "Message sent — talk soon" : "Send Message"}
              </button>
              {sent && (
                <p className="body" style={{ marginTop: 14, color: "var(--blue)" }}>
                  Thanks — we&apos;ll be in touch within 24 hours.
                </p>
              )}
              {error && (
                <p className="body" style={{ marginTop: 14, color: "#e5484d" }}>
                  Something went wrong sending your message — please try again or email us directly.
                </p>
              )}
            </form>

            <div>
              <div className="info-card">
                {INFO.map((item) => (
                  <div className="info-row" key={item.label}>
                    <span className="ico-tile">
                      <item.Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="tag">{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 14, marginTop: 2 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card" style={{ marginTop: 24 }}>
                <h3 className="h3" style={{ fontSize: 18 }}>We respond within 24 hours</h3>
                <p className="body" style={{ marginTop: 12 }}>
                  A senior engineer reads every inquiry — not a sales bot. Expect a real reply with real questions about your system.
                </p>
                <div className="footer-social" style={{ marginTop: 20 }}>
                  {[AtSign, Globe, Rss].map((Icon, i) => (
                    <a key={i} href="#" aria-label="social" onClick={(e) => e.preventDefault()}>
                      <Icon size={18} strokeWidth={1.8} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a demo */}
      <section className="section section--panel">
        <div className="wrap">
          <div className="sec-head center reveal" style={{ marginBottom: 40 }}>
            <p className="eyebrow no-rule">Book a demo</p>
            <h2 className="h2">Grab 30 minutes. We&apos;ll map your <em>first agent graph</em>.</h2>
          </div>
          <div className="embed-ph reveal">
            <Calendar size={40} strokeWidth={1.5} style={{ color: "var(--blue)" }} />
            <div>
              <h3 className="h3" style={{ fontSize: 18 }}>Scheduling embed</h3>
              <p className="body" style={{ marginTop: 8, maxWidth: 420 }}>
                Your Calendly (or preferred booking tool) drops in here — pick a slot and we&apos;ll send a calendar invite.
              </p>
            </div>
            <button className="btn btn--primary">Open scheduler</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head center reveal" style={{ marginBottom: 40 }}>
            <p className="eyebrow no-rule">FAQ</p>
            <h2 className="h2">Common questions.</h2>
          </div>
          <div className="faq reveal">
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
