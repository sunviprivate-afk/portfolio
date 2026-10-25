/* Monogram avatar. Drop a real photo at /public/me.jpg and swap the <svg> for <img>. */
export function Avatar({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={`rounded-full ${className}`} aria-label="Sunvi Zamin">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#164e63" /><stop offset="1" stopColor="#0b1220" /></linearGradient>
        <linearGradient id="t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a5f3fc" /><stop offset="1" stopColor="#22d3ee" /></linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#g)" />
      <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(34,211,238,.35)" />
      <text x="50" y="58" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="34" letterSpacing="-2" fill="url(#t)">SZ</text>
    </svg>
  );
}
