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
    <section className="py-32 px-6 bg-[var(--color-brand-bg)] relative">
      {/* Section border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--outline-muted)] to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Eyebrow with decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
              The Countdown Begins
            </span>
            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[var(--color-brand-primary)]">
            January 15, 2026
          </h2>

          {/* JLF Official Launch Partner - Prominent Position */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="w-44 md:w-52 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img
                src="/JLFLOGO.svg"
                alt="Jaipur Literature Festival"
                className="w-full h-auto"
              />
            </div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
              Official Launch Partner
            </span>
          </div>
        </motion.div>

        {/* Countdown Grid with Diamond Separators */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Outline Circle Container */}
                <div className="bg-transparent border-2 border-[var(--outline-muted)] rounded-full w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center group-hover:border-[var(--color-brand-primary)] group-hover:-translate-y-2 transition-all duration-500">
                  {/* Serif Number for Editorial Feel */}
                  <span className="block font-serif font-semibold text-4xl md:text-5xl text-[var(--color-brand-primary)] mb-1 tabular-nums tracking-tight">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
                    {unit.label}
                  </span>
                </div>
              </motion.div>

              {/* Diamond Separator (not after last item) */}
              {index < timeUnits.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="hidden md:block mx-6"
                >
                  <div className="w-2 h-2 border border-[var(--color-brand-accent)] rotate-45 opacity-60" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
