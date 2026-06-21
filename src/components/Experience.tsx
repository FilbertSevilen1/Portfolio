"use client";

import { motion } from "framer-motion";
import experiences from "@/data/experiences.json";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="relative overflow-hidden font-sans selection:bg-green-500/30 selection:text-green-400 scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#00ff4110,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* REFINED HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute -top-4 left-0 w-32 h-1 bg-green-500 origin-left shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            />
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white leading-none">
              Work Experience
            </h2>
          </div>
        </div>

        {/* TIMELINE HUB */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 md:ml-[-0.5px] top-0 bottom-0 w-[1px] bg-green-500/20 block" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 md:gap-16`}
              >
                {/* Connector Node */}
                <div className="absolute left-[5px] md:left-1/2 md:ml-[-11px] top-4 w-[22px] h-[22px] z-20">
                  <div className="w-full h-full bg-black border-2 border-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
                  </div>
                </div>

                {/* Content Panel */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                  <div className="group relative inline-block w-full">
                    {/* Decorative Brackets */}
                    <div className={`absolute -top-3 ${index % 2 === 0 ? '-left-3' : 'md:-right-3 -left-3'} w-10 h-10 border-t-2 border-l-2 border-green-500 z-10 transition-all duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]`} />
                    <div className={`absolute -bottom-3 ${index % 2 === 0 ? '-right-3' : 'md:-left-3 -right-3'} w-10 h-10 border-b-2 border-r-2 border-green-500 z-10 opacity-30 transition-all duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[4px]`} />

                    <a
                      href={exp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/40 backdrop-blur-xl border border-white/5 p-8 relative overflow-hidden group/card hover:bg-green-500/[0.03] transition-all duration-500"
                    >
                      {/* Interaction Glow */}
                      <div className="absolute inset-0 bg-green-500/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />

                      <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'} gap-4`}>
                        {exp.logo && (
                          <div className={`relative h-16 w-16 p-2 border border-white/10 group-hover/card:border-green-500 transition-all ${exp.logo?.includes('doperace') ? 'bg-white' : 'bg-black'}`}>
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain transition-all duration-700" />
                          </div>
                        )}

                        <div>
                          <h3 className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tighter group-hover/card:text-green-400 transition-colors">
                            {exp.role}
                          </h3>
                          <div className={`flex flex-wrap gap-2 mt-1 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                            <p className="text-green-500 font-mono text-xs md:text-sm tracking-widest uppercase font-bold">
                              {exp.company}
                            </p>
                            <p className="text-gray-300 font-mono text-xs md:text-sm">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                      </div>

                      <ul className={`mt-8 space-y-4 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'} relative z-10`}>
                        {exp.details.map((detail, i) => (
                          <li key={i} className={`flex gap-3 text-gray-300 group-hover/card:text-gray-100 transition-all duration-300 text-sm md:text-base ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            <span className="text-green-500 font-mono mt-1 shrink-0 text-xs mt-[6px] opacity-70">[{i + 1}]</span>
                            <p className={index % 2 === 0 ? 'text-left' : 'md:text-right text-left leading-relaxed'}>{detail}</p>
                          </li>
                        ))}
                      </ul>
                    </a>
                  </div>
                </div>

                {/* Empty Side for balance on desktop */}
                <div className="hidden md:block w-full md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
