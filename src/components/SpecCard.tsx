import type { CSSProperties } from "react";
import { useDhakaTime, useTilt } from "../lib/hooks";

export function SpecCard() {
  const ref = useTilt();
  const time = useDhakaTime();
  const rows: [string, string, boolean?][] = [
    ["Location", "Kushtia, Bangladesh"],
    ["Local time", `${time} GMT+6`],
    ["Status", "Open anytime", true],
    ["Role", "Student"],
    ["Focus", "Web / Motion / Type"],
    ["Revision", "Vol. 01 — Oct 2026"],
  ];
  return (
    <div className="card3d-wrap" data-reveal="scale" style={{ "--d": "1100ms" } as CSSProperties}>
      <div ref={ref} className="card3d label">
        <div className="glare" aria-hidden />
        {rows.map(([k, v, hot]) => (
          <div key={k} className="row3">
            <span className="text-muted">{k}</span>
            <span className={`text-right tabular-nums ${hot ? "flex items-center gap-2 text-accent" : ""}`}>
              {hot && <span className="dot" />}
              {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
