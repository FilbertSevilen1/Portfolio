"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="relative mb-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute -top-4 left-0 w-24 h-1 bg-green-500 origin-left"
        />
        <h2
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          About Me
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative p-8 md:p-12 bg-gray-900/60 backdrop-blur-xl border border-white/5 overflow-hidden group"
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-green-500/40" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-green-500/40" />

        <div className="relative z-10">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-medium italic">
            {"Full Stack Engineer with expertise in building scalable, user-focused web applications and AI-driven solutions. Proficient in both front-end and back-end technologies, including Angular.js, Vue.js, Next.js, Flask, Express.js, and .NET. Eager to contribute to innovative projects by delivering high-quality, efficient, and maintainable solutions that drive business growth, improve user experience, and solve complex technical challenges in a collaborative environment."}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
