"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Show first frame immediately
    const handleLoaded = () => {
      video.currentTime = 0.1;
    };
    video.addEventListener("loadeddata", handleLoaded);

    // Autoplay when in viewport
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(video);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      observerRef.current?.disconnect();
    };
  }, []);
  return (
    <section className="py-16 md:py-20 px-6 bg-[var(--color-paper-warm)] relative overflow-hidden">
      {/* Polka dot background */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-brand-primary) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent z-10" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)]">
              Launched At JLF
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          {/* JLF Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mb-6"
          >
            <div className="w-36 md:w-44 opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img
                src="/JLFLOGO.svg"
                alt="Jaipur Literature Festival"
                className="w-full h-auto"
              />
            </div>
            <span className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
              Official Launch Partner
            </span>
          </motion.div>

          {/* Date */}
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[var(--color-brand-primary)]">
            January 15, 2026
          </h2>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(38,56,141,0.2)] border border-[var(--color-border)]">
            <video
              ref={videoRef}
              className="w-full h-auto block"
              controls
              muted
              playsInline
              preload="auto"
            >
              <source src="/jlf-launch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent z-10" />
    </section>
  );
}
