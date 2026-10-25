import { useState } from "react";
import { EMAIL, NAME, nav } from "../lib/data";
import { useDhakaTime, useScrollProgress } from "../lib/hooks";
import { Avatar } from "./Avatar";
import { I } from "./Icons";

export function Sidebar({ active }: { active: string }) {
  const time = useDhakaTime(false);
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  const list = (
    <nav className="grid gap-1">
      {nav.map(([id, label]) => {
        const Icon = I[id as keyof typeof I] ?? I.home;
        return (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="nav-item" aria-current={active === id ? "true" : undefined}>
            <Icon /> {label}
          </a>
        );
      })}
    </nav>
  );

  return (
    <>
      <div aria-hidden className="fixed left-0 top-0 z-[80] h-[2px] bg-accent" style={{ width: `${progress * 100}%`, transition: "width 80ms linear" }} />

      {/* desktop */}
      <aside className="fixed left-0 top-0 z-[60] hidden h-screen w-[240px] flex-col border-r border-line bg-bg/70 p-5 backdrop-blur-xl lg:flex">
        <div className="card flex flex-col items-center p-5 text-center">
          <div className="relative">
            <Avatar size={80} />
            <span className="dot absolute bottom-1 right-1 ring-4 ring-card" />
          </div>
          <p className="mt-3 text-base font-semibold">{NAME}</p>
          <p className="label mt-1">Student · Kushtia</p>
          <div className="mt-4 flex gap-2">
            <a href="#contact" className="btn btn-primary btn-sm">Hire me</a>
            <a href={`mailto:${EMAIL}`} className="btn btn-sm">Email</a>
          </div>
        </div>
        <div className="mt-5 flex-1 overflow-y-auto pr-1">{list}</div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <span className="label flex items-center gap-2"><I.clock width={14} height={14} /> {time} +06</span>
          <span className="label">v1.0</span>
        </div>
      </aside>

      {/* mobile top bar */}
      <header className="sticky top-0 z-[70] flex items-center justify-between border-b border-line bg-bg/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a href="#home" className="flex items-center gap-2 font-semibold"><Avatar size={28} /> {NAME}</a>
        <button type="button" className="btn btn-sm" onClick={() => setOpen((v) => !v)} aria-expanded={open}>{open ? "Close" : "Menu"}</button>
      </header>
      {open && (
        <div className="fixed inset-x-0 top-[57px] z-[65] border-b border-line bg-bg/95 p-4 backdrop-blur-xl lg:hidden">
          {list}
          <a href={`mailto:${EMAIL}`} className="btn btn-primary mt-4 w-full justify-center">Email me</a>
        </div>
      )}
    </>
  );
}
