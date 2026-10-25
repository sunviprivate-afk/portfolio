import type { CSSProperties } from "react";
import { skills, toolkit } from "../lib/data";
import { useGlow } from "../lib/hooks";
import { SkillIcon } from "./Icons";
import { Section } from "./Section";

function Skill({ s, i }: { s: (typeof skills)[number]; i: number }) {
  const ref = useGlow();
  return (
    <div ref={ref} className="card card-glow p-5" data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties}>
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg-2"><SkillIcon id={s.icon} /></span>
        <div className="flex-1">
          <p className="font-semibold">{s.name}</p>
          <p className="text-xs text-muted">{s.note}</p>
        </div>
        <span className="mono text-sm text-accent">{s.level}%</span>
      </div>
      <div className="bar mt-4"><i style={{ "--w": `${s.level}%` } as CSSProperties} /></div>
    </div>
  );
}

function Ring({ t, i }: { t: (typeof toolkit)[number]; i: number }) {
  return (
    <div className="card card-glow flex flex-col items-center p-5 text-center" data-reveal style={{ "--d": `${i * 60}ms` } as CSSProperties}>
      <div className="relative grid place-items-center">
        <svg width="76" height="76" viewBox="0 0 76 76" className="-rotate-90">
          <circle cx="38" cy="38" r="32" fill="none" stroke="rgba(148,163,184,.14)" strokeWidth="6" />
          <circle cx="38" cy="38" r="32" fill="none" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" strokeDasharray={2 * Math.PI * 32} strokeDashoffset={2 * Math.PI * 32 * (1 - t.p / 100)} style={{ transition: "stroke-dashoffset 1.4s var(--ease)" }} />
        </svg>
        <span className="mono absolute text-sm">{t.p}%</span>
      </div>
      <p className="mt-3 text-sm font-medium">{t.name}</p>
    </div>
  );
}

export function Skills() {
  return (
    <>
      <Section id="skills" eyebrow="Tech stack" title="My technical skills" intro="Honest numbers. They go up a little every month.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => <Skill key={s.name} s={s} i={i} />)}
        </div>
      </Section>
      <section className="pb-8">
        <div className="mb-8 flex items-end justify-between" data-reveal>
          <p className="label">// Toolkit</p>
          <h3 className="h-section text-2xl md:text-3xl">What I reach for</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {toolkit.map((t, i) => <Ring key={t.name} t={t} i={i} />)}
        </div>
      </section>
    </>
  );
}
