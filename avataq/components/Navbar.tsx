"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronDown, Menu, X, Sun, Moon,
  Receipt, CreditCard, BarChart3, FileCheck2, ShieldCheck, RefreshCw,
  BookOpen, Target, Users, Briefcase,
  Wallet,
  BookMarked, Newspaper, LayoutTemplate, PlayCircle,
  Calendar, Mail, ExternalLink, Share2, ArrowRight,
} from "lucide-react";

type Theme = "dark" | "light";

const NAV_ITEMS = ["Services", "About", "Case Studies", "Resources", "Contact"] as const;
type NavKey = typeof NAV_ITEMS[number];

const DD_WIDTH: Record<NavKey, number> = {
  Services: 680, About: 600, "Case Studies": 680, Resources: 640, Contact: 560,
};

const DD_ITEMS = {
  Services: [
    { icon: Receipt, title: "Order-to-Cash & AR", desc: "Invoicing, collections, and cash application" },
    { icon: CreditCard, title: "Procure-to-Pay & AP", desc: "Invoice capture, approvals, and payment execution" },
    { icon: BarChart3, title: "Close & Reporting", desc: "Reconciliation and decision-ready reporting" },
    { icon: FileCheck2, title: "Tax & Regulatory Filing", desc: "Classification, forecasting, and e-filing" },
    { icon: ShieldCheck, title: "Audit, Fraud & Risk", desc: "Continuous transaction auditing and screening" },
    { icon: RefreshCw, title: "Billing & Subscriptions", desc: "Recurring revenue and credit control" },
  ],
  About: [
    { icon: BookOpen, title: "Our Story", desc: "How AVATAQ came to be and what drives us" },
    { icon: Target, title: "Mission & Values", desc: "The principles behind every project" },
    { icon: Users, title: "Our Team", desc: "The people who make it happen" },
    { icon: Briefcase, title: "Careers", desc: "Join a team that builds what matters" },
  ],
  "Case Studies": [
    { icon: Receipt, title: "Order-to-Cash & AR", desc: "40-person distributor, 60–80% less manual effort", hash: "ar-order-to-cash" },
    { icon: CreditCard, title: "Procure-to-Pay & AP", desc: "Invoice processing cut from 3 days to <1", hash: "ap-procure-to-pay" },
    { icon: BarChart3, title: "Close & Reconciliation", desc: "20+ bank accounts, ≈85% time saved", hash: "bank-reconciliation" },
    { icon: Wallet, title: "Spend & Expense Management", desc: "35–50% less expense-processing time", hash: "expense-spend-management" },
  ],
  Resources: [
    { icon: BookMarked, title: "Guides & Playbooks", desc: "In-depth resources for modern teams" },
    { icon: Newspaper, title: "Blog & Insights", desc: "Strategy, design, and growth articles" },
    { icon: LayoutTemplate, title: "Templates", desc: "Ready-to-use frameworks and docs" },
    { icon: PlayCircle, title: "Video Tutorials", desc: "Watch, learn, and implement faster" },
  ],
  Contact: [],
};

function DDItem({ icon: Icon, title, desc, onPick }: { icon: React.ElementType; title: string; desc: string; onPick: () => void }) {
  return (
    <button className="dd-item" onClick={onPick}>
      <span className="dd-item__ic"><Icon size={20} strokeWidth={1.8} /></span>
      <span className="dd-item__tx">
        <span className="dd-item__t">{title}</span>
        <span className="dd-item__d">{desc}</span>
      </span>
    </button>
  );
}

