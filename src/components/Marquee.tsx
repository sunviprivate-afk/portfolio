const items = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Vite", "Git", "GitHub", "VS Code", "MDN", "Figma"];
export function Marquee() {
  return (
    <div className="marquee mt-6 border-y border-line py-4" aria-hidden>
      <div>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mono mx-6 flex items-center gap-6 text-sm text-muted"><span>{t}</span><span className="h-1 w-1 rounded-full bg-accent" /></span>
        ))}
      </div>
    </div>
  );
}
