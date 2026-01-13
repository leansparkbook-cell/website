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
      {/* Electric Sparky Background - Hand-drawn style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lightning bolt 1 - top left */}
        <motion.svg
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-[12%] left-[12%] w-16 h-24 md:w-20 md:h-32"
          viewBox="0 0 40 60"
          fill="none"
        >
          <motion.path
            d="M20 2 L8 28 L18 28 L12 58 L32 24 L20 24 L28 2 Z"
            stroke="#C4A962"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.17"
            style={{ strokeDasharray: 200, strokeDashoffset: 0 }}
          />
        </motion.svg>

        {/* Lightning bolt 2 - top right */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-[15%] right-[15%] w-12 h-20 md:w-16 md:h-28 rotate-12"
          viewBox="0 0 40 60"
          fill="none"
        >
          <path
            d="M22 4 L10 26 L18 27 L14 56 L30 22 L21 22 L26 4 Z"
            stroke="#26388D"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.115"
          />
        </motion.svg>

        {/* Spark lines - sketchy style */}
        <motion.svg
          animate={{ opacity: [0.1, 0.17, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-[18%] w-32 h-8"
          viewBox="0 0 100 20"
        >
          <path
            d="M0 10 Q10 5, 20 10 T40 10 T60 10 T80 10 T100 10"
            stroke="#BD2220"
            strokeWidth="1.5"
            fill="none"
            opacity="0.14"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Electric dots/nodes */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.17, 0.29, 0.17] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[25%] w-2 h-2 rounded-full bg-[#C4A962]"
        />
        {/* Sketchy energy spark - right middle */}
        <motion.svg
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 8, 0],
            opacity: [0.14, 0.24, 0.14]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[38%] right-[18%] w-12 h-12 md:w-16 md:h-16"
          viewBox="0 0 40 40"
        >
          {/* Central spark with radiating hand-drawn lines */}
          <g stroke="#C4A962" strokeWidth="1.5" strokeLinecap="round" fill="none">
            {/* Core spark lines */}
            <path d="M20 8 L20 14" opacity="0.9" />
            <path d="M20 26 L20 32" opacity="0.9" />
            <path d="M8 20 L14 20" opacity="0.9" />
            <path d="M26 20 L32 20" opacity="0.9" />
            {/* Diagonal sparks - sketchy style */}
            <path d="M11 11 L15 15" opacity="0.7" />
            <path d="M25 25 L29 29" opacity="0.7" />
            <path d="M29 11 L25 15" opacity="0.7" />
            <path d="M15 25 L11 29" opacity="0.7" />
            {/* Inner mini sparks */}
            <path d="M17 17 L19 19" opacity="0.5" strokeWidth="1" />
            <path d="M21 21 L23 23" opacity="0.5" strokeWidth="1" />
            <path d="M21 17 L23 15" opacity="0.5" strokeWidth="1" />
            <path d="M17 23 L15 25" opacity="0.5" strokeWidth="1" />
          </g>
          {/* Center dot */}
          <circle cx="20" cy="20" r="2" fill="#C4A962" opacity="0.3" />
        </motion.svg>

        {/* Sketchy energy spark - left middle */}
        <motion.svg
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute top-[40%] left-[16%] w-12 h-12 md:w-16 md:h-16"
          viewBox="0 0 40 40"
        >
          {/* Central spark with radiating hand-drawn lines */}
          <g stroke="#26388D" strokeWidth="1.5" strokeLinecap="round" fill="none">
            {/* Core spark lines */}
            <path d="M20 8 L20 14" opacity="0.9" />
            <path d="M20 26 L20 32" opacity="0.9" />
            <path d="M8 20 L14 20" opacity="0.9" />
            <path d="M26 20 L32 20" opacity="0.9" />
            {/* Diagonal sparks - sketchy style */}
            <path d="M11 11 L15 15" opacity="0.7" />
            <path d="M25 25 L29 29" opacity="0.7" />
            <path d="M29 11 L25 15" opacity="0.7" />
            <path d="M15 25 L11 29" opacity="0.7" />
            {/* Inner mini sparks */}
            <path d="M17 17 L19 19" opacity="0.5" strokeWidth="1" />
            <path d="M21 21 L23 23" opacity="0.5" strokeWidth="1" />
            <path d="M21 17 L23 15" opacity="0.5" strokeWidth="1" />
            <path d="M17 23 L15 25" opacity="0.5" strokeWidth="1" />
          </g>
          {/* Center dot */}
          <circle cx="20" cy="20" r="2" fill="#26388D" opacity="0.25" />
        </motion.svg>

        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.14, 0.25, 0.14] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[38%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#BD2220]"
        />

        {/* Zigzag spark line - bottom */}
        <motion.svg
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-[25%] right-[15%] w-40 h-12 md:w-56 md:h-16"
          viewBox="0 0 150 30"
        >
          <path
            d="M0 15 L15 8 L30 22 L45 6 L60 18 L75 10 L90 20 L105 8 L120 16 L135 12 L150 15"
            stroke="#C4A962"
            strokeWidth="1.5"
            fill="none"
            opacity="0.14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Hand-drawn circle sparks */}
        <motion.svg
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[28%] right-[12%] w-20 h-20 md:w-28 md:h-28"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="18"
            stroke="#BD2220"
            strokeWidth="1"
            fill="none"
            opacity="0.07"
            strokeDasharray="3 8"
          />
        </motion.svg>

        {/* Sketchy lightning accent - left side */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-[50%] left-[10%] w-10 h-16 md:w-14 md:h-24"
          viewBox="0 0 30 50"
        >
          <path
            d="M15 0 L5 20 L12 20 L8 50"
            stroke="#C4A962"
            strokeWidth="2"
            fill="none"
            opacity="0.17"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Spark burst - top center */}
        <motion.svg
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.21, 0.12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32"
          viewBox="0 0 60 60"
        >
          <g stroke="#26388D" strokeWidth="1" fill="none" opacity="0.12">
            <line x1="30" y1="10" x2="30" y2="20" />
            <line x1="30" y1="40" x2="30" y2="50" />
            <line x1="10" y1="30" x2="20" y2="30" />
            <line x1="40" y1="30" x2="50" y2="30" />
            <line x1="16" y1="16" x2="22" y2="22" />
            <line x1="38" y1="38" x2="44" y2="44" />
            <line x1="44" y1="16" x2="38" y2="22" />
            <line x1="22" y1="38" x2="16" y2="44" />
          </g>
        </motion.svg>

        {/* Wavy electric line - bottom left */}
        <motion.svg
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-[18%] left-[12%] w-36 h-8 origin-left"
          viewBox="0 0 120 20"
        >
          <path
            d="M0 10 C20 0, 30 20, 50 10 S80 0, 100 10 S110 15, 120 10"
            stroke="#BD2220"
            strokeWidth="1.2"
            fill="none"
            opacity="0.12"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Small spark crosses */}
        <motion.div
          animate={{ rotate: [0, 90, 0], opacity: [0.12, 0.23, 0.12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[65%] right-[25%] text-[#C4A962] text-2xl font-light opacity-17"
        >
          +
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -90, 0], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[22%] left-[38%] text-[#26388D] text-xl font-light opacity-14"
        >
          +
        </motion.div>
      </div>

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
              The Concept
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
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-6">
            What is{" "}
            <span className="relative inline-block">
              LEANSPARK
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
                      What is LEANSPARK?
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
