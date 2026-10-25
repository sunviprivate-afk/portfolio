import type { CSSProperties } from "react";
import { CITY, EMAIL, NAME } from "../lib/data";
import { useCopy, useTilt } from "../lib/hooks";
import { Avatar } from "./Avatar";
import { I } from "./Icons";

export function Hero() {
  const tilt = useTilt(8, 10);
  const { copied, copy } = useCopy(EMAIL);
  return (
    <section id="home" className="scroll-mt-24 pt-8 md:pt-14">
      <div className="grid gap-6 lg:grid-cols-12">
        {/* portrait card */}
        <div className="tilt-wrap lg:col-span-5" data-reveal="scale">
          <div ref={tilt} className="tilt card card-glow relative flex aspect-[4/5] items-center justify-center overflow-hidden p-6 lg:aspect-auto lg:h-full">
            <div className="glare" />
            <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_120%,rgba(34,211,238,.18),transparent_60%)]" />
            <div className="relative">
              <div className="orbit" />
              <div className="float"><Avatar size={220} className="shadow-[0_30px_80px_-20px_rgba(34,211,238,.45)]" /></div>
            </div>
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1.5 text-xs backdrop-blur">
              <span className="dot" /> Open to contact anytime
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="label">Based in</p>
                <p className="text-sm font-medium">{CITY}</p>
              </div>
              <p className="mono text-xs text-muted">23.90° N · 89.13° E</p>
            </div>
          </div>
        </div>

        {/* intro card */}
        <div className="card relative overflow-hidden p-7 md:p-10 lg:col-span-7" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
          <p className="label">Say hello to</p>
          <h1 className="h-display mt-4 text-5xl md:text-7xl">
            <span className="text-gradient">{NAME.split(" ")[0]}</span>
            <br />{NAME.split(" ")[1]}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Student in Kushtia, Bangladesh, teaching myself to build for the web. I learn by making real things: this site, and every experiment on it, was written by hand.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary">Let's talk <I.arrow width={16} height={16} /></a>
            <a href="#work" className="btn">See my work</a>
            <button type="button" onClick={copy} className="btn" title="Copy email"><I.copy width={16} height={16} /> {copied ? "Copied" : EMAIL}</button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-4">
            {[["Role", "Student"], ["Focus", "Front-end"], ["Stack", "React · TS"], ["Timezone", "UTC+6"]].map(([k, v]) => (
              <div key={k}><p className="label">{k}</p><p className="mt-1 text-sm font-medium">{v}</p></div>
            ))}
          </div>
          <I.down className="absolute bottom-6 right-6 animate-bounce text-muted" />
        </div>
      </div>
    </section>
  );
}
