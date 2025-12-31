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
    <section id="authors" className="relative py-24 md:py-32 px-6 lg:px-12 bg-[var(--color-paper-warm)]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
              Meet The Authors
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)]">
            World-Class Researchers
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
              <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group-hover:-translate-y-2">
                {/* Photo */}
                <div className="relative w-28 h-32 mx-auto mb-6 rounded-xl overflow-hidden ring-1 ring-[var(--color-border)]">
                  <img
                    src={author.img}
                    alt={author.name}
                    className="w-full h-full object-cover object-top"
                  />
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
                    className="inline-flex items-center gap-2 text-[0.8125rem] text-[var(--color-text-tertiary)] hover:text-[var(--color-brand-primary)] transition-colors duration-300"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                </div>
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
