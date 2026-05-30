'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 18,
        delay: Math.random() * 12,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#030308]" />

      {/* Aurora – top-left deep blue (CSS-animated, runs on compositor) */}
      <div
        className="absolute rounded-full aurora-1"
        style={{
          width: 900,
          height: 900,
          top: -280,
          left: -320,
          background:
            'radial-gradient(circle, rgba(26,23,222,0.28) 0%, rgba(26,23,222,0.06) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Aurora – top-right violet */}
      <div
        className="absolute rounded-full aurora-2"
        style={{
          width: 700,
          height: 700,
          top: -160,
          right: -240,
          background:
            'radial-gradient(circle, rgba(110,70,255,0.18) 0%, rgba(110,70,255,0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Aurora – bottom-center teal */}
      <div
        className="absolute rounded-full aurora-3"
        style={{
          width: 640,
          height: 640,
          bottom: -80,
          left: 'calc(50% - 320px)',
          background:
            'radial-gradient(circle, rgba(0,160,200,0.12) 0%, rgba(0,160,200,0.03) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Aurora – mid-right warm accent */}
      <div
        className="absolute rounded-full aurora-4"
        style={{
          width: 500,
          height: 500,
          top: '40%',
          right: -100,
          background:
            'radial-gradient(circle, rgba(26,23,222,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(226,232,240,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(3,3,8,0.7) 100%)',
        }}
      />

      {/* Floating particles — CSS-animated, no JS per frame */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full particle-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: '#1A17DE',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
