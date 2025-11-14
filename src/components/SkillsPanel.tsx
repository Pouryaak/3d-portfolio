"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  PenTool,
  Palette,
  Globe2,
  Sparkles,
  Users,
} from "lucide-react";

export default function SkillsPanel() {
  const categories = [
    {
      icon: Wrench,
      label: "Design & BIM tools",
      items: [
        "AutoCAD (advanced)",
        "Rhinoceros 3D (advanced)",
        "Grasshopper (intermediate)",
        "SketchUp (advanced)",
        "Autodesk Revit (intermediate)",
        "BIM modelling (intermediate)",
      ],
    },
    {
      icon: Palette,
      label: "Visualisation & rendering",
      items: [
        "Lumion (advanced)",
        "Enscape (advanced)",
        "V-Ray (intermediate)",
      ],
    },
    {
      icon: PenTool,
      label: "Graphic & presentation",
      items: [
        "Adobe Photoshop (advanced)",
        "Adobe Illustrator (advanced)",
        "Adobe InDesign (advanced)",
      ],
    },
    {
      icon: Globe2,
      label: "Geospatial & analysis",
      items: ["QGIS (advanced)"],
    },
    {
      icon: Sparkles,
      label: "AI & generative tools",
      items: [
        "MidJourney",
        "Meshy AI",
        "Krea",
        "Magnific AI",
        "Visoid",
        "LookX",
      ],
    },
    {
      icon: Users,
      label: "Soft skills",
      items: [
        "Creativity",
        "Teamwork & collaboration",
        "Adaptability",
        "Fast learner",
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-2">
      {/* Intro */}
      <motion.p
        className="text-base md:text-[1.05rem] text-neutral-800/90 leading-relaxed"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        I work with a mix of design, BIM, visualisation, and AI tools to move
        from early concept sketches to detailed, production-ready boards and
        models for competitions and built projects.
      </motion.p>

      {/* Grid of skill categories */}
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.label}
              className="rounded-2xl border border-neutral-200/80 bg-white/75 px-4 py-3 shadow-sm space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700">
                  {cat.label}
                </p>
              </div>

              <ul className="mt-1 space-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-neutral-800"
                  >
                    <span className="mt-[6px] h-1 w-1 rounded-full bg-neutral-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
