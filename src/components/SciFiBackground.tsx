"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CircuitPath = ({ d, duration, delay }: { d: string; duration: number; delay: number }) => (
  <g>
    {/* Glow Path (Outer) */}
    <motion.path
      d={d}
      fill="transparent"
      stroke="rgba(34, 197, 94, 0.15)"
      strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 1, 1],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 1]
      }}
    />
    {/* Core Path (Inner) */}
    <motion.path
      d={d}
      fill="transparent"
      stroke="rgba(34, 197, 94, 0.5)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 1, 1],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 1]
      }}
    />
  </g>
);

const CircuitNode = ({ cx, cy, delay }: { cx: number; cy: number; delay: number }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r="1.5"
    fill="rgba(34, 197, 94, 0.5)"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0, 1.2, 0]
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function SciFiBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none transform-gpu">
      {/* Abstract Tech Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Animated Motherboard Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <g className="opacity-30">
          {/* Paths across quadrants */}
          <CircuitPath d="M 0 50 L 200 50 L 250 100 L 250 200" duration={8} delay={0} />
          <CircuitPath d="M 100 0 L 100 150 L 150 200 L 400 200" duration={10} delay={2} />
          <CircuitPath d="M 500 0 L 500 100 L 450 150 L 0 150" duration={12} delay={5} />
          <CircuitPath d="M 800 0 L 800 120 L 850 170 L 1200 170" duration={9} delay={1} />
          
          <CircuitPath d="M 0 400 L 100 400 L 150 450 L 150 600" duration={15} delay={7} />
          <CircuitPath d="M 1200 300 L 1000 300 L 950 350 L 950 500" duration={14} delay={3} />
          <CircuitPath d="M 300 300 L 400 300 L 450 350 L 450 500" duration={11} delay={6} />
          <CircuitPath d="M 700 400 L 600 400 L 550 350 L 550 200" duration={13} delay={8} />

          <CircuitPath d="M 0 800 L 200 800 L 250 750 L 250 1000" duration={10} delay={4} />
          <CircuitPath d="M 1200 850 L 1000 850 L 950 800 L 950 1000" duration={9} delay={0.5} />
          <CircuitPath d="M 400 1000 L 400 900 L 450 850 L 700 850" duration={15} delay={2} />
          <CircuitPath d="M 800 1000 L 800 800 L 750 750 L 600 750" duration={12} delay={9} />

          <CircuitPath d="M 200 0 L 200 50 L 150 100 L 150 150 L 100 200" duration={10} delay={1} />
          <CircuitPath d="M 1000 0 L 1000 50 L 1050 100 L 1050 300" duration={11} delay={4} />
          <CircuitPath d="M 0 600 L 50 600 L 100 650 L 100 800" duration={8} delay={6} />
          <CircuitPath d="M 1200 600 L 1100 600 L 1050 650 L 1050 800" duration={13} delay={2} />
          
          <CircuitPath d="M 300 0 L 300 100 L 350 150 L 600 150" duration={14} delay={5} />

          {/* Optimized Node Rendering */}
          <CircuitNode cx={250} cy={100} delay={0} />
          <CircuitNode cx={850} cy={170} delay={1} />
          <CircuitNode cx={950} cy={350} delay={3} />
          <CircuitNode cx={250} cy={750} delay={4} />
          <CircuitNode cx={1050} cy={100} delay={4} />
        </g>
      </svg>

      {/* Simplified Background Glows (Blurred divs are better than SVG filters) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-500/[0.03] blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-green-500/[0.02] blur-[150px] rounded-full" />

      {/* Retro Scanline Effect (Static overlay is cheap) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
    </div>
  );
}
