"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sentences = ["Full Stack Engineer", "Bachelor of Computer Science"];
const name = "Ignatius Filbert Sevilen";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameTyped, setNameTyped] = useState(false);


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(name.substring(0, i + 1));
      i++;
      if (i === name.length) {
        clearInterval(interval);
        setNameTyped(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (!nameTyped) return;

    const fullText = sentences[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, nameTyped]);

  return (
    <section className="relative min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between py-20 overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-green-500/30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-green-500/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center md:items-start my-4 z-10"
      >

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-green-500 relative inline-block">
            {displayedName}
          </span>
        </h1>

        <div className="mt-8 p-4 bg-gray-900/30 backdrop-blur-sm border-l-4 border-green-500 relative group overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <p className="text-xl md:text-3xl font-mono text-gray-300 relative z-10">
            <span className="text-white font-bold">{displayedText}</span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex gap-6"
        >
          <a href="#projects" className="px-8 py-3 bg-green-500 text-black font-black uppercase tracking-widest hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
            View_Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-green-500 text-green-500 font-black uppercase tracking-widest hover:bg-green-500/10 transition-all">
            Contact_Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="my-8 relative group"
      >
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-green-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 p-2 border-2 border-dashed border-green-500/30 rounded-full group-hover:border-green-500 transition-all duration-500">
          <img
            src="/images/profile.webp"
            alt="Profile"
            className="rounded-full object-contain w-64 h-64 md:w-80 md:h-80 bg-gray-900 shadow-2xl transition-all duration-700"
          />
        </div>

        {/* HUD Elements around image */}
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-green-500/50 animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-green-500/50 animate-pulse" />
      </motion.div>
    </section>
  );
}
