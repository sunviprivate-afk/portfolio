import { useEffect, useMemo } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Lab } from "./components/Lab";
import { Marquee } from "./components/Marquee";
import { Notes } from "./components/Notes";
import { Plans } from "./components/Plans";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { nav } from "./lib/data";
import { useActiveSection, useReveal } from "./lib/hooks";

export default function App() {
  useReveal();
  const ids = useMemo(() => nav.map(([id]) => id), []);
  const active = useActiveSection(ids);
  useEffect(() => {
    console.log("%c✳ sunvi zamin — portfolio v1", "font:700 13px monospace;color:#22d3ee;background:#070b14;padding:6px 10px", "\nEvery line handwritten. View source, it is all there.");
  }, []);
  return (
    <>
      <div className="bg-scene" aria-hidden />
      <div className="curtain" aria-hidden />
      <a href="#about" className="fixed left-4 top-4 z-[95] -translate-y-24 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-[#04121a] transition-transform focus:translate-y-0">Skip to content</a>
      <Sidebar active={active} />
      <div className="lg:pl-[240px]">
        <main className="mx-auto max-w-6xl px-4 md:px-8">
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Services />
          <Process />
          <Work />
          <Lab />
          <Plans />
          <Journey />
          <Faq />
          <Notes />
          <Contact />
          <Footer />
        </main>
      </div>
      <div className="grain" aria-hidden />
    </>
  );
}
