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
      <motion.h2
        className="text-3xl font-bold py-6 text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <div key={edu.category}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <Icon path={edu.icon} size={1.3} className="text-green-400" />
              <h3 className="text-xl font-bold text-green-400">{edu.category}</h3>
            </motion.div>

            <div className="flex flex-col gap-4">
              {edu.items.map((item, i) => (
                <motion.a
                  key={`${edu.category}-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index + i) * 0.2, duration: 0.5, ease: "easeOut" }}
                  className="p-6 border-l-2 border-gray-700 hover:border-green-400 cursor-pointer hover:shadow-green-500/20 block"
                >
                  {item.logo && (
                    <div className="mb-4">
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="object-contain w-24 h-24 bg-white p-1"
                      />
                    </div>
                  )}

                  <p className="font-bold text-gray-200 text-lg">
                    {item.institution}{" "}
                    <span className="text-sm text-gray-400">({item.year})</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                    {item.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
