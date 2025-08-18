"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-8">
      <h1 className="text-xl font-bold">Ignatius Filbert Sevilen</h1>
      <ul className="hidden md:flex gap-6">
        <li><a href="#about" className="font-bold hover:text-green-600">About</a></li>
        <li><a href="#experience" className="font-bold hover:text-green-600">Experience</a></li>
        <li><a href="#education" className="font-bold hover:text-green-600">Education</a></li>
        <li><a href="#projects" className="font-bold hover:text-green-600">Projects</a></li>
        <li><a href="#skills" className="font-bold hover:text-green-600">Skills</a></li>
        <li><a href="#contact" className="font-bold hover:text-green-600">Contact</a></li>
      </ul>

      <button
        className="md:hidden z-50 px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon path={isOpen ? mdiClose : mdiMenu} size={1.2} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg md:hidden flex flex-col items-start p-6"
          >
            <ul className="flex flex-col gap-6 mt-12 w-full">
              <li>
                <a
                  href="#about"
                  className="font-bold block hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="font-bold block hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="font-bold block hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="font-bold block hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="font-bold block hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Skills & Abilities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-bold block hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
