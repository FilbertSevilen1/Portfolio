"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiEyeOutline } from "@mdi/js";
import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  // Take the first 3 projects as featured
  const featured = projectsData.slice(0, 3);

  return (
    <section id="projects" className="relative py-20">
      <div className="relative mb-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute -top-4 left-0 w-24 h-1 bg-green-500 origin-left"
        />
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white">
          Featured <span className="text-green-500">Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featured.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gray-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="aspect-[16/10] relative overflow-hidden">
              {project.images.length > 0 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white/10 font-black italic">NO IMAGE</span>
                </div>
              )}

              {/* Overlay with Preview Button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <Link href="/projects" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-green-500 text-black px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                  >
                    <Icon path={mdiEyeOutline} size={0.7} />
                    Preview Project
                  </motion.div>
                </Link>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8 relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                    <Icon path={project.icon} size={0.8} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase italic">{project.title}</h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-green-500/60 uppercase border border-green-500/10 px-2 py-1 rounded-md bg-green-500/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-6 bg-white text-black px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-green-500 transition-all shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]"
          >
            Explore More
            <Icon path={mdiArrowRight} size={1} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
