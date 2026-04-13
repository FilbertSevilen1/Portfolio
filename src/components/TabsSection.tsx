"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const tabs = [
  { id: "experience", label: "Experience", component: Experience },
  { id: "education", label: "Education", component: Education },
  { id: "projects", label: "Projects", component: Projects },
  { id: "skills", label: "Skills", component: Skills },
  { id: "contact", label: "Contact", component: Contact },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (tabs.find((tab) => tab.id === hash)) {
        setActiveTab(hash);
        // Scroll to the tabs container when a tab is selected via hash
        const element = document.getElementById("tabs-container");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Check hash on initial load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || Experience;

  return (
    <section id="tabs-container" className="scroll-mt-32">
      <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-green-500/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-mono text-xs md:text-sm tracking-widest uppercase transition-all relative group ${
              activeTab === tab.id ? "text-green-500" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-4 left-0 right-0 h-[2px] bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <ActiveComponent />
      </motion.div>
    </section>
  );
}
