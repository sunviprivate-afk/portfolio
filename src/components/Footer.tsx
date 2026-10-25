import type { CSSProperties } from "react";
import { EMAIL } from "../lib/data";
import { useCopy, useDhakaTime, useMagnet } from "../lib/hooks";

export function Footer() {
  const { copied, copy } = useCopy(EMAIL);
  const time = useDhakaTime(false);
  const m = useMagnet();
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-ink bg-ink text-paper">
      <div className="wrap py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3" data-reveal>
            <p className="label text-paper/60">Contact</p>
            <p className="label mt-2 flex items-center gap-2 text-accent"><span className="dot" /> Open to contact anytime</p>
            <p className="label mt-6 text-paper/60">Kushtia · {time}</p>
          </div>
          <div className="md:col-span-9">
            <p className="display text-[clamp(2.4rem,7vw,6.5rem)]" data-reveal>Say hello<span className="text-accent">.</span></p>
            <a href={`mailto:${EMAIL}`} data-reveal style={{ "--d": "100ms" } as CSSProperties} className="email display mt-4 inline-block break-all text-[clamp(1.3rem,4vw,3.6rem)] leading-none">
              {EMAIL}
            </a>
            <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal style={{ "--d": "200ms" } as CSSProperties}>
              <a ref={m as React.RefObject<HTMLAnchorElement>} href={`mailto:${EMAIL}`} className="btn btn--accent">Write an email</a>
              <button type="button" onClick={copy} className="btn btn--paper">
                {copied ? "Copied" : "Copy address"}
              </button>
            </div>
            <p className="mt-10 max-w-prose leading-relaxed text-paper/75" data-reveal style={{ "--d": "260ms" } as CSSProperties}>
              No form, just email. I read everything and reply to most of it. Questions, corrections to anything on this page, or an invitation to build something together are all welcome.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/20">
        <div className="wrap flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
          <p className="label text-paper/60">Sunvi Zamin · Kushtia, Bangladesh · {new Date().getFullYear()}</p>
          <p className="label text-paper/60">Handwritten in React, TypeScript and CSS · No templates</p>
          <a href="#top" className="label u text-paper/60 hover:text-paper">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
