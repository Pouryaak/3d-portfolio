"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Images } from "lucide-react";

type ProjectImage = {
  label: string;
  src: string;
};

type Project = {
  name: string;
  location: string;
  role: string;
  type: string;
  short: string;
  images: ProjectImage[];
};

const PROJECTS: Project[] = [
  {
    name: "Ørestad Cultural Plazas",
    location: "Copenhagen, Denmark",
    role: "Landscape Design Assistant · BIG",
    type: "Competition · Public space & plazas",
    short:
      "A sequence of plazas and streetscapes around Ørestad, connecting everyday life, transit, and cultural programs through a continuous urban landscape.",
    images: [
      { label: "01", src: "/projects/orestad/orestad-01.png" },
      { label: "02", src: "/projects/orestad/orestad-02.png" },
      { label: "03", src: "/projects/orestad/orestad-03.png" },
      { label: "04", src: "/projects/orestad/orestad-04.png" },
    ],
  },
  {
    name: "Al Numan Island",
    location: "—",
    role: "Landscape Design Assistant · BIG",
    type: "Competition · Island landscape & public realm",
    short:
      "A large-scale coastal island vision where landscape, water edges, and public spaces define the identity of a new piece of city on the water.",
    images: [
      { label: "01", src: "/projects/al-numan/al-numan-01.png" },
      { label: "02", src: "/projects/al-numan/al-numan-02.png" },
      { label: "03", src: "/projects/al-numan/al-numan-03.png" },
      { label: "04", src: "/projects/al-numan/al-numan-04.png" },
    ],
  },
  {
    name: "Nordhavn Nature Park Competition",
    location: "Copenhagen, Denmark",
    role: "Landscape Design Assistant · BIG",
    type: "Competition · Nature park & waterfront",
    short:
      "A nature park proposal for Nordhavn that weaves ecological landscapes, paths, and public spaces into the harbour context, balancing wildness and accessibility.",
    images: [
      { label: "01", src: "/projects/nordhavn/nordhavn-01.png" },
      { label: "02", src: "/projects/nordhavn/nordhavn-02.png" },
      { label: "03", src: "/projects/nordhavn/nordhavn-03.png" },
      { label: "04", src: "/projects/nordhavn/nordhavn-04.png" },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = project.images[activeIndex];

  return (
    <motion.article
      className="rounded-2xl border border-neutral-200/80 bg-white/75 px-4 py-4 shadow-sm space-y-3"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Header + text */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1 md:max-w-[55%]">
          <h3 className="text-base md:text-lg font-semibold text-neutral-900">
            {project.name}
          </h3>
          <p className="text-xs md:text-sm text-neutral-700 flex flex-wrap items-center gap-2">
            <span>{project.role}</span>
            <span className="text-neutral-400">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {project.location}
            </span>
          </p>
          <p className="text-[0.8rem] uppercase tracking-[0.16em] text-neutral-500">
            {project.type}
          </p>
          <p className="mt-1 text-[0.9rem] md:text-sm text-neutral-800/95 leading-relaxed">
            {project.short}
          </p>
        </div>

        {/* Main image */}
        <div className="mt-2 md:mt-0 md:max-w-[40%] w-full">
          <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-900/5 aspect-[16/10] shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage.src}
                src={activeImage.src}
                alt={`${project.name} – image ${activeImage.label}`}
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />
            <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/55 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/90">
              Image {activeImage.label} / {project.images.length}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails row */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-neutral-600">
          <Images className="h-3.5 w-3.5" />
          <span>Image boards</span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {project.images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border ${
                  isActive
                    ? "border-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.6)]"
                    : "border-neutral-200"
                } bg-neutral-900/5`}
              >
                <img
                  src={img.src}
                  alt={`${project.name} thumbnail ${img.label}`}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/10" />
                <span
                  className={`pointer-events-none absolute bottom-1 right-1 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "bg-white/80 text-neutral-900"
                  }`}
                >
                  {img.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPanel() {
  return (
    <div className="space-y-6 pb-2">
      {/* Intro */}
      <motion.p
        className="text-base md:text-[1.05rem] text-neutral-800/90 leading-relaxed"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        A selection of competition projects where I supported concept
        development, landscape strategies, diagrams, and presentation boards as
        part of the BIG landscape team.
      </motion.p>

      {/* Projects list */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
