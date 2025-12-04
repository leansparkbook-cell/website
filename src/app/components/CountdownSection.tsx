"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      const targetDate = new Date("2026-01-01T00:00:00+05:30"); // Jan 1, 2026, IST
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

    // Set initial value
    setTimeLeft(calculateTimeLeft());

    // Update every second
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

  if (!mounted) {
    // Prevent hydration mismatch
    return (
      <section className="relative py-16 px-6 md:px-20 bg-[var(--color-paper)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="countdown"
      className="relative py-16 px-6 md:px-20 bg-[var(--color-paper)] overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif mb-6 text-[var(--color-text)]">
            Launching at
          </h3>

          {/* JLT Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mb-4"
          >
            <Image
              src="/jlt logo.svg"
              alt="Jaipur Literature Festival"
              width={336}
              height={120}
              className="w-auto h-20 md:h-24 lg:h-28"
              priority
            />
          </motion.div>

          <div className="mt-2 space-y-1">
            <p className="text-[var(--color-accent)] text-base md:text-lg font-bold uppercase tracking-wider">
              1 January 2026
            </p>
            <p className="text-[var(--color-text)]/60 text-xs md:text-sm uppercase tracking-wide">
              Hotel Clarks Amer, Jaipur
            </p>
          </div>
        </motion.div>

        {/* Countdown Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center"
            >
              {/* Time Box */}
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-md border border-[var(--color-accent)]/20 flex items-center justify-center group-hover:shadow-xl group-hover:border-[var(--color-accent)]/40 transition-all duration-300"
                >
                  {/* Animated number */}
                  <motion.span
                    key={unit.value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-4xl md:text-5xl font-bold text-[var(--color-text)] tabular-nums"
                    aria-live="polite"
                    aria-label={`${unit.value} ${unit.label.toLowerCase()}`}
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]/30 rounded-tr-lg group-hover:border-[var(--color-accent)] transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]/30 rounded-bl-lg group-hover:border-[var(--color-accent)] transition-colors duration-300" />
                </motion.div>

                {/* Subtle pulse animation */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Label */}
              <motion.span
                className="mt-3 text-sm md:text-base font-medium uppercase tracking-wider text-[var(--color-text)]/70"
                whileHover={{ color: "var(--color-accent)" }}
                transition={{ duration: 0.2 }}
              >
                {unit.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Mark your calendar for LeanSpark launch"
          >
            Mark Your Calendar
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-lg"
            >
              📅
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}