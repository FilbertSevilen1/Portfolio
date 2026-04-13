"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import {
  mdiReact,
  mdiVuejs,
  mdiLanguageTypescript,
  mdiTailwind,
  mdiLanguageHtml5,
  mdiNodejs,
  mdiLanguagePython,
  mdiDotNet,
  mdiBottleTonic,
  mdiDatabase,
  mdiDocker,
  mdiAws,
  mdiGit,
  mdiMicrosoftAzure,
  mdiRobot,
  mdiApi,
  mdiCodeTags,
} from "@mdi/js";

const categories = ["Frontend", "Backend", "Database", "DevOps", "AI & Others"];

const skillsData: Record<string, { name: string; icon: string }[]> = {
  "Frontend": [
    { name: "React", icon: mdiReact },
    { name: "Vue.js", icon: mdiVuejs },
    { name: "TypeScript", icon: mdiLanguageTypescript },
    { name: "Next.js", icon: mdiReact }, // Fallback icon
    { name: "Nuxt3", icon: mdiVuejs }, // Fallback icon
    { name: "HTML/CSS", icon: mdiLanguageHtml5 },
    { name: "Angular.js", icon: mdiCodeTags },
  ],
  "Backend": [
    { name: "Node.js", icon: mdiNodejs },
    { name: "Python", icon: mdiLanguagePython },
    { name: "ASP.NET", icon: mdiDotNet },
    { name: "Flask", icon: mdiBottleTonic },
    { name: "Express.js", icon: mdiNodejs },
    { name: "C#", icon: mdiCodeTags },
  ],
  "Database": [
    { name: "SQL Server", icon: mdiDatabase },
    { name: "MySQL", icon: mdiDatabase },
    { name: "MongoDB", icon: mdiDatabase },
  ],
  "DevOps": [
    { name: "Docker", icon: mdiDocker },
    { name: "AWS", icon: mdiAws },
    { name: "Azure", icon: mdiMicrosoftAzure },
    { name: "Git", icon: mdiGit },
  ],
  "AI & Others": [
    { name: "Machine Learning (CNN)", icon: mdiRobot },
    { name: "OCR & Liveness Detection", icon: mdiRobot },
    { name: "RESTful APIs", icon: mdiApi },
    { name: "M-Files", icon: mdiCodeTags },
    { name: "Agile & Scrum", icon: mdiCodeTags },
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="skills" className="scroll-mt-32">
      <div className="flex flex-col items-center text-center mb-16">
        <h3 className="text-green-500 font-mono text-sm tracking-widest uppercase mb-4 border border-green-500/30 px-4 py-1 rounded-full bg-green-500/10">Technical Stack</h3>
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white mb-6">
          Skills <span className="text-green-500">List</span>
        </h2>
        <p className="max-w-2xl text-gray-400">
          A constellation of technologies I've mastered and used to build high-performance applications.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center bg-gray-900/60 p-1.5 rounded-full border border-gray-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${activeTab === cat ? "text-gray-900" : "text-gray-400 hover:text-white"
                }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-green-500 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 bg-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/50 hover:bg-gray-800/60 transition-all group"
              >
                <div className="mb-4 text-gray-400 group-hover:text-green-500 transition-colors duration-300">
                  <Icon path={skill.icon} size={2.5} />
                </div>
                <span className="text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
