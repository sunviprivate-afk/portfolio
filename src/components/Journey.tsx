import type { CSSProperties } from "react";
import { courses, education, journey } from "../lib/data";
import { Section } from "./Section";

function Item({ title, where, when, body, i }: { title: string; where: string; when: string; body: string; i: number }) {
  return (
    <div className="card card-glow p-5" data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties}>
      <div className="flex items-start justify-between gap-3">
        <div><p className="font-semibold">{title}</p><p className="text-xs text-muted">{where}</p></div>
        <span className="mono shrink-0 text-xs text-accent">{when}</span>
      </div>
      <p className="mt-3 text-sm text-muted">{body}</p>
    </div>
  );
}

export function Journey() {
  return (
    <Section id="journey" eyebrow="Resume" title="My experience & education">
      <div className="relative grid gap-4 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-accent/60 via-line-2 to-transparent md:block" />
        {journey.map((j, i) => (
          <div key={j.when} className="relative pt-10" data-reveal style={{ "--d": `${i * 120}ms` } as CSSProperties}>
            <span className="absolute left-0 top-3.5 grid h-4 w-4 place-items-center rounded-full border border-accent bg-bg"><span className="h-1.5 w-1.5 rounded-full bg-accent" /></span>
            <p className="mono absolute left-7 top-3 text-xs text-accent">{j.when}</p>
            <div className="card card-glow p-5"><p className="font-semibold">{j.title}</p><p className="text-xs text-muted">{j.where}</p><p className="mt-3 text-sm text-muted">{j.body}</p></div>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div><h3 className="mb-4 text-lg font-semibold">Education</h3><div className="grid gap-4">{education.map((e, i) => <Item key={e.title} {...e} i={i} />)}</div></div>
        <div><h3 className="mb-4 text-lg font-semibold">Self-study</h3><div className="grid gap-4">{courses.map((c, i) => <Item key={c.title} {...c} i={i} />)}</div></div>
      </div>
    </Section>
  );
}