function renderDropdown(key: NavKey, go: (page: string, query?: string) => void) {
  if (key === "Services") {
    return (
      <div>
        <p className="dd-label">What we do</p>
        <div className="dd-grid dd-grid--2">
          {DD_ITEMS.Services.map((it) => (
            <DDItem key={it.title} {...it} onPick={() => go("Services")} />
          ))}
        </div>
        <div className="dd-strip">
          <button className="dd-all" onClick={() => go("Services")}>
            View All Services <ArrowRight size={15} />
          </button>
        </div>
      </div>
    );
  }
  if (key === "About") {
    return (
      <div className="dd-cols dd-cols--6040">
        <div>
          <p className="dd-label">Who we are</p>
          <div className="dd-list">
            {DD_ITEMS.About.map((it) => (
              <DDItem key={it.title} {...it} onPick={() => go("About")} />
            ))}
          </div>
        </div>
        <div>
          <p className="dd-label">Recognition</p>
          <div className="dd-statcard">
            {[["150+", "Projects Delivered"], ["5+", "Years of Experience"], ["98%", "Client Satisfaction"]].map(([n, l]) => (
              <div key={l}>
                <div className="dd-stat__num">{n}</div>
                <div className="dd-stat__lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (key === "Case Studies") {
    return (
      <div className="dd-cols dd-cols--5545">
        <div>
          <p className="dd-label">Browse by industry</p>
          <div className="dd-list">
            {DD_ITEMS["Case Studies"].map((it) => (
              <DDItem key={it.title} {...it} onPick={() => go("Case Studies", `#${it.hash}`)} />
            ))}
          </div>
        </div>
        <div>
          <p className="dd-label">Featured work</p>
          <div className="dd-feature">
            <span className="dd-pill">Close & Reconciliation</span>
            <div className="dd-feature__t">Reconciling 20+ bank accounts in minutes, not weeks</div>
            <div className="dd-feature__metric">≈85% of reconciliation time saved</div>
            <button className="dd-feature__link" onClick={() => go("Case Studies", "#bank-reconciliation")}>
              Read Case Study <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (key === "Resources") {
    const popular = [
      { t: "The 2026 Growth Playbook", tag: "Guide" },
      { t: "Designing for conversion", tag: "Article" },
      { t: "Building a brand system", tag: "Video" },
    ];
    return (
      <div className="dd-cols dd-cols--5545">
        <div>
          <p className="dd-label">Learn</p>
          <div className="dd-list">
            {DD_ITEMS.Resources.map((it) => (
              <DDItem key={it.title} {...it} onPick={() => go("Resources")} />
            ))}
          </div>
        </div>
        <div>
          <p className="dd-label">Popular right now</p>
          <div className="dd-art">
            {popular.map((a) => (
              <button key={a.t} className="dd-art__item" onClick={() => go("Resources")}>
                <span className="dd-art__t">{a.t}</span>
                <span className="dd-tag">{a.tag}</span>
              </button>
            ))}
          </div>
          <button className="dd-sub" onClick={() => go("Resources")}>
            Subscribe to Newsletter <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }
  if (key === "Contact") {
    return (
      <div>
        <div className="dd-ccards">
          <div className="dd-ccard dd-ccard--blue">
            <span className="dd-ccard__ic"><Calendar size={24} strokeWidth={1.8} /></span>
            <div className="dd-ccard__t">Book a Demo</div>
            <div className="dd-ccard__d">30 min call. No pressure.</div>
            <button className="dd-ccard__btn dd-ccard__btn--solid" onClick={() => go("Contact")}>Schedule Now</button>
          </div>
          <div className="dd-ccard dd-ccard--soft">
            <span className="dd-ccard__ic"><Mail size={24} strokeWidth={1.8} /></span>
            <div className="dd-ccard__t">Send a Message</div>
            <div className="dd-ccard__d">We reply within 24 hours.</div>
            <button className="dd-ccard__btn dd-ccard__btn--outline" onClick={() => go("Contact")}>Get in Touch</button>
          </div>
        </div>
        <div className="dd-direct">
          <p className="dd-direct__lbl">Or reach us directly:</p>
          <div className="dd-direct__row">
            <a className="dd-direct__link" href="mailto:pawan@avataq.in">
              <Mail size={16} /> pawan@avataq.in
            </a>
            <a className="dd-direct__link" href="#" aria-label="LinkedIn">
              <ExternalLink size={16} />
            </a>
            <a className="dd-direct__link" href="#" aria-label="Twitter/X">
              <Share2 size={16} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function ThemeToggle({ theme, onTheme }: { theme: Theme; onTheme: (t: Theme) => void }) {
  const light = theme === "light";
  return (
    <span className="theme-switch" title="Toggle light / dark">
      {light ? <Sun size={16} /> : <Moon size={16} />}
      <label className="aq-toggle aq-toggle--sm">
        <input
          className="aq-toggle__input"
          type="checkbox"
          checked={light}
          onChange={(e) => onTheme(e.target.checked ? "light" : "dark")}
          aria-label="Toggle light mode"
        />
        <span className="aq-toggle__track"><span className="aq-toggle__thumb" /></span>
      </label>
    </span>
  );
}

interface NavbarProps {
  onNav: (page: string, query?: string) => void;
  theme: Theme;
  onTheme: (t: Theme) => void;
  onBurger: () => void;
}

export function Navbar({ onNav, theme, onTheme, onBurger }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<NavKey | null>(null);
  const [pos, setPos] = useState({ left: 0, width: 680, notch: 40 });
  const innerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeT = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 8); setOpen(null); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const computePos = useCallback((key: NavKey) => {
    const inner = innerRef.current;
    const btn = linkRefs.current[key];
    if (!inner || !btn) return;
    const ir = inner.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    const width = DD_WIDTH[key];
    const btnLeft = br.left - ir.left;
    const btnCenter = btnLeft + br.width / 2;
    let left = btnCenter - width / 2;
    left = Math.max(12, Math.min(left, ir.width - width - 12));
    let notch = btnCenter - left;
    notch = Math.max(28, Math.min(notch, width - 28));
    setPos({ left, width, notch });
  }, []);

  const openMenu = (key: NavKey) => {
    if (closeT.current) clearTimeout(closeT.current);
    computePos(key);
    setOpen(key);
  };
  const scheduleClose = () => {
    closeT.current = setTimeout(() => setOpen(null), 150);
  };
  const go = (page: string, query?: string) => { setOpen(null); onNav(page, query); };

  const mark = theme === "light" ? "/avataq-mark-black.webp" : "/avataq-mark-white.webp";

  return (
    <header className={`aqnav${scrolled ? " is-scrolled" : ""}`}>
      <div className="aqnav__inner" ref={innerRef}>
        <a className="aqnav__brand" href="#top" onClick={(e) => { e.preventDefault(); setOpen(null); onNav("Home"); }}>
          <img src={mark} alt="AVATAQ" />
          AVATAQ
        </a>

        <nav className="aqnav__links" onMouseLeave={scheduleClose}>
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              ref={(el) => { linkRefs.current[n] = el; }}
              className={`aqnav__link${open === n ? " is-open" : ""}`}
              onMouseEnter={() => openMenu(n)}
              onFocus={() => openMenu(n)}
              onClick={() => go(n)}
              aria-expanded={open === n}
            >
              {n}
              <ChevronDown size={15} strokeWidth={2} className="aqnav__chev" />
            </button>
          ))}
        </nav>

        <div className="aqnav__right">
          <button className="aqnav__talk" onClick={() => onNav("Contact")}>Talk to us</button>
          <ThemeToggle theme={theme} onTheme={onTheme} />
          <button className="aqnav__demo" onClick={() => onNav("Contact")}>Book a Demo</button>
          <button className="aqnav__burger" aria-label="Open menu" onClick={onBurger}>
            <Menu size={24} />
          </button>
        </div>

        <div
          className={`aqnav__dd${open ? " is-open" : ""}`}
          style={{ left: pos.left, width: pos.width, ["--notch" as string]: pos.notch + "px" }}
          onMouseEnter={() => { if (closeT.current) clearTimeout(closeT.current); }}
          onMouseLeave={scheduleClose}
          aria-hidden={!open}
        >
          <span className="aqnav__notch" />
          {open && renderDropdown(open, go)}
        </div>
      </div>
    </header>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onNav: (page: string, query?: string) => void;
  theme: Theme;
  onTheme: (t: Theme) => void;
}

export function MobileMenu({ open, onClose, onNav, theme, onTheme }: MobileMenuProps) {
  const [exp, setExp] = useState<NavKey | null>(null);
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (!open) setExp(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const pick = (page: string, query?: string) => { onClose(); onNav(page, query); };
  const mark = theme === "light" ? "/avataq-mark-black.webp" : "/avataq-mark-white.webp";

  return (
    <div className={`aqdrawer${open ? " open" : ""}`} aria-hidden={!open}>
      <div className="aqdrawer__top">
        <a className="aqnav__brand" href="#top" onClick={(e) => { e.preventDefault(); pick("Home"); }}>
          <img src={mark} alt="AVATAQ" />
          AVATAQ
        </a>
        <button className="aqdrawer__close" aria-label="Close menu" onClick={onClose}>
          <X size={26} />
        </button>
      </div>

      <div className="aqdrawer__scroll">
        {NAV_ITEMS.map((n) => {
          const items = DD_ITEMS[n];
          const isOpen = exp === n;
          return (
            <div key={n} className={`aqacc${isOpen ? " is-open" : ""}`}>
              <button className="aqacc__head" onClick={() => setExp(isOpen ? null : n)} aria-expanded={isOpen}>
                {n}
                <ChevronDown size={18} className="aqacc__caret" />
              </button>
              <div className="aqacc__body">
                <div className="aqacc__inner">
                  {items && items.length > 0
                    ? items.map((it) => (
                        <button
                          key={it.title}
                          className="aqacc__item"
                          onClick={() => pick(n, "hash" in it ? `#${it.hash}` : undefined)}
                        >
                          <span className="aqacc__ic"><it.icon size={18} strokeWidth={1.8} /></span>
                          {it.title}
                        </button>
                      ))
                    : (
                        <>
                          <button className="aqacc__item" onClick={() => pick("Contact")}>
                            <span className="aqacc__ic"><Calendar size={18} strokeWidth={1.8} /></span>
                            Book a Demo
                          </button>
                          <button className="aqacc__item" onClick={() => pick("Contact")}>
                            <span className="aqacc__ic"><Mail size={18} strokeWidth={1.8} /></span>
                            Send a Message
                          </button>
                        </>
                      )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="aqdrawer__themerow">
          <ThemeToggle theme={theme} onTheme={onTheme} />
          <span>{theme === "light" ? "Light" : "Dark"} mode</span>
        </div>
      </div>

      <button className="aqdrawer__cta" onClick={() => pick("Contact")}>Book a Demo</button>
    </div>
  );
}