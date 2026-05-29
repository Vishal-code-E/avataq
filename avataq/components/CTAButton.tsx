'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export function CTAButton({
  onClick,
  children,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 30 });
  const sy = useSpring(my, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.22);
    my.set((e.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`relative group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm tracking-wide overflow-hidden cursor-pointer transition-shadow duration-300 ${
        isPrimary
          ? 'bg-[#1A17DE] text-white hover:shadow-[0_0_50px_rgba(26,23,222,0.55)]'
          : 'bg-white/5 text-[#E2E8F0]/80 border border-white/15 hover:bg-white/10 hover:text-white'
      } ${className}`}
    >
      {/* Gradient shine overlay */}
      {isPrimary && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a48ff] via-[#1A17DE] to-[#0f0dd4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Horizontal shine sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </motion.button>
  );
}
