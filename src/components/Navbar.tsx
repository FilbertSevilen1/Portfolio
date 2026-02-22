"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-black/60 backdrop-blur-md border-b border-green-500/20">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg md:text-xl font-black tracking-tighter uppercase italic text-white"
      >
        IFS
      </motion.h1>

      <ul className="hidden md:flex gap-8">
        {[
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Education", href: "#education" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-mono text-xs tracking-widest uppercase text-gray-400 hover:text-green-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 transition-all group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden z-50 px-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon path={isOpen ? mdiClose : mdiMenu} size={1.2} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center p-6"
          >
            {/* HUD Scanline Effect for Mobile Menu */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <ul className="flex flex-col gap-8 text-center w-full">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Education", href: "#education" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-3xl font-black italic uppercase tracking-tighter text-white hover:text-green-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-green-500 font-mono text-sm tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              [ CLOSE ]
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
