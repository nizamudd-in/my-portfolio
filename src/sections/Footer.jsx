import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

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

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(28,216,210,0.20),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(0,191,143,0.18),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
      >
        <div className="w-full">
          <h1
            className="font-bangers font-semibold leading-none text-white text-center select-none"
            style={{
              fontSize: "clamp(2rem, 4vw, 10rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
              paddingLeft: "3vw",
              paddingRight: "3vw",
              whiteSpace: "nowrap",
              textShadow: "0 2px 18px rgba(0,0,0,0.45)",
            }}
          >
            Mohammed Nizamuddin
          </h1>
        </div>

        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]" />

        <div className="flex gap-5 text-2xl md:text-3xl">
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
              className="text-gray-300 transition-colors duration-200"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 italic max-w-xl">
          "Build intelligently. Build impactfully."
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Mohammed Nizamuddin. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
