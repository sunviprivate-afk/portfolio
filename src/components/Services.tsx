import type { CSSProperties } from "react";
import { services } from "../lib/data";
import { Section } from "./Section";

export function Services() {
  return (
    <Section id="services" eyebrow="What I can do" title="Small, well-made things. Nothing I have not actually done." className="rule">
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={s.n} data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties} className="svc flex flex-col border border-ink p-5">
            <span className="label text-accent">{s.n}</span>
            <h3 className="display mt-8 text-2xl">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
