import { useEffect, useMemo } from "react";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Lab } from "./components/Lab";
import { Notes } from "./components/Notes";
import { SectionRail } from "./components/SectionRail";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Ticker } from "./components/Ticker";
import { Work } from "./components/Work";
import { sections } from "./lib/data";
import { useActiveSection, useReveal } from "./lib/hooks";

export default function App() {
  useReveal();
  const ids = useMemo(() => sections.map(([, id]) => id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    console.log(
      "%c✳ sunvi zamin — portfolio v1",
      "font:700 13px monospace;color:#e8420c;background:#1b1b18;padding:6px 10px",
      "\nEvery line handwritten. View source, it is all there.",
    );
  }, []);

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <div className="bg-drafting pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="curtain" aria-hidden />

      <a href="#work" className="label fixed left-4 top-4 z-[95] -translate-y-24 bg-ink px-4 py-2 text-paper transition-transform focus:translate-y-0">
        Skip to work
      </a>

      <Header active={active} />
      <SectionRail active={active} />

      <main>
        <Hero />
        <Ticker items={["Learning in public", "Built by hand", "Kushtia — Bangladesh", "React & TypeScript", "Motion with manners", "Open to contact anytime"]} className="bg-ink text-paper" />
        <Work />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Lab />
        <Notes />
      </main>

      <Footer />
      <div className="grain" aria-hidden />
    </div>
  );
}
