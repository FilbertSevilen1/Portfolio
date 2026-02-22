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
    items: ["Convolutional Neural Networks (CNN)", "OCR", "Liveness Detection"],
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
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative p-8 bg-gray-900/40 backdrop-blur-xl border border-white/5 hover:bg-green-500/[0.03] hover:border-green-500/30 transition-all duration-500"
          >
            {/* Top right decorative tag */}

            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 border border-green-500/30 group-hover:border-green-500 transition-colors">
                <Icon path={skill.icon} size={1.2} className="text-green-500" />
              </div>
              <h3 className="text-xl font-black italic uppercase text-white group-hover:text-green-400 transition-colors leading-none">
                {skill.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-gray-400 group-hover:text-green-300 group-hover:border-green-500/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
