"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-01-15T00:00:00+05:30"); // Jan 15, 2026, IST
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (!mounted) return null;

  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-paper-warm)] relative overflow-hidden">
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
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)]">
              Launching At JLF
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          {/* Date */}
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.035em] text-[var(--color-brand-primary)] mb-8">
            January 15, 2026
          </h2>

          {/* JLF Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-40 md:w-48 opacity-90 hover:opacity-100 transition-opacity duration-300">
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
        </motion.div>

        {/* Countdown Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-sm)] group-hover:shadow-[var(--shadow-lg)] group-hover:border-[var(--color-brand-primary)]/20 group-hover:-translate-y-1 transition-all duration-300">
                <span className="block font-bold text-3xl md:text-4xl text-[var(--color-brand-primary)] tabular-nums tracking-tight">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[0.625rem] md:text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-muted)] mt-1">
                  {unit.label}
                </span>
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
