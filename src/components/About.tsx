import type { CSSProperties } from "react";
import { stats } from "../lib/data";
import { useCountUp } from "../lib/hooks";
import { Section } from "./Section";

function Stat({ value, suffix, label, i }: { value: number; suffix: string; label: string; i: number }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref} className="card card-glow p-5" data-reveal style={{ "--d": `${i * 90}ms` } as CSSProperties}>
      <p className="h-display text-4xl tabular-nums md:text-5xl">{v}<span className="text-accent">{suffix}</span></p>
      <p className="label mt-3">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="Biography" title="A student who learns by building.">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="card p-7 lg:col-span-7" data-reveal>
          <p className="text-xl font-medium leading-snug md:text-2xl">I would rather understand one thing properly than skim ten.</p>
          <div className="mt-6 space-y-4 text-muted">
            <p>Most of my free time goes into how websites actually work: how a browser turns text into layout, why JavaScript does what it does, what happens between pressing enter and seeing a page.</p>
            <p>When I get stuck I read the docs first, build the smallest version of the problem, and write down what I found so I never have to find it twice. The Notes section comes from that habit.</p>
            <p>I live in Kushtia, Khulna Division, Bangladesh. If you are nearby and building something, I want to hear about it.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-5">
          {stats.map((s, i) => <Stat key={s.label} {...s} i={i} />)}
        </div>
      </div>
    </Section>
  );
}
