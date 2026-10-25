export const EMAIL = "sunvi@sunvizamin.bro.bd";
export const NAME = "Sunvi Zamin";
export const CITY = "Kushtia, Bangladesh";

export const nav = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["services", "Services"],
  ["process", "Process"],
  ["work", "Work"],
  ["lab", "Lab"],
  ["plans", "Plans"],
  ["journey", "Journey"],
  ["faq", "FAQ"],
  ["notes", "Notes"],
  ["contact", "Contact"],
] as const;

export const stats = [
  { value: 1, suffix: "", label: "Site shipped" },
  { value: 3, suffix: "", label: "Working lab tools" },
  { value: 6, suffix: "+", label: "Technologies in use" },
  { value: 24, suffix: "/7", label: "Open to contact" },
];

export const skills = [
  { name: "HTML", level: 85, note: "Semantic, accessible markup", icon: "html" },
  { name: "CSS", level: 80, note: "Grid, flexbox, motion", icon: "css" },
  { name: "JavaScript", level: 65, note: "DOM, fetch, async", icon: "js" },
  { name: "TypeScript", level: 55, note: "Types, generics, strict mode", icon: "ts" },
  { name: "React", level: 60, note: "Hooks, state, components", icon: "react" },
  { name: "Git & GitHub", level: 70, note: "Branches, PRs, reviews", icon: "git" },
];

export const services = [
  { n: "01", title: "Small static sites", body: "A clean, fast page for a shop, a club, a teacher. Readable on a cheap phone, no page builder, no bloat.", tags: ["HTML", "CSS", "Vite"] },
  { n: "02", title: "Layout & CSS fixes", body: "The div that overflows on mobile. The footer that will not stay down. The flex row that refuses to wrap. I like these.", tags: ["Responsive", "Debugging"] },
  { n: "03", title: "React components", body: "Tabs, accordions, timers, forms that validate sensibly. Typed, keyboard-friendly, explained in a sentence.", tags: ["React", "TypeScript"] },
  { n: "04", title: "Learning together", body: "Also a student working through this? Happy to pair, swap notes, or review each other's code.", tags: ["Pairing", "Code review"] },
];

export const toolkit = [
  { name: "VS Code", p: 90 },
  { name: "Chrome DevTools", p: 75 },
  { name: "GitHub", p: 70 },
  { name: "Vite", p: 65 },
  { name: "Tailwind", p: 60 },
  { name: "Figma", p: 40 },
  { name: "Terminal", p: 65 },
  { name: "MDN (reading)", p: 95 },
];

export const process = [
  { n: "01", title: "Listen", body: "What is it for, who opens it, on what phone. I write it down in one paragraph and send it back to make sure I got it." },
  { n: "02", title: "Sketch", body: "Boxes on paper first. Then the smallest HTML that could possibly work. No colours until the structure is right." },
  { n: "03", title: "Build", body: "Commit small, commit often. Every change goes through a branch and a pull request, even on my own projects." },
  { n: "04", title: "Ship & learn", body: "Deploy, test on a real cheap phone, fix what broke. Then write a note about what I learned so it sticks." },
];

export const plans = [
  { name: "Study partner", price: "Free", period: "", blurb: "For other students. We learn in public together.", features: ["Weekly pairing session", "Code review on GitHub", "Shared notes", "Honest feedback"], cta: "Say hi", featured: false },
  { name: "Small site", price: "Let's talk", period: "", blurb: "A single page, built by hand, delivered as code you own.", features: ["Up to 5 sections", "Responsive & fast", "Deployed to your domain", "Two rounds of changes", "Source on GitHub"], cta: "Start a conversation", featured: true },
];

export const journey = [
  { when: "2024", title: "First HTML file", where: "Kushtia", body: "Typed a heading in Notepad, double-clicked the file, saw it in a browser. Spent a month making it less ugly." },
  { when: "2025", title: "CSS and JavaScript", where: "Self-taught", body: "Learned layout from MDN and the spec instead of pasting snippets. Then DOM, events, fetch, promises." },
  { when: "2026", title: "React, TypeScript, Git", where: "This site", body: "Started this portfolio. Learned branches and pull requests by using them for every change." },
];

export const education = [
  { title: "Secondary education", where: "Kushtia, Bangladesh", when: "Ongoing", body: "School comes first. Everything else happens in the hours around it." },
];

export const courses = [
  { title: "MDN Web Docs curriculum", where: "Self-study", when: "2024 →", body: "HTML, CSS and JavaScript modules, worked through in order." },
  { title: "The Odin Project — Foundations", where: "Self-study", when: "2025", body: "Git, the command line, and building things without a tutorial holding your hand." },
  { title: "React & TypeScript docs", where: "Self-study", when: "2026", body: "Official docs front to back, plus rebuilding small apps from memory." },
];

export const faq = [
  { q: "Are you available for small projects?", a: "Yes. I am a student, so school comes first, but I have real time in the evenings and on weekends for a well-defined small project." },
  { q: "Do you charge?", a: "For other students, no. For a small site, let's talk; I would rather agree on something fair than publish a price list I have not earned yet." },
  { q: "What do you need from me to start?", a: "One paragraph on what the site is for, who will open it, and anything you already have: logo, photos, text. Even rough is fine." },
  { q: "How do we communicate?", a: "Email, in English or Bangla. I reply within a day. Time zone is UTC+6." },
];

export const notes = [
  { date: "Oct 2026", title: "Why this site has almost no CSS framework", body: ["Tailwind is here because I wanted to learn its vocabulary. Everything with motion or personality is plain CSS in one file, so I can read each rule and know what it does.", "Rule I set myself: if I cannot explain a line, it does not ship."] },
  { date: "Sep 2026", title: "Things I got wrong about flexbox", body: ["Flex items have min-width: auto by default, so long unbroken text pushes the item wider instead of shrinking. Fix: min-width: 0 on the item, or overflow-wrap on the text.", "Also: justify-content does nothing useful when items already fill the row."] },
  { date: "Aug 2026", title: "Setting up a domain from Kushtia", body: ["A registrar account, an MX record, an SPF record, and twenty minutes of refreshing a DNS checker. The email address on this page is the result.", "Lesson: write the records down before you add them. DNS gives no helpful errors."] },
];
