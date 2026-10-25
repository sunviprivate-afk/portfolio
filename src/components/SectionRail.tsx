import { sections } from "../lib/data";

export function SectionRail({ active }: { active: string }) {
  return (
    <aside className="rail fixed right-5 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-4 xl:flex" aria-label="Sections">
      {sections.map(([label, id]) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} aria-label={label}>
          <span className="label text-ink">{label}</span>
        </a>
      ))}
    </aside>
  );
}
