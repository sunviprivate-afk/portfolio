import type { CSSProperties } from "react";
import { faq } from "../lib/data";
import { I } from "./Icons";
import { Section } from "./Section";

export function Faq() {
  return (
    <Section id="faq" eyebrow="Questions" title="Frequently asked questions">
      <div className="grid gap-3 lg:grid-cols-2">
        {faq.map((f, i) => (
          <details key={f.q} className="card card-glow" data-reveal style={{ "--d": `${i * 80}ms` } as CSSProperties} open={i === 0}>
            <summary className="flex items-center justify-between gap-4 p-5"><span className="font-medium">{f.q}</span><span className="chev icon-btn shrink-0"><I.plus width={16} height={16} /></span></summary>
            <div className="body"><div><p className="px-5 pb-5 text-sm text-muted">{f.a}</p></div></div>
          </details>
        ))}
      </div>
    </Section>
  );
}
