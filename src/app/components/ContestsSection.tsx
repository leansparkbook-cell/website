"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiZap, FiCheck, FiMail, FiArrowRight } from "react-icons/fi";

const contests = [
  {
    title: "The LeanSpark Story Challenge",
    subtitle: "Share Your Innovation Story",
    description: "Share your (or someone else's with due credit) most creative low-cost, high-impact innovation that solves a real problem.",
    icon: <FiBookOpen className="w-5 h-5" />,
    status: "Active",
    participants: "Open to All",
    prizes: [
      "One-to-one mentorship session with an author",
      "A signed copy of the book",
      "An invite to JLF 2026",
      "A LinkedIn post by any of the authors",
    ],
  },
  {
    title: "The Leanest Spark Contest",
    subtitle: "₹1,000 Challenge",
    description: "If you had ₹1,000, which problem would you choose to solve and how?",
    icon: <FiZap className="w-5 h-5" />,
    status: "Active",
    participants: "Open to All",
    prizes: [
      "One-to-one mentorship session with an author",
      "A signed copy of the book",
      "An invite to JLF 2026",
      "A LinkedIn post by any of the authors",
    ],
  },
];

export default function ContestsSection() {
  return (
    <section
      id="contests"
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-[var(--color-paper-warm)]"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
              Participate and win
            </span>
            <span className="w-8 h-[2px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-6">
            Win Big with <span className="text-[var(--color-brand-accent)]">LeanSpark</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Showcase your frugal innovation skills and win exciting prizes
          </p>
        </motion.div>

        {/* Contest Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contests.map((contest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-8 md:p-10 flex flex-col border border-[#BD2220]/[0.12] shadow-[0_0_0_1px_rgba(189,34,32,0.04)] transition-all duration-300 group-hover:border-[#BD2220]/[0.25] group-hover:shadow-[var(--shadow-lg)] group-hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-primary)] flex items-center justify-center text-white">
                    {contest.icon}
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[0.6875rem] font-semibold text-emerald-700 tracking-wide uppercase">
                      {contest.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-[-0.02em] text-[var(--color-brand-primary)] mb-2">
                  {contest.title}
                </h3>
                <p className="text-[0.875rem] font-semibold text-[var(--color-brand-accent)] mb-4">
                  {contest.subtitle}
                </p>

                {/* Description - fixed height ensures alignment across cards */}
                <p className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed mb-8 lg:min-h-[4.5rem]">
                  {contest.description}
                </p>

                {/* Prizes */}
                <div className="mb-8 p-6 rounded-xl bg-[var(--color-paper-warm)] border border-[var(--color-border)]">
                  <h4 className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-4">
                    What You Win
                  </h4>
                  <ul className="space-y-3">
                    {contest.prizes.map((prize, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-brand-accent)]/10 flex items-center justify-center mt-0.5">
                          <FiCheck className="w-3 h-3 text-[var(--color-brand-accent)]" />
                        </span>
                        <span className="text-[0.875rem] text-[var(--color-brand-primary)]">{prize}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* Participants Tag */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[0.75rem] px-3 py-1.5 rounded-full bg-[var(--color-brand-primary)]/5 text-[var(--color-text-secondary)] font-medium">
                    {contest.participants}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href="mailto:avnie.g@gmail.com?subject=LeanSpark Contest Entry"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-semibold text-[0.9375rem] hover:bg-[var(--color-brand-primary)] hover:text-white transition-all duration-300 group/btn"
                >
                  Participate
                  <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
            <FiMail className="w-4 h-4 text-[var(--color-brand-accent)]" />
            <span className="text-[0.875rem] text-[var(--color-text-secondary)]">
              For queries or submissions:{" "}
              <a
                href="mailto:avnie.g@gmail.com"
                className="font-semibold text-[var(--color-brand-primary)] hover:text-[var(--color-brand-accent)] transition-colors"
              >
                avnie.g@gmail.com
              </a>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
