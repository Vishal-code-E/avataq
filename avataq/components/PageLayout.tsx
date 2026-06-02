"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar, MobileMenu } from "./Navbar";
import { Footer, StickyCTA } from "./Footer";
import { useReveal } from "../hooks/useReveal";
import { useTheme } from "../hooks/useTheme";

const PAGE_ROUTES: Record<string, string> = {
  Home: "/",
  Services: "/services",
  "Case Studies": "/case-studies",
  About: "/about",
  Resources: "/resources",
  Contact: "/contact",
};

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [theme, setTheme] = useTheme();

  useReveal(true, theme);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.55;
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
    const route = PAGE_ROUTES[page];
    if (route) router.push(route);
  };

  return (
    <div id="top">
      <Navbar onNav={onNav} theme={theme} onTheme={setTheme} onBurger={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNav={onNav} theme={theme} onTheme={setTheme} />
      <main>{children}</main>
      <Footer onNav={onNav} />
      <StickyCTA visible={stickyVisible} />
    </div>
  );
}
