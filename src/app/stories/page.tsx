"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CursorSpark from "../components/CursorSpark";
import { FiArrowUpRight, FiLinkedin } from "react-icons/fi";

const linkedInPosts = [
  {
    id: 1,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "Most classrooms teach business with case studies...",
    preview: "A fresh perspective on business education and the power of experiential learning.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_most-classrooms-teach-business-with-case-activity-7371134612619829249-X4cR",
    tag: "Education",
  },
  {
    id: 2,
    author: "Mukesh Sud",
    authorHandle: "prof-mukesh-sud",
    title: "Jugaad & Frugal Management",
    preview: "Exploring the intersection of frugal innovation and modern management practices.",
    url: "https://www.linkedin.com/posts/prof-mukesh-sud_jugaad-frugal-management-activity-7373596567670280192-YQcw",
    tag: "Innovation",
  },
  {
    id: 3,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "The uniqueness of Indian innovation",
    preview: "What makes Indian approaches to problem-solving distinctive on the global stage.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_my-last-post-on-the-uniqueness-of-indian-activity-7375133394000683008-ngYf",
    tag: "India",
  },
  {
    id: 4,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "How India is shaping global innovation",
    preview: "Continuing the conversation on India's role in the future of frugal design.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_in-my-last-post-i-wrote-about-how-india-activity-7383763233037451264-lFvA",
    tag: "Global Impact",
  },
  {
    id: 5,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "India's Hi-Tech Jugaad: LeanSpark",
    preview: "Introducing the concept of high-tech jugaad and its transformative potential.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_indias-hi-tech-jugaad-ie-leanspark-activity-7388850997022056449-VcqJ",
    tag: "LeanSpark",
  },
  {
    id: 6,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "Another High-Tech Jugaad story",
    preview: "More examples of how frugal innovation is creating impact at scale.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_heres-another-high-tech-jugaad-ie-leanspark-activity-7391389403643879425-irPv",
    tag: "Case Study",
  },
  {
    id: 7,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "LeanSpark: High-Tech Jugaad Series",
    preview: "Deep diving into the principles that make LeanSpark innovations successful.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_leanspark-hightechjugaad-activity-7393916682479554561-gd1d",
    tag: "LeanSpark",
  },
  {
    id: 8,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "The LeanSpark framework in action",
    preview: "Real-world applications of frugal design thinking and lean execution.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_leanspark-hightechjugaad-activity-7397197006697517056-601G",
    tag: "Framework",
  },
  {
    id: 9,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "Scaling frugal innovations globally",
    preview: "How LeanSpark principles help solutions scale across different markets.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_leanspark-hightechjugaad-activity-7398987238535143424-nif-",
    tag: "Scalability",
  },
  {
    id: 10,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "Building sustainable innovations",
    preview: "The importance of systemic sustainability in frugal design.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_leanspark-hightechjugaad-activity-7401546218033553408-5tFX",
    tag: "Sustainability",
  },
  {
    id: 11,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "High-Tech Jugaad: A new paradigm",
    preview: "Redefining innovation through the lens of resource constraints.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_hightechjugaad-leanspark-activity-7404066400820170752-orAH",
    tag: "Paradigm",
  },
  {
    id: 12,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "LeanSpark stories from the field",
    preview: "Inspiring examples of frugal innovation making real-world impact.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_leanspark-hightechjugaad-activity-7407279361583894529-poIn",
    tag: "Stories",
  },
  {
    id: 13,
    author: "Mukesh Sud",
    authorHandle: "prof-mukesh-sud",
    title: "Entrepreneur Strategy & Lean Startup",
    preview: "Connecting entrepreneurial thinking with lean methodology and strategic design.",
    url: "https://www.linkedin.com/posts/prof-mukesh-sud_entrepreneur-strategy-leanstartup-activity-7408023434015838209-hjCF",
    tag: "Strategy",
  },
  {
    id: 14,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "The power of purposeful simplicity",
    preview: "Why doing less but better leads to more impactful innovations.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_hightechjugaad-leanspark-activity-7409082962853511168-AP80",
    tag: "Simplicity",
  },
  {
    id: 15,
    author: "Jaideep Prabhu",
    authorHandle: "jaideep-prabhu-94b3102",
    title: "Continuing the LeanSpark journey",
    preview: "The latest insights and reflections on frugal innovation.",
    url: "https://www.linkedin.com/posts/jaideep-prabhu-94b3102_leanspark-hightechjugaad-activity-7411604738527502336-5Slt",
    tag: "Journey",
  },
  {
    id: 16,
    author: "Priyank Narayan",
    authorHandle: "priyankn",
    title: "What makes a 25-year-old reject Stanford?",
    preview: "A compelling story of unconventional choices and entrepreneurial conviction.",
    url: "https://www.linkedin.com/posts/priyankn_what-makes-a-25-year-old-reject-stanford-activity-7403024321096376320-0Yk_",
    tag: "Featured",
  },
];

