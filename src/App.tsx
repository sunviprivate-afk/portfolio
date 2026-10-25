import { useEffect, useRef, useState, type CSSProperties } from "react";

const EMAIL = "sunvi@sunvizamin.bro.bd";

const now = [
  "Studying. School first; everything else happens in the hours around it.",
  "Learning React and TypeScript by rebuilding small tools I already use.",
  "Reading MDN front to back, slowly, with a notebook.",
];

const work = [
  { year: "2026", title: "This website", desc: "Designed and written by hand. React, TypeScript, one small CSS file.", href: "https://github.com/sunviprivate-afk/portfolio" },
];

const notes = [
  { date: "Oct 2026", title: "If I cannot explain a line, it does not ship", body: "The rule I set for this site. It is why there is almost no framework CSS here, and why every animation is one I can describe in a sentence." },
  { date: "Sep 2026", title: "What I got wrong about flexbox", body: "Flex items have min-width: auto by default, so long unbroken text pushes the item wider instead of shrinking. Fix: min-width: 0 on the item, or overflow-wrap on the text." },
  { date: "Aug 2026", title: "Setting up a domain from Kushtia", body: "A registrar, an MX record, an SPF record, and twenty minutes of refreshing a DNS checker. The email address on this page is the result. Write the records down before you add them." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTime() {
  const fmt = useRef(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Dhaka" }));
  const [t, setT] = useState(() => fmt.current.format(new Date()));
  useEffect(() => { const id = setInterval(() => setT(fmt.current.format(new Date())), 15000); return () => clearInterval(id); }, []);
  return t;
}

const d = (i: number) => ({ "--d": `${i * 60}ms` }) as CSSProperties;

export default function App() {
  useReveal();
  const time = useTime();
  const [copied, setCopied] = useState(false);
  const copy = () => navigator.clipboard?.writeText(EMAIL).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });

  return (
    <div className="mx-auto max-w-[40rem] px-6 py-16 md:py-24">
      <header className="flex items-baseline justify-between" data-reveal>
        <span className="font-medium">Sunvi Zamin</span>
        <span className="mono mute">Kushtia · {time}</span>
      </header>

      <section className="mt-20 md:mt-28">
        <h1 className="text-[1.65rem] font-medium leading-snug tracking-[-0.01em] md:text-[2rem]" data-reveal style={d(1)}>
          Student in Kushtia, Bangladesh, teaching myself to build for the web.
          <span className="mute"> I learn by making real things, then writing down what went wrong.</span>
        </h1>
        <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2" data-reveal style={d(2)}>
          <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a>
          <button type="button" onClick={copy} className="mono mute hover:text-fg">{copied ? "copied" : "copy"}</button>
          <span className="mono mute"><span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />open to contact anytime</span>
        </p>
      </section>

      <section className="mt-20 md:mt-28" data-reveal>
        <h2 className="mono mute mb-5">Now</h2>
        <ul className="space-y-2">{now.map((n) => <li key={n}>{n}</li>)}</ul>
      </section>

      <section className="mt-20 md:mt-28" data-reveal>
        <h2 className="mono mute mb-5">Work</h2>
        <div>
          {work.map((w) => (
            <a key={w.title} href={w.href} target={w.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="row">
              <span className="mono mute">{w.year}</span>
              <span>
                <span className="title font-medium">{w.title}</span>
                <span className="arrow ml-1 inline-block text-accent">↗</span>
                <span className="mute block">{w.desc}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="mute mt-4 text-sm">One entry for now. I would rather list one real thing than three imagined ones.</p>
      </section>

      <section className="mt-20 md:mt-28" data-reveal>
        <h2 className="mono mute mb-5">Notes</h2>
        <div>
          {notes.map((n) => (
            <details key={n.title} className="row block">
              <summary className="grid gap-x-8 sm:grid-cols-[7rem_1fr]">
                <span className="mono mute">{n.date}</span>
                <span className="font-medium"><span className="mark" />{n.title}</span>
              </summary>
              <p className="mute mt-3 sm:ml-[9rem] sm:pl-4">{n.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-20 md:mt-28" data-reveal>
        <h2 className="mono mute mb-5">About</h2>
        <div className="space-y-4">
          <p>Most of my free time goes into how websites actually work: how a browser turns text into layout, why JavaScript does what it does, what happens between pressing enter and seeing a page.</p>
          <p>When I get stuck I read the docs first, build the smallest version of the problem, and write it down so I never have to find it twice.</p>
          <p>I live in Kushtia, in the Khulna Division of Bangladesh. If you are nearby and building something, I want to hear about it.</p>
        </div>
      </section>

      <footer className="mono mute mt-24 flex flex-wrap justify-between gap-2 border-t border-line pt-6 md:mt-32" data-reveal>
        <span>© {new Date().getFullYear()} Sunvi Zamin</span>
        <span>Set in Inter and JetBrains Mono · <a href="https://github.com/sunviprivate-afk/portfolio" className="link" target="_blank" rel="noreferrer">source</a></span>
      </footer>
    </div>
  );
}
