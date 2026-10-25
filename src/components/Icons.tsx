import type { SVGProps } from "react";
const P = (p: SVGProps<SVGSVGElement>) => ({ width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...p });

export const I = {
  home: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>,
  about: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>,
  skills: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></svg>,
  services: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  process: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M4 6h16M4 12h10M4 18h6" /></svg>,
  work: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>,
  lab: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" /></svg>,
  plans: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M12 2v20M17 6.5a4 4 0 0 0-4-2.5h-2a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-2a4 4 0 0 1-4-2.5" /></svg>,
  journey: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M4 19h16M6 19V9l6-5 6 5v10" /></svg>,
  faq: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.5M12 17h.01" /></svg>,
  notes: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" /></svg>,
  contact: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  arrow: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>,
  down: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M12 5v14m-6-6 6 6 6-6" /></svg>,
  check: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="m5 12 5 5L20 7" /></svg>,
  plus: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M12 5v14M5 12h14" /></svg>,
  copy: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5h10" /></svg>,
  github: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>,
  mail: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  pin: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  clock: (p: SVGProps<SVGSVGElement>) => <svg {...P(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
};

/* skill marks */
export function SkillIcon({ id }: { id: string }) {
  const c = "h-6 w-6";
  switch (id) {
    case "html": return <svg className={c} viewBox="0 0 24 24" fill="#f97316"><path d="M3 2h18l-1.6 18L12 22l-7.4-2z" opacity=".9" /><path d="M12 4v16l5.8-1.6L19.2 4z" fill="#fb923c" /><path d="M7 7h10l-.3 3H10l.2 2h6.4l-.5 5-4.1 1.2L8 17l-.3-3h2l.1 1.5 2.2.6 2.2-.6.2-2.3H7.4z" fill="#fff" /></svg>;
    case "css": return <svg className={c} viewBox="0 0 24 24" fill="#38bdf8"><path d="M3 2h18l-1.6 18L12 22l-7.4-2z" opacity=".9" /><path d="M12 4v16l5.8-1.6L19.2 4z" fill="#7dd3fc" /><path d="M7.5 7h9l-.3 3H10l.2 2h6l-.5 5-3.7 1.2L8.3 17l-.2-2.8h2l.1 1.2 1.8.5 1.9-.5.2-2.2H7.8z" fill="#fff" /></svg>;
    case "js": return <svg className={c} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#facc15" /><path d="M7 17.5c.6 1 1.4 1.5 2.6 1.5 1.6 0 2.4-.9 2.4-2.4V10h-2v6.5c0 .6-.3.9-.7.9-.5 0-.7-.3-1-.8zm6.5-.3c.6 1.2 1.7 1.8 3.2 1.8 1.9 0 3.1-1 3.1-2.6 0-1.5-.9-2.1-2.5-2.8l-.5-.2c-.8-.4-1.2-.6-1.2-1.1 0-.4.3-.8.9-.8.5 0 .9.2 1.2.8l1.5-1c-.6-1.1-1.5-1.5-2.7-1.5-1.7 0-2.8 1.1-2.8 2.5 0 1.5.9 2.2 2.3 2.8l.5.2c.9.4 1.4.6 1.4 1.2 0 .5-.5.9-1.2.9-.9 0-1.4-.5-1.8-1.1z" fill="#1b1b18" /></svg>;
    case "ts": return <svg className={c} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#3b82f6" /><path d="M6 11h6v1.8H9.9V19H8.1v-6.2H6zm7.2 6c.6 1.2 1.7 1.8 3.2 1.8 1.9 0 3.1-1 3.1-2.6 0-1.5-.9-2.1-2.5-2.8l-.5-.2c-.8-.4-1.2-.6-1.2-1.1 0-.4.3-.8.9-.8.5 0 .9.2 1.2.8l1.5-1c-.6-1.1-1.5-1.5-2.7-1.5-1.7 0-2.8 1.1-2.8 2.5 0 1.5.9 2.2 2.3 2.8l.5.2c.9.4 1.4.6 1.4 1.2 0 .5-.5.9-1.2.9-.9 0-1.4-.5-1.8-1.1z" fill="#fff" /></svg>;
    case "react": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.3"><circle cx="12" cy="12" r="2" fill="#22d3ee" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>;
    case "git": return <svg className={c} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="9" r="2" /><path d="M6 7v10M18 11c0 3-3 4-6 4H6" /></svg>;
    default: return null;
  }
}
