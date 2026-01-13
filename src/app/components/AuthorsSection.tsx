"use client";

import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";

const authors = [
  {
    name: "Jaideep Prabhu",
    title: "Professor of Marketing",
    institution: "Cambridge University",
    img: "/images/jaideep.svg",
    linkedin: "https://www.linkedin.com/in/jaideep-prabhu-94b3102/",
  },
  {
    name: "Priyank Narayan",
    title: "Director, Centre for Entrepreneurship",
    institution: "Ashoka University",
    img: "/images/priyank.svg",
    linkedin: "https://www.linkedin.com/in/priyankn/",
  },
  {
    name: "Mukesh Sud",
    title: "Professor of Entrepreneurship",
    institution: "IIM Ahmedabad",
    img: "/images/mukesh.svg",
    linkedin: "https://www.linkedin.com/in/prof-mukesh-sud/",
  },
];

export default function AuthorsSection() {
  return (
    <section id="authors" className="relative py-24 md:py-32 px-6 lg:px-12 bg-gradient-to-b from-[var(--color-paper-warm)] to-white overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      {/* Decorative elements - minimal and classy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left accent */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.14, 0.08]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-gradient-to-br from-[#C4A962]/10 to-transparent blur-2xl"
        />

        {/* Top right accent */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-[#26388D]/8 to-transparent blur-2xl"
        />

        {/* Bottom center accent */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[#BD2220]/6 to-transparent blur-3xl"
        />

        {/* Subtle sparkles */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[15%] w-1 h-1 rounded-full bg-[#C4A962]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[35%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#26388D]"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] left-[20%] w-1 h-1 rounded-full bg-[#BD2220]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[25%] right-[12%] w-1 h-1 rounded-full bg-[#C4A962]"
        />

        {/* Geometric line accents */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-[12%] right-[25%] w-16 h-16"
          viewBox="0 0 40 40"
        >
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="#C4A962"
            strokeWidth="0.5"
            fill="none"
            opacity="0.15"
            strokeDasharray="3 6"
          />
        </motion.svg>

        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-[35%] left-[12%] w-12 h-12"
          viewBox="0 0 40 40"
        >
          <circle
            cx="20"
            cy="20"
            r="12"
            stroke="#26388D"
            strokeWidth="0.5"
            fill="none"
            opacity="0.12"
            strokeDasharray="2 5"
          />
        </motion.svg>
      </div>

      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[var(--color-brand-accent)] to-[var(--color-brand-accent)]"
            />
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
              The Brain and the Heart behind
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[1.5px] bg-gradient-to-l from-transparent via-[var(--color-brand-accent)] to-[var(--color-brand-accent)]"
            />
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] relative inline-block">
            Meet the Authors
            {/* Subtle underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C4A962]/30 to-transparent origin-center rounded-full"
            />
          </h2>
        </motion.div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-[0_2px_8px_rgba(38,56,141,0.04),0_4px_16px_rgba(38,56,141,0.03)] hover:shadow-[0_8px_24px_rgba(38,56,141,0.08),0_16px_48px_rgba(38,56,141,0.06)] hover:border-[var(--color-border-strong)] transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A962]/[0.02] via-transparent to-[#26388D]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#C4A962]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle texture on card */}
                <div className="absolute inset-0 opacity-[0.012] pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                  }} />
                </div>

                {/* Photo */}
                <div className="relative w-28 h-32 mx-auto mb-6 rounded-xl overflow-hidden ring-2 ring-[var(--color-border)] group-hover:ring-[#C4A962]/30 transition-all duration-500">
                  <img
                    src={author.img}
                    alt={author.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Photo glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26388D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-[var(--color-brand-primary)] mb-2">
                    {author.name}
                  </h3>

                  <p className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-1">
                    {author.title}
                  </p>

                  <p className="text-[0.875rem] text-[var(--color-brand-accent)] font-medium mb-4">
                    {author.institution}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-all duration-300 group/linkedin"
                  >
                    <FiLinkedin className="w-4 h-4 relative z-10" />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-[var(--color-brand-primary)]/20 blur-md opacity-0 group-hover/linkedin:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-24 bg-gradient-to-r from-transparent via-[#C4A962]/40 to-transparent transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
