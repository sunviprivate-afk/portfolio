import { useState } from "react";
import { EMAIL, sections } from "../lib/data";
import { useDhakaTime, useScrollProgress } from "../lib/hooks";

export function Header({ active }: { active: string }) {
  const time = useDhakaTime();
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[80] h-[2px] bg-accent"
        style={{ width: `${progress * 100}%`, transition: "width 80ms linear" }}
      />
      <header className="sticky top-0 z-[70] border-b border-ink bg-paper/90 backdrop-blur-[3px]">
        <div className="wrap flex items-center justify-between py-3">
          <a href="#top" className="display flex items-center gap-2 text-sm tracking-tight">
            <span className="text-accent">✳</span> SUNVI ZAMIN
          </a>
          <nav className="hidden gap-6 lg:flex">
            {sections.map(([label, id], i) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`label u transition-colors ${active === id ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                <span className="text-accent/70">{String(i + 1).padStart(2, "0")}</span> {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <span className="label hidden tabular-nums md:inline">{time} GMT+6</span>
            <a href={`mailto:${EMAIL}`} className="btn hidden !py-1.5 !px-3 sm:inline-flex">
              Say hi
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="label lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {open && (
          <nav className="wrap grid gap-3 border-t border-line py-4 lg:hidden">
            {sections.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="display text-3xl">
                {label}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="label mt-2 text-accent">
              {EMAIL}
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
