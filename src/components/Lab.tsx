import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Section } from "./Section";

/* ---------- 1. Study timer ---------- */
function Timer() {
  const [len, setLen] = useState(25 * 60);
  const [left, setLeft] = useState(len);
  const [running, setRunning] = useState(false);
  const raf = useRef<number>(0);
  const endAt = useRef<number>(0);

  useEffect(() => {
    if (!running) return;
    endAt.current = performance.now() + left * 1000;
    const tick = (now: number) => {
      const s = Math.max(0, Math.ceil((endAt.current - now) / 1000));
      setLeft(s);
      if (s > 0) raf.current = requestAnimationFrame(tick);
      else setRunning(false);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const pct = 1 - left / len;
  const reset = (n: number) => { setRunning(false); setLen(n); setLeft(n); };

  return (
    <div className="flex h-full flex-col">
      <p className="label text-muted">01 · Study timer</p>
      <p className="display mt-6 text-7xl tabular-nums md:text-8xl" aria-live="polite">
        {mm}<span className={running ? "text-accent" : "text-muted"}>:</span>{ss}
      </p>
      <div className="mt-4 h-px w-full bg-line">
        <div className="h-px bg-accent" style={{ width: `${pct * 100}%`, transition: "width .3s linear" }} />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <button type="button" className="btn btn--solid" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : left === len ? "Start" : "Resume"}
        </button>
        <button type="button" className="btn" onClick={() => reset(len)}>Reset</button>
      </div>
      <div className="mt-4 flex gap-4">
        {[5, 15, 25, 50].map((m) => (
          <button key={m} type="button" onClick={() => reset(m * 60)} className={`label u ${len === m * 60 ? "text-accent" : "text-muted"}`}>
            {m} min
          </button>
        ))}
      </div>
      <p className="mt-auto pt-6 text-sm text-muted">Uses requestAnimationFrame against a fixed end time, so it does not drift when the tab is busy.</p>
    </div>
  );
}

/* ---------- 2. Contrast checker ---------- */
function lum(hex: string) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function Contrast() {
  const [fg, setFg] = useState("#1b1b18");
  const [bg, setBg] = useState("#f1ede4");
  const ratio = useMemo(() => {
    const a = lum(fg), b = lum(bg);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  }, [fg, bg]);
  const grade = ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA large" : "Fail";

  return (
    <div className="flex h-full flex-col">
      <p className="label text-muted">02 · Contrast checker</p>
      <div className="mt-6 flex items-center justify-center border border-ink p-6 text-center" style={{ background: bg, color: fg }}>
        <span className="display text-3xl">The quick brown fox</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {[["Text", fg, setFg], ["Background", bg, setBg]].map(([l, v, set]) => (
          <label key={l as string} className="block">
            <span className="label text-muted">{l as string}</span>
            <span className="mt-1 flex items-center gap-2 border-b border-ink pb-1">
              <input type="color" value={v as string} onChange={(e) => (set as (s: string) => void)(e.target.value)} className="h-6 w-6 cursor-pointer border-0 bg-transparent p-0" aria-label={`${l} colour`} />
              <span className="mono text-sm">{v as string}</span>
            </span>
          </label>
        ))}
      </div>
      <div className="mt-6 flex items-baseline justify-between">
        <p className="display text-5xl tabular-nums">{ratio.toFixed(2)}<span className="text-muted">:1</span></p>
        <p className={`label ${grade === "Fail" ? "text-accent" : "text-ink"}`}>WCAG {grade}</p>
      </div>
      <button type="button" onClick={() => { setFg(bg); setBg(fg); }} className="label u mt-3 self-start text-muted">Swap ↔</button>
      <p className="mt-auto pt-6 text-sm text-muted">Relative luminance per WCAG 2.1. The site's own palette is the default.</p>
    </div>
  );
}

/* ---------- 3. Easing playground ---------- */
function Easing() {
  const [p, setP] = useState([0.16, 1, 0.3, 1]);
  const curve = `cubic-bezier(${p.map((n) => n.toFixed(2)).join(", ")})`;
  const set = (i: number, v: number) => setP((a) => a.map((x, j) => (j === i ? v : x)));
  const path = `M0,100 C${p[0] * 100},${100 - p[1] * 100} ${p[2] * 100},${100 - p[3] * 100} 100,0`;
  const presets: [string, number[]][] = [
    ["ease", [0.25, 0.1, 0.25, 1]],
    ["expo", [0.16, 1, 0.3, 1]],
    ["back", [0.34, 1.56, 0.64, 1]],
    ["linear", [0, 0, 1, 1]],
  ];
  return (
    <div className="flex h-full flex-col">
      <p className="label text-muted">03 · Easing playground</p>
      <div className="mt-6 grid grid-cols-[1fr_auto] gap-4">
        <div>
          <div className="relative h-10 border-b border-ink">
            <div className="ball absolute left-0 top-1/2 h-4 w-4 rounded-full bg-accent" style={{ "--curve": curve } as CSSProperties} />
          </div>
        </div>
        <svg viewBox="-10 -40 120 180" className="h-24 w-16 overflow-visible" aria-hidden>
          <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeOpacity=".2" />
          <path d={path} fill="none" stroke="#e8420c" strokeWidth="2" />
          <line x1="0" y1="100" x2={p[0] * 100} y2={100 - p[1] * 100} stroke="currentColor" strokeOpacity=".4" />
          <line x1="100" y1="0" x2={p[2] * 100} y2={100 - p[3] * 100} stroke="currentColor" strokeOpacity=".4" />
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
        {["x1", "y1", "x2", "y2"].map((l, i) => (
          <label key={l} className="block">
            <span className="label flex justify-between text-muted"><span>{l}</span><span className="mono normal-case tracking-normal">{p[i].toFixed(2)}</span></span>
            <input type="range" min={i % 2 ? -0.5 : 0} max={i % 2 ? 1.5 : 1} step="0.01" value={p[i]} onChange={(e) => set(i, +e.target.value)} className="range mt-2" />
          </label>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {presets.map(([n, v]) => (
          <button key={n} type="button" onClick={() => setP(v)} className="label u text-muted">{n}</button>
        ))}
      </div>
      <code className="mono mt-4 block break-all border border-line p-2 text-xs">{curve}</code>
      <p className="mt-auto pt-6 text-sm text-muted">Every transition on this site uses the "expo" preset.</p>
    </div>
  );
}

export function Lab() {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // measure ball travel width for the easing demo
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      el.querySelectorAll<HTMLElement>(".ball").forEach((b) => {
        const w = (b.parentElement?.clientWidth ?? 280) - 16;
        b.style.setProperty("--w", `${w}px`);
      });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Section id="lab" eyebrow="Lab" title="Three working tools. Click things." className="rule">
      <div ref={wrap} className="mt-12 grid gap-px bg-ink lg:grid-cols-3">
        {[Timer, Contrast, Easing].map((C, i) => (
          <div key={i} data-reveal style={{ "--d": `${i * 120}ms` } as CSSProperties} className="bg-paper p-6">
            <C />
          </div>
        ))}
      </div>
    </Section>
  );
}
