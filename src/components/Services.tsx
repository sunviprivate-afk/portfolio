import type { CSSProperties } from "react";
import { services } from "../lib/data";
import { I } from "./Icons";
import { Section } from "./Section";

export function Services() {
  return (
    <Section id="services" eyebrow="What I offer" title="My core services" intro="Small, well-made things. Nothing listed here that I have not actually done.">
      <div className="grid gap-3">
        {services.map((s, i) => (
          <details key={s.n} className="card card-glow group overflow-hidden" data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties} open={i === 0}>
            <summary className="flex items-center gap-5 p-5 md:p-6">
              <span className="mono text-sm text-accent">{s.n}</span>
              <h3 className="flex-1 text-lg font-semibold md:text-xl">{s.title}</h3>
              <span className="hidden gap-2 md:flex">{s.tags.map((t) => <span key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">{t}</span>)}</span>
              <span className="chev icon-btn"><I.plus width={16} height={16} /></span>
            </summary>
            <div className="body">
              <div>
                <div className="grid gap-5 border-t border-line p-5 md:grid-cols-12 md:p-6">
                  <p className="text-muted md:col-span-8 md:col-start-2">{s.body}</p>
                  <a href="#contact" className="btn btn-sm self-start md:col-span-3 md:justify-self-end">Ask about this <I.arrow width={14} height={14} /></a>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
