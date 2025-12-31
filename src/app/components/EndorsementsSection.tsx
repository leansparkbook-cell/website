"use client";

import { motion } from "framer-motion";
import {
  EndorsementCarousel,
  EndorsementCard,
  Endorsement,
} from "@/components/ui/endorsement-carousel";

const endorsements: Endorsement[] = [
  {
    name: "Sanjeev Bhikchandani",
    designation: "Founder, Naukri.com; Founder and Trustee, Ashoka University",
    quote:
      "LeanSpark speaks to the India that is rising — resource aware, ambitious and confident.",
  },
  {
    name: "Dr Yusuf Hamied",
    designation: "Non-Executive Chairman of Cipla Ltd.",
    quote:
      "India has both the opportunity and the responsibility to pioneer innovation that is affordable, scalable, and humane. LeanSpark captures this mission with clarity and conviction, combining rich stories with a thoughtful framework for action. It is a timely guide for entrepreneurs, policymakers, and business leaders who want India's rise to be measured not only in GDP, but in lives improved.",
  },
  {
    name: "Coming Soon",
    designation: "To be announced",
    quote:
      "More endorsements from distinguished leaders will be revealed soon. Stay tuned for additional perspectives on LeanSpark and its vision for frugal innovation.",
  },
];

// Paper texture background for the retro aesthetic
const paperTextureUrl = "https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop";

export default function EndorsementsSection() {
  const cards = endorsements.map((endorsement, index) => (
    <EndorsementCard
      key={endorsement.name}
      endorsement={endorsement}
      index={index}
      backgroundImage={paperTextureUrl}
      onCardClose={() => {}}
    />
  ));

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[var(--color-brand-accent)]"
            />
            <span className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
              Praise for the Book
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[var(--color-brand-accent)]"
            />
          </div>

          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] text-[var(--color-brand-primary)] mb-6">
            Endorsements
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            What leading voices in business, academia, and innovation are saying about{" "}
            <span className="font-semibold text-[var(--color-brand-accent)]">LeanSpark</span>
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <EndorsementCarousel items={cards} />
        </motion.div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
