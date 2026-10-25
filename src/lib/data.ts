export const EMAIL = "sunvi@sunvizamin.bro.bd";

export const sections = [
  ["Work", "work"],
  ["About", "about"],
  ["Can do", "services"],
  ["Path", "experience"],
  ["Lab", "lab"],
  ["Notes", "notes"],
  ["Contact", "contact"],
] as const;

export const work = [
  {
    n: "01",
    title: "This website",
    kind: "Site",
    year: "2026",
    body: "Designed and coded by hand in React, TypeScript and Tailwind. Scroll reveals, a section rail, a live clock, and no third-party UI kit. The thing you are reading is the project.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    href: "#top",
  },
  {
    n: "02",
    title: "The Lab",
    kind: "Experiments",
    year: "2026",
    body: "Three small interactive tools further down this page: a study timer, a colour contrast checker, and an easing-curve playground. Each one started as a question I could not answer.",
    tags: ["State", "Canvas-free", "Accessibility"],
    href: "#lab",
  },
  {
    n: "03",
    title: "Notes",
    kind: "Writing",
    year: "2026 →",
    body: "Short write-ups of things I got wrong and then understood. Written for the version of me from a month ago. They open in place; no separate blog yet.",
    tags: ["Writing", "Learning in public"],
    href: "#notes",
  },
];

export const stats = [
  { value: 1, suffix: "", label: "Website shipped" },
  { value: 3, suffix: "", label: "Live experiments" },
  { value: 4, suffix: "", label: "Topics in progress" },
  { value: 24, suffix: "/7", label: "Open to contact" },
];

export const services = [
  {
    n: "01",
    title: "Small static sites",
    body: "A clean page for a shop, a club, a teacher, a friend. Fast, readable on a cheap phone, no page builder.",
  },
  {
    n: "02",
    title: "Fixing layouts",
    body: "The thing that overflows on mobile, the footer that will not stay down, the flex row that refuses to wrap. I enjoy these.",
  },
  {
    n: "03",
    title: "Small React components",
    body: "Tabs, accordions, timers, forms with sensible validation. Typed, keyboard-friendly, documented in a sentence.",
  },
  {
    n: "04",
    title: "Learning together",
    body: "If you are also a student working through this stuff, I am happy to pair, swap notes, or review each other's code.",
  },
];

export const experience = [
  {
    when: "2024",
    title: "First HTML file",
    body: "Opened Notepad, typed a heading, double-clicked the file, saw it in the browser. Spent the next month making it less ugly.",
  },
  {
    when: "2025",
    title: "CSS, properly",
    body: "Stopped guessing. Learned the box model, flexbox and grid from the specification and from MDN instead of copying snippets.",
  },
  {
    when: "2025",
    title: "JavaScript",
    body: "DOM, events, fetch, promises. Built small things that broke in interesting ways and wrote down why.",
  },
  {
    when: "2026",
    title: "React, TypeScript, Git",
    body: "Started this site. Learned branches and pull requests by using them for every change, including this sentence.",
  },
  {
    when: "Now",
    title: "Student, Kushtia",
    body: "School first. Everything above happens in the hours around it. Open to small projects and good conversations.",
  },
];

export const notes = [
  {
    date: "Oct 2026",
    title: "Why this site has almost no CSS framework",
    body: [
      "Tailwind is here because I wanted to learn its vocabulary, and it is useful for spacing and responsive classes. Everything with motion or personality is plain CSS in one file, so I can read each rule and know what it does.",
      "The rule I set myself: if I cannot explain a line, it does not ship.",
    ],
  },
  {
    date: "Sep 2026",
    title: "Things I got wrong about flexbox",
    body: [
      "Flex items have min-width: auto by default, which means long unbroken text will push the item wider instead of shrinking. The fix is min-width: 0 on the item, or overflow-wrap on the text.",
      "Also: justify-content does nothing useful when the items already fill the row. Obvious once you see it.",
    ],
  },
  {
    date: "Aug 2026",
    title: "Setting up a domain from Kushtia",
    body: [
      "A registrar account, an MX record, an SPF record, and twenty minutes of refreshing a DNS checker. The email address on this page is the result.",
      "Lesson: write the records down before you add them. DNS does not give helpful errors.",
    ],
  },
];
