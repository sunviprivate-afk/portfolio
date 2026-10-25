import type { CSSProperties } from "react";
import { plans } from "../lib/data";
import { I } from "./Icons";
import { Section } from "./Section";

export function Plans() {
  return (
    <Section id="plans" eyebrow="Working together" title="Ways to work with me" intro="No invented price list. Two honest options and a conversation.">
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p, i) => (
          <div key={p.name} className={`card card-glow flex flex-col p-7 ${p.featured ? "border-accent/50 shadow-[0_0_0_1px_rgba(34,211,238,.25),0_30px_80px_-30px_rgba(34,211,238,.35)]" : ""}`} data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties}>
            {p.featured && <span className="absolute right-5 top-5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#04121a]">Most useful</span>}
            <p className="label">{p.name}</p>
            <p className="h-display mt-4 text-4xl">{p.price}</p>
            <p className="mt-3 text-sm text-muted">{p.blurb}</p>
            <a href="#contact" className={`btn mt-6 justify-center ${p.featured ? "btn-primary" : ""}`}>{p.cta}</a>
            <p className="label mt-7">Includes</p>
            <ul className="mt-3 space-y-2 text-sm">{p.features.map((f) => <li key={f} className="flex items-center gap-2"><I.check width={14} height={14} className="text-accent" /> {f}</li>)}</ul>
          </div>
        ))}
        <div className="card flex flex-col justify-between bg-gradient-to-br from-accent/15 to-transparent p-7" data-reveal style={{ "--d": "200ms" } as CSSProperties}>
          <div>
            <p className="label">Custom</p>
            <h3 className="mt-4 text-2xl font-semibold">Something else in mind?</h3>
            <p className="mt-3 text-sm text-muted">A fix, a feature, a question about how something works. Write to me and we figure it out.</p>
          </div>
          <a href="#contact" className="btn btn-primary mt-8 self-start">Contact me <I.arrow width={16} height={16} /></a>
        </div>
      </div>
    </Section>
  );
}
