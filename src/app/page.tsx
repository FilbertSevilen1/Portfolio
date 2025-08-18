import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 flex flex-col gap-8 pb-16">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
