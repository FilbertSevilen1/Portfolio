"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiSchool, mdiLaptop } from "@mdi/js";

const education = [
  {
    category: "Formal Education",
    icon: mdiSchool,
    items: [
      {
        institution: "BINUS University",
        year: "2020 – 2024",
        logo: "/images/logo/binus.webp",
        href: "https://www.binus.ac.id",
        details: [
          "Bachelor of Computer Science – GPA: 3.92 | Summa cum Laude",
          "Major: Computer Science, Interactive Multimedia Streaming",
          "Thesis: Equipment management application design for office work activities",
        ],
      },
      {
        institution: "Canisius College",
        year: "2017 – 2020",
        logo: "/images/logo/cc.webp",
        href: "https://kanisius.sch.id/",
        details: [
          "Senior High School – Science Major",
          "Final Grade: 91 | Magna cum Laude",
        ],
      },
    ],
  },
  {
    category: "Non-Formal Education",
    icon: mdiLaptop,
    items: [
      {
        institution: "Purwadhika Digital Technology School",
        year: "2022",
        logo: "/images/logo/purwadhika.webp",
        href: "https://purwadhika.com/",
        details: [
          "Web Developer Bootcamp",
          "Full-stack program: HTML, CSS, JavaScript, React.js, Node.js, SQL",
          "Projects: Pharmacy Management App, Social Media Post Scheduler",
        ],
      },
    ],
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="relative mb-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute -top-4 left-0 w-24 h-1 bg-green-500 origin-left"
        />
        <h2
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-5xl">
        {education.map((edu, index) => (
          <div key={edu.category} className="relative">
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-black italic uppercase text-white/80">{edu.category}</h3>
            </motion.div>

            <div className="flex flex-col gap-6">
              {edu.items.map((item, i) => (
                <motion.a
                  key={`${edu.category}-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + i) * 0.1 }}
                  className="group relative block p-8 bg-gray-900/40 backdrop-blur-xl border border-white/5 hover:bg-green-500/[0.03] hover:border-green-500/30 transition-all duration-500"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/20 group-hover:border-green-500 transition-colors" />

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {item.logo && (
                      <div className="shrink-0 p-3 bg-white border border-white/10 transition-all duration-700">
                        <img
                          src={item.logo}
                          alt={`${item.institution} logo`}
                          className="object-contain w-16 h-16"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-black italic text-white uppercase group-hover:text-green-400 transition-colors">
                          {item.institution}
                        </h4>
                        <span className="font-mono text-sm text-green-500">{item.year}</span>
                      </div>

                      {item.details.map((detail, j) => (
                        <li key={j} className="flex gap-3 text-gray-400 group-hover:text-gray-200 transition-colors text-sm md:text-base">
                          <span className="text-green-500 font-mono text-xs mt-[6px] shrink-0 opacity-20">[{j + 1}]</span>
                          <p>{detail}</p>
                        </li>
                      ))}
                    </div>
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
