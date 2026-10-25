import type { CSSProperties } from "react";
import { notes } from "../lib/data";
import { I } from "./Icons";
import { Section } from "./Section";

export function Notes() {
  return (
    <Section id="notes" eyebrow="Learning log" title="Notes from the hard way">
      <div className="grid gap-4 lg:grid-cols-3">
        {notes.map((n, i) => (
          <details key={n.title} className="card card-glow flex flex-col" data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties}>
            <summary className="flex h-full flex-col p-6">
              <p className="label">{n.date}</p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{n.title}</h3>
              <span className="mt-6 flex items-center gap-2 text-sm text-accent">Read <span className="chev"><I.plus width={14} height={14} /></span></span>
            </summary>
            <div className="body"><div><div className="space-y-3 border-t border-line p-6 text-sm text-muted">{n.body.map((p, j) => <p key={j}>{p}</p>)}</div></div></div>
          </details>
        ))}
      </div>
    </Section>
  );
}
