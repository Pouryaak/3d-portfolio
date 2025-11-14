"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HotspotId } from "./HotspotSlider";

interface HotspotButtonProps {
  id: HotspotId;
  label: string;
  setActiveHotspot: React.Dispatch<React.SetStateAction<HotspotId | null>>;
}

const HotspotButton: React.FC<HotspotButtonProps> = ({
  id,
  label,
  setActiveHotspot,
}) => {
  return (
    <motion.div
      initial={{
        boxShadow: "0 18px 45px rgba(0,0,0,0.5), 0 0 40px rgba(255,220,180,1)",
      }}
      animate={{
        boxShadow: [
          "0 18px 45px rgba(0,0,0,0.5), 0 0 34px rgba(255,220,180,0.9)",
          "0 18px 45px rgba(0,0,0,0.5), 0 0 70px rgba(255,220,180,1)",
          "0 18px 45px rgba(0,0,0,0.5), 0 0 34px rgba(255,220,180,0.9)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="rounded-full"
    >
      <motion.button
        onClick={() => setActiveHotspot((prev) => (prev === id ? null : id))}
        whileHover={{ scale: 1.12, y: -3 }}
        whileTap={{ scale: 0.96, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="relative group inline-flex items-center gap-5 rounded-full border border-neutral-900/80 bg-gradient-to-r from-white/95 via-white/85 to-white/70 px-10 py-4 text-xl font-semibold text-neutral-900 shadow-[0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl hover:from-white hover:via-white hover:to-white"
      >
        <span className="tracking-[0.2em] uppercase">{label}</span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-white text-base leading-none group-hover:bg-black group-hover:border-black">
          +
        </span>
      </motion.button>
    </motion.div>
  );
};

export default HotspotButton;
