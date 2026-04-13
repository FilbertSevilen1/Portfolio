import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SciFiBackground from "@/components/SciFiBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <SciFiBackground />
      <main className="flex flex-col gap-32 pb-32 pt-32 relative z-10 w-full overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 w-full flex flex-col gap-32">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  );
}
