import { stats } from "../lib/data";
import { useCountUp } from "../lib/hooks";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="border-l border-ink pl-5">
      <p className="display text-6xl tabular-nums md:text-7xl">
        {String(v).padStart(2, "0")}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="label mt-3 text-muted">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <div className="wrap">
      <div className="grid grid-cols-2 gap-8 border-y border-ink py-12 md:grid-cols-4" data-reveal>
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
