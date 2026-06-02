"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, AtSign, Globe, Rss, Calendar, ChevronDown } from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { PageHero } from "../../components/PageHero";

const INFO = [
  { Icon: Mail, label: "Email", value: "hello@avataq.com" },
  { Icon: Phone, label: "Phone", value: "+1 (000) 000-0000" },
  { Icon: MapPin, label: "Location", value: "San Francisco · Remote" },
];

const FAQS = [
  {
    q: "How long does a typical engagement take?",
    a: "Most first systems reach production in 6–10 weeks. We work in tight increments, so you see something observable within the first two weeks — not at the end.",
  },
  {
    q: "Do we own the system you build?",
    a: "Always. We design to hand over: clean architecture, documentation, and a system your own team can run and extend without depending on us.",
  },
  {
    q: "What does pricing look like?",
    a: "We scope each engagement to the problem — fixed-scope builds or ongoing partnerships. After a free consultation we send a clear proposal with milestones and budgets.",
  },
  {
    q: "Which industries do you work with?",
    a: "We've shipped across fintech, commerce, operations, and data teams. The common thread is workflows worth turning into a real system — not the industry.",
  },
  {
    q: "Can you work alongside our internal team?",
    a: "Yes. We embed with your engineers, share the kernel and observability from day one, and leave them fully equipped to own what we build together.",
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

  return (
    <PageLayout>
      <PageHero
        breadcrumb={["Home", "Contact"]}
        eyebrow="Contact"
        title={<>Let&apos;s <em>talk</em>.</>}
        sub="Tell us about your project. We respond within 24 hours — and we'll tell you straight whether we're the right team for it."
      />

      {/* Form + info */}
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="form-row">
                <div>
                  <label className="field-label" htmlFor="name">Name</label>
                  <input className="field" id="name" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="field-label" htmlFor="email">Email</label>
                  <input className="field" id="email" type="email" placeholder="jane@company.com" required />
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <label className="field-label" htmlFor="company">Company</label>
                <input className="field" id="company" placeholder="Company name" />
              </div>
              <div style={{ marginTop: 20 }}>
                <label className="field-label" htmlFor="service">Service interest</label>
                <select className="field" id="service" defaultValue="">
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
                <textarea className="field" id="msg" placeholder="What are you trying to build?" required />
              </div>
              <button className="btn btn--primary" type="submit" style={{ width: "100%", marginTop: 24 }}>
                {sent ? "Message sent — talk soon" : "Send Message"}
              </button>
              {sent && (
                <p className="body" style={{ marginTop: 14, color: "var(--blue)" }}>
                  Thanks — we&apos;ll be in touch within 24 hours.
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
                      <div style={{ fontWeight: 600, fontSize: 16, marginTop: 2 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card" style={{ marginTop: 24 }}>
                <h3 className="h3" style={{ fontSize: 20 }}>We respond within 24 hours</h3>
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
              <h3 className="h3" style={{ fontSize: 20 }}>Scheduling embed</h3>
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
