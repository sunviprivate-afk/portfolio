import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children, intro }: { id: string; eyebrow: string; title: string; children: ReactNode; intro?: string }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
        <div>
          <p className="label">// {eyebrow}</p>
          {intro && <p className="mt-3 max-w-md text-sm text-muted">{intro}</p>}
        </div>
        <h2 className="h-section text-3xl md:text-right md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
