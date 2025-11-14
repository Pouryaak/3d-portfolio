"use client";

import { AnimatePresence, motion } from "framer-motion";

type SplashScreenProps = {
  show: boolean;
};

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5efe3]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="text-center space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <motion.span
              className="block text-xs tracking-[0.35em] uppercase text-neutral-700/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Portfolio of
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl font-bold font-serif text-neutral-900"
              initial={{ letterSpacing: "0.45em" }}
              animate={{ letterSpacing: "0.12em" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              Parastoo&nbsp;Salehi
            </motion.h1>

            <motion.p
              className="text-lg md:text-base text-neutral-700/90"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Urban &amp; Landscape Architect
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
