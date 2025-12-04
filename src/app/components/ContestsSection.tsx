"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import { FiTrendingUp, FiCode, FiStar, FiDollarSign, FiAward, FiUsers } from "react-icons/fi";

const contests = [
  {
    title: "Jugaad Innovation Challenge",
    subtitle: "Best Frugal Solution",
    description: "Share your most creative low-cost, high-impact innovation that solves a real problem.",
    prize: "₹50,000",
    deadline: "Dec 15, 2025",
    participants: "Open to All",
    icon: <FiStar className="w-6 h-6" />,
    gradient: "from-orange-400 to-amber-600",
    highlights: ["Real-world Impact", "Minimal Resources", "Scalable Solution"],
  },
  {
    title: "Student Startup Sprint",
    subtitle: "Campus to Market",
    description: "Transform your academic project into a viable business model using constraint-based innovation.",
    prize: "₹75,000",
    deadline: "Dec 20, 2025",
    participants: "Students Only",
    icon: <FiCode className="w-6 h-6" />,
    gradient: "from-blue-400 to-indigo-600",
    highlights: ["Business Model", "MVP Demo", "Growth Strategy"],
  },
  {
    title: "Reverse Innovation Award",
    subtitle: "Global from Local",
    description: "Present an innovation designed for emerging markets that can disrupt developed economies.",
    prize: "₹100,000",
    deadline: "Dec 25, 2025",
    participants: "Startups & SMEs",
    icon: <FiTrendingUp className="w-6 h-6" />,
    gradient: "from-green-400 to-emerald-600",
    highlights: ["Market Validation", "Global Potential", "Cost Advantage"],
  },
];

export default function ContestsSection() {
  return (
    <section
      id="contests"
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
            Win Big with <span className="text-[var(--color-accent)]">LeanSpark</span>
          </h2>
          <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
            Showcase your frugal innovation skills and win exciting prizes
          </p>
        </motion.div>

        {/* Contest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {contests.map((contest, index) => (
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
              className="w-full"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-white/80 backdrop-blur-sm relative group/card border border-[var(--color-accent)]/10 rounded-xl p-6 h-full min-h-[480px] shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${contest.gradient} opacity-5 rounded-xl group-hover/card:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Contest Icon */}
                  <CardItem
                    translateZ="50"
                    className="relative z-10"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${contest.gradient} flex items-center justify-center text-white mb-4`}>
                      {contest.icon}
                    </div>
                  </CardItem>

                  {/* Title and Subtitle */}
                  <CardItem
                    translateZ="60"
                    className="relative z-10"
                  >
                    <h3 className="text-xl font-serif font-bold text-[var(--color-text)] mb-1">
                      {contest.title}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium mb-4">
                      {contest.subtitle}
                    </p>
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-sm text-[var(--color-text)]/70 leading-relaxed mb-6 relative z-10"
                  >
                    {contest.description}
                  </CardItem>

                  {/* Prize and Details */}
                  <CardItem
                    translateZ="30"
                    className="relative z-10 mb-6"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FiAward className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm text-[var(--color-text)]">
                          Prize: <span className="font-bold text-[var(--color-accent)]">{contest.prize}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUsers className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm text-[var(--color-text)]">{contest.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm text-[var(--color-text)]">Deadline: {contest.deadline}</span>
                      </div>
                    </div>
                  </CardItem>

                  {/* Highlights */}
                  <CardItem
                    translateZ="20"
                    className="relative z-10 mb-6"
                  >
                    <div className="flex flex-wrap gap-2">
                      {contest.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </CardItem>

                  {/* CTA Button */}
                  <CardItem
                    translateZ="70"
                    as="button"
                    className={`absolute bottom-6 left-6 right-6 px-6 py-3 rounded-full bg-gradient-to-r ${contest.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover/card:scale-105`}
                  >
                    <span className="relative z-10">Register Now →</span>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[var(--color-text)]/60 max-w-2xl mx-auto">
            All contest entries will be featured in the LeanSpark community showcase.
            Winners will receive mentorship from industry leaders and a chance to present at JLF 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}