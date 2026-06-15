"use client";

import { motion } from "framer-motion";
import Icon from "@mdi/react";
import * as icons from "@mdi/js";
import profileData from "@/data/profile.json";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center pt-24 pb-12 lg:pt-36 lg:pb-0 lg:overflow-hidden scroll-mt-32 lg:-mt-[150px]"
    >
      {/* Dynamic ambient grid overlay & radial glow */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Large desktop-only absolute portrait (sitting in the center z-0 layer) */}
      <div className="hidden lg:flex absolute left-1/2 bottom-0 -translate-x-1/2 z-0 h-[88%] items-end justify-center pointer-events-none">
        <img 
          src="/images/profile.webp" 
          alt="Ignatius Filbert Sevilen" 
          className="object-cover h-full w-auto max-h-[82vh] object-top rounded-b-none transition-transform duration-700 hover:scale-[1.02]"
        />
        {/* Soft black mask at the bottom to blend portrait base with background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030604] to-transparent" />
      </div>

      <div className="w-full grid grid-cols-12 gap-8 items-end z-10 h-full relative">
        
        {/* LEFT COLUMN: Large Typography & Action (re-positioned z-10) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center pb-0 lg:pb-12"
        >
          {/* Top Line Accent */}
          <div className="w-24 h-1 bg-white mb-10 rounded-full" />

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-white font-bold">
            I'm Filbert, a <br />
            <span className="font-extrabold text-green-500">Full Stack Developer</span>
          </h1>

          {/* Tagline - Increased contrast to text-gray-100 and size to text-base md:text-lg */}
          <p className="text-gray-100 text-base md:text-lg leading-relaxed mt-8 max-w-md font-medium">
            {profileData.valueProposition}
          </p>

          {/* Down Chevron Button */}
          <button 
            onClick={() => handleScrollTo("about")}
            className="group w-16 h-16 bg-green-500 hover:bg-green-400 text-black flex items-center justify-center rounded-full mt-12 transition-all duration-300 shadow-[0_4px_20px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.5)]"
            title="Scroll Down"
          >
            <Icon 
              path={icons.mdiChevronDown} 
              size={1.5} 
              className="transition-transform duration-300 group-hover:translate-y-1" 
            />
          </button>
        </motion.div>

        {/* MOBILE-ONLY Portrait Image (retains normal flow on mobile) */}
        <div className="col-span-12 lg:hidden flex justify-center items-end relative my-6">
          <img 
            src="/images/profile.webp" 
            alt="Ignatius Filbert Sevilen" 
            className="object-cover w-full max-w-[280px] aspect-[3/4] object-top rounded-b-none"
          />
        </div>

        {/* RIGHT COLUMN: Details & Connections (re-positioned z-10) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-center h-full pb-0 lg:pb-12 text-left w-full pl-0 lg:pl-4 space-y-8"
        >
          {/* About Me Block - Increased text sizing and contrast */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <h4 className="text-xs md:text-sm font-mono tracking-[0.25em] text-green-400 uppercase font-black">ABOUT ME</h4>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed font-normal">
              Full Stack Engineer with expertise in building scalable, user-focused web applications and AI-driven solutions. Summa cum Laude graduate.
            </p>
            <button 
              onClick={() => handleScrollTo("about")}
              className="group flex items-center gap-2 text-xs md:text-sm font-mono tracking-[0.2em] text-white hover:text-green-400 font-bold uppercase transition-colors border-b border-white/30 hover:border-green-400 pb-1 mt-2.5 w-fit"
            >
              LEARN MORE <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* My Work Block - Increased text sizing and contrast */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <h4 className="text-xs md:text-sm font-mono tracking-[0.25em] text-green-400 uppercase font-black">MY WORK</h4>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed font-normal">
              Explore my commercial contracts and personal web systems, featuring the new e-commerce building materials platform, Masamas.
            </p>
            <button 
              onClick={() => handleScrollTo("projects")}
              className="group flex items-center gap-2 text-xs md:text-sm font-mono tracking-[0.2em] text-white hover:text-green-400 font-bold uppercase transition-colors border-b border-white/30 hover:border-green-400 pb-1 mt-2.5 w-fit"
            >
              BROWSE PORTFOLIO <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Follow Me Block - Increased sizes */}
          <div className="space-y-4">
            <h4 className="text-xs md:text-sm font-mono tracking-[0.25em] text-green-400 uppercase font-black">FOLLOW ME</h4>
            <div className="flex items-center gap-6 text-gray-300">
              <a 
                href={profileData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors duration-300"
                title="GitHub"
              >
                <Icon path={icons.mdiGithub} size={1.1} />
              </a>
              <a 
                href={profileData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors duration-300"
                title="LinkedIn"
              >
                <Icon path={icons.mdiLinkedin} size={1.1} />
              </a>
              <a 
                href={profileData.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors duration-300"
                title="Instagram"
              >
                <Icon path={icons.mdiInstagram} size={1.1} />
              </a>
              <a 
                href={`mailto:${profileData.socials.email}`}
                className="hover:text-green-400 transition-colors duration-300"
                title="Email"
              >
                <Icon path={icons.mdiEmail} size={1.1} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
