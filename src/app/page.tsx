import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TabsSection from "@/components/TabsSection";
import SciFiBackground from "@/components/SciFiBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <SciFiBackground />
      <main className="flex flex-col gap-24 pb-16 pt-32">
        <div className="max-w-5xl mx-auto px-6 w-full flex flex-col gap-24">
          <Hero />
          <About />
          <TabsSection />
        </div>
      </main>
    </>
  );
}
