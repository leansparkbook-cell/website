"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const attributes = [
  {
    number: "01",
    title: "Lean Execution",
    subtitle: "Build. Measure. Learn.",
    description:
      "LeanSpark solutions are grounded in structured experimentation, iterative testing and continuous learning.",
    image: "/exec.svg",
  },
  {
    number: "02",
    title: "Purposeful Simplicity",
    subtitle: "Less, but better.",
    description:
      "LeanSpark solutions prioritize essential features and eliminate unnecessary complexity, without compromising value or scalability.",
    image: "/compl.svg",
  },
  {
    number: "03",
    title: "Adaptive Scalability",
    subtitle: "Evolve with intent.",
    description:
      "Solutions are designed to evolve and scale across diverse environments by flexibly adapting to new constraints or needs.",
    image: "/sale.svg",
  },
  {
    number: "04",
    title: "Systemic Sustainability",
    subtitle: "Root cause. Lasting impact.",
    description:
      "LeanSpark ideas are powerful because they address root causes, minimize waste and create enduring value.",
    image: "/syscy.svg",
  },
];

export default function AttributesSection() {
  return (
    <section className="relative bg-[#faf9f7] py-28 md:py-36 overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[1px] bg-[var(--color-brand-accent)]"
            />
            <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-[#BD2220]">
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

          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.04em] text-[#1a1a2e] leading-[0.95]">
            Four Key
            <br />
            <span className="italic font-normal">Principles</span>
          </h2>
        </motion.div>

        {/* Cards Grid - Asymmetric Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Card 1 - Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 group"
          >
            <div className="relative h-full min-h-[480px] md:min-h-[560px] rounded-[2rem] bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-black/[0.1]">
              {/* Number watermark */}
              <span className="absolute top-6 left-8 text-[6rem] md:text-[8rem] font-bold leading-none text-black/[0.03] select-none tracking-tighter">
                01
              </span>

              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center p-8 pt-16 md:pt-20 pb-36 md:pb-44">
                <motion.div
                  className="relative w-full max-w-[510px] md:max-w-[600px] aspect-square"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={attributes[0].image}
                    alt={attributes[0].title}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-white via-white to-transparent pt-16">
                <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-[#BD2220] mb-3 block">
                  {attributes[0].subtitle}
                </span>
                <h3 className="text-[1.375rem] md:text-[1.625rem] font-bold tracking-[-0.02em] text-[#1a1a2e] mb-3">
                  {attributes[0].title}
                </h3>
                <p className="text-[0.875rem] text-black/55 leading-[1.7] max-w-[420px]">
                  {attributes[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Small Right Top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[460px] rounded-[2rem] bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-black/[0.1]">
              {/* Number watermark */}
              <span className="absolute top-6 right-8 text-[6rem] md:text-[8rem] font-bold leading-none text-black/[0.03] select-none tracking-tighter">
                02
              </span>

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center p-6 pt-12 md:pt-16 pb-40 md:pb-48">
                <motion.div
                  className="relative w-full max-w-[396px] md:max-w-[468px] aspect-square"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={attributes[1].image}
                    alt={attributes[1].title}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-white via-white to-transparent pt-16">
                <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-[#BD2220] mb-3 block">
                  {attributes[1].subtitle}
                </span>
                <h3 className="text-[1.375rem] md:text-[1.625rem] font-bold tracking-[-0.02em] text-[#1a1a2e] mb-3">
                  {attributes[1].title}
                </h3>
                <p className="text-[0.875rem] text-black/55 leading-[1.7]">
                  {attributes[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Small Left Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[460px] rounded-[2rem] bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-black/[0.1]">
              {/* Number watermark */}
              <span className="absolute top-6 left-8 text-[6rem] md:text-[8rem] font-bold leading-none text-black/[0.03] select-none tracking-tighter">
                03
              </span>

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center p-6 pt-12 md:pt-16 pb-40 md:pb-48">
                <motion.div
                  className="relative w-full max-w-[396px] md:max-w-[468px] aspect-square"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={attributes[2].image}
                    alt={attributes[2].title}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-white via-white to-transparent pt-16">
                <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-[#BD2220] mb-3 block">
                  {attributes[2].subtitle}
                </span>
                <h3 className="text-[1.375rem] md:text-[1.625rem] font-bold tracking-[-0.02em] text-[#1a1a2e] mb-3">
                  {attributes[2].title}
                </h3>
                <p className="text-[0.875rem] text-black/55 leading-[1.7]">
                  {attributes[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Large Right Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 group"
          >
            <div className="relative h-full min-h-[480px] md:min-h-[560px] rounded-[2rem] bg-white border border-black/[0.06] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-black/[0.1]">
              {/* Number watermark */}
              <span className="absolute top-6 right-8 text-[6rem] md:text-[8rem] font-bold leading-none text-black/[0.03] select-none tracking-tighter">
                04
              </span>

              {/* Image Container */}
              <div className="absolute inset-0 flex items-center justify-center p-8 pt-16 md:pt-20 pb-36 md:pb-44">
                <motion.div
                  className="relative w-full max-w-[510px] md:max-w-[600px] aspect-square"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={attributes[3].image}
                    alt={attributes[3].title}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-white via-white to-transparent pt-16">
                <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-[#BD2220] mb-3 block">
                  {attributes[3].subtitle}
                </span>
                <h3 className="text-[1.375rem] md:text-[1.625rem] font-bold tracking-[-0.02em] text-[#1a1a2e] mb-3">
                  {attributes[3].title}
                </h3>
                <p className="text-[0.875rem] text-black/55 leading-[1.7] max-w-[420px]">
                  {attributes[3].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#BD2220]" />
            <div className="w-12 h-[1px] bg-black/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
