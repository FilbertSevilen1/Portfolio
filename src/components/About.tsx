"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="relative mb-12 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white text-center">
          About Me
        </h2>
        <motion.div
           initial={{ scaleX: 0 }}
           whileInView={{ scaleX: 1 }}
           transition={{ duration: 1, ease: "circOut" }}
           className="w-24 h-1 bg-green-500 mt-4 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(34,197,94,0.05)] bg-[#0A0A0A]"
      >
        {/* Terminal Header */}
        <div className="bg-[#161616] flex items-center px-4 py-3 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 text-center font-mono text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>visitor@ifs-portfolio</span>
            <span className="text-gray-700">~</span>
            <span>bash</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-green-500 font-bold">visitor@ifs</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400 font-bold">~</span>
            <span className="text-gray-500">$</span>
            <span className="text-white tracking-wide">cat about_me.txt</span>
          </div>

          <div className="leading-relaxed space-y-6 md:pl-4 md:border-l-2 md:border-gray-800/50">
            <p>
              <span className="text-green-400 font-bold">Full Stack Engineer</span> with expertise in building scalable, user-focused web applications and AI-driven solutions.
            </p>
            <p>
              Proficient in both front-end and back-end technologies, including <span className="text-red-400">Angular.js</span>, <span className="text-green-500">Vue.js</span>, <span className="text-white">Next.js</span>, <span className="text-gray-400">Flask</span>, <span className="text-yellow-400">Express.js</span>, and <span className="text-purple-500">.NET</span>.
            </p>
            <p>
              Eager to contribute to innovative projects by delivering high-quality, efficient, and maintainable solutions that drive business growth, improve user experience, and solve complex technical challenges in a collaborative environment.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <span className="text-green-500 font-bold">visitor@ifs</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400 font-bold">~</span>
            <span className="text-gray-500">$</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 h-5 bg-green-500 block"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
