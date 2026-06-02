"use client";
import { AtSign, Mail, Rss, Globe, Phone } from "lucide-react";

const TAGLINE = "Automate Everything. Scale Anything.";

export function Footer({ onNav }: { onNav: (p: string) => void }) {
  const social = [
    { label: "Social", Icon: AtSign },
    { label: "Email", Icon: Mail },
    { label: "Blog", Icon: Rss },
    { label: "Website", Icon: Globe },
  ];
  return (
    <footer className="footer" id="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <a className="nav-brand" href="#top" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em", color: "#fff" }}
              onClick={(e) => { e.preventDefault(); onNav("Home"); }}>
              <img src="/avataq-mark-white.webp" alt="" style={{ height: 24 }} />
              AVATAQ
            </a>
            <p className="body" style={{ maxWidth: 300, fontWeight: 500, color: "#fff" }}>{TAGLINE}</p>
            <div className="footer-social">
              {social.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            {["Home", "Services", "Case Studies", "About", "Resources"].map((l) => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNav(l); }}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {["AI Systems", "Automation", "Data & Analytics", "Growth Engineering"].map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@avataq.com">hello@avataq.com</a>
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
            <a href="#" onClick={(e) => e.preventDefault()}>San Francisco · Remote</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AVATAQ. All rights reserved.</span>
          <div className="links">
            <a href="/privacy">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA({ visible }: { visible: boolean }) {
  return (
    <div className={`sticky-cta${visible ? " show" : ""}`}>
      <button className="btn btn--primary">
        <Phone size={18} /> Book a Call
      </button>
    </div>
  );
}
