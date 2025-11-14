"use client";

import { AnimatePresence, motion } from "framer-motion";

type DragHintProps = {
  show: boolean;
};

export default function DragHint({ show }: DragHintProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-10 z-40 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="pointer-events-none inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-lg backdrop-blur-md border border-neutral-200/80">
            {/* mouse icon that gently moves left–right */}
            <div className="h-8 w-12 flex items-center justify-center">
              <motion.div
                className="relative h-7 w-5 rounded-full border border-neutral-500 bg-neutral-100/90"
                initial={{ x: -4 }}
                animate={{ x: [-4, 4, -4] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {/* scroll wheel */}
                <div className="absolute left-1/2 top-1.5 h-2 w-[2px] -translate-x-1/2 rounded-full bg-neutral-500" />
              </motion.div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
                Drag to explore
              </span>
              <span className="text-[0.7rem] text-neutral-600">
                Click and hold, then move your mouse
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
