export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const line = [...items, ...items];
  return (
    <div className={`marquee label border-y border-ink py-3 ${className}`} aria-hidden>
      <div>
        {line.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{t}</span>
            <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
