import type { CSSProperties } from "react";

const paras = [
  "Most of my free time goes into figuring out how websites work: how a browser turns text into a layout, why JavaScript behaves the way it does, what actually happens when you press enter in the address bar.",
  "When I get stuck I read the documentation first, build the smallest version of the problem I can, and write down what I found so I do not have to find it twice. The notes further down this page come out of that habit.",
  "I live in Kushtia, in the Khulna Division of Bangladesh. If you are nearby and working on something interesting, I would like to hear about it.",
];

const facts = [
  ["Name", "Sunvi Zamin"],
  ["Role", "Student"],
  ["City", "Kushtia, Bangladesh"],
  ["Timezone", "UTC+6 (Asia/Dhaka)"],
  ["Languages", "Bangla, English"],
  ["Tools", "VS Code, Git, a notebook"],
];

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-20 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3" data-reveal>
          <p className="label text-muted">About</p>
        </div>
        <div className="md:col-span-6">
          <p className="display text-[clamp(1.7rem,3.4vw,2.8rem)] leading-tight" data-reveal>
            I would rather understand one thing properly than skim ten.
          </p>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
            {paras.map((p, i) => (
              <p key={i} data-reveal style={{ "--d": `${i * 120}ms` } as CSSProperties}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="md:col-span-3" data-reveal="left" style={{ "--d": "200ms" } as CSSProperties}>
          {facts.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-line py-3 first:border-t first:border-t-ink">
              <dt className="label text-muted">{k}</dt>
              <dd className="mono text-right text-xs">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
