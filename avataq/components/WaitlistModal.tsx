'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ArrowRight, Check, Loader2, Mail } from 'lucide-react';
import Image from 'next/image';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = 'idle' | 'loading' | 'success';

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setState('loading');
    await new Promise((r) => setTimeout(r, 1600));
    setState('success');
  };

  const handleClose = () => {
    if (state === 'loading') return;
    onClose();
    setTimeout(() => {
      setEmail('');
      setState('idle');
      setError('');
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-lg"
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="relative w-full max-w-md pointer-events-auto rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(8,8,18,0.97)',
                backdropFilter: 'blur(48px)',
                WebkitBackdropFilter: 'blur(48px)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow:
                  '0 40px 90px rgba(0,0,0,0.7), 0 0 120px rgba(26,23,222,0.18)',
              }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A17DE]/70 to-transparent" />

              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-10 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white/50" />
              </button>

              <div className="p-8 sm:p-10">
                <AnimatePresence mode="wait">
                  {state === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-center text-center py-6 gap-6"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 220,
                          damping: 14,
                          delay: 0.12,
                        }}
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(26,23,222,0.15)',
                          border: '1px solid rgba(26,23,222,0.4)',
                          boxShadow: '0 0 40px rgba(26,23,222,0.25)',
                        }}
                      >
                        <Check className="w-9 h-9 text-[#1A17DE]" strokeWidth={2.5} />
                      </motion.div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          You&apos;re on the list!
                        </h3>
                        <p className="text-[#E2E8F0]/55 text-sm leading-relaxed max-w-xs mx-auto">
                          We&apos;ll notify{' '}
                          <span className="text-[#5A57FF]">{email}</span> when
                          AVATAQ.AI launches. Get ready for the future.
                        </p>
                      </div>

                      <button
                        onClick={handleClose}
                        className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                      >
                        Close window
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-7"
                    >
                      {/* Header */}
                      <div className="flex flex-col items-center text-center gap-4">
                        <Image src="/AVATAQ2logo.png" alt="AVATAQ Logo" width={72} height={72} style={{ height: 'auto' }} />
                        <div>
                          <h2 className="text-2xl font-bold text-white tracking-tight">
                            Join the Waitlist
                          </h2>
                          <p className="text-[#E2E8F0]/45 text-sm mt-1.5 leading-relaxed">
                            Be first to experience autonomous AI execution.
                          </p>
                        </div>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                              }}
                              placeholder="Enter your email address"
                              autoComplete="email"
                              className="w-full rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                              style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: error
                                  ? '1px solid rgba(248,113,113,0.5)'
                                  : '1px solid rgba(255,255,255,0.1)',
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.border =
                                  '1px solid rgba(26,23,222,0.6)';
                                e.currentTarget.style.boxShadow =
                                  '0 0 0 3px rgba(26,23,222,0.12)';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.border = error
                                  ? '1px solid rgba(248,113,113,0.5)'
                                  : '1px solid rgba(255,255,255,0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            />
                          </div>
                          {error && (
                            <p className="text-red-400/90 text-xs mt-2 ml-1">
                              {error}
                            </p>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          disabled={state === 'loading'}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative w-full py-4 rounded-xl text-white font-semibold text-sm overflow-hidden group disabled:opacity-60 cursor-pointer"
                          style={{ background: '#1A17DE' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#4a48ff] to-[#1A17DE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {state === 'loading' ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Joining waitlist…
                              </>
                            ) : (
                              <>
                                Join Waitlist
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </span>
                        </motion.button>
                      </form>

                      <p className="text-center text-[#E2E8F0]/25 text-xs">
                        No spam. Unsubscribe anytime.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
