import type { CSSProperties } from "react";
import { EMAIL } from "../lib/data";
import { useMagnet } from "../lib/hooks";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Words({ text, from = 0 }: { text: string; from?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word">
          <span style={d(from + i * 70)}>{w}</span>{" "}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const m1 = useMagnet();
  const m2 = useMagnet();
  return (
    <section className="wrap relative pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="label flex items-center gap-3 text-muted" data-reveal>
            <span className="dot" /> Student · Kushtia, Bangladesh · Portfolio v1
          </p>
          <h1 className="display mt-6 text-[clamp(3.4rem,11vw,9.5rem)]">
            <span className="word"><span style={d(300)}>Sunvi</span></span>
            <br />
            <span className="word">
              <span style={d(420)}>
                Zamin<span className="text-accent">.</span>
              </span>
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-end md:col-span-4">
          <p className="text-lg leading-snug md:text-xl">
            <Words from={700} text="I am a student in Kushtia learning how the web is built, one layer at a time. This site is where I keep what I know so far." />
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal style={d(1200)}>
            <a ref={m1 as React.RefObject<HTMLAnchorElement>} href="#contact" className="btn btn--accent">
              Get in touch
            </a>
            <a ref={m2 as React.RefObject<HTMLAnchorElement>} href="#work" className="btn">
              See the work ↓
            </a>
          </div>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-y-6 border-t border-ink pt-6 md:grid-cols-4" data-reveal style={d(1300)}>
        {[
          ["Based in", "Kushtia, Khulna"],
          ["Currently", "Student"],
          ["Availability", "Open anytime"],
          ["Email", EMAIL],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="label text-muted">{k}</dt>
            <dd className="mono mt-1 break-all text-sm">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
