import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Section } from "./Section";

function Timer() {
  const [len, setLen] = useState(25 * 60);
  const [left, setLeft] = useState(len);
  const [running, setRunning] = useState(false);
  const raf = useRef(0); const endAt = useRef(0);
  useEffect(() => {
    if (!running) return;
    endAt.current = performance.now() + left * 1000;
    const tick = (now: number) => { const s = Math.max(0, Math.ceil((endAt.current - now) / 1000)); setLeft(s); if (s > 0) raf.current = requestAnimationFrame(tick); else setRunning(false); };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0"); const ss = String(left % 60).padStart(2, "0");
  const reset = (n: number) => { setRunning(false); setLen(n); setLeft(n); };
  const r = 54, c = 2 * Math.PI * r;
  return (
    <div className="flex h-full flex-col">
      <p className="label">01 · Study timer</p>
      <div className="relative mx-auto mt-6 grid place-items-center">
        <svg width="140" height="140" className="-rotate-90"><circle cx="70" cy="70" r={r} fill="none" stroke="rgba(148,163,184,.14)" strokeWidth="6" /><circle cx="70" cy="70" r={r} fill="none" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (left / len)} style={{ transition: "stroke-dashoffset .3s linear" }} /></svg>
        <p className="mono absolute text-3xl tabular-nums" aria-live="polite">{mm}:{ss}</p>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setRunning((v) => !v)}>{running ? "Pause" : left === len ? "Start" : "Resume"}</button>
        <button type="button" className="btn btn-sm" onClick={() => reset(len)}>Reset</button>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {[5, 15, 25, 50].map((m) => <button key={m} type="button" onClick={() => reset(m * 60)} className={`mono text-xs ${len === m * 60 ? "text-accent" : "text-muted hover:text-text"}`}>{m}m</button>)}
      </div>
      <p className="mt-auto pt-6 text-xs text-muted">Drift-free: counts against a fixed end time with requestAnimationFrame.</p>
    </div>
  );
}

function lum(hex: string) {
  const h = hex.replace("#", ""); const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(f.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function Contrast() {
  const [fg, setFg] = useState("#e7edf7"); const [bg, setBg] = useState("#0d1526");
  const ratio = useMemo(() => { const a = lum(fg), b = lum(bg); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); }, [fg, bg]);
  const grade = ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA large" : "Fail";
  return (
    <div className="flex h-full flex-col">
      <p className="label">02 · Contrast checker</p>
      <div className="mt-6 grid place-items-center rounded-xl border border-line p-6 text-center" style={{ background: bg, color: fg }}><span className="text-2xl font-semibold">Aa Quick fox</span></div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {([["Text", fg, setFg], ["Background", bg, setBg]] as const).map(([l, v, set]) => (
          <label key={l} className="field flex items-center gap-2 !py-2"><input type="color" value={v} onChange={(e) => set(e.target.value)} className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0" aria-label={l} /><span className="mono text-xs">{v}</span></label>
        ))}
      </div>
      <div className="mt-5 flex items-baseline justify-between">
        <p className="h-display text-4xl tabular-nums">{ratio.toFixed(2)}<span className="text-muted">:1</span></p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${grade === "Fail" ? "bg-red-500/15 text-red-300" : "bg-emerald-500/15 text-emerald-300"}`}>WCAG {grade}</span>
      </div>
      <button type="button" onClick={() => { setFg(bg); setBg(fg); }} className="mono mt-2 self-start text-xs text-muted hover:text-text">Swap ↔</button>
      <p className="mt-auto pt-6 text-xs text-muted">Relative luminance per WCAG 2.1. Defaults are this site's palette.</p>
    </div>
  );
}

function Easing() {
  const [p, setP] = useState([0.16, 1, 0.3, 1]);
  const curve = `cubic-bezier(${p.map((n) => n.toFixed(2)).join(", ")})`;
  const set = (i: number, v: number) => setP((a) => a.map((x, j) => (j === i ? v : x)));
  const path = `M0,100 C${p[0] * 100},${100 - p[1] * 100} ${p[2] * 100},${100 - p[3] * 100} 100,0`;
  const presets: [string, number[]][] = [["ease", [0.25, 0.1, 0.25, 1]], ["expo", [0.16, 1, 0.3, 1]], ["back", [0.34, 1.56, 0.64, 1]], ["linear", [0, 0, 1, 1]]];
  return (
    <div className="flex h-full flex-col">
      <p className="label">03 · Easing playground</p>
      <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-4">
        <div className="relative h-10 rounded-full border border-line"><div className="ball absolute left-1 top-1/2 h-6 w-6 rounded-full bg-accent shadow-[0_0_20px_rgba(34,211,238,.6)]" style={{ "--curve": curve } as CSSProperties} /></div>
        <svg viewBox="-10 -40 120 180" className="h-20 w-14 overflow-visible" aria-hidden><rect width="100" height="100" fill="none" stroke="currentColor" strokeOpacity=".15" /><path d={path} fill="none" stroke="#22d3ee" strokeWidth="3" /></svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
        {["x1", "y1", "x2", "y2"].map((l, i) => (
          <label key={l} className="block"><span className="mono flex justify-between text-[11px] text-muted"><span>{l}</span><span>{p[i].toFixed(2)}</span></span><input type="range" min={i % 2 ? -0.5 : 0} max={i % 2 ? 1.5 : 1} step="0.01" value={p[i]} onChange={(e) => set(i, +e.target.value)} className="range mt-1.5" /></label>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{presets.map(([n, v]) => <button key={n} type="button" onClick={() => setP(v)} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted hover:border-accent hover:text-text">{n}</button>)}</div>
      <code className="mono mt-4 block break-all rounded-lg bg-white/5 p-2 text-[11px]">{curve}</code>
      <p className="mt-auto pt-6 text-xs text-muted">Every transition on this site uses the "expo" preset.</p>
    </div>
  );
}

export function Lab() {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrap.current; if (!el) return;
    const ro = new ResizeObserver(() => el.querySelectorAll<HTMLElement>(".ball").forEach((b) => b.style.setProperty("--w", `${(b.parentElement?.clientWidth ?? 280) - 32}px`)));
    ro.observe(el); return () => ro.disconnect();
  }, []);
  return (
    <Section id="lab" eyebrow="Playground" title="My lab: three working tools" intro="Not mockups. Go on, click things.">
      <div ref={wrap} className="grid gap-4 lg:grid-cols-3">
        {[Timer, Contrast, Easing].map((C, i) => <div key={i} className="card card-glow p-6" data-reveal style={{ "--d": `${i * 100}ms` } as CSSProperties}><C /></div>)}
      </div>
    </Section>
  );
}
