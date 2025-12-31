"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Magnetic button effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section
      id="about"
      className="relative py-32 md:py-40 px-6 lg:px-12 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[1px] bg-[var(--color-brand-accent)]"
            />
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
              The Framework
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[1px] bg-[var(--color-brand-accent)]"
            />
          </div>

          {/* Main Question */}
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-[-0.04em] text-[var(--color-brand-primary)] mb-6">
            What is{" "}
            <span className="relative inline-block">
              LeanSpark
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[var(--color-brand-accent)]/40 origin-left rounded-full"
              />
            </span>
            ?
          </h2>
        </motion.div>

        {/* Definition Statement - Clean, no decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-[1.5] tracking-[-0.015em] text-[var(--color-text-secondary)]">
            It is the intentional spark of innovation that emerges under constraints.
          </p>
        </motion.div>

        {/* Magnetic Read More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            ref={buttonRef}
            onClick={() => setIsModalOpen(true)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="group relative px-8 py-4 rounded-full font-semibold text-[0.9375rem] overflow-hidden"
          >
            {/* Background layers */}
            <span className="absolute inset-0 bg-[var(--color-brand-primary)] rounded-full" />

            {/* Shine effect on hover */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "100%" : "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Glow effect */}
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: isHovered
                  ? "0 0 40px rgba(38, 56, 141, 0.4), 0 0 80px rgba(38, 56, 141, 0.2)"
                  : "0 0 0px rgba(38, 56, 141, 0)"
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3 text-white">
              <span>Read More</span>
              <motion.span
                animate={{
                  x: isHovered ? 4 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <FiArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl w-full max-w-xl overflow-hidden pointer-events-auto shadow-2xl"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-[var(--color-brand-primary)] via-[var(--color-brand-accent)] to-[var(--color-brand-primary)]" />

                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--color-paper-warm)] transition-colors z-10"
                >
                  <FiX className="w-5 h-5 text-[var(--color-text-secondary)]" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-[2px] bg-[var(--color-brand-accent)]" />
                      <span className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)]">
                        Definition
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-6">
                      What is LeanSpark?
                    </h3>
                  </motion.div>

                  {/* Body */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="space-y-5"
                  >
                    <p className="text-lg font-medium text-[var(--color-brand-primary)] leading-relaxed">
                      It is the intentional spark of innovation that emerges under constraints.
                    </p>

                    <div className="w-12 h-[1px] bg-[var(--color-border-strong)]" />

                    <p className="text-[var(--color-text-secondary)] leading-[1.8]">
                      It is a contemporary framework for innovation that is rooted in{" "}
                      <span className="font-semibold text-[var(--color-brand-primary)]">frugality</span>,{" "}
                      <span className="font-semibold text-[var(--color-brand-primary)]">adaptability</span> and{" "}
                      <span className="font-semibold text-[var(--color-brand-primary)]">purposeful ingenuity</span>.
                    </p>

                    <p className="text-[var(--color-text-secondary)] leading-[1.8]">
                      While it carries forward the spirit of{" "}
                      <span className="italic font-medium text-[var(--color-brand-accent)]">jugaad</span>—the Indian ethos of improvisational problem-solving—LeanSpark moves beyond makeshift fixes to solutions that are lean, scalable and sustainable.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />
    </section>
  );
}
