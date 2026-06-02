"use client";
import { useSyncExternalStore, CSSProperties } from "react";

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

const PALETTE: Record<string, string> = {
  blue: "#1a17de",
  gray: "#e2e8f0",
  white: "#ffffff",
  empty: "transparent",
};

export const HERO_MOSAIC_PATTERN = [
  ["empty", "empty", "empty", "gray"],
  ["empty", "empty", "blue",  "empty"],
  ["empty", "gray",  "empty", "gray"],
  ["blue",  "empty", "blue",  "empty"],
  ["empty", "gray",  "empty", "white"],
];

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface SquareMosaicProps {
  pattern?: string[][];
  position?: Position;
  squareSize?: number;
  opacity?: number;
  centerY?: boolean;
}

function useMosaicDims(defaultSize: number) {
  const width = useSyncExternalStore(
    subscribeToResize,
    () => window.innerWidth,
    () => 0,
  );
  if (width === 0 || width < 768) return { sz: defaultSize, visible: false };
  if (width < 1280) return { sz: 90, visible: true };
  return { sz: defaultSize, visible: true };
}

export function SquareMosaic({
  pattern = HERO_MOSAIC_PATTERN,
  position = "top-right",
  squareSize = 120,
  opacity = 1,
  centerY = true,
}: SquareMosaicProps) {
  const { sz, visible } = useMosaicDims(squareSize);
  if (!visible) return null;

  const cols = pattern[0].length;
  const rows = pattern.length;
  const isLeft = position.includes("left");

  const posStyle: CSSProperties = {
    [isLeft ? "left" : "right"]: 0,
  };
  if (centerY) {
    posStyle.top = "50%";
    posStyle.transform = "translateY(-50%)";
  } else {
    posStyle[position.includes("top") ? "top" : "bottom"] = 0;
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        ...posStyle,
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${sz}px)`,
        gridTemplateRows: `repeat(${rows}, ${sz}px)`,
        gap: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity,
        lineHeight: 0,
        fontSize: 0,
      }}
    >
      {pattern.flat().map((cell, i) => (
        <div
          key={i}
          style={{
            width: sz,
            height: sz,
            backgroundColor: PALETTE[cell] || "transparent",
            borderRadius: 0,
          }}
        />
      ))}
    </div>
  );
}

interface SectionMosaicProps {
  corner?: Position;
  tone?: "normal" | "strong" | "soft";
}

const SIZE = { normal: 60, strong: 70, soft: 50 };
const OPACITY = { normal: 0.4, strong: 0.55, soft: 0.3 };

export function SectionMosaic({ corner = "bottom-left", tone = "normal" }: SectionMosaicProps) {
  return (
    <SquareMosaic
      position={corner}
      squareSize={SIZE[tone]}
      opacity={OPACITY[tone]}
      centerY={false}
    />
  );
}
