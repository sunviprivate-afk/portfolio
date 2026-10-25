import { useEffect, useRef, useState } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((x): x is HTMLElement => !!x);
    const io = new IntersectionObserver(
      (entries) => {
        const best = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.3, 0.6, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; setP(max > 0 ? h.scrollTop / max : 0); }); };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return p;
}

export function useDhakaTime(withSeconds = true) {
  const fmt = useRef(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", ...(withSeconds ? { second: "2-digit" } : {}), hour12: false, timeZone: "Asia/Dhaka" }));
  const [t, setT] = useState(() => fmt.current.format(new Date()));
  useEffect(() => { const id = setInterval(() => setT(fmt.current.format(new Date())), 1000); return () => clearInterval(id); }, []);
  return t;
}

export function useCopy(text: string, ms = 1600) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), ms); } catch { /* ignore */ } };
  return { copied, copy };
}

export function useCountUp(to: number, duration = 1400) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const tick = (now: number) => { const t = Math.min(1, (now - start) / duration); setV(Math.round(to * (1 - Math.pow(1 - t, 4)))); if (t < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, [to, duration]);
  return { ref, value: v };
}

export function useTilt(maxX = 10, maxY = 14) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el || window.matchMedia("(hover: none)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width; const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--rx", `${(0.5 - py) * maxX}deg`); el.style.setProperty("--ry", `${(px - 0.5) * maxY}deg`);
      el.style.setProperty("--gx", `${px * 100}%`); el.style.setProperty("--gy", `${py * 100}%`);
    };
    const enter = () => el.classList.add("is-active");
    const leave = () => { el.classList.remove("is-active"); ["--rx", "--ry"].forEach((v) => el.style.removeProperty(v)); };
    el.addEventListener("pointerenter", enter); el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointerenter", enter); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, [maxX, maxY]);
  return ref;
}

/** Tracks pointer for card glow without tilt. */
export function useGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e: PointerEvent) => { const r = el.getBoundingClientRect(); el.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`); el.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`); };
    el.addEventListener("pointermove", move); return () => el.removeEventListener("pointermove", move);
  }, []);
  return ref;
}
