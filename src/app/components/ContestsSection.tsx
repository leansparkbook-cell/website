"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiZap, FiCheck, FiMail, FiArrowRight } from "react-icons/fi";

const contests = [
  {
    title: "The LeanSpark Story Challenge",
    subtitle: "Share Your Innovation Story",
    description: "Share your (or someone else's with due credit) most creative low-cost, high-impact innovation that solves a real problem.",
    icon: <FiBookOpen className="w-6 h-6" />,
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
    icon: <FiZap className="w-6 h-6" />,
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
      className="relative py-32 px-6 md:px-20 bg-[var(--color-paper)]"
    >
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--outline-muted)] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.9rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
              Participate & Win
            </span>
            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] mb-6 leading-tight text-[var(--color-brand-primary)]">
            Win Big with <span className="text-[var(--color-brand-accent)]">LeanSpark</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Showcase your frugal innovation skills and win exciting prizes
          </p>

          {/* Diamond Separator */}
          <div className="flex justify-center mt-8">
            <div className="w-3 h-3 border-2 border-[var(--color-brand-accent)] rotate-45 opacity-60" />
          </div>
        </motion.div>

        {/* Contest Cards - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {contests.map((contest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
              className="relative bg-transparent border-2 border-[var(--outline-muted)] rounded-2xl p-10 hover:border-[var(--color-brand-primary)] transition-all duration-500 group flex flex-col h-full"
            >
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[var(--color-brand-accent)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[var(--color-brand-accent)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Header Row */}
              <div className="flex items-start justify-between mb-6">
                {/* Contest Icon - Outline Circle */}
                <div className="w-14 h-14 rounded-full bg-transparent border-2 border-[var(--color-brand-primary)] flex items-center justify-center text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-all duration-500">
                  {contest.icon}
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-50/50">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-700 tracking-wide">
                    {contest.status}
                  </span>
                </div>
              </div>

              {/* Title and Subtitle */}
              <h3 className="text-2xl font-semibold tracking-[-0.06em] text-[var(--color-brand-primary)] mb-2">
                {contest.title}
              </h3>
              <p className="text-sm text-[var(--color-brand-accent)] font-medium mb-5">
                {contest.subtitle}
              </p>

              {/* Description - Fixed height for consistency */}
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 min-h-[72px]">
                {contest.description}
              </p>

              {/* Prizes Section */}
              <div className="mb-8 p-6 rounded-xl bg-[var(--color-brand-bg)] border border-[var(--outline-light)]">
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-4">
                  What You Win
                </h4>
                <ul className="space-y-3">
                  {contest.prizes.map((prize, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[var(--color-brand-accent)] flex items-center justify-center mt-0.5">
                        <FiCheck className="w-3 h-3 text-[var(--color-brand-accent)]" />
                      </span>
                      <span className="text-sm text-[var(--color-brand-primary)]">{prize}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer to push content to bottom */}
              <div className="flex-grow" />

              {/* Participants Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs px-3 py-1.5 rounded-full border border-[var(--outline-muted)] text-[var(--color-text-secondary)] font-semibold">
                  {contest.participants}
                </span>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:avnie.g@gmail.com?subject=LeanSpark Contest Entry"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] font-medium hover:bg-[var(--color-brand-primary)] hover:text-white transition-all duration-500 group/btn"
              >
                Participate
                <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.23, 1, 0.32, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--outline-muted)] bg-white">
            <FiMail className="w-4 h-4 text-[var(--color-brand-accent)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              For queries or submissions:{" "}
              <a
                href="mailto:avnie.g@gmail.com"
                className="font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-accent)] transition-colors"
              >
                avnie.g@gmail.com
              </a>
            </span>
          </div>

          <p className="text-sm text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed mt-8">
            All entries will be featured in the LeanSpark community showcase.
            <br />
            Winners will receive mentorship from the authors and a chance to present at JLF 2026.
          </p>

          {/* Decorative Diamond */}
          <div className="flex justify-center mt-8">
            <div className="w-2 h-2 border border-[var(--color-brand-accent)] rotate-45 opacity-40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
