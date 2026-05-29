'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bot, BrainCircuit, Rocket } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Agentic AI Teams',
    description:
      'Create autonomous teams of AI specialists that collaborate, reason, and execute complex multi-step workflows — completely unsupervised.',
    accent: '#1A17DE',
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'AI Business Operating System',
    description:
      'Transform your entire business operations into intelligent, self-optimizing systems that learn from every interaction and continuously improve.',
    accent: '#6240FF',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'End-to-End Execution',
    description:
      'From idea to full deployment — AI handles design, development, testing, and launch with minimal human effort and maximum velocity.',
    accent: '#2D9CDB',
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-120, 120], [9, -9]);
  const ry = useTransform(mx, [-120, 120], [-9, 9]);
  const srx = useSpring(rx, { stiffness: 200, damping: 22 });
  const sry = useSpring(ry, { stiffness: 200, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1400 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.16, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-default select-none"
    >
      <div
        className="relative h-full rounded-3xl p-8 overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.35)',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Hover top-edge gradient glow */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${feature.accent}80, transparent)`,
          }}
        />

        {/* Radial glow at top center on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${feature.accent}1A 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div className="relative mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
            style={{
              background: `${feature.accent}18`,
              border: `1px solid ${feature.accent}35`,
            }}
          >
            <div style={{ color: feature.accent }}>{feature.icon}</div>
          </div>
          {/* Icon glow on hover */}
          <div
            className="absolute inset-0 w-12 h-12 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-400 blur-xl"
            style={{ background: feature.accent }}
          />
        </div>

        {/* Text content */}
        <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-[#E2E8F0]/48 text-sm leading-relaxed">{feature.description}</p>

        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(3,3,8,0.25), transparent)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function FeatureCards() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs uppercase tracking-[0.28em] text-[#1A17DE] font-semibold mb-4 block">
            What&apos;s Coming
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Built for the Future
          </h2>
          <p className="text-[#E2E8F0]/45 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
            Three pillars of autonomous intelligence, engineered to transform how
            businesses operate at scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
