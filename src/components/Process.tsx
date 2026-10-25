import type { CSSProperties } from "react";
import { process } from "../lib/data";
import { useTilt } from "../lib/hooks";
import { Section } from "./Section";

function Card({ p, i }: { p: (typeof process)[number]; i: number }) {
  const ref = useTilt(10, 12);
  return (
    <div className="tilt-wrap" data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties}>
      <div ref={ref} className="tilt card card-glow flex min-h-[15rem] flex-col p-6" style={{ transform: `rotate(${(i - 1.5) * 1.5}deg)` }}>
        <div className="glare" />
        <span className="mono text-sm text-accent">{p.n}</span>
        <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
        <p className="mt-3 text-sm text-muted">{p.body}</p>
        <span className="mt-auto pt-6 text-xs text-muted">Step {i + 1} of {process.length}</span>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <Section id="process" eyebrow="Working process" title="How a project goes">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => <Card key={p.n} p={p} i={i} />)}
      </div>
    </Section>
  );
}
