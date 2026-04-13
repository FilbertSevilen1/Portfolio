"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiSchool, mdiMapMarker, mdiChevronRight } from "@mdi/js";

const education = [
  {
    category: "Formal Education",
    items: [
      {
        degree: "Bachelor of Computer Science",
        major: "Interactive Multimedia Streaming",
        abbreviation: "U",
        year: "2020 – 2024",
        institution: "BINUS University",
        location: "Jakarta, Indonesia",
        gpa: 3.92,
        maxGpa: 4.0,
        href: "https://www.binus.ac.id",
        details: [
          "Graduated with Summa cum Laude honors, demonstrating exceptional academic performance and dedication.",
          "Completed comprehensive coursework in computer science principles and interactive multimedia technologies.",
          "Developed a thesis on equipment management application design for office work activities to streamline administrative workflows.",
        ],
      },
      {
        degree: "Senior High School",
        major: "Science Major",
        abbreviation: "S",
        year: "2017 – 2020",
        institution: "Canisius College",
        location: "Jakarta, Indonesia",
        gpa: 91,
        maxGpa: 100,
        href: "https://kanisius.sch.id/",
        details: [
          "Graduated with Magna cum Laude honors with a strong foundation in analytical and scientific reasoning.",
          "Actively participated in rigorous academic programs shaping critical thinking and problem-solving skills.",
        ],
      },
    ],
  },
  {
    category: "Certifications & Credentials",
    items: [
      {
        degree: "Web Developer Bootcamp",
        major: "Full-Stack Web Development",
        abbreviation: "P",
        year: "2022",
        institution: "Purwadhika Digital Technology School",
        location: "Online",
        href: "https://purwadhika.com/",
        details: [
          "Intensive full-stack program covering HTML, CSS, JavaScript, React.js, Node.js, and SQL.",
          "Developed practical applications including a Pharmacy Management App and a Social Media Post Scheduler.",
        ],
      },
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-32">
      <div className="relative mb-12 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white text-center">
          Education
        </h2>
        <motion.div
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: 1 }}
           transition={{ duration: 1, ease: "circOut" }}
           className="w-24 h-1 bg-green-500 mt-4 rounded-full"
        />
      </div>

      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        {education.map((section, index) => (
          <div key={section.category} className="flex flex-col gap-6">
            <motion.div
              className="flex items-center gap-3 mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Icon path={mdiSchool} size={1} className="text-gray-400" />
              <h3 className="text-xl font-bold tracking-tight text-white">{section.category}</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <motion.a
                  key={`${section.category}-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index + i) * 0.1 }}
                  className="group relative block p-6 bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg overflow-hidden flex flex-col h-full"
                >
                  {/* Top Colored Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-400 opacity-80" />
                  
                  <div className="flex items-start gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg font-bold text-green-400">{item.abbreviation}</span>
                     </div>
                     <div className="flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                            {item.degree}
                          </h4>
                          {item.year && (
                             <div className="px-3 py-0.5 bg-gray-800 rounded-full border border-gray-700 w-fit">
                                <span className="text-xs font-mono text-gray-300">{item.year}</span>
                             </div>
                          )}
                        </div>
                        <span className="text-green-500 font-medium text-sm mt-1">{item.major}</span>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-400 mb-6 font-medium">
                     <div className="flex items-center gap-1.5">
                       <Icon path={mdiSchool} size={0.6} className="opacity-70" />
                       <span>{item.institution}</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                       <Icon path={mdiMapMarker} size={0.6} className="opacity-70" />
                       <span>{item.location}</span>
                     </div>
                  </div>

                  {item.gpa && (
                    <div className="mb-6 flex items-center gap-4">
                       <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0">GPA/Score</span>
                       <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.gpa / item.maxGpa) * 100}%` }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                          />
                       </div>
                       <span className="text-sm font-bold text-white shrink-0">{item.gpa} / {item.maxGpa}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 mt-auto">
                    {item.details.map((detail, j) => (
                      <div key={j} className="flex gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        <Icon path={mdiChevronRight} size={0.7} className="text-green-500 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-800/50 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-black tracking-widest text-gray-500 uppercase">Click to expand</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
