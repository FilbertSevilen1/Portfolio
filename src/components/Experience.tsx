"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Maybank Finance",
    role: "Full-Stack Engineer",
    type: "Full-time",
    period: "Jul 2024 – Present",
    logo: "/images/logo/mayfin.webp",
    href: "https://www.maybankfinance.co.id",
    details: [
      "CI/CD Implementation using Docker and Jenkins, to replace manual deployment.",
      "Developing OCR for Indonesian KTP: Implementing a Convolutional Neural Network (CNN) model using Python and Flask to enable the processing of Images and Documents.",
      "Liveness Face Recognition: Designing and deploying a liveness detection system to enhance the security of facial recognition applications for financial services.",
      "Electronic Document Signing Application: Exploring and developing an electronic document signing platform using M-Files, streamlining workflows for document authentication using Vue.js and ASP.NET.",
      "Large Language Model Website and API: Building and maintaining a website and API to integrate large language models locally, enabling users to interact with advanced language processing capabilities using ASP.NET, SQL Server, and Vue.js.",
      "Developing, Maintaining and Enhancing Company’s Website: Responsible for ensuring optimal performance and maintenance of key business applications, such as the Service Support, Electronic Sign, Profile Website, Car Auction and Sales Website. Using ASP.NET, SQL Server, and Vue.js.",
    ],
  },
  {
    company: "Cosmic Marketing Corporation (Rota Usa)",
    role: "Full-Stack Developer Freelance",
    type: "Part-time",
    period: "Jan 2024 – Present",
    logo: "/images/logo/cosmic.webp",
    href: "https://www.rotausa.com/",
    details: [
      "Developing Business Websites: Creating robust and visually appealing websites for businesses, ensuring responsive design, optimized performance, and seamless user experience. Using React.js, MySQL, and Node.js.",
      "Managing Products in Marketplace Websites: Managing products in marketplace websites, including listing creation, content optimization, inventory updates, and pricing adjustments to maximize sales and visibility.",
    ],
  },
  {
    company: "Maybank Finance",
    role: "Software Developer Intern",
    type: "Full-time",
    period: "Feb 2023 – Feb 2024",
    logo: "/images/logo/mayfin.webp",
    href: "https://www.maybankfinance.co.id",
    details: [
      "CI/CD Implementation using Docker and Jenkins, to replace manual deployment.",
      "Developing OCR for Indonesian KTP: Implementing a Convolutional Neural Network (CNN) model using Python and Flask to enable the processing of Images and Documents.",
      "Developing, Maintaining and Enhancing Company’s Website: Responsible for ensuring optimal performance and maintenance of key business applications, such as the Service Support, Electronic Sign, Profile Website, Car Auction and Sales Website. Using Vue.js and ASP.NET",
      "Revamping Company’s Website: Worked on improving the user interface and experience of the company’s website using Vue.js, ensuring a modern and professional presentation. Using Nuxt3 and ASP.NET.",
      "Redesign UI for Website Landing Page: Enhanced the landing page for a marketing campaign, increasing user engagement and ensuring a high-quality design. Using Vue.js.",
      "Customer Voucher Redeem Approval Website: Developed a streamlined system for voucher redemption approvals using ASP.NET and Vue.js, contributing to a more efficient process for users.",
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
            key={index}
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

            <h3 className="text-xl md:text-2xl font-bold text-green-400">
              {exp.role}
            </h3>
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
