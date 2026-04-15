"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Icon from "@mdi/react";
import { 
  mdiArrowLeft, 
  mdiChevronRight,
  mdiChevronLeft,
  mdiClose,
  mdiOpenInNew
} from "@mdi/js";
import SciFiBackground from "@/components/SciFiBackground";
import Navbar from "@/components/Navbar";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; 
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      el.classList.add('active');
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      el.classList.remove('active');
    };

    const onMouseUp = () => {
      isDragging.current = false;
      el.classList.remove('active');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 2;
      el.scrollLeft = scrollLeft.current - walk;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, [activeProject]);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectsData.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      <Navbar />
      <SciFiBackground />
      
      {/* Lightbox Preview */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <Icon path={mdiClose} size={1.5} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={previewImage}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-20">
        {/* Cinematic Hero */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(20px)' }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content Side */}
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-20 h-1 bg-green-500 mb-8 origin-left"
                  />
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-green-500 text-sm tracking-[0.3em] uppercase italic">Operation_0{activeProject + 1}</span>
                    <span className="h-px w-12 bg-white/20" />
                    <span className="font-mono text-white/40 text-sm uppercase tracking-widest">{projectsData[activeProject].year}</span>
                  </div>
                  <h1 className="text-5xl md:text-[6rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
                    {projectsData[activeProject].title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 === 1 ? "text-green-500/90" : "text-white"}>{word} </span>
                    ))}
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
                    {projectsData[activeProject].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center pt-4">
                  {projectsData[activeProject].link && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={projectsData[activeProject].link}
                      target="_blank"
                      className="inline-flex items-center gap-4 px-10 py-5 bg-green-500 text-black font-black uppercase tracking-[0.2em] hover:bg-green-400 transition-all shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                    >
                      Launch Protocol <span>→</span>
                    </motion.a>
                  )}
                  
                  <div className="flex gap-4">
                    <button onClick={prevProject} className="p-5 border border-white/10 rounded-full hover:border-green-500 hover:bg-green-500/10 transition-all group">
                        <Icon path={mdiChevronLeft} size={1.2} />
                    </button>
                    <button onClick={nextProject} className="p-5 border border-white/10 rounded-full hover:border-green-500 hover:bg-green-500/10 transition-all group">
                        <Icon path={mdiChevronRight} size={1.2} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="order-1 lg:order-2 relative group perspective-1000">
                <div className={`absolute -inset-10 bg-gradient-to-br ${projectsData[activeProject].color || 'from-green-500/20 to-transparent'} blur-[100px] opacity-30`} />
                
                <div 
                    className="relative aspect-[16/10] w-full bg-gray-950 overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in"
                    onClick={() => setPreviewImage(projectsData[activeProject].images[0])}
                >
                    <motion.img 
                        key={projectsData[activeProject].images[0]}
                        src={projectsData[activeProject].images[0]}
                        className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-1000"
                        alt="Project Header"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Image Strip */}
                <div 
                    ref={scrollRef}
                    className="mt-8 flex gap-4 overflow-x-auto pb-6 scrollbar-visible cursor-grab active:cursor-grabbing select-none"
                >
                    {projectsData[activeProject].images.slice(1).map((img, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="flex-shrink-0 w-48 md:w-64 aspect-video bg-gray-900 border border-white/10 overflow-hidden cursor-zoom-in shadow-xl"
                            onClick={() => setPreviewImage(img)}
                        >
                            <img src={img} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" alt="Subview" />
                        </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Instagram/Bento Style Grid */}
        <section className="py-40 px-6 relative bg-gray-950/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4">
                        Project <span className="text-green-500">Registry</span>
                    </h2>
                    <p className="font-mono text-xs text-white/30 tracking-[0.3em]">Full Archive Index // Total_{projectsData.length}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {projectsData.map((project, i) => {
                        // Pattern for Instagram-like spans
                        const spans = 
                            i % 7 === 0 ? "md:col-span-2 md:row-span-2" : 
                            i % 7 === 3 ? "md:row-span-2" : 
                            i % 7 === 5 ? "md:col-span-2" : "";

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 4) * 0.1 }}
                                onClick={() => {
                                    setActiveProject(i);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`group relative cursor-pointer overflow-hidden border border-white/5 bg-gray-900 transition-all duration-500 hover:border-green-500/50 ${spans}`}
                            >
                                {/* Background Image for Grid Item */}
                                {project.images.length > 0 && (
                                    <div className="absolute inset-0 z-0">
                                        <img 
                                            src={project.images[0]} 
                                            className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700" 
                                            alt=""
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                    </div>
                                )}
                                
                                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className={`p-2 rounded-lg ${activeProject === i ? "bg-green-500 text-black" : "bg-white/5 text-green-500"} transition-colors`}>
                                            <Icon path={project.icon} size={0.8} />
                                        </div>
                                        <span className="font-mono text-[10px] text-white/30">{project.year}</span>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold uppercase italic mb-2 group-hover:text-green-400 transition-colors line-clamp-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                            {project.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-mono text-green-500/60 uppercase">
                                                    #{tag.replace(/\s/g, '').toLowerCase()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-black relative z-10">
        <p className="font-mono text-[10px] uppercase tracking-[1em] text-white/20">
          Neural Interface Deployed // 2026
        </p>
      </footer>

      <style jsx global>{`
        .scrollbar-visible::-webkit-scrollbar {
          height: 4px;
        }
        .scrollbar-visible::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .grayscale-50 {
            filter: grayscale(0.5);
        }
      `}</style>
    </div>
  );
}
