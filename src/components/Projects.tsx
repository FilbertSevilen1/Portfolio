"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Icon from "@mdi/react";
import {
  mdiCurrencyUsd,
  mdiGamepadVariant,
  mdiCartOutline,
  mdiPill,
  mdiCalendarClock,
  mdiWeb,
  mdiDatabaseCog,
  mdiFood,
  mdiBookOutline,
} from "@mdi/js";

const projects = [
  {
    title: "Stonks",
    description:
      "Client’s project: Built a MetaTrader account management system with three instances (Admin, Client, and Copy Trade Bot) for strategy product functionality. Integrated MetaTrader API with FastAPI backend and Microsoft SQL Server. Tech Stack: FastAPI, MetaTrader API, Microsoft SQL Server",
    year: "2025",
    images: [
      "/images/projects/stonks/20.webp",
      "/images/projects/stonks/3.webp",
      "/images/projects/stonks/4.webp",
      "/images/projects/stonks/5.webp",
      "/images/projects/stonks/6.webp",
      "/images/projects/stonks/7.webp",
      "/images/projects/stonks/8.webp",
      "/images/projects/stonks/9.webp",
      "/images/projects/stonks/10.webp",
      "/images/projects/stonks/11.webp",
      "/images/projects/stonks/12.webp",
      "/images/projects/stonks/13.webp",
      "/images/projects/stonks/14.webp",
      "/images/projects/stonks/15.webp",
      "/images/projects/stonks/16.webp",
      "/images/projects/stonks/17.webp",
      "/images/projects/stonks/18.webp",
      "/images/projects/stonks/19.webp",
      "/images/projects/stonks/1.webp",
      "/images/projects/stonks/21.webp",
      "/images/projects/stonks/22.webp",
      "/images/projects/stonks/23.webp",
      "/images/projects/stonks/24.webp",
      "/images/projects/stonks/25.webp",
      "/images/projects/stonks/26.webp",
      "/images/projects/stonks/27.webp",
    ],
    link: "",
    icon: mdiCurrencyUsd,
  },
  {
    title: "Lanaya Course",
    description:
      "Personal Project: Developed a Next.js website to support community by providing online courses. Tech Stack: Next.js, MySQL, Express.js",
    year: "2025",
    images: [
      "/images/projects/lanaya-course/1.webp",
      "/images/projects/lanaya-course/2.webp",
      "/images/projects/lanaya-course/3.webp",
      "/images/projects/lanaya-course/4.webp",
      "/images/projects/lanaya-course/5.webp",
      "/images/projects/lanaya-course/6.webp",
      "/images/projects/lanaya-course/7.webp"
    ],
    link: "",
    icon: mdiBookOutline,
  },
  {
    title: "Legend of Arcanis",
    description:
      "Personal Project: Developed a Next.js website to promote the Legend of Arcanis game and support new players through guides, resources, and community features. Tech Stack: Next.js, MySQL, Express.js",
    year: "2025",
    images: [
      "/images/projects/legend-of-arcanis/1.webp",
      "/images/projects/legend-of-arcanis/2.webp",
      "/images/projects/legend-of-arcanis/3.webp",
      "/images/projects/legend-of-arcanis/4.webp",
      "/images/projects/legend-of-arcanis/5.webp",
      "/images/projects/legend-of-arcanis/6.webp",
    ],
    link: "",
    icon: mdiGamepadVariant,
  },
  {
    title: "Astroride",
    description:
      "Personal Project: Designed a sleek mockup e-commerce website for a luxury wheels and rims retailer with a modern dark theme for optimal product presentation. Tech Stack: Next.js, MySQL, Express.js, SQL, UI/UX Design",
    year: "2025",
    images: [
      "/images/projects/astro/1.webp",
      "/images/projects/astro/2.webp",
      "/images/projects/astro/3.webp",
      "/images/projects/astro/4.webp",
      "/images/projects/astro/5.webp",
      "/images/projects/astro/6.webp",
      "/images/projects/astro/7.webp",
    ],
    link: "https://astro-wheels.vercel.app/",
    icon: mdiCartOutline,
  },
  {
    title: "Wise Cardshop Website",
    description:
      "Personal Project: Developing a website to promote and sell TCG cards, focusing on e-commerce functionality and user experience. Tech Stack: React.js, MySQL, Express.js, SQL, UI/UX Design",
    year: "2024 – 2025",
    images: [],
    link: "",
    icon: mdiCartOutline,
  },
  {
    title: "ZedWheels Website",
    description:
      "Freelance Project – Cosmic Marketing Corporation: Developed a high-performance e-commerce platform for aftermarket wheels with dynamic product listings, variant selection, and smooth navigation. Tech Stack: Next.js, MySQL, Express.js, UI/UX",
    year: "2025",
    images: [
      "/images/projects/zed/1.webp",
      "/images/projects/zed/2.webp",
      "/images/projects/zed/3.webp",
      "/images/projects/zed/4.webp",
      "/images/projects/zed/5.webp",
      "/images/projects/zed/6.webp",
      "/images/projects/zed/7.webp",
    ],
    link: "https://zed-wheels.vercel.app/",
    icon: mdiCartOutline,
  },
  {
    title: "Heavenly Cow Website",
    description:
      "Personal Project: Developing a mock-up website to promote Beef Restaurant. Tech Stack: React.js, UI/UX Design",
    year: "2024",
    images: [
      "/images/projects/heavenly-cow/1.webp",
      "/images/projects/heavenly-cow/2.webp",
      "/images/projects/heavenly-cow/3.webp",
      "/images/projects/heavenly-cow/4.webp",
      "/images/projects/heavenly-cow/5.webp",
      "/images/projects/heavenly-cow/6.webp",
      "/images/projects/heavenly-cow/7.webp",
      "/images/projects/heavenly-cow/8.webp",
      "/images/projects/heavenly-cow/9.webp",
      "/images/projects/heavenly-cow/10.webp",
    ],
    link: "https://heavenly-cow.vercel.app/",
    icon: mdiFood,
  },
  {
    title: "Pharmacy Project",
    description:
      "Purwadhika Web Developer Bootcamp: Developed a web application for pharmacy management as part of the bootcamp curriculum. Tech Stack: React.js, Express.js, MySQL",
    year: "2022",
    images: [],
    link: "",
    icon: mdiPill,
  },
  {
    title: "Social Media Post Project",
    description:
      "Purwadhika Web Developer Bootcamp: Created a project for sharing our photos into social media, implemented like and comment features. Tech Stack: React.js, Express.js, MySQL",
    year: "2022",
    images: [],
    link: "",
    icon: mdiCalendarClock,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const [activeImage, setActiveImage] = useState(selected.images[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const projectHeaderRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (projectHeaderRef.current) {
      projectHeaderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selected]);

  return (
    <section id="projects">
      <div className="relative mb-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute -top-4 left-0 w-24 h-1 bg-green-500 origin-left"
        />
        <h2
          ref={projectHeaderRef}
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          Projects
        </h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="mb-16 relative"
        >
          {/* Decorative Brackets for Main Project */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-green-500 z-10" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-green-500 z-10 opacity-30" />

          <div className="bg-gray-900/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 relative overflow-hidden group">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter flex items-center gap-4">
                  {selected.title}
                </h3>
                <p className="font-mono text-green-500/60 text-lg uppercase tracking-widest">{selected.year}</p>
              </div>

              {selected.images.length > 0 && (
                <div className="w-full space-y-6">
                  <div className="relative aspect-[16/9] md:h-[500px] overflow-hidden border border-white/10">
                    <motion.img
                      src={activeImage}
                      alt={selected.title}
                      className="w-full h-full object-contain cursor-pointer transition-transform duration-700 hover:scale-105"
                      onClick={() => setIsPreviewOpen(true)}
                    />
                    {/* Scanline Effect Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selected.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(img)}
                        className={`relative group/thumb overflow-hidden border-2 transition-all duration-300 w-20 h-16 ${activeImage === img
                          ? "border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                          : "border-white/5 hover:border-white/20"
                          }`}
                      >
                        <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="max-w-3xl">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                  {selected.description}
                </p>

                {selected.link && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selected.link}
                    target="_blank"
                    className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-green-500 text-black font-black uppercase tracking-widest hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    Deploy_Live <span className="text-xl">→</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <LayoutGroup>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {projects
              .filter((p) => p.title !== selected.title)
              .map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer relative"
                  onClick={() => {
                    setSelected(project);
                    setActiveImage(project.images[0]);
                  }}
                >
                  <div className="bg-gray-900/40 backdrop-blur-sm border border-white/5 p-6 transition-all duration-300 group-hover:bg-green-500/[0.03] group-hover:border-green-500/30">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-green-500/40 group-hover:text-green-500 transition-colors tracking-widest">{project.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.img
              src={activeImage}
              alt={selected.title}
              className="max-h-full max-w-full rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
