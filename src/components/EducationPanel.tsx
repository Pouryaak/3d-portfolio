"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Award,
  Languages,
  BookOpenCheck,
} from "lucide-react";

export default function EducationPanel() {
  const education = [
    {
      period: "Sep 2021 – Jul 2025",
      degree: "Master’s in Sustainable Architecture and Landscape Design",
      school: "Politecnico di Milano",
      location: "Piacenza, Italy",
      highlight:
        "Focused on hybrid landscapes, public space, and resilient urban strategies, combining architecture and landscape at multiple scales.",
    },
    {
      period: "Aug 2023 – Feb 2024",
      degree:
        "Erasmus (Thesis): Architecture and Planning Beyond Sustainability",
      school: "Chalmers University of Technology",
      location: "Gothenburg, Sweden",
      highlight:
        "Thesis exchange exploring post-carbon cities, ecological corridors, and systemic approaches to urban planning.",
    },
    {
      period: "Feb 2023 – Jul 2023",
      degree: "Erasmus: Architecture and Urban Planning",
      school: "Ghent University",
      location: "Ghent, Belgium",
      highlight:
        "Deepened knowledge in European urbanism, street and public space design, and comparative planning frameworks.",
    },
    {
      period: "Sep 2015 – Jan 2020",
      degree: "Bachelor’s in Architectural Engineering",
      school: "Azad University, Central Tehran Branch",
      location: "Tehran, Iran",
      highlight:
        "Built a strong foundation in architecture, technical design, and structural thinking, with early studio projects and on-site experience.",
    },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Persian", level: "Native" },
    { name: "Dutch", level: "Basic" },
    { name: "Italian", level: "Basic" },
  ];

  const certifications = [
    {
      title: "IELTS",
      period: "Jun 2021",
      note: "Academic English certification supporting international studies and work.",
    },
    {
      title: "Rhinoceros 3D – 40-hour professional training",
      period: "Jul 2018 · Grade: A",
      note: "Advanced NURBS modelling for architecture and landscape.",
    },
    {
      title: "Adobe Photoshop (Post Production) – 40-hour training",
      period: "Aug 2018 · Grade: A",
      note: "Professional post-production for diagrams, visuals, and competition boards.",
    },
    {
      title: "LANDSCAPE OF[F] LIMITS – International Workshop",
      period: "Aug 2022 – Sep 2022",
      note: "Intensive workshop at Politecnico di Milano focused on experimental landscape design.",
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
        My education connects architecture, landscape, and urbanism across
        different countries and schools, with a strong focus on sustainability,
        public space, and hybrid landscapes.
      </motion.p>

      {/* Layout: education timeline + side column */}
      <motion.div
        className="grid gap-5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
      >
        {/* Education timeline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-700">
            <GraduationCap className="h-4 w-4" />
            <span>Education</span>
          </div>

          <ul className="space-y-4">
            {education.map((item, index) => (
              <li key={index} className="flex gap-3">
                {/* timeline bullet */}
                <div className="flex flex-col items-center pt-1">
                  <div className="h-3 w-3 rounded-full bg-neutral-900" />
                  {index !== education.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-neutral-300/70" />
                  )}
                </div>

                {/* content */}
                <div className="flex-1 space-y-1">
                  <p className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-neutral-600/90">
                    {item.period}
                  </p>
                  <p className="text-base md:text-lg font-semibold text-neutral-900">
                    {item.degree}
                  </p>
                  <p className="flex items-center gap-1 text-[0.85rem] md:text-sm text-neutral-700">
                    {item.school}
                    <span className="text-neutral-500">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                  </p>
                  <p className="text-[0.85rem] md:text-sm text-neutral-800/95 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Side column: languages + certifications */}
        <div className="space-y-4">
          {/* Languages */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white/75 px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700">
              <Languages className="h-4 w-4" />
              <span>Languages</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between text-sm text-neutral-800"
                >
                  <span>{lang.name}</span>
                  <span className="text-xs uppercase tracking-[0.14em] text-neutral-500">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white/70 px-4 py-3 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700">
              <Award className="h-4 w-4" />
              <span>Certifications & workshops</span>
            </div>

            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert.title} className="space-y-0.5">
                  <p className="text-sm font-semibold text-neutral-900">
                    {cert.title}
                  </p>
                  <p className="text-[0.75rem] uppercase tracking-[0.14em] text-neutral-500">
                    {cert.period}
                  </p>
                  {cert.note && (
                    <p className="text-[0.8rem] text-neutral-800/95 leading-relaxed">
                      {cert.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-1 flex items-center gap-2 text-[0.75rem] text-neutral-600">
              <BookOpenCheck className="h-3.5 w-3.5" />
              <span>
                Additional workshops and trainings available on request in my
                full CV.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
