"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiZap } from "react-icons/fi";

const whyNowCards = [
  {
    title: "Global Shift to Frugality",
    description: "Economic uncertainties and resource constraints are making frugal innovation not just smart, but essential for business survival.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    stat: "73%",
    statLabel: "of startups prioritize efficiency",
  },
  {
    title: "India's Innovation Moment",
    description: "India's startup ecosystem is proving that world-class innovation doesn't require Silicon Valley-sized budgets or resources.",
    icon: <FiGlobe className="w-6 h-6" />,
    stat: "$100B+",
    statLabel: "ecosystem valuation",
  },
  {
    title: "The Constraint Advantage",
    description: "Companies born in constraints are outperforming their well-funded peers by building resilient, efficient business models from day one.",
    icon: <FiZap className="w-6 h-6" />,
    stat: "2.5x",
    statLabel: "higher survival rate",
  },
];

export default function WhyNowSection() {
  return (
    <section id="why-now" className="relative py-32 px-6 lg:px-24 bg-white">
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--outline-muted)] to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
                The Timing
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] text-[var(--color-brand-primary)] mb-8">
              Why Now?
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              The world is discovering what Indian entrepreneurs have always known: <span className="font-semibold text-[var(--color-brand-accent)]">scarcity breeds genius.</span>
            </p>
          </motion.div>

          {/* Diamond Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="w-4 h-4 border-2 border-[var(--color-brand-accent)] rotate-45 opacity-40" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyNowCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="relative bg-transparent border-2 border-[var(--outline-muted)] p-12 rounded-xl hover:border-[var(--color-brand-primary)] transition-all duration-500 group"
            >
              {/* Corner Accents on Hover */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--color-brand-accent)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--color-brand-accent)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Icon Container - Outline Circle */}
              <div className="w-14 h-14 rounded-full bg-transparent border-2 border-[var(--color-brand-primary)] flex items-center justify-center text-[var(--color-brand-primary)] mb-10 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-all duration-500">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.06em] text-[var(--color-brand-primary)] mb-6">
                {card.title}
              </h3>

              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 min-h-[80px]">
                {card.description}
              </p>

              {/* Stat Divider - Fine Hairline */}
              <div className="pt-8 border-t border-[var(--outline-light)]">
                <span className="block text-3xl font-serif font-semibold tracking-tight text-[var(--color-brand-accent)] mb-2">
                  {card.stat}
                </span>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
                  {card.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