// Get initials for avatar
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Color palette for tags
const tagColors: { [key: string]: string } = {
  Education: "bg-blue-50 text-blue-600",
  Innovation: "bg-purple-50 text-purple-600",
  India: "bg-orange-50 text-orange-600",
  "Global Impact": "bg-emerald-50 text-emerald-600",
  LeanSpark: "bg-red-50 text-[#BD2220]",
  "Case Study": "bg-amber-50 text-amber-600",
  Framework: "bg-indigo-50 text-indigo-600",
  Scalability: "bg-cyan-50 text-cyan-600",
  Sustainability: "bg-green-50 text-green-600",
  Paradigm: "bg-violet-50 text-violet-600",
  Stories: "bg-rose-50 text-rose-600",
  Strategy: "bg-teal-50 text-teal-600",
  Simplicity: "bg-slate-50 text-slate-600",
  Journey: "bg-sky-50 text-sky-600",
  Featured: "bg-[#BD2220]/10 text-[#BD2220]",
};

export default function StoriesPage() {
  return (
    <main className="relative bg-[#faf9f7] min-h-screen">
      <NavBar />
      <CursorSpark />

      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

        <div className="relative max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
              <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-text-tertiary)]">
                Stories
              </span>
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
            </div>

            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-primary)] mb-4">
              LinkedIn Insights
            </h1>
            <p className="text-[1.125rem] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Explore thought-provoking posts from our authors on frugal innovation,
              lean execution, and the future of design thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative pb-28 md:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {linkedInPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-white rounded-2xl border border-black/[0.06] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:border-black/[0.1] hover:-translate-y-1"
              >
                {/* LinkedIn gradient accent at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0A66C2] to-[#004182] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 md:p-7">
                  {/* Header with author */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {getInitials(post.author)}
                        {/* Online indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#0A66C2] border-2 border-white" />
                      </div>
                      <div>
                        <p className="text-[0.9375rem] font-semibold text-[#1a1a2e] leading-tight">
                          {post.author}
                        </p>
                        <p className="text-[0.75rem] text-black/40">
                          @{post.authorHandle.split("-")[0]}
                        </p>
                      </div>
                    </div>

                    {/* LinkedIn icon */}
                    <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors duration-300">
                      <FiLinkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[0.6875rem] font-semibold tracking-wide ${
                        tagColors[post.tag] || "bg-gray-50 text-gray-600"
                      }`}
                    >
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-[1.125rem] font-bold text-[#1a1a2e] leading-snug mb-3 group-hover:text-[#0A66C2] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-[0.875rem] text-black/50 leading-relaxed mb-5">
                    {post.preview}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-[0.8125rem] font-semibold text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Read on LinkedIn</span>
                    <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-black/40 text-sm mb-4">
              Follow us for more insights
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/jaideep-prabhu-94b3102"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] transition-colors duration-300"
              >
                <FiLinkedin className="w-4 h-4" />
                Jaideep Prabhu
              </a>
              <a
                href="https://www.linkedin.com/in/prof-mukesh-sud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] transition-colors duration-300"
              >
                <FiLinkedin className="w-4 h-4" />
                Mukesh Sud
              </a>
              <a
                href="https://www.linkedin.com/in/priyankn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] transition-colors duration-300"
              >
                <FiLinkedin className="w-4 h-4" />
                Priyank Narayan
              </a>
            </div>
          </motion.div>

          {/* Bottom accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]" />
              <div className="w-12 h-[1px] bg-black/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
