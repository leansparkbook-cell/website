"use client";

import { motion } from "framer-motion";

const authors = [
  {
    name: "Jaideep Prabhu",
    title: "Professor of Marketing",
    institution: "Cambridge University",
    img: "/images/jaideep.svg",
  },
  {
    name: "Priyank Narayan",
    title: "Director, Centre for Entrepreneurship",
    institution: "Ashoka University",
    img: "/images/priyank.svg",
  },
  {
    name: "Mukesh Sud",
    title: "Professor of Entrepreneurship",
    institution: "IIM Ahmedabad",
    img: "/images/mukesh.svg",
  },
];

export default function AuthorsSection() {
  return (
    <section id="authors" className="relative py-32 px-6 lg:px-24 bg-[var(--color-brand-bg)]">
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--outline-muted)] to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
              Meet The Authors
            </span>
            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.06em] text-[var(--color-brand-primary)] mb-8">
            The Authors
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {authors.map((author, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group flex"
            >
              {/* Card Container */}
              <div className="relative bg-[var(--color-paper-cream)] rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 w-full flex flex-col">

                {/* Aesthetic Photo Frame */}
                <div className="relative mx-auto mb-6 w-fit flex-shrink-0">
                  {/* Outer decorative border */}
                  <div className="absolute -inset-3 border border-[var(--color-brand-accent)]/20 rounded-xl" />

                  {/* Inner photo container */}
                  <div className="relative">
                    {/* Photo with elegant inset frame */}
                    <div className="relative w-36 h-44 lg:w-40 lg:h-48 overflow-hidden rounded-lg ring-1 ring-[var(--color-brand-primary)]/10 ring-offset-4 ring-offset-[var(--color-paper-cream)]">
                      <img
                        src={author.img}
                        alt={author.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Subtle inner shadow for depth */}
                      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
                    </div>

                    {/* Gold accent corner */}
                    <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[var(--color-brand-gold)] rounded-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Small diamond divider */}
                <div className="flex justify-center mb-5">
                  <div className="w-2 h-2 border border-[var(--color-brand-accent)] rotate-45 opacity-40" />
                </div>

                {/* Author Info */}
                <div className="text-center flex-grow flex flex-col justify-between">
                  <div>
                    {/* Author Name */}
                    <h3 className="text-xl lg:text-2xl font-semibold tracking-[-0.06em] text-[var(--color-brand-primary)] mb-3">
                      {author.name}
                    </h3>

                    {/* Title */}
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-1.5 whitespace-nowrap">
                      {author.title}
                    </p>
                  </div>

                  {/* Institution */}
                  <p className="text-sm text-[var(--color-brand-accent)] font-medium font-serif italic">
                    {author.institution}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-brand-accent)]/30 to-transparent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
