'use client';

import { motion } from 'framer-motion';
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
      Array.from({ length: 28 }, (_, i) => ({
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

      {/* Aurora – top-left deep blue */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          top: -280,
          left: -320,
          background:
            'radial-gradient(circle, rgba(26,23,222,0.28) 0%, rgba(26,23,222,0.06) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{ scale: [1, 1.18, 1], x: [-40, 50, -40], y: [-30, 40, -30] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Aurora – top-right violet */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: -160,
          right: -240,
          background:
            'radial-gradient(circle, rgba(110,70,255,0.18) 0%, rgba(110,70,255,0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1.1, 1, 1.1], x: [40, -25, 40], y: [-15, 50, -15] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Aurora – bottom-center teal */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 640,
          height: 640,
          bottom: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(circle, rgba(0,160,200,0.12) 0%, rgba(0,160,200,0.03) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{ scale: [1, 1.22, 1], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Aurora – mid-right warm accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '40%',
          right: -100,
          background:
            'radial-gradient(circle, rgba(26,23,222,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.3, 1], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
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

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: '#1A17DE',
          }}
          animate={{ y: [-18, 18, -18], opacity: [0.08, 0.45, 0.08] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
