import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaStar,
  FaCode,
  FaRobot,
  FaGraduationCap,
  FaChartBar,
} from "react-icons/fa";

const achievements = [
  {
    Icon: FaTrophy,
    title: "GeeksforGeeks HackFest Winner",
    description:
      "Won the GFG HackFest competition — demonstrating excellence in rapid AI application development under high-pressure, competitive conditions.",
    badge: "Winner",
    color: "#f59e0b",
  },
  {
    Icon: FaStar,
    title: "Google Rising Star",
    description:
      "Recognized among the Top 250 Google Rising Stars globally, acknowledging outstanding contributions to the Google developer and AI ecosystem.",
    badge: "Top 250 Globally",
    color: "#4285f4",
  },
  {
    Icon: FaCode,
    title: "GSSoC 2026 Contributor",
    description:
      "Active open-source contributor in GirlScript Summer of Code 2026, contributing to AI and full-stack web development projects across the community.",
    badge: "Open Source",
    color: "#1CD8D2",
  },
  {
    Icon: FaRobot,
    title: "Google Gemini Student Ambassador",
    description:
      "Selected as a Google Gemini Student Ambassador to drive AI literacy, organize Gemini API workshops, and build the student developer community.",
    badge: "Ambassador",
    color: "#00bf8f",
  },
  {
    Icon: FaGraduationCap,
    title: "Campus Mantri – GeeksforGeeks",
    description:
      "Serving as the official GeeksforGeeks Campus Mantri — mentoring students in DSA, competitive programming, and running technical workshops.",
    badge: "Campus Mentor",
    color: "#a855f7",
  },
  {
    Icon: FaChartBar,
    title: "ML Data Analyst Intern",
    description:
      "Completed ML Data Analyst internship at Student Tribe — built predictive ML models and uncovered key patterns from educational engagement datasets.",
    badge: "Internship",
    color: "#ec4899",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen bg-black text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[380px] h-[380px] rounded-full bg-gradient-to-r from-[#302b63] to-[#1CD8D2] opacity-10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[320px] h-[320px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#302b63] opacity-10 blur-[130px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
            Achievements
          </h2>
          <p className="mt-3 text-gray-400 text-lg max-w-xl mx-auto">
            Recognition, awards, and milestones across AI, open source, and the developer community.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="relative flex flex-col rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6 group overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${item.color}10, transparent 65%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 shrink-0"
                style={{
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                }}
              >
                <item.Icon />
              </div>

              {/* Badge */}
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3"
                style={{
                  background: `${item.color}18`,
                  color: item.color,
                  border: `1px solid ${item.color}35`,
                }}
              >
                {item.badge}
              </span>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#1CD8D2] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
