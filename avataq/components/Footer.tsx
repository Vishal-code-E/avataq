"use client";
import { Phone } from "lucide-react";

const TAGLINE = "Automate the Execution. Own the Outcome.";

export function Footer({ onNav }: { onNav: (p: string) => void }) {
  return (
    <footer className="footer" id="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <a className="nav-brand" href="#top" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em", color: "#fff" }}
              onClick={(e) => { e.preventDefault(); onNav("Home"); }}>
              <img src="/avataq-mark-white.webp" alt="" style={{ height: 24, width: "auto" }} />
              AVATAQ
            </a>
            <p className="body" style={{ maxWidth: 300, fontWeight: 500, color: "#fff" }}>{TAGLINE}</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            {["Home", "Services", "Case Studies", "About", "Resources"].map((l) => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNav(l); }}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {[
              ["Order-to-Cash & AR", "ar-o2c"],
              ["Procure-to-Pay & AP", "ap-p2p"],
              ["Close & Reporting", "close-reporting"],
              ["Tax & Regulatory Filing", "tax-regulatory"],
              ["Audit, Fraud & Risk", "audit-fraud-risk"],
              ["Billing & Subscriptions", "billing-subscriptions"],
            ].map(([l, id]) => (
              <a key={l} href={`/services#${id}`}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:pawan@avataq.in">pawan@avataq.in</a>
            <a href="#" onClick={(e) => e.preventDefault()}>India</a>
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
      <a className="btn btn--primary" href="/contact">
        <Phone size={18} /> Book a Call
      </a>
    </div>
  );
}