import type { CSSProperties } from "react";
import { services } from "../lib/data";
import { useTilt } from "../lib/hooks";
import { Section } from "./Section";

function Card({ s }: { s: (typeof services)[number] }) {
  const ref = useTilt(10, 12, 6);
  return (
    <div className="card3d-wrap h-full">
      <div ref={ref} className="card3d flex h-full flex-col p-5">
        <div className="glare" aria-hidden />
        <span className="label text-accent">{s.n}</span>
        <h3 className="display mt-10 text-2xl">{s.title}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">{s.body}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <Section id="services" eyebrow="Toolbox" title="Small, well-made things. Nothing I have not actually done." className="rule">
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={s.n} data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties}>
            <Card s={s} />
          </div>
        ))}
      </div>
    </Section>
  );
}
