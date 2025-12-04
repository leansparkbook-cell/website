"use client";

import { motion, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiTrendingUp, FiGlobe, FiZap, FiTarget, FiUsers, FiAward } from "react-icons/fi";

const whyNowCards = [
  {
    title: "Global Shift to Frugality",
    description: "Economic uncertainties and resource constraints are making frugal innovation not just smart, but essential for business survival.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    highlights: ["Post-pandemic reality", "Resource scarcity", "Cost optimization"],
    backTitle: "The New Reality",
    backContent: "In 2024, 73% of global startups cite resource optimization as their #1 priority. The era of 'growth at all costs' has ended. Companies that master constraint-based innovation will define the next decade of business.",
    backInsight: "Scarcity breeds genius. The best innovations don't come from abundance, but from the creative tension of limitation.",
  },
  {
    title: "India's Innovation Moment",
    description: "India's startup ecosystem is proving that world-class innovation doesn't require Silicon Valley-sized budgets or resources.",
    icon: <FiGlobe className="w-6 h-6" />,
    highlights: ["$100B+ ecosystem", "Global scaling", "Reverse innovation"],
    backTitle: "The Eastern Advantage",
    backContent: "Indian startups achieve profitability 3x faster than their Western counterparts, spending 80% less on customer acquisition. This isn't copying Silicon Valley—it's creating a new playbook for global innovation.",
    backInsight: "When you build for billions who have little, you create solutions that work for everyone, everywhere.",
  },
  {
    title: "The Constraint Advantage",
    description: "Companies born in constraints are outperforming their well-funded peers by building resilient, efficient business models from day one.",
    icon: <FiZap className="w-6 h-6" />,
    highlights: ["Higher efficiency", "Faster profitability", "Sustainable growth"],
    backTitle: "Built to Last",
    backContent: "Studies show constraint-native startups have 2.5x higher survival rates after 5 years. They're not just leaner—they're antifragile, growing stronger under pressure while others break.",
    backInsight: "Constraints don't limit your potential. They reveal it. Every boundary is a creative opportunity in disguise.",
  },
];

export default function WhyNowSection() {
  return (
    <section
      id="why-now"
      className="relative py-24 px-6 md:px-20 bg-[var(--color-paper)] border-t border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Why <span className="text-[var(--color-accent)]">Now</span>?
          </h2>
          <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
            The world is discovering what Indian entrepreneurs have always known
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyNowCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FlipCard card={card} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FlipCard = ({ card, index }: { card: typeof whyNowCards[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleFlip = () => {
    if (isTouchDevice) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="relative h-[420px] w-full group cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => !isTouchDevice && setIsFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl border border-[var(--color-accent)]/10 bg-white/50 backdrop-blur-sm shadow-lg p-8 text-center flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Hover/Tap indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-1">
            <span className="text-[9px] uppercase tracking-wider text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors hidden md:block">
              Hover to flip
            </span>
            <span className="text-[9px] uppercase tracking-wider text-[var(--color-accent)]/40 md:hidden">
              Tap to flip
            </span>
            <svg className="w-4 h-4 text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>

          <CardSkeletonContainer>
            <AnimatedIcons index={index} />
          </CardSkeletonContainer>
          <h3 className="text-xl font-serif font-semibold text-[var(--color-text)] py-2 text-center">
            {card.title}
          </h3>
          <p className="text-sm font-normal text-[var(--color-text)]/70 leading-relaxed text-center mb-4">
            {card.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 justify-center">
            {card.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-accent)]/5 via-white/60 to-[var(--color-accent)]/5 backdrop-blur-sm shadow-xl p-8 flex flex-col justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="mb-4 w-12 h-12 mx-auto rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
            <div className="text-[var(--color-accent)]">
              {React.cloneElement(card.icon, { className: "w-6 h-6" })}
            </div>
          </div>
          <h3 className="text-2xl font-serif font-semibold text-[var(--color-accent)] mb-4">
            {card.backTitle}
          </h3>
          <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
            {card.backContent}
          </p>
          <div className="mt-auto pt-4 border-t border-[var(--color-accent)]/10">
            <p className="text-xs text-[var(--color-text)]/60 italic">
              "{card.backInsight}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedIcons = ({ index }: { index: number }) => {
  const icons = [
    [FiTrendingUp, FiTarget, FiAward],
    [FiGlobe, FiUsers, FiZap],
    [FiZap, FiTrendingUp, FiGlobe],
  ];

  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-8px)", "translateY(0px)"];

  const sequence = icons[index].map((_, i) => [
    `.icon-${index}-${i}`,
    {
      scale,
      transform,
    },
    { duration: 0.8, at: i * 0.3 },
  ]);

  useEffect(() => {
    const controls = animate(sequence as any, {
      repeat: Infinity,
      repeatDelay: 1,
    } as any);

    return () => {
      controls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-4">
        {icons[index].map((Icon, i) => (
          <Container
            key={i}
            className={`icon-${index}-${i} ${i === 1 ? "h-16 w-16" : "h-12 w-12"}`}
          >
            <Icon className={`${i === 1 ? "w-8 h-8" : "w-6 h-6"} text-[var(--color-accent)]`} />
          </Container>
        ))}
      </div>

      {/* Animated line with sparkles */}
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent animate-move opacity-30">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const [sparkles, setSparkles] = React.useState<Array<{
    id: number;
    top: string;
    left: string;
    animateTop: string;
    animateLeft: string;
    opacity: number;
    duration: number;
  }>>([]);

  React.useEffect(() => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();

    const newSparkles = [...Array(8)].map((_, i) => ({
      id: i,
      top: `${random() * 100}%`,
      left: `${random() * 100}%`,
      animateTop: `calc(${random() * 100}% + ${randomMove()}px)`,
      animateLeft: `calc(${random() * 100}% + ${randomMove()}px)`,
      opacity: randomOpacity(),
      duration: random() * 2 + 4,
    }));

    setSparkles(newSparkles);
  }, []);

  if (sparkles.length === 0) {
    return null; // Don't render anything until client-side
  }

  return (
    <div className="absolute inset-0">
      {sparkles.map((sparkle) => (
        <motion.span
          key={`star-${sparkle.id}`}
          animate={{
            top: sparkle.animateTop,
            left: sparkle.animateLeft,
            opacity: sparkle.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: sparkle.top,
            left: sparkle.left,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-[var(--color-accent)]"
        />
      ))}
    </div>
  );
};


const CardSkeletonContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`h-[12rem] rounded-xl bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-[var(--color-accent)]/5 ${className || ""}`}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-white shadow-md border border-[var(--color-accent)]/20 ${className || ""}`}
    >
      {children}
    </div>
  );
};