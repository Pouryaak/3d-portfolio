"use client";

import { motion, AnimatePresence } from "framer-motion";
import ExperiencePanel from "./ExperiencePanel";
import ContactPanel from "./ContactPanel";
import EducationPanel from "./EducationPanel";
import SkillsPanel from "./SkillsPanel";
import ProjectsPanel from "./ProjectsPanel";

type HotspotId =
  | "experience"
  | "projects"
  | "education"
  | "about-city"
  | "skills"
  | "contact";

type HotspotSliderProps = {
  activeId: HotspotId | null;
  onClose: () => void;
};

// Temporary content, we’ll refine text later
const HOTSPOT_CONTENT: Record<
  HotspotId,
  { title: string; subtitle: string; body: string }
> = {
  experience: {
    title: "Experiences",
    subtitle: "Studios, cities, and project scales",
    body: "",
  },
  projects: {
    title: "Selected Projects",
    subtitle: "Urban, landscape, and hybrid work",
    body: "A curated selection of projects that range from street-scale interventions to large masterplans. For each, we’ll later show images, diagrams, and a short story of the design intent.",
  },
  education: {
    title: "Education & Research",
    subtitle: "Architecture, landscape, and cities",
    body: "Parastoo’s academic path across different countries and schools. This section will introduce her master’s degree, exchange semesters, and research interests in public space and ecology.",
  },
  skills: {
    title: "Skills & Tools",
    subtitle: "From concept sketch to detailed delivery",
    body: "Key design skills, software, and workflows: from concept development and diagramming to 3D modelling, visualisation, and presentation tools used across projects and offices.",
  },
  contact: {
    title: "Contact & Availability",
    subtitle: "Let’s talk about your project or team",
    body: "How to reach Parastoo for collaborations, studio positions, or project inquiries. Later we’ll add links to email, CV download, and possibly a short message form.",
  },
  "about-city": {
    title: "About This City Block",
    subtitle: "A miniature world for her portfolio",
    body: "This block is a stylised city fragment that represents Parastoo’s interest in everyday urban life: streets, balconies, trees, and thresholds between inside and outside.",
  },
};

export type { HotspotId, HotspotSliderProps };

export default function HotspotSlider({
  activeId,
  onClose,
}: HotspotSliderProps) {
  const content = activeId ? HOTSPOT_CONTENT[activeId] : null;

  const renderBody = () => {
    if (!activeId || !content) return null;

    switch (activeId) {
      case "experience":
        return <ExperiencePanel />;
      case "contact":
        return <ContactPanel />;
      case "education":
        return <EducationPanel />;
      case "skills":
        return <SkillsPanel />;
      case "projects":
        return <ProjectsPanel />;

      default:
        return (
          <p className="text-base leading-relaxed text-neutral-800/95">
            {content.body}
          </p>
        );
    }
  };

  return (
    <AnimatePresence>
      {content && (
        <motion.aside
          key={activeId}
          initial={{ opacity: 0, x: 40, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, y: 10, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="pointer-events-auto absolute right-10 top-11 w-[640px] md:w-[740px] lg:w-[1080px] max-w-[96vw] min-h-[50vh] max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl border border-white/20 bg-gradient-to-br from-white/55 via-white/35 to-white/25 px-8 py-6 shadow-2xl backdrop-blur-lg text-neutral-900 space-y-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                {content.title}
              </h2>
              <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.18em] text-neutral-600/90">
                {content.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-400/50 bg-white/70 text-xs font-semibold text-neutral-700 hover:bg-white/90 hover:border-neutral-500 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* main content body */}
          {renderBody()}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
