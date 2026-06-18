import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import ParticleBackground from "../components/ParticlesBackground";

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohammed-nizamudd-in",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/nizamudd-in",
  },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(28,216,210,0.9)) drop-shadow(0 0 18px rgba(0,191,143,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Home = React.forwardRef((props, ref) => {
  // ─── Typing effect ────────────────────────────────────────────────────────
  const roles = useMemo(
    () => ["AI Engineer", "Full Stack Developer", "Gemini Ambassador"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  // ─── Background video ─────────────────────────────────────────────────────
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [transitioned, setTransitioned] = useState(false);

  // Once video1 is playing, buffer video2 in the background so the
  // switch is instant when video1 ends.
  const handleVideo1Play = useCallback(() => {
    const v2 = videoRef2.current;
    if (v2 && v2.preload === "none") {
      v2.preload = "auto";
      v2.load();
    }
  }, []);

  // video1 ended → start video2 first (first frame painted), then
  // trigger the 80 ms cross-fade so there is never a black frame.
  const handleVideo1Ended = useCallback(() => {
    const v2 = videoRef2.current;
    if (!v2) return;
    v2.play().catch(() => {});
    setTransitioned(true);
  }, []);

  useEffect(() => {
    const v1 = videoRef1.current;
    if (!v1) return;
    v1.addEventListener("play", handleVideo1Play, { once: true });
    v1.addEventListener("ended", handleVideo1Ended);
    return () => {
      v1.removeEventListener("play", handleVideo1Play);
      v1.removeEventListener("ended", handleVideo1Ended);
    };
  }, [handleVideo1Play, handleVideo1Ended]);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full relative overflow-hidden bg-black"
    >
      {/* ── Layer 0: particle canvas (visible while video loads) ─────────── */}
      <ParticleBackground />

      {/* ── Layer 1: full-bleed background videos ────────────────────────── */}
      {/*
        Both clips share the same absolute inset-0 footprint.
        object-cover fills every pixel — no letterbox, no black bars.
        The 80 ms opacity cross-fade on `ended` means video1's last
        frame stays visible while video2's first frame paints beneath it.
      */}
      <div className="absolute inset-0 z-[1]">
        <video
          ref={videoRef1}
          src="/1.webm"
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: transitioned ? 0 : 1,
            transition: "opacity 80ms ease",
          }}
        />
        <video
          ref={videoRef2}
          src="/2.webm"
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: transitioned ? 1 : 0,
            transition: "opacity 80ms ease",
          }}
        />
      </div>

      {/* ── Layer 2: readability overlay ─────────────────────────────────── */}
      {/*
        Mobile: uniform scrim — text is centred over the full frame.
        Desktop: left-to-right gradient — left half is dark for the text
        block, right half fades to near-transparent so the robot reads
        as if it lives inside the scene, not behind a pane of glass.
      */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none lg:hidden"
        style={{ background: "rgba(0,0,0,0.62)" }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 30%, rgba(0,0,0,0.22) 60%, rgba(0,0,0,0.04) 100%)",
        }}
      />

      {/* ── Layer 10: hero content ────────────────────────────────────────── */}
      {/*
        Two-column grid on desktop keeps text anchored to the left half
        while the right half (the gradient fade-out zone) lets the robot
        breathe. The right grid cell is intentionally empty — no element,
        no box, nothing between the gradient and the video.
      */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">

        <motion.div
          className="flex flex-col justify-center h-full text-center lg:text-left"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-full lg:pr-16 mx-auto max-w-[42rem]">

            {/* Typing role */}
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]
              drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hello, I&apos;m
              <br />
              <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Mohammed Nizamuddin
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I build AI-powered applications, multi-agent systems, conversational
              analytics platforms, and cybersecurity tools — turning complex problems
              into impactful, intelligent solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-base font-medium text-white
                bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]
                shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="https://github.com/nizamudd-in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-base font-medium text-black bg-white
                hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                GitHub Profile
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </motion.div>

        {/* Right grid cell — intentionally empty.
            The gradient fades here so the robot video shows through cleanly. */}

      </div>
    </section>
  );
});

Home.displayName = "Home";

export default Home;
