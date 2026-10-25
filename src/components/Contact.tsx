import { useState, type FormEvent } from "react";
import { EMAIL } from "../lib/data";
import { useCopy } from "../lib/hooks";
import { I } from "./Icons";

export function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const { copied, copy } = useCopy(EMAIL);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Hi Sunvi,%0D%0A%0D%0A${encodeURIComponent(f.message)}%0D%0A%0D%0A— ${encodeURIComponent(f.name)} (${encodeURIComponent(f.email)})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.subject || "Hello from your website")}&body=${body}`;
  };
  const up = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((s) => ({ ...s, [k]: e.target.value }));
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="card overflow-hidden" data-reveal>
        <div className="grid lg:grid-cols-12">
          <div className="relative bg-gradient-to-br from-accent/15 via-transparent to-transparent p-7 md:p-10 lg:col-span-5">
            <p className="label">// Contact</p>
            <h2 className="h-section mt-4 text-4xl md:text-5xl">Have a project in mind? Let's get to work.</h2>
            <p className="mt-4 text-muted">No form backend here: this opens your email app with everything filled in. Or just write to me directly.</p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent"><span className="icon-btn"><I.mail width={16} height={16} /></span>{EMAIL}</a>
              <p className="flex items-center gap-3"><span className="icon-btn"><I.pin width={16} height={16} /></span>Kushtia, Khulna Division, Bangladesh</p>
              <p className="flex items-center gap-3"><span className="icon-btn"><span className="dot" /></span>Open to contact anytime · replies within a day</p>
            </div>
            <button type="button" onClick={copy} className="btn btn-sm mt-8"><I.copy width={14} height={14} /> {copied ? "Copied" : "Copy email"}</button>
          </div>
          <form onSubmit={submit} className="grid gap-4 p-7 md:p-10 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm"><span className="label">Full name *</span><input required className="field" placeholder="Your name" value={f.name} onChange={up("name")} /></label>
              <label className="grid gap-2 text-sm"><span className="label">Your email *</span><input required type="email" className="field" placeholder="you@example.com" value={f.email} onChange={up("email")} /></label>
            </div>
            <label className="grid gap-2 text-sm"><span className="label">Subject</span><input className="field" placeholder="A small site, a bug, a question" value={f.subject} onChange={up("subject")} /></label>
            <label className="grid gap-2 text-sm"><span className="label">Message *</span><textarea required rows={6} className="field resize-y" placeholder="What is it for, who will use it, and when do you need it?" value={f.message} onChange={up("message")} /></label>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-muted">English or Bangla, both fine.</p>
              <button type="submit" className="btn btn-primary">Send message <I.arrow width={16} height={16} /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
