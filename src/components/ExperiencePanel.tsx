"use client";

import { motion } from "framer-motion";

export default function ExperiencePanel() {
  const items = [
    {
      period: "Jun 2024 – Jul 2025",
      role: "Landscape Design Assistant",
      studio: "BIG – Bjarke Ingels Group",
      location: "Copenhagen, Denmark",
      summary:
        "Delivered design input for international competitions and masterplans such as Ørestad Cultural Plaza, Nordhavn Park, Al Numan Island, Gelephu Mindfulness City, and Basel Solitude Promenade. Worked on public spaces, planting strategies, seasonal studies, diagrams, and 3D visualisations, coordinating with multidisciplinary teams to integrate architecture, landscape, infrastructure, and sustainability.",
    },
    {
      period: "Feb 2024 – Jun 2024",
      role: "Architectural Intern",
      studio: "Woonwerk Architecten",
      location: "Antwerp, Belgium",
      summary:
        "Contributed to medium-scale residential projects like Naturally Oostkouter and Wittouck Living, from detailed design through to government approval. Produced technical documentation, coordinated with senior architects, and created visualisations to communicate design intent while aligning with Belgian building regulations.",
    },
    {
      period: "Jun 2020 – Nov 2020",
      role: "Exhibition Stand Designer",
      studio: "Sahlan – Partition & Office Furniture",
      location: "Tehran, Iran",
      summary:
        "Designed exhibition stands and marketing materials that improved visitor engagement and lead generation. Balanced spatial constraints, regulations, and budgets to deliver unique concepts that strengthened brand presence at events.",
    },
    {
      period: "Jun 2019 – Oct 2019",
      role: "Architectural Intern",
      studio: "ZHAV Studio",
      location: "Tehran, Iran",
      summary:
        "Supported commercial and residential projects through on-site visits, blueprints, and specifications. Helped integrate energy-efficient principles and environmentally conscious materials into the design process.",
    },
  ];

  const themes = [
    "Public space & plazas",
    "Large-scale masterplans",
    "Residential & housing",
    "Exhibition & brand spaces",
    "Sustainable & ecological design",
  ];

  return (
    <div className="space-y-6 pb-2">
      {/* Intro */}
      <motion.p
        className="text-base md:text-[1.05rem] text-neutral-800/90 leading-relaxed"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        From international competitions at BIG to residential work in Belgium
        and earlier experience in Tehran, Parastoo has worked across multiple
        countries, project scales, and typologies – always with a focus on
        public space quality, landscape, and meaningful user experiences.
      </motion.p>

      {/* Themes / tags */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
      >
        {themes.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs md:text-[0.8rem] font-medium uppercase tracking-[0.16em] text-neutral-700"
          >
            {theme}
          </span>
        ))}
      </motion.div>

      {/* Timeline */}
      <motion.ul
        className="space-y-5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.45, ease: "easeOut" }}
      >
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            {/* timeline bullet */}
            <div className="flex flex-col items-center pt-1">
              <div className="h-3 w-3 rounded-full bg-neutral-900" />
              {index !== items.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-neutral-300/70" />
              )}
            </div>

            {/* content */}
            <div className="flex-1 space-y-1">
              <p className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-neutral-600/90">
                {item.period}
              </p>
              <p className="text-base md:text-lg font-semibold text-neutral-900">
                {item.role}
              </p>
              <p className="text-[0.8rem] md:text-sm text-neutral-700">
                {item.studio} · {item.location}
              </p>
              <p className="text-[0.85rem] md:text-sm text-neutral-800/95 leading-relaxed">
                {item.summary}
              </p>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
