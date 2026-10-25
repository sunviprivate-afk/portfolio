import type { ReactNode } from "react";

export function Section({
  id, eyebrow, title, children, className = "", aside,
}: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string; aside?: ReactNode }) {
  return (
    <section id={id} className={`wrap scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3" data-reveal>
          <p className="label text-muted">{eyebrow}</p>
          {aside}
        </div>
        <div className="md:col-span-9" data-reveal>
          <h2 className="lede text-[clamp(1.7rem,3.4vw,2.8rem)]">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}
