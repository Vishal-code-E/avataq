'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CountdownTimer } from '@/components/CountdownTimer';
import { WaitlistModal } from '@/components/WaitlistModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setNavVisible(current < lastScrollY.current || current < 60);
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BackgroundEffects />

      {/* Nav */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 px-5 py-4"
        animate={{ y: navVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="flex items-center justify-between px-4 py-2.5 rounded-2xl"
            style={{
              background: 'rgba(8,8,14,0.88)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/AVATAQ2logo.png"
                alt="AVATAQ"
                width={32}
                height={32}
                style={{ height: 'auto' }}
                priority
              />
              <span className="text-white font-bold text-sm tracking-tight">AVATAQ</span>
            </div>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7">
              {['Home', 'Case Studies', 'About Us', 'Services'].map((link, i) => (
                <button
                  key={link}
                  className="text-sm font-medium transition-colors"
                  style={{ color: i === 0 ? '#5A57FF' : 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => { if (i !== 0) (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { if (i !== 0) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <button
              onClick={open}
              className="px-5 py-2 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: '#1A17DE' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center px-5 pt-28 pb-16 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-8">

            {/* Left: text content */}
            <div className="flex-1 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-black text-white leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(3rem, 6.5vw, 5.75rem)' }}
              >
                The operating<br />
                system for<br />
                <em style={{ fontStyle: 'italic', color: '#1A17DE' }}>AI-native</em>{' '}
                business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/50 text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
              >
                An OS — not a stack of disconnected automation. Agents share a kernel:
                identity, policy, observability, and a graph of every workflow your
                business runs on.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3 mb-14"
              >
                <button
                  onClick={open}
                  className="px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.13)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                >
                  Get Started
                </button>
                <button
                  onClick={open}
                  className="px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#1A17DE' }}
                >
                  Know More
                </button>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.38 }}
                className="flex flex-col gap-4"
              >
                <p className="text-white/25 text-[10px] uppercase tracking-[0.28em] font-medium">
                  Launching In
                </p>
                <CountdownTimer />
              </motion.div>
            </div>

            {/* Right: geometric decoration */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative shrink-0"
              style={{ width: 300, height: 360 }}
            >
              {/* Row 1 */}
              <div className="absolute" style={{ top: 0, right: 0, width: 118, height: 118, background: 'rgba(200,205,230,0.1)' }} />
              <div className="absolute" style={{ top: 0, right: 118, width: 118, height: 118, background: 'rgba(200,205,230,0.1)' }} />
              {/* Row 2 */}
              <div className="absolute" style={{ top: 118, right: 0, width: 118, height: 118, background: '#1A17DE' }} />
              <div className="absolute" style={{ top: 118, right: 118, width: 118, height: 118, background: 'rgba(200,205,230,0.06)' }} />
              {/* Row 3 */}
              <div className="absolute" style={{ top: 236, right: 0, width: 118, height: 118, background: 'rgba(200,205,230,0.06)' }} />
            </motion.div>
          </div>
        </section>

        {/* Dashboard preview */}
        <section className="px-5 pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(8,8,16,0.96)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Toolbar */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2.5">
                  <Image src="/AVATAQ2logo.png" alt="AVATAQ" width={17} height={17} style={{ height: 'auto' }} />
                  <span className="text-white/55 text-xs font-semibold">AVATAQ</span>
                  <span className="text-white/25 text-xs font-mono">Customer defect analytics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-white/25 text-xs font-mono">100%</span>
                  <button
                    className="px-3 py-1 rounded-md text-white text-xs font-semibold"
                    style={{ background: '#1A17DE' }}
                  >
                    Share
                  </button>
                </div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div
                  className="flex flex-col items-center gap-5 py-5 px-3 shrink-0"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.06)', width: 48 }}
                >
                  {[
                    <svg key="grid" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={1.8}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
                    <svg key="bolt" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#1A17DE" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
                    <svg key="db" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={1.8}><ellipse cx="12" cy="5" rx="9" ry="3"/><path strokeLinecap="round" d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path strokeLinecap="round" d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>,
                    <svg key="doc" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
                    <svg key="cog" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>,
                  ]}
                </div>

                {/* Canvas */}
                <div
                  className="flex-1 relative overflow-hidden"
                  style={{
                    height: 210,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                >
                  {/* Nodes row */}
                  <div className="absolute inset-0 flex items-center gap-0 px-10">

                    {/* Node: Daily Trigger */}
                    <div
                      className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl shrink-0"
                      style={{
                        background: 'rgba(22,22,36,0.95)',
                        border: '1px solid rgba(255,255,255,0.11)',
                        minWidth: 152,
                      }}
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.55)" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold">Daily Trigger</div>
                        <div className="text-white/35 text-[10px] font-mono">09:00 AM</div>
                      </div>
                    </div>

                    {/* Connector */}
                    <svg width="56" height="2" className="shrink-0"><line x1="0" y1="1" x2="56" y2="1" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 4"/></svg>

                    {/* Node: Ingest */}
                    <div
                      className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl shrink-0"
                      style={{
                        background: 'rgba(22,22,36,0.95)',
                        border: '1px solid rgba(255,255,255,0.11)',
                        minWidth: 152,
                      }}
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.55)" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold">Ingest</div>
                        <div className="text-white/35 text-[10px]">App reviews</div>
                      </div>
                    </div>

                    {/* Connector */}
                    <svg width="56" height="2" className="shrink-0"><line x1="0" y1="1" x2="56" y2="1" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 4"/></svg>

                    {/* Node: Python (active) */}
                    <div
                      className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl shrink-0"
                      style={{
                        background: 'rgba(26,23,222,0.18)',
                        border: '1px solid rgba(26,23,222,0.5)',
                        minWidth: 152,
                      }}
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(26,23,222,0.3)' }}>
                        <span className="text-[#7B78FF] text-[9px] font-bold font-mono">{'</>'}</span>
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold">Python</div>
                        <div className="text-[#7B78FF]/70 text-[10px]">PII redaction</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-5 border-t border-white/5 text-center">
          <div className="flex items-center justify-center mb-3">
            <Image src="/AVATAQ2logo.png" alt="AVATAQ Logo" width={36} height={36} style={{ height: 'auto' }} />
          </div>
          <p className="text-white/20 text-xs">© 2026 AVATAQ.AI — All rights reserved.</p>
        </footer>
      </main>

      <WaitlistModal isOpen={isModalOpen} onClose={close} />
    </>
  );
}
