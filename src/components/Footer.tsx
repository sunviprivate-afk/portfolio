import { CITY, EMAIL, NAME, nav } from "../lib/data";
import { useDhakaTime } from "../lib/hooks";
import { Avatar } from "./Avatar";
import { I } from "./Icons";

export function Footer() {
  const time = useDhakaTime(false);
  return (
    <footer className="border-t border-line pb-10 pt-12">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4"><Avatar size={56} /><div><p className="text-lg font-semibold">{NAME}</p><p className="text-sm text-muted">Student · Self-taught web developer</p></div></div>
          <p className="mt-5 max-w-sm text-sm text-muted">Built by hand in React, TypeScript and CSS. No templates. Every line on this page is something I can explain.</p>
          <div className="mt-5 flex gap-2">
            <a href={`mailto:${EMAIL}`} className="icon-btn" aria-label="Email"><I.mail width={16} height={16} /></a>
            <a href="https://github.com/sunviprivate-afk" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub"><I.github width={16} height={16} /></a>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="label">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">{nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="text-muted hover:text-text">{l}</a></li>)}</ul>
        </div>
        <div className="md:col-span-4">
          <p className="label">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2"><I.mail width={14} height={14} /> <a href={`mailto:${EMAIL}`} className="hover:text-text">{EMAIL}</a></li>
            <li className="flex items-center gap-2"><I.pin width={14} height={14} /> {CITY}</li>
            <li className="flex items-center gap-2"><I.clock width={14} height={14} /> {time} local (UTC+6)</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
        <p>Made in Kushtia · <a href="#home" className="hover:text-text">Back to top ↑</a></p>
      </div>
    </footer>
  );
}
