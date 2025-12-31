"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiDownload, FiTarget, FiGlobe, FiTrendingUp } from "react-icons/fi";

// Elegant audience data with professional icons
const audienceData = [
  { label: "Start-up Founders", Icon: FiTarget },
  { label: "Social Entrepreneurs", Icon: FiGlobe },
  { label: "Corporate Innovators", Icon: FiTrendingUp }
];
import Image from "next/image";

export default function CanvasSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/FICREAL.svg";
    link.download = "Frugal-Innovation-Canvas.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="canvas" className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[var(--color-brand-accent)]/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-l border-t border-[var(--color-brand-primary)]/[0.06] hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-r border-b border-[var(--color-brand-primary)]/[0.06] hidden lg:block" />

      <div className="relative max-w-[980px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
              Your Innovation Blueprint
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.04em] text-[var(--color-brand-primary)] mb-4"
            style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
          >
            Frugal Innovation Canvas
          </h2>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            A strategic framework to transform constraints into competitive advantages
          </p>
        </motion.div>

        {/* Canvas Display Container - 30% smaller */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative mb-12 md:mb-16"
        >
          {/* Main Frame */}
          <div className="relative bg-gradient-to-br from-[#FAFAF8] via-white to-[#F8F7F4] rounded-2xl p-3 md:p-4 shadow-[0_16px_60px_-16px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)]">
            {/* Inner frame */}
            <div className="relative bg-white rounded-xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-brand-accent)]/15 via-transparent to-[var(--color-brand-primary)]/10 p-[1px]">
                <div className="w-full h-full bg-white rounded-xl" />
              </div>

              {/* Canvas Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16/11" }}
              >
                {/* Loading skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-paper-warm)] to-white animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-accent)]/30 border-t-[var(--color-brand-accent)] animate-spin" />
                  </div>
                )}

                <Image
                  src="/FICREAL.svg"
                  alt="Frugal Innovation Canvas - A strategic framework for lean innovation"
                  fill
                  className={`object-contain p-3 md:p-5 transition-all duration-700 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  priority
                />
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-5 h-5 border-l-2 border-t-2 border-[var(--color-brand-accent)]/20 rounded-tl-sm" />
              <div className="absolute top-2 right-2 w-5 h-5 border-r-2 border-t-2 border-[var(--color-brand-accent)]/20 rounded-tr-sm" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-l-2 border-b-2 border-[var(--color-brand-accent)]/20 rounded-bl-sm" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-r-2 border-b-2 border-[var(--color-brand-accent)]/20 rounded-br-sm" />
            </div>
          </div>
        </motion.div>

        {/* Description & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#FAFAF8] to-[#F5F4F0] rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className="relative">
              {/* Description - Two paragraphs as requested */}
              <div className="text-center mb-8 space-y-3">
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                  This canvas helps you break down ideas into practical steps, identify the core problem,
                  understand your audience, embrace constraints and craft lean solutions.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                  From key resources to revenue models and channels of delivery, each box nudges you to{" "}
                  <span className="text-[var(--color-brand-primary)] font-medium">
                    innovate under real-world pressures
                  </span>.
                </p>
              </div>

              {/* Audience Tags - Elegant icons instead of emojis */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                {audienceData.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-brand-primary)] shadow-sm hover:shadow-md hover:border-[var(--color-brand-accent)]/30 transition-all duration-300 cursor-default">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-brand-primary)]/[0.06] group-hover:bg-[var(--color-brand-accent)]/[0.1] transition-colors duration-300">
                        <item.Icon className="w-3 h-3 text-[var(--color-brand-primary)]/70 group-hover:text-[var(--color-brand-accent)] transition-colors duration-300" />
                      </span>
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tagline */}
              <p
                className="text-center text-base md:text-lg font-semibold text-[var(--color-brand-primary)] mb-8"
                style={{ fontFamily: "var(--font-spectral), Georgia, serif" }}
              >
                Turn limitations into{" "}
                <span className="text-[var(--color-brand-accent)]">launch pads</span>
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--color-border)]" />
                <div className="w-1 h-1 rotate-45 bg-[var(--color-brand-accent)]/40" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--color-border)]" />
              </div>

              {/* Download Button - Now at bottom */}
              <div className="flex justify-center">
                <motion.button
                  onClick={handleDownload}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-[var(--color-brand-primary)] text-white rounded-full font-medium text-sm overflow-hidden shadow-lg shadow-[var(--color-brand-primary)]/20 hover:shadow-xl hover:shadow-[var(--color-brand-primary)]/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <FiDownload className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Canvas</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
