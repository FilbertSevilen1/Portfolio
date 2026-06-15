"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";

const navItems = [
  { label: "Projects", href: "/projects", highlight: true },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-black/60 backdrop-blur-md border-b border-green-500/20">
        <Link href="/">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg md:text-xl font-black tracking-tighter uppercase italic text-white hover:text-green-500 transition-colors cursor-pointer"
          >
            IFS
          </motion.h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`font-mono text-xs md:text-sm tracking-widest uppercase transition-all relative group flex items-center gap-2 ${
                    item.highlight 
                      ? "text-green-500 font-bold px-3 py-1 border border-green-500/30 rounded-full bg-green-500/5 hover:bg-green-500/20" 
                      : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  {item.label}
                  {!item.highlight && (
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 transition-all group-hover:w-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <a
            href="/CV_Ignatius_Filbert_Sevilen.pdf"
            download="Ignatius_Filbert_Sevilen_CV.pdf"
            className="px-5 py-2 border border-green-500/30 rounded-full text-green-400 font-mono text-xs md:text-sm tracking-widest uppercase hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden z-50 px-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Icon path={isOpen ? mdiClose : mdiMenu} size={1} className="text-green-500" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col items-center justify-center p-6 bg-black"
          >
            {/* HUD Scanline Effect for Mobile Menu */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <ul className="flex flex-col gap-8 text-center w-full">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-3xl font-black italic uppercase tracking-tighter transition-colors ${
                      item.highlight ? "text-green-500" : "text-white hover:text-green-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {item.highlight && <span className="text-xs ml-2 align-top opacity-50 font-mono italic">[ Featured ]</span>}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-green-500 font-mono text-sm tracking-[0.4em] uppercase"
              onClick={() => setIsOpen(false)}
            >
              [ CLOSE ]
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
