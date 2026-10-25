import { useEffect, useRef, useState, type CSSProperties } from "react";
import { experience } from "../lib/data";
import { Section } from "./Section";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.7 - r.top) / r.height;
      setH(Math.max(0, Math.min(1, p)) * 100);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <Section id="experience" eyebrow="Path" title="How I got here, in order.">
      <ol ref={ref} className="relative mt-12 ml-1 md:ml-[25%]">
        <div className="tl-line" aria-hidden><i style={{ "--h": `${h}%` } as CSSProperties} /></div>
        {experience.map((e, i) => (
          <li key={i} data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties} className="tl-item relative grid gap-2 py-6 pl-8 md:grid-cols-12 md:gap-8">
            <span className="tl-dot absolute -left-1 top-8" aria-hidden />
            <span className="label text-muted md:col-span-2">{e.when}</span>
            <h3 className="display text-2xl md:col-span-4">{e.title}</h3>
            <p className="text-ink/85 md:col-span-6">{e.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
