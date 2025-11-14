"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  FileDown,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

export default function ContactPanel() {
  return (
    <div className="space-y-6 pb-2">
      {/* Intro */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <p className="text-base md:text-[1.05rem] text-neutral-800/90 leading-relaxed">
          I&apos;m open to roles in landscape and urban design, as well as
          collaborations on competitions and research-driven projects.
        </p>
      </motion.div>

      {/* Main contact methods */}
      <motion.div
        className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.4, ease: "easeOut" }}
      >
        {/* Left column – primary contact */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-700">
            Primary contact
          </h3>

          <div className="space-y-2 rounded-2xl border border-neutral-200/80 bg-white/75 px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </p>
                <a
                  href="mailto:parastoosalehifp@gmail.com"
                  className="text-sm font-semibold text-neutral-900 hover:underline"
                >
                  parastoosalehifp@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100">
                <MapPin className="h-4 w-4 text-neutral-700" />
              </div>
              <p className="text-sm text-neutral-700">
                Based in Copenhagen · open to relocation
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-none bg-white/75  px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              For studios &amp; teams
            </p>
            <p className="mt-1 text-sm text-neutral-800/95 leading-relaxed">
              Please mention the city, office, and type of role you&apos;re
              reaching out about, and I will gladly share a tailored selection
              of projects and references.
            </p>
          </div>
        </div>

        {/* Right column – links */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-700">
            Links &amp; materials
          </h3>

          <div className="space-y-2 rounded-2xl border border-neutral-200/80 bg-white/70 px-4 py-3 shadow-sm">
            <a
              href="https://drive.google.com/file/d/1hSZq7VSJQZfqfWI5PWUThehxkPcSRXCP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between gap-3 rounded-xl bg-neutral-900 text-white px-3 py-2.5 text-sm font-medium hover:bg-black transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <FileDown className="h-4 w-4" />
                <span>Download CV (PDF)</span>
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-white/80">
                opens in new tab
              </span>
            </a>

            <div className="mt-2 space-y-2">
              <a
                href="https://www.linkedin.com/in/parastoo-salehi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-800 hover:bg-neutral-100/80 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-neutral-700" />
                <span>LinkedIn</span>
                <span className="ml-auto text-[0.7rem] uppercase tracking-[0.16em] text-neutral-500">
                  profile
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-800 hover:bg-neutral-100/80 transition-colors"
              >
                <Instagram className="h-4 w-4 text-neutral-700" />
                <span>Instagram / visual work</span>
                <span className="ml-auto text-[0.7rem] uppercase tracking-[0.16em] text-neutral-500">
                  soon
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-800 hover:bg-neutral-100/80 transition-colors"
              >
                <Globe className="h-4 w-4 text-neutral-700" />
                <span>Extended portfolio or research</span>
                <span className="ml-auto text-[0.7rem] uppercase tracking-[0.16em] text-neutral-500">
                  soon
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
