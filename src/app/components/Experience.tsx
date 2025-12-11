"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Google",
    role: "Software Engineer",
    period: "Jan 2021 – Present",
    link: "https://about.google/",
    points: [
      "Build and optimize large-scale distributed systems used by millions of users daily.",
      "Collaborate with cross-functional teams to deliver cutting-edge products.",
      "Improve performance, scalability, and reliability of core services.",
    ],
  },
  {
    company: "Microsoft",
    role: "Frontend Engineer",
    period: "Aug 2019 – Dec 2020",
    link: "https://www.microsoft.com/",
    points: [
      "Developed features for Microsoft 365 web applications.",
      "Worked on accessibility improvements to ensure inclusive design.",
      "Implemented CI/CD pipelines for faster and reliable deployments.",
    ],
  },
  {
    company: "Amazon",
    role: "Backend Engineer",
    period: "2018 – 2019",
    link: "https://www.aboutamazon.com/",
    points: [
      "Designed and developed microservices for Amazon Web Services (AWS).",
      "Optimized backend systems for high availability and fault tolerance.",
      "Contributed to architecture reviews and technical documentation.",
    ],
  },
  {
    company: "Meta (Facebook)",
    role: "Fullstack Developer",
    period: "2017 – 2018",
    link: "https://about.meta.com/",
    points: [
      "Built interactive social features for Facebook web platform.",
      "Improved performance of real-time chat and notification systems.",
      "Worked closely with product managers to ship new experiments.",
    ],
  },
  {
    company: "Netflix",
    role: "Web Developer",
    period: "2016 – 2017",
    link: "https://jobs.netflix.com/",
    points: [
      "Developed and maintained Netflix streaming platform UI.",
      "Worked on A/B testing framework to improve user engagement.",
      "Enhanced video player performance across multiple devices.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="Experience"
      className="text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="relative flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-12 w-full max-w-4xl">
        <span className="flex items-center gap-4 relative">
          <span className="text-indigo-400 font-mono">02.</span>
          <span>Where I wanna Worked</span>
        </span>
        <span className="h-[1px] w-32 bg-gray-600"></span>
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        {/* Tabs */}
        <div
          className="flex flex-row md:flex-col border-b md:border-b-0 md:border-l border-gray-700 
  overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`px-4 py-2 text-sm font-mono whitespace-nowrap transition-colors ${
                active === idx
                  ? "text-indigo-400 bg-[#112240] md:border-l-2 border-indigo-400"
                  : "text-gray-400 hover:text-indigo-300"
              } ${
                active === idx && "border-b-2 md:border-b-0 border-indigo-400"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Details with Animation */}
        <div className="flex-1 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold">
                {experiences[active].role}{" "}
                <a
                  href={experiences[active].link}
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  {experiences[active].company}
                </a>
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {experiences[active].period}
              </p>
              <ul className="space-y-3">
                {experiences[active].points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-indigo-400 mr-3">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
