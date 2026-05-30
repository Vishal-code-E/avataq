'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';

const LAUNCH_DATE = new Date('2026-06-04T00:00:00');

function TimeUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        {/* Glass card */}
        <div
          className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] md:w-[100px] md:h-[100px] rounded-2xl flex items-center justify-center overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.span
              key={value}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 360, damping: 28 }}
              className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-white tabular-nums"
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Blue underglow */}
        <div
          className="absolute -inset-1 rounded-2xl -z-10 opacity-35 blur-2xl"
          style={{ background: 'rgba(26,23,222,0.6)' }}
        />
      </div>

      <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E2E8F0]/35 font-medium">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <motion.div
      className="flex flex-col gap-1.5 self-center mb-6 sm:mb-7"
      animate={{ opacity: [1, 0.15, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#1A17DE]" />
      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#1A17DE]" />
    </motion.div>
  );
}

export function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <div className="flex items-end gap-2 sm:gap-3 md:gap-5">
      <TimeUnit value={days} label="Days" />
      <Colon />
      <TimeUnit value={hours} label="Hours" />
      <Colon />
      <TimeUnit value={minutes} label="Minutes" />
      <Colon />
      <TimeUnit value={seconds} label="Seconds" />
    </div>
  );
}
