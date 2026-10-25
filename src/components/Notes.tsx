import type { CSSProperties } from "react";
import { notes } from "../lib/data";
import { Section } from "./Section";

export function Notes() {
  return (
    <Section id="notes" eyebrow="Notes" title="Things I learned the hard way, written down so you do not have to.">
      <div className="mt-12 border-t border-ink">
        {notes.map((n, i) => (
          <details key={n.title} data-reveal style={{ "--d": `${i * 90}ms` } as CSSProperties} className="group border-b border-ink">
            <summary className="row grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-8">
              <span className="label text-muted md:col-span-2">{n.date}</span>
              <h3 className="display text-2xl md:col-span-9 md:text-3xl">{n.title}</h3>
              <span className="plus display text-3xl leading-none text-accent md:col-span-1 md:text-right">+</span>
            </summary>
            <div className="body">
              <div>
                <div className="grid gap-4 pb-8 md:grid-cols-12 md:gap-8">
                  <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink/90 md:col-span-7 md:col-start-3">
                    {n.body.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
