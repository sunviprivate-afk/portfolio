import { useTilt } from "../lib/hooks";
import { I } from "./Icons";
import { Section } from "./Section";

export function Work() {
  const tilt = useTilt(6, 8);
  return (
    <Section id="work" eyebrow="Featured work" title="My work showcase">
      <div className="card overflow-hidden" data-reveal>
        <div className="grid lg:grid-cols-12">
          <div className="p-7 md:p-10 lg:col-span-5">
            <p className="label">Project 01 · 2026</p>
            <h3 className="mt-4 text-3xl font-semibold">This website</h3>
            <p className="mt-4 text-muted">Designed and coded from a blank file. React, TypeScript, Tailwind, and one CSS file for all motion. No template, no UI kit. The Lab tools below are part of it, and they work.</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm">
              <div><dt className="label">Role</dt><dd className="mt-1">Design + build</dd></div>
              <div><dt className="label">Stack</dt><dd className="mt-1">React · TS · Tailwind</dd></div>
              <div><dt className="label">Status</dt><dd className="mt-1 text-emerald-400">Live</dd></div>
              <div><dt className="label">Source</dt><dd className="mt-1">GitHub</dd></div>
            </dl>
            <div className="mt-6 flex gap-3">
              <a href="#lab" className="btn btn-primary">Try the Lab <I.arrow width={16} height={16} /></a>
              <a href="https://github.com/sunviprivate-afk/portfolio" target="_blank" rel="noreferrer" className="btn"><I.github width={16} height={16} /> Code</a>
            </div>
          </div>
          <div className="tilt-wrap relative flex items-center justify-center bg-[radial-gradient(40rem_20rem_at_50%_100%,rgba(34,211,238,.14),transparent_60%)] p-8 lg:col-span-7">
            {/* faux browser */}
            <div ref={tilt} className="tilt w-full max-w-xl overflow-hidden rounded-xl border border-line-2 bg-bg shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
              <div className="glare" />
              <div className="flex items-center gap-2 border-b border-line px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="mono ml-3 flex-1 rounded bg-white/5 px-2 py-0.5 text-[10px] text-muted">sunvizamin.bro.bd</span>
              </div>
              <div className="grid grid-cols-12 gap-2 p-3">
                <div className="col-span-3 space-y-2">
                  <div className="h-10 rounded bg-white/5" />
                  {[...Array(6)].map((_, i) => <div key={i} className="h-2 rounded bg-white/5" style={{ width: `${60 + (i % 3) * 15}%` }} />)}
                </div>
                <div className="col-span-9 space-y-2">
                  <div className="h-24 rounded bg-gradient-to-br from-accent/30 to-transparent" />
                  <div className="grid grid-cols-3 gap-2">{[...Array(3)].map((_, i) => <div key={i} className="h-12 rounded bg-white/5" />)}</div>
                  <div className="grid grid-cols-2 gap-2">{[...Array(2)].map((_, i) => <div key={i} className="h-16 rounded bg-white/5" />)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
