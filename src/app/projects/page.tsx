"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
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

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');
  
  let initialProject = 0;
  if (projectId) {
    const parsed = parseInt(projectId);
    if (!isNaN(parsed) && parsed >= 0 && parsed < projectsData.length) {
      initialProject = parsed;
    }
  }
  
  const [activeProject, setActiveProject] = useState(initialProject);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id !== null) {
      const idx = parseInt(id);
      if (!isNaN(idx) && idx >= 0 && idx < projectsData.length) {
        setActiveProject(idx);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProject]);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let hasMoved = false;
    let startXVal = 0;
    let startYVal = 0;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; 
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      hasMoved = false;
      startXVal = e.pageX;
      startYVal = e.pageY;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.classList.add('active');
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
      
      const deltaX = Math.abs(e.pageX - startXVal);
      const deltaY = Math.abs(e.pageY - startYVal);
      
      if (deltaX > 8 || deltaY > 8) {
        hasMoved = true;
      }
      
      if (hasMoved) {
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX.current) * 2;
        el.scrollLeft = scrollLeft.current - walk;
      }
    };

    const onClickCapture = (e: MouseEvent) => {
      if (hasMoved) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('click', onClickCapture, true);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('click', onClickCapture, true);
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
            <button 
              onClick={() => setPreviewImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50"
            >
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
        <section className="min-h-[80vh] w-full flex flex-col items-center justify-center px-6 pt-16 pb-8">
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
                    <span className="font-mono text-green-500 text-sm tracking-[0.2em] uppercase">Project // 0{activeProject + 1}</span>
                    <span className="h-px w-12 bg-white/20" />
                    <span className="font-mono text-white/40 text-sm uppercase tracking-widest">{projectsData[activeProject].year}</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight mb-8">
                    {projectsData[activeProject].title}
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
                      Visit Project <span>→</span>
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
                <div className={`absolute -inset-10 bg-gradient-to-br ${projectsData[activeProject].color || 'from-green-500/20 to-transparent'} blur-[100px] opacity-30 pointer-events-none`} />
                
                <div 
                    className={`relative aspect-[16/10] w-full bg-gray-950 overflow-hidden border border-white/10 shadow-2xl ${projectsData[activeProject].images.length > 0 ? 'cursor-zoom-in' : ''}`}
                    onClick={() => {
                        if (projectsData[activeProject].images.length > 0) {
                            setPreviewImage(projectsData[activeProject].images[activeImageIndex] || projectsData[activeProject].images[0]);
                        }
                    }}
                >
                    {projectsData[activeProject].images.length > 0 ? (
                        <motion.img 
                            key={activeImageIndex}
                            src={projectsData[activeProject].images[activeImageIndex] || projectsData[activeProject].images[0]}
                            className="w-full h-full object-cover transition-all duration-1000"
                            alt="Project Header"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center space-y-4 opacity-20">
                            <Icon path={projectsData[activeProject].icon} size={3} />
                            <span className="font-mono text-sm tracking-[0.2em]">No Image Found</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Image Strip */}
                {projectsData[activeProject].images.length > 1 && (
                    <div 
                        ref={scrollRef}
                        className="mt-8 flex gap-4 overflow-x-auto pb-6 scrollbar-visible cursor-grab active:cursor-grabbing select-none relative z-10"
                    >
                        {projectsData[activeProject].images.map((img, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className={`flex-shrink-0 w-48 md:w-64 aspect-video bg-gray-900 border overflow-hidden cursor-pointer shadow-xl transition-all duration-300 ${
                                    activeImageIndex === i 
                                        ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                                        : "border-white/10 hover:border-white/30"
                                }`}
                                onClick={() => setActiveImageIndex(i)}
                            >
                                <img src={img} className="w-full h-full object-cover transition-opacity" alt="Subview" />
                            </motion.div>
                        ))}
                    </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Instagram/Bento Style Grid */}
        <section className="py-20 px-6 relative bg-gray-950/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4">
                        Project <span className="text-green-500">List</span>
                    </h2>
                    <p className="font-mono text-xs text-white/30 tracking-[0.3em]">Total Projects: {projectsData.length}</p>
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
                                transition={{ delay: (i % 4) * 0.05 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                onClick={() => {
                                    setActiveProject(i);
                                    router.push(`/projects?id=${i}`, { scroll: false });
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ${
                                    activeProject === i 
                                        ? "border-green-500/50 bg-green-500/[0.02] shadow-[0_0_40px_rgba(34,197,94,0.15)]" 
                                        : "border-white/10 bg-white/[0.01] hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                                } ${spans}`}
                            >
                                {/* Futuristic Cyberpunk Scanlines */}
                                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] transition-opacity" />

                                {/* Corner tech highlights */}
                                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Background Image/Pattern for Grid Item */}
                                {project.images.length > 0 ? (
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <img 
                                            src={project.images[0]} 
                                            className="w-full h-full object-cover opacity-30 group-hover:opacity-60 grayscale group-hover:grayscale-0 contrast-125 transition-all duration-700 ease-out" 
                                            alt=""
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                                    </div>
                                ) : (
                                    <div 
                                        className="absolute inset-0 z-0 opacity-50"
                                        style={{ backgroundImage: 'radial-gradient(circle at center, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
                                    >
                                        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />
                                    </div>
                                )}
                                
                                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                                            activeProject === i 
                                                ? "bg-green-500 text-black border-green-400" 
                                                : "bg-white/5 text-green-500 border-white/5 group-hover:border-green-500/20 group-hover:bg-green-500/10"
                                        }`}>
                                            <Icon path={project.icon} size={0.9} />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-mono text-[9px] tracking-widest text-green-500/40 uppercase">// {String(i + 1).padStart(2, '0')}</span>
                                            <span className="font-mono text-[10px] text-white/30 mt-1">{project.year}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-green-400 transition-colors line-clamp-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className="text-[9px] font-mono border border-green-500/20 bg-green-500/5 px-2 py-0.5 rounded text-green-400/80 uppercase tracking-wider"
                                                >
                                                    {tag}
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

export default function ProjectsPage() {
  return (
    <Suspense fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono uppercase tracking-[0.3em]">
            Initializing Neural Interface...
        </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
