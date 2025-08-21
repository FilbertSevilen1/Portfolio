"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Maybank Finance",
    role: "Full-Stack Engineer",
    type: "Full-time",
    period: "2023 – Present",
    logo: "/images/logo/mayfin.webp",
    href: "https://www.maybankfinance.co.id",
    details: [
      "CI/CD Implementation using Docker and Jenkins, to replace manual deployment.",
      "Developing OCR for Indonesian KTP using CNN in Python and Flask.",
      "Liveness Face Recognition for secure financial services.",
      "Electronic Document Signing Application with M-Files.",
      "Large Language Model Website and API integration.",
      "Maintaining and enhancing company websites: Service Support, Electronic Sign, Profile, Car Auction, Sales.",
      "Revamping landing pages with Vue.js for better UX.",
      "Voucher Redeem Approval Website using Vue.js.",
    ],
  },
  {
    company: "Cosmic Marketing Corporation (Rota Usa)",
    role: "Full-Stack Developer Freelance",
    type: "Part-time",
    period: "2024 – Present",
    logo: "/images/logo/cosmic.webp",
    href: "https://www.rotausa.com/",
    details: [
      "Developing robust business websites with responsive design and optimized performance.",
      "Managing marketplace product listings, content optimization, inventory, and pricing adjustments.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold py-6 text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <motion.a
            key={exp.company}
            href={exp.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            className="p-6 border-l-2 border-gray-700 hover:border-green-400 hover:shadow-green-500/20 block"
          >
            {exp.logo && (
              <div className="mb-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="object-contain rounded-lg bg-black w-24 h-24"
                />
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-bold text-green-400">{exp.role}</h3>
            <p className="font-bold">
              {exp.company} • {exp.type}
            </p>
            <p className="text-gray-400 mb-3">{exp.period}</p>

            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
