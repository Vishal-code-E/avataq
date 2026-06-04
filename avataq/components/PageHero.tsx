"use client";
import { ChevronRight } from "lucide-react";
import { SquareMosaic } from "./SquareMosaic";
import { Checkerboard } from "./Checkerboard";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  breadcrumb?: string[];
  checker?: boolean;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, sub, breadcrumb, checker, children }: PageHeroProps) {
  return (
    <section className="section--panel page-hero" style={{ overflow: "hidden", position: "relative" }}>
      <div className="blueprint" />
      <SquareMosaic />
      {checker && (
        <div style={{ position: "absolute", right: -80, top: 60, opacity: 0.5, zIndex: 0 }}>
          <Checkerboard density="sparse" unit={100} />
        </div>
      )}
      <div
        className="hero-glow"
        style={{ left: "12%", top: 60, width: 420, height: 240, opacity: 0.45 }}
      />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        {breadcrumb && (
          <nav className="crumb reveal" aria-label="Breadcrumb">
            {breadcrumb.map((b, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                {i > 0 && <ChevronRight size={14} className="crumb-sep" style={{ opacity: 0.5 }} />}
                <span className={i === breadcrumb.length - 1 ? "crumb-cur" : ""}>{b}</span>
              </span>
            ))}
          </nav>
        )}
        <p className="eyebrow reveal" style={{ marginTop: breadcrumb ? 24 : 0 }}>{eyebrow}</p>
        <h1 className="h1 reveal" style={{ marginTop: 24, fontSize: "clamp(40px,6vw,76px)" }}>
          {title}
        </h1>
        {sub && (
          <p className="lead reveal" style={{ marginTop: 26, maxWidth: 720 }}>
            {sub}
          </p>
        )}
        {children && (
          <div className="reveal" style={{ marginTop: 36 }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
