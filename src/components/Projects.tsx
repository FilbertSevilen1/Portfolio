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
    title: "Holiday-io",
    description:
      "Client's Project: A landing page for a Travel Community. The platform connects travelers to create meaningful friendships and build a global community of adventure.",
    year: "2026",
    tags: ["Next.js", "Tailwind CSS", "UI/UX Design"],
    images: [
      "/images/projects/holiday-io/1.webp",
      "/images/projects/holiday-io/2.webp",
      "/images/projects/holiday-io/3.webp",
      "/images/projects/holiday-io/4.webp",
      "/images/projects/holiday-io/5.webp",
      "/images/projects/holiday-io/6.webp",
      "/images/projects/holiday-io/7.webp",
      "/images/projects/holiday-io/8.webp",
      "/images/projects/holiday-io/9.webp",
      "/images/projects/holiday-io/10.webp",
      "/images/projects/holiday-io/11.webp",
      "/images/projects/holiday-io/12.webp"
    ],
    link: "https://holiday-io-kappa.vercel.app/",
    icon: mdiWeb,
  },
  {
    title: "Stonks",
    description:
      "Client’s project: Built a MetaTrader account management system with three instances (Admin, Client, and Copy Trade Bot) for strategy product functionality. Integrated MetaTrader API with FastAPI backend and Microsoft SQL Server.",
    year: "2025",
    tags: ["FastAPI", "MetaTrader API", "Microsoft SQL Server"],
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
      "Personal Project: Developed a Next.js website to support community by providing online courses.",
    year: "2025",
    tags: ["Next.js", "MySQL", "Express.js"],
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
      "Personal Project: Developed a Next.js website to promote the Legend of Arcanis game and support new players through guides, resources, and community features.",
    year: "2025",
    tags: ["Next.js", "MySQL", "Express.js"],
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
      "Personal Project: Designed a sleek mockup e-commerce website for a luxury wheels and rims retailer with a modern dark theme for optimal product presentation.",
    year: "2025",
    tags: ["Next.js", "MySQL", "Express.js", "SQL", "UI/UX Design"],
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
      "Personal Project: Developing a website to promote and sell TCG cards, focusing on e-commerce functionality and user experience.",
    year: "2024 – 2025",
    tags: ["React.js", "MySQL", "Express.js", "SQL", "UI/UX Design"],
    images: [],
    link: "",
    icon: mdiCartOutline,
  },
  {
    title: "ZedWheels Website",
    description:
      "Freelance Project – Cosmic Marketing Corporation: Developed a high-performance e-commerce platform for aftermarket wheels with dynamic product listings, variant selection, and smooth navigation.",
    year: "2025",
    tags: ["Next.js", "MySQL", "Express.js", "UI/UX"],
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
      "Personal Project: Developing a mock-up website to promote Beef Restaurant.",
    year: "2024",
    tags: ["React.js", "UI/UX Design"],
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
      "Purwadhika Web Developer Bootcamp: Developed a web application for pharmacy management as part of the bootcamp curriculum.",
    year: "2022",
    tags: ["React.js", "Express.js", "MySQL"],
    images: [],
    link: "",
    icon: mdiPill,
  },
  {
    title: "Social Media Post Project",
    description:
      "Purwadhika Web Developer Bootcamp: Created a project for sharing our photos into social media, implemented like and comment features.",
    year: "2022",
    tags: ["React.js", "Express.js", "MySQL"],
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
    <section>
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
                    Visit Site <span className="text-xl">→</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-8 flex items-center gap-4">
        <span className="text-green-500">Project</span> Lists
        <div className="h-[1px] flex-1 bg-green-500/20" />
      </h2>

      <LayoutGroup>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          <AnimatePresence>
            {projects
              .filter((p) => p.title !== selected.title)
              .map((project, index) => {
                // Determine Bento Grid Span
                const bentoClass = 
                  index % 4 === 0 ? "md:col-span-2 md:row-span-2" : 
                  index % 4 === 3 ? "md:col-span-3 md:row-span-1" : 
                  "md:col-span-1 md:row-span-1";

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-white/5 bg-gray-900/40 backdrop-blur-sm transition-all duration-500 hover:border-green-500/40 ${bentoClass}`}
                    onClick={() => {
                      setSelected(project);
                      setActiveImage(project.images[0]);
                    }}
                  >
                    {/* Background Image for Large/Wide items */}
                    {(index % 4 === 0 || index % 4 === 3) && project.images[0] && (
                      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                        <img src={project.images[0]} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      </div>
                    )}

                    <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl md:text-2xl font-black italic text-white uppercase tracking-tighter group-hover:text-green-400 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <p className={`text-gray-400 text-sm leading-relaxed mb-4 transition-all duration-500 ${index % 4 === 0 ? "line-clamp-4" : "line-clamp-2"}`}>
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 border border-green-500/20 rounded-full text-[10px] font-mono text-green-500/60 uppercase">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Hover Action */}
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-xs font-black uppercase tracking-widest text-green-500">View Detail</span>
                          <span className="text-green-500">→</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Accent */}
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                    </div>
                  </motion.div>
                );
              })}
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
