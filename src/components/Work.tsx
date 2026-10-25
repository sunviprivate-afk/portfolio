import type { CSSProperties } from "react";
import { work } from "../lib/data";
import { Section } from "./Section";

export function Work() {
  return (
    <Section id="work" eyebrow="Work" title="Three things that exist, all on this page.">
      <div className="mt-12 grid gap-px bg-ink md:grid-cols-3">
        {work.map((w, i) => (
          <a
            key={w.n}
            href={w.href}
            data-reveal
            style={{ "--d": `${i * 120}ms` } as CSSProperties}
            className="work flex min-h-[22rem] flex-col bg-paper p-6"
          >
            <div className="flex items-baseline justify-between">
              <span className="label text-muted">{w.n} · {w.kind}</span>
              <span className="label text-muted">{w.year}</span>
            </div>
            <h3 className="big display mt-10 text-4xl">{w.title}</h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed opacity-90">{w.body}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {w.tags.map((t) => (
                <span key={t} className="tag label">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
