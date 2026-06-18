import { motion } from "framer-motion";
import p from "../assets/p.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const stats = [
  { label: "Projects Built", value: "6+" },
  { label: "Specialty", value: "AI & ML" },
  { label: "Community", value: "Open Source" },
];

const highlights = [
  { label: "Google Gemini Student Ambassador", color: "#4285f4" },
  { label: "GSSoC 2026 Contributor", color: "#1CD8D2" },
  { label: "GFG HackFest Winner", color: "#f59e0b" },
  { label: "Google Rising Star — Top 250", color: "#00bf8f" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="About me"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">

        {/* Profile header */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Avatar */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63]/20 border border-[#1CD8D2]/25 shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={p} alt="Mohammed Nizamuddin" className="w-full h-full object-cover" />
          </motion.div>

          {/* Name + Role + Bio + CTAs */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
              Mohammed Nizamuddin
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#1CD8D2] font-semibold">
              AI Engineer &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; Google Gemini Student Ambassador
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning,
              Generative AI, and building technology that creates real impact. My work spans AI-powered
              applications, multi-agent systems, conversational analytics, cybersecurity tools, and
              intelligent dashboards using modern full-stack and AI technologies.
            </p>

            {/* Quick stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/nizamudd-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-lg border border-[#1CD8D2]/40 text-[#1CD8D2] px-5 py-3 hover:bg-[#1CD8D2]/10 transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Me body */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I am a Computer Science undergraduate from Hyderabad who lives and breathes AI. From building
              multi-modal fact verification engines to developing AI-powered cybersecurity dashboards and
              fashion transparency platforms, I love pushing boundaries at the intersection of AI, security, and
              full-stack engineering.
            </p>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              As a Google Gemini Student Ambassador and GeeksforGeeks Campus Mantri, I actively mentor students,
              organize workshops, and contribute to the open-source community to democratize access to AI tools and
              learning resources.
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/mohammed-nizamudd-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#1CD8D2] transition"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="https://github.com/nizamudd-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#1CD8D2] transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center md:text-left">
              Highlights
            </h3>
            <div className="flex flex-col gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: h.color, boxShadow: `0 0 8px ${h.color}` }}
                  />
                  <span className="text-gray-200 text-sm font-medium">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
