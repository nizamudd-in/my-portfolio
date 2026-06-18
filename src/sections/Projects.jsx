import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaBrain,
  FaShieldAlt,
  FaChartLine,
  FaLock,
  FaFire,
  FaTshirt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// ─── Project data ──────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "Infinitron",
    subtitle: "Multi-Modal Explainable Fact Verification Engine",
    description:
      "Cross-validates claims using text, image, and metadata modalities with explainable AI reasoning chains, confidence scoring, and real-time evidence aggregation.",
    tech: ["Python", "NLP", "Computer Vision", "Deep Learning", "FastAPI", "React"],
    category: "AI Research",
    Icon: FaBrain,
    accentFrom: "#1CD8D2",
    accentTo: "#00bf8f",
    borderColor: "rgba(28,216,210,0.30)",
    github: "https://github.com/nizamudd-in/infinitron-converstional-dashboard",
  },
  {
    id: "02",
    title: "Life-Log X",
    subtitle: "Secure Digital Legacy Management System",
    description:
      "Encrypted digital vault with time-locked release mechanisms, multi-party authorization, and end-to-end encrypted storage for sensitive personal documents.",
    tech: ["Node.js", "MongoDB", "AES Encryption", "React", "Firebase", "JWT"],
    category: "Security",
    Icon: FaLock,
    accentFrom: "#7c3aed",
    accentTo: "#1CD8D2",
    borderColor: "rgba(124,58,237,0.30)",
    github: "https://github.com/nizamudd-in/life-log-X",
  },
  {
    id: "03",
    title: "InsightAI",
    subtitle: "Conversational Business Intelligence Dashboard",
    description:
      "Natural language-driven BI platform powered by Gemini API — transforms data queries into actionable insights with dynamic chart generation and predictive reporting.",
    tech: ["Gemini API", "Python", "FastAPI", "React", "Supabase", "TypeScript"],
    category: "Generative AI",
    Icon: FaChartLine,
    accentFrom: "#00bf8f",
    accentTo: "#302b63",
    borderColor: "rgba(0,191,143,0.30)",
    github: "https://github.com/nizamudd-in/insight-ai",
  },
  {
    id: "04",
    title: "AI-Powered SIEM Assistant",
    subtitle: "Intelligent Security Information & Event Management",
    description:
      "ML-powered cybersecurity assistant that detects anomalies, correlates security events, and auto-generates incident response reports with intelligent threat prioritization.",
    tech: ["Python", "TensorFlow", "NLP", "FastAPI", "MongoDB", "React"],
    category: "Cybersecurity",
    Icon: FaShieldAlt,
    accentFrom: "#10b981",
    accentTo: "#1CD8D2",
    borderColor: "rgba(16,185,129,0.30)",
    github: "https://github.com/nizamudd-in/isro-siem-assistant",
  },
  {
    id: "05",
    title: "OneFRA Portal",
    subtitle: "AI-Powered FRA Atlas & Decision Support System",
    description:
      "Decision support platform for Fire Risk Assessments with AI-guided workflows, geospatial mapping, regulatory compliance tracking, and full audit trail management.",
    tech: ["Gemini API", "Python", "React", "FastAPI", "MongoDB", "Geospatial"],
    category: "AI Decision Systems",
    Icon: FaFire,
    accentFrom: "#f59e0b",
    accentTo: "#00bf8f",
    borderColor: "rgba(245,158,11,0.30)",
    github: "https://github.com/nizamudd-in/v0-oneportal",
  },
  {
    id: "06",
    title: "VeriThread",
    subtitle: "AI-Powered Fashion Transparency Platform",
    description:
      "Supply chain transparency platform using computer vision to verify sustainability claims, authenticate ethical sourcing, and produce verifiable brand accountability scores.",
    tech: ["Computer Vision", "Python", "React", "FastAPI", "Supabase", "Next.js"],
    category: "Sustainability AI",
    Icon: FaTshirt,
    accentFrom: "#ec4899",
    accentTo: "#7c3aed",
    borderColor: "rgba(236,72,153,0.30)",
    github: "https://github.com/nizamudd-in/veri-thread-trace",
  },
];

