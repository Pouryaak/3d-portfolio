"use client";

import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <div className="pointer-events-none absolute left-10 top-10">
      <motion.div
        className="pointer-events-auto max-w-md rounded-3xl border border-white/0 bg-gradient-to-br from-white/35 via-white/25 to-white/0 px-6 py-5 shadow-xl backdrop-blur-lg space-y-4 text-neutral-900"
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <motion.span
          className="inline-block rounded-full bg-white/65 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em]"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Parastoo Salehi Farhadpour
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] font-serif"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
        >
          Urban &amp; Landscape Architect
        </motion.h1>

        <motion.p
          className="md:text-base md:text-lg text-neutral-800/95 max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.6, ease: "easeOut" }}
        >
          Crafting streets, public spaces, and green infrastructures where
          architecture and landscape blend into one continuous, livable story.
        </motion.p>
      </motion.div>
    </div>
  );
}
