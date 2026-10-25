import type { CSSProperties, RefObject } from "react";
import { useMagnet } from "../lib/hooks";
import { SpecCard } from "./SpecCard";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Words({ text, from = 0, step = 60 }: { text: string; from?: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word">
          <span style={d(from + i * step)}>{w}</span>{" "}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const m1 = useMagnet();
  const m2 = useMagnet();
  return (
    <section className="relative overflow-hidden">
      <div className="columns pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <svg className="watermark" viewBox="0 0 100 100" aria-hidden>
        <g fill="currentColor">
          {[0, 45, 90, 135].map((a) => (
            <rect key={a} x="44" y="2" width="12" height="96" rx="6" transform={`rotate(${a} 50 50)`} />
          ))}
        </g>
      </svg>

      <div className="wrap pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="label flex flex-wrap items-center justify-between gap-2 border-b border-ink pb-4 text-muted" data-reveal>
          <span>// Student × Self-taught — Kushtia, Bangladesh</span>
          <span className="coords">23.90° N / 89.13° E — Kushtia, BD</span>
        </div>

        <h1 className="display-hero mt-10 text-[clamp(4rem,15vw,13rem)]">
          <span className="word"><span style={d(300)}>Sunvi</span></span>
          <br />
          <span className="word md:ml-[0.55em]">
            <span style={d(420)}>
              Zamin<span className="text-accent">✳</span>
            </span>
          </span>
        </h1>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="display text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium leading-tight tracking-tight">
              <Words from={700} text="Student from Kushtia, Bangladesh, teaching myself to build for the web. I learn by making real things: this site and every experiment on it were built by hand, one lesson at a time." />
            </p>
            <p className="label mt-6 text-muted" data-reveal style={d(1200)}>
              Currently deep in <span className="text-accent">TypeScript</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6" data-reveal style={d(1300)}>
              <a ref={m2 as RefObject<HTMLAnchorElement>} href="#work" className="label u">See what I've built ↓</a>
              <a ref={m1 as RefObject<HTMLAnchorElement>} href="#contact" className="btn">Say hello ↗</a>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <SpecCard />
          </div>
        </div>
      </div>
    </section>
  );
}
