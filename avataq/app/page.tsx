"use client";
import { useState, useEffect } from "react";
import { Navbar, MobileMenu } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Logos, ProblemStatement, Services, ValueProp, CaseStudies, Testimonials, TechStack, FinalCTA } from "../components/Sections";
import { Footer, StickyCTA } from "../components/Footer";
import { useReveal } from "../hooks/useReveal";
import { useTheme } from "../hooks/useTheme";

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
  const [theme, setTheme] = useTheme();

  useReveal(true, theme);

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

  const onNav = (page: string, query?: string) => {
    setMenuOpen(false);
    if (page === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (PAGE_ROUTES[page]) {
      window.location.href = query ? `${PAGE_ROUTES[page]}?${query}` : PAGE_ROUTES[page];
    }
  };

  return (
    <div id="top">
      <Navbar onNav={onNav} theme={theme} onTheme={setTheme} onBurger={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNav={onNav} theme={theme} onTheme={setTheme} />

      <main>
        <Hero variant="canvas" onNav={onNav} />
        <Logos />
        <ProblemStatement />
        <Services onNav={onNav} />
        <ValueProp />
        <CaseStudies />
        <Testimonials />
        <TechStack />
        <FinalCTA onNav={onNav} />
      </main>

      <Footer onNav={onNav} />
      <StickyCTA visible={stickyVisible} />
    </div>
  );
}
