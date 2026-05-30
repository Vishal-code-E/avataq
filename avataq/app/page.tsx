'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { AvataqLogo } from '@/components/AvataqLogo';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CountdownTimer } from '@/components/CountdownTimer';
import { CTAButton } from '@/components/CTAButton';
import { FeatureCards } from '@/components/FeatureCards';
import { SocialProof } from '@/components/SocialProof';
import { WaitlistModal } from '@/components/WaitlistModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <>
      <BackgroundEffects />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AvataqLogo size={32} />
            <span className="text-white font-bold text-lg tracking-tight">AVATAQ.AI</span>
          </div>
          <CTAButton onClick={open} variant="ghost">
            Join Waitlist
          </CTAButton>
        </div>
      </nav>

      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-20">

          {/* Launch badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
              style={{
                color: '#5A57FF',
                background: 'rgba(26,23,222,0.1)',
                border: '1px solid rgba(26,23,222,0.25)',
              }}
            >
              <Zap className="w-3 h-3" />
              Coming August 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 tracking-tight leading-[1.05]"
          >
            The Future of
            <br />
            <span className="text-brand-blue">Autonomous</span>
            <br />
            Execution
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-slate/55 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Build Faster. Scale Smarter. Operate with AI.{' '}
            <span className="text-white/75 font-medium">AVATAQ.AI</span> creates autonomous
            AI teams that design, build, automate, and scale your business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <CTAButton onClick={open}>
              Join the Waitlist <ArrowRight className="w-4 h-4" />
            </CTAButton>
            <CTAButton onClick={() => {}} variant="ghost">
              Learn More
            </CTAButton>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-5"
          >
            <p className="text-brand-slate/30 text-[10px] sm:text-xs uppercase tracking-[0.28em] font-medium">
              Launching In
            </p>
            <CountdownTimer />
          </motion.div>
        </section>

        {/* Social proof */}
        <SocialProof />

        {/* Feature cards */}
        <FeatureCards />

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-white/6 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <AvataqLogo size={22} />
            <span className="text-white/50 text-sm font-semibold tracking-tight">AVATAQ.AI</span>
          </div>
          <p className="text-white/20 text-xs">
            © 2026 AVATAQ.AI — All rights reserved.
          </p>
        </footer>
      </main>

      <WaitlistModal isOpen={isModalOpen} onClose={close} />
    </>
  );
}
