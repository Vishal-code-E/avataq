"use client";
import { useState, useEffect } from "react";
import { Navbar, MobileMenu } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Logos, Services, ValueProp, CaseStudies, Testimonials, FinalCTA } from "../components/Sections";
import { Footer, StickyCTA } from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const PAGE_ROUTES: Record<string, string> = {
  Services: "/services",
  "Case Studies": "/case-studies",
  About: "/about",
  Resources: "/resources",
  Contact: "/contact",
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    try { return (localStorage.getItem("aq-theme") as "dark" | "light") || "dark"; } catch { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("aq-theme", theme); } catch { /* ignore */ }
  }, [theme]);

  useReveal(true, theme);

  // sticky CTA logic
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.7;
      const footer = document.getElementById("footer");
      let footerVisible = false;
      if (footer) {
        const r = footer.getBoundingClientRect();
        footerVisible = r.top < window.innerHeight - 40;
      }
      setStickyVisible(past && !footerVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNav = (page: string) => {
    setMenuOpen(false);
    if (page === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (PAGE_ROUTES[page]) {
      window.location.href = PAGE_ROUTES[page];
    }
  };

  return (
    <div id="top">
      <Navbar onNav={onNav} theme={theme} onTheme={setTheme} onBurger={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNav={onNav} theme={theme} onTheme={setTheme} />

      <main>
        <Hero variant="canvas" onNav={onNav} />
        <Logos />
        <Services onNav={onNav} />
        <ValueProp />
        <CaseStudies onNav={onNav} />
        <Testimonials />
        <FinalCTA onNav={onNav} />
      </main>

      <Footer onNav={onNav} />
      <StickyCTA visible={stickyVisible} />
    </div>
  );
}
