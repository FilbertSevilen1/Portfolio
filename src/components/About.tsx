"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold py-6 text-green-400">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Full Stack Engineer with expertise in building scalable, user-focused
          web applications and AI-driven solutions. Proficient in both front-end
          and back-end technologies, including Angular.js, Vue.js, Next.js, Flask,
          Express.js, and .NET. Eager to contribute to innovative projects by
          delivering high-quality, efficient, and maintainable solutions that
          drive business growth, improve user experience, and solve complex
          technical challenges in a collaborative environment.
        </p>
      </motion.div>
    </section>
  );
}