// ─── Subcomponents ──────────────────────────────────────────────────────────────

/**
 * Right-hand visual panel for each desktop card.
 * Uses gradient art + dot grid + oversized icon as a designed
 * placeholder that slots out cleanly for a real <img> later.
 */
function CardVisual({ project }) {
  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        background: `linear-gradient(145deg, ${project.accentFrom}14 0%, #050505 55%, ${project.accentTo}0a 100%)`,
      }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${project.accentFrom}38 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
        style={{
          background: `radial-gradient(circle, ${project.accentFrom}22, transparent 70%)`,
          filter: "blur(50px)",
        }}
      />

      {/* Oversized background icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        
        <project.Icon
          style={{ fontSize: "220px", color: project.accentFrom, opacity: 0.055 }}
        />
      </div>

      {/* Left accent stripe */}
      <div
        className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${project.accentFrom}90, transparent)`,
        }}
      />

      {/* Bottom metadata row */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <span
          className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{
            background: `${project.accentFrom}18`,
            color: project.accentFrom,
            border: `1px solid ${project.accentFrom}38`,
          }}
        >
          {project.category}
        </span>
        <span className="text-gray-600 text-xs font-mono select-none">
          {project.id} / 06
        </span>
      </div>
    </div>
  );
}

/** Left-hand info panel for each desktop card. */
function CardInfo({ project }) {
  return (
    <div
      className="shrink-0 flex flex-col p-8 lg:p-10 border-r border-white/[0.05]"
      style={{ width: "42%" }}
    >
      {/* Dim project number */}
      <div
        className="leading-none font-extrabold select-none mb-1"
        style={{
          fontSize: "clamp(56px, 6vw, 88px)",
          color: project.accentFrom,
          opacity: 0.07,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {project.id}
      </div>

      {/* Main content — vertically centred in remaining height */}
      <div className="flex-1 flex flex-col justify-center -mt-3">
        <h3
          className="font-bold text-white leading-tight mb-2"
          style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-[13px] font-semibold mb-4 leading-snug"
          style={{ color: project.accentFrom }}
        >
          {project.subtitle}
        </p>
        <p className="text-gray-400 text-[13px] leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded text-gray-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub link pinned to bottom */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-[13px] text-gray-500 hover:text-white transition-colors duration-200 group/link w-fit"
      >
        <FaGithub />
        <span>Source Code</span>
        <FaExternalLinkAlt
          className="text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity"
        />
      </a>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────
export default function Projects() {
  // containerRef  → the h-screen div that GSAP pins
  // trackRef      → the flex-row track that GSAP translates on X
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    /*
      gsap.matchMedia() ensures the horizontal-scroll setup only runs on
      screens ≥ 768 px. On mobile the block is hidden (md:hidden) so no
      GSAP work is needed there; mm.revert() tears everything down if the
      viewport shrinks below the breakpoint.
    */
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      /*
        x() is a function-based value so it re-evaluates on every
        ScrollTrigger refresh — this makes resize handling automatic.
        The track translates left by exactly (contentWidth − viewportWidth)
        which scrolls from the first card to the last.
      */
      gsap.to(track, {
        x: () => -(track.scrollWidth - container.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          // end distance = same as x distance so scrub stays 1:1
          end: () => `+=${track.scrollWidth - container.offsetWidth}`,
          scrub: 1,          // 1-second lag → silky smooth
          pin: true,         // stick container to viewport while scrolling
          anticipatePin: 1,  // pre-calculate pin to kill entry jitter
          invalidateOnRefresh: true, // recalculate on every window resize
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" className="bg-black text-white">

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP / TABLET  ≥ 768 px
          The containerRef div is pinned by GSAP.
          The trackRef div translates on X as the user scrolls.
      ════════════════════════════════════════════════════════════════ */}
      <div
        ref={containerRef}
        className="hidden md:flex flex-col h-screen overflow-hidden"
      >
        {/* ── Section header (stays put while track moves) ─────────── */}
        <div className="flex-shrink-0 h-[82px] flex items-end justify-between px-12 pb-4">
          <h2
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Featured Projects
          </h2>
          <a
            href="https://github.com/nizamudd-in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1CD8D2] transition-colors duration-200"
          >
            <FaGithub />
            <span>View all on GitHub</span>
          </a>
        </div>

        {/* ── Horizontal track ─────────────────────────────────────── */}
        {/*
          will-change: transform → promotes to GPU composite layer.
          GPU-accelerated transforms prevent paint during scroll, keeping
          the animation at 60 fps.
        */}
        <div
          ref={trackRef}
          className="flex flex-row items-stretch gap-5 pl-12"
          style={{
            height: "calc(100vh - 82px)",
            willChange: "transform",
          }}
        >
          {/* Project cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 flex flex-row rounded-2xl overflow-hidden border transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(28,216,210,0.08)]"
              style={{
                width: "min(76vw, 820px)",
                borderColor: project.borderColor,
                background: "#0b0b0b",
              }}
            >
              <CardInfo project={project} />
              <CardVisual project={project} />
            </div>
          ))}

          {/* ── End CTA card ─────────────────────────────────────── */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-white/[0.06]"
            style={{ minWidth: "300px", background: "#0b0b0b" }}
          >
            <div className="text-center space-y-5 px-8">
              <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto">
                <FaGithub className="text-xl text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  See All Projects
                </h3>
                <p className="text-gray-500 text-sm">
                  Full portfolio on GitHub
                </p>
              </div>
              <a
                href="https://github.com/nizamudd-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-black bg-white hover:bg-gray-200 transition-all"
              >
                GitHub Profile
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* Trailing spacer — gives the last card breathing room */}
          <div className="flex-shrink-0 w-12" aria-hidden="true" />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE  < 768 px
          Standard vertical card stack with Framer Motion fade-in.
          GSAP is never initialised here so there is no pin-spacer.
      ════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden py-20 px-5">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base mb-5">
            AI-powered applications, cybersecurity tools, and intelligent systems.
          </p>
          <a
            href="https://github.com/nizamudd-in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1CD8D2]/40 text-[#1CD8D2] text-sm font-medium hover:bg-[#1CD8D2]/10 transition-all"
          >
            <FaGithub />
            View All on GitHub
          </a>
        </div>

        {/* Mobile card stack */}
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.12 }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: project.borderColor, background: "#0b0b0b" }}
            >
              {/* Visual panel (top on mobile) */}
              <div
                className="h-44 relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${project.accentFrom}14 0%, #050505 60%, ${project.accentTo}0a 100%)`,
                }}
              >
                {/* Dot grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${project.accentFrom}38 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    opacity: 0.3,
                  }}
                />
                {/* Background icon */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                  <project.Icon
                    style={{ fontSize: "110px", color: project.accentFrom, opacity: 0.07 }}
                  />
                </div>
                {/* Foreground icon box */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: `${project.accentFrom}14`,
                      border: `1px solid ${project.accentFrom}30`,
                      color: project.accentFrom,
                    }}
                  >
                    <project.Icon />
                  </div>
                </div>
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})`,
                  }}
                />
              </div>

              {/* Info panel (bottom on mobile) */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.accentFrom}18`,
                      color: project.accentFrom,
                      border: `1px solid ${project.accentFrom}30`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-gray-600 text-xs font-mono">
                    {project.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p
                  className="text-xs font-semibold mb-3"
                  style={{ color: project.accentFrom }}
                >
                  {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded text-gray-300"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
