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
} from "@mdi/js";

const projects = [
  {
    title: "Stonks",
    description:
      "Client’s project: Built a MetaTrader account management system with three instances (Admin, Client, and Copy Trade Bot) for strategy product functionality. Integrated MetaTrader API with FastAPI backend and Microsoft SQL Server. Tech Stack: FastAPI, MetaTrader API, Microsoft SQL Server",
    year: "2025",
    images: [
      "/images/projects/stonks/1.webp",
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
      "/images/projects/stonks/20.webp",
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
      <h2
        ref={projectHeaderRef}
        className="text-3xl font-bold py-6 text-green-400"
      >
        Projects
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 border-l-2 border-green-400 px-8"
        >
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Icon
                  path={selected.icon}
                  size={1.2}
                  className="text-green-400"
                />
                {selected.title}
              </h3>
              <p className="">{selected.year}</p>
            </div>

            {selected.images.length > 0 && (
              <div className="w-full">
                <motion.img
                  src={activeImage}
                  alt={selected.title}
                  className="rounded-lg shadow-lg border-2 border-green-400 w-full h-[400px] object-contain cursor-pointer"
                  onClick={() => setIsPreviewOpen(true)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex flex-wrap gap-3 mt-4">
                  {selected.images.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`preview-${i}`}
                      onClick={() => setActiveImage(img)}
                      className={`cursor-pointer object-contain rounded border-2 w-16 h-12 ${
                        activeImage === img
                          ? "border-green-500 shadow-neon"
                          : "border-gray-700"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            )}

            <p className="mt-4 text-xl">{selected.description}</p>
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                className="mt-6 inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition text-center"
              >
                View {selected.title} →
              </a>
            )}
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
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="p-6 border-l-2 cursor-pointer border-gray-700 hover:border-green-400"
                  onClick={() => {
                    setSelected(project);
                    setActiveImage(project.images[0]);
                  }}
                >
                  <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                    <Icon
                      path={project.icon}
                      size={1}
                      className="text-green-400"
                    />
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.year}</p>
                  <p className="mt-2 text-gray-300 line-clamp-4">
                    {project.description}
                  </p>
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
