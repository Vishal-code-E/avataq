"use client";
import type { CSSProperties } from "react";

interface CheckerboardProps {
  unit?: number;
  density?: "full" | "sparse";
}

type Square = [col: number, row: number, kind: "blue" | "light"];

const FULL: Square[] = [
  [3, 0, "light"], [3, 1, "blue"],  [2, 1, "light"],
  [3, 2, "light"], [2, 2, "blue"],  [1, 2, "light"],
  [2, 3, "blue"],  [1, 3, "light"], [0, 3, "blue"],
];

const SPARSE: Square[] = [
  [3, 0, "light"], [3, 1, "blue"],  [2, 1, "light"],
  [2, 2, "blue"],  [1, 2, "light"], [1, 3, "blue"],
];

export function Checkerboard({ unit = 116, density = "full" }: CheckerboardProps) {
  const squares = density === "sparse" ? SPARSE : FULL;
  return (
    <div
      className="checker"
      style={{ width: 4 * unit, height: 4 * unit }}
      aria-hidden="true"
    >
      {squares.map(([c, r, k], i) => (
        <span
          key={i}
          style={{
            left: c * unit,
            top: r * unit,
            width: unit,
            height: unit,
            background: k === "blue" ? "var(--blue)" : "#E2E8F0",
            opacity: k === "blue" ? 1 : 0.9,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
