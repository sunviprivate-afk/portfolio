const nav = [
  ["About", "#about"],
  ["Learning", "#learning"],
  ["Notes", "#notes"],
  ["Contact", "#contact"],
];

const learning = [
  {
    n: "01",
    title: "HTML and CSS",
    body: "Where I started. I can lay out a page by hand with grid and flexbox and I know why the box model behaves the way it does.",
    status: "Comfortable",
  },
  {
    n: "02",
    title: "JavaScript",
    body: "The language I spend the most time in. Working through the DOM, fetch, promises, and the parts of the spec people usually skip.",
    status: "In progress",
  },
  {
    n: "03",
    title: "React and TypeScript",
    body: "This site is built with both. I am rebuilding small tools I already use so I can compare my version against the real one.",
    status: "In progress",
  },
  {
    n: "04",
    title: "Git and the terminal",
    body: "Branches, pull requests, and fixing the mess when a merge goes wrong. Less scary than it looked.",
    status: "Comfortable",
  },
];

const notes = [
  {
    date: "Oct 2026",
    title: "Why this site has no frameworks for styling, except one",
    body: "Tailwind is here because I wanted to learn it. Everything else is plain CSS so I can see what each line does.",
  },
  {
    date: "Sep 2026",
    title: "Things I got wrong about flexbox",
    body: "Mostly about min-width: auto and why long text refuses to shrink. Writing it down so it sticks.",
  },
  {
    date: "Aug 2026",
    title: "Setting up a domain from Kushtia",
    body: "Registrars, DNS records, and waiting for propagation. The email on this page is the result.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-ink bg-paper/95 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <a href="#top" className="label">
            Sunvi Zamin
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="label hover:text-accent">
                {label}
              </a>
            ))}
          </nav>
          <a href="mailto:sunvi@sunvizamin.bro.bd" className="label hover:text-accent">
            Email →
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Hero */}
        <section className="grid gap-10 pt-16 pb-20 md:grid-cols-12 md:pt-24 md:pb-28">
          <div className="md:col-span-8">
            <p className="label text-muted">Student · Kushtia, Bangladesh</p>
            <h1 className="display mt-6 text-[clamp(3rem,10vw,8.5rem)]">
              Sunvi
              <br />
              Zamin<span className="text-accent">.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end md:col-span-4">
            <p className="text-lg leading-snug">
              I am a student in Kushtia learning how the web is built, one
              layer at a time. This site is where I keep what I know so far.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn">
                Get in touch
              </a>
              <a href="#learning" className="btn">
                What I'm learning
              </a>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="rule border-b border-ink py-3">
          <div className="marquee label">
            <span>
              Open to contact anytime — Kushtia, Khulna Division — Student —
              HTML · CSS · JavaScript · React · TypeScript — Open to contact
              anytime — Kushtia, Khulna Division — Student — HTML · CSS ·
              JavaScript · React · TypeScript —&nbsp;
            </span>
          </div>
        </div>

        {/* About */}
        <section id="about" className="grid gap-8 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-3">
            <p className="label text-muted">About</p>
          </div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight">
              I would rather understand one thing properly than skim ten.
            </p>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
              <p>
                Most of my free time goes into figuring out how websites work:
                how a browser turns text into a layout, why JavaScript behaves
                the way it does, what actually happens when you press enter in
                the address bar.
              </p>
              <p>
                When I get stuck I read the documentation first, build the
                smallest version of the problem I can, and write down what I
                found so I do not have to find it twice. The notes further down
                this page come out of that habit.
              </p>
              <p>
                I live in Kushtia, in the Khulna Division of Bangladesh. If you
                are nearby and working on something interesting, I would like
                to hear about it.
              </p>
            </div>
          </div>
        </section>

        {/* Learning */}
        <section id="learning" className="rule py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="label text-muted">Learning</p>
            </div>
            <div className="md:col-span-9">
              <p className="display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight">
                Where I am right now, honestly.
              </p>
            </div>
          </div>
          <ol className="mt-12 border-t border-ink">
            {learning.map((item) => (
              <li
                key={item.n}
                className="grid gap-3 border-b border-ink py-6 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="label text-muted md:col-span-1">{item.n}</span>
                <h3 className="display text-2xl md:col-span-3">{item.title}</h3>
                <p className="text-ink/85 md:col-span-6">{item.body}</p>
                <span className="label md:col-span-2 md:text-right">
                  <span
                    className={
                      item.status === "Comfortable"
                        ? "text-ink"
                        : "text-accent"
                    }
                  >
                    {item.status}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Notes */}
        <section id="notes" className="py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="label text-muted">Notes</p>
            </div>
            <div className="md:col-span-9">
              <p className="display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight">
                Short write-ups of things I had to learn the hard way.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-px bg-ink md:grid-cols-3">
            {notes.map((n) => (
              <article key={n.title} className="flex flex-col bg-paper p-6 md:min-h-64">
                <p className="label text-muted">{n.date}</p>
                <h3 className="display mt-4 text-2xl leading-tight">{n.title}</h3>
                <p className="mt-4 text-ink/85">{n.body}</p>
                <p className="label mt-auto pt-6 text-muted">Coming soon</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="rule py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="label text-muted">Contact</p>
              <p className="label mt-2 text-accent">Open to contact anytime</p>
            </div>
            <div className="md:col-span-9">
              <a
                href="mailto:sunvi@sunvizamin.bro.bd"
                className="display block break-all text-[clamp(1.5rem,5vw,4.5rem)] leading-none hover:text-accent"
              >
                sunvi@sunvizamin.bro.bd
              </a>
              <p className="mt-8 max-w-prose text-[1.05rem] leading-relaxed text-ink/90">
                There is no form, just email. I read everything that comes in
                and reply to most of it. Questions, corrections to anything on
                this page, or an invitation to work on something together are
                all welcome.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="label text-muted">Sunvi Zamin · Kushtia, Bangladesh</p>
          <p className="label text-muted">
            Built by hand with React, TypeScript and Tailwind · Updated Oct 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
