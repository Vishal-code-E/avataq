'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AVATARS = [
  { initials: 'AK', bg: '#1A17DE' },
  { initials: 'SM', bg: '#7C3AED' },
  { initials: 'JR', bg: '#0EA5E9' },
  { initials: 'TN', bg: '#10B981' },
  { initials: 'PL', bg: '#F59E0B' },
  { initials: 'EW', bg: '#EF4444' },
];

const BADGES = ['Early Access', 'Invite Only', 'AI-First'];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;
        hasStarted.current = true;

        const duration = 2200;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={spanRef}>{count.toLocaleString()}</span>;
}

export function SocialProof() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 rounded-3xl px-6 sm:px-10 py-7 sm:py-8"
          style={{
            background: 'rgba(255,255,255,0.025)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Avatar stack + count */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {AVATARS.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                  style={{
                    background: a.bg,
                    boxShadow: '0 0 0 2px #030308',
                  }}
                >
                  {a.initials}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tabular-nums">
                <AnimatedCounter target={2419} />+
              </span>
              <span className="text-[#E2E8F0]/35 text-xs">on the waitlist</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-white/10 flex-shrink-0" />

          {/* Tagline */}
          <p className="text-[#E2E8F0]/50 text-sm sm:text-base text-center sm:text-left leading-relaxed">
            Founders, developers & innovators{' '}
            <span className="text-white/80 font-medium">waiting for launch</span>
          </p>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-white/10 flex-shrink-0" />

          {/* Badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                style={{
                  color: '#5A57FF',
                  background: 'rgba(26,23,222,0.12)',
                  border: '1px solid rgba(26,23,222,0.28)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
