"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import {
  mdiCodeTags,
  mdiWeb,
  mdiServer,
  mdiDatabase,
  mdiRobot,
  mdiApi,
  mdiSourceBranch,
  mdiTools,
  mdiCloudOutline,
  mdiClipboardListOutline,
  mdiLightbulbOnOutline,
  mdiAccountGroup,
} from "@mdi/js";

const skills = [
  {
    title: "Programming Languages",
    icon: mdiCodeTags,
    items: ["Python", "JavaScript", "C#", "SQL"],
  },
  {
    title: "Web Development",
    icon: mdiWeb,
    items: ["Angular.js", "Vue.js", "React.js", "Nuxt3", "Next.js"],
  },
  {
    title: "Backend Development",
    icon: mdiServer,
    items: ["ASP.NET", "Flask", "Express.js", "Node.js"],
  },
  {
    title: "Databases",
    icon: mdiDatabase,
    items: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "AI & Machine Learning",
    icon: mdiRobot,
    items: [
      "Convolutional Neural Networks (CNN)",
      "OCR",
      "Liveness Detection",
    ],
  },
  {
    title: "API Development",
    icon: mdiApi,
    items: ["Design", "Integration", "Maintenance of RESTful APIs"],
  },
  {
    title: "Version Control",
    icon: mdiSourceBranch,
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Tools & Technologies",
    icon: mdiTools,
    items: ["M-Files", "Docker", "Postman"],
  },
  {
    title: "Cloud Platforms",
    icon: mdiCloudOutline,
    items: ["AWS", "Azure"],
  },
  {
    title: "Project Management",
    icon: mdiClipboardListOutline,
    items: ["Agile", "Scrum"],
  },
  {
    title: "Problem Solving",
    icon: mdiLightbulbOnOutline,
    items: ["Excellent Analytical Skills", "Troubleshooting"],
  },
  {
    title: "Collaboration & Communication",
    icon: mdiAccountGroup,
    items: [
      "Strong Teamwork",
      "Cross-functional Collaboration",
      "Effective Communication",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-3xl font-bold py-6 text-green-400">
        Skills & Abilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="p-6 border-l-2 border-green-400 cursor-pointer hover:shadow-green-500/20"
          >
            <div className="flex items-start gap-2 mb-3">
              <Icon path={skill.icon} size={1.3} className="text-green-400" />
              <h3 className="text-xl font-bold text-green-400">
                {skill.title}
              </h3>
            </div>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
