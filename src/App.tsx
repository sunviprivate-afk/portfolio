export default function App() {
  return (
    <main className="mx-auto max-w-[36rem] px-6 py-16">
      <header>
        <h1 className="text-2xl font-normal">Sunvi Zamin</h1>
        <p className="mt-1 text-[#555]">Student, Kushtia, Bangladesh</p>
      </header>

      <section className="mt-10">
        <p>
          I am a student living in Kushtia. Most of my free time goes into
          learning how websites work, from the HTML underneath to the
          JavaScript that moves things around. This page is one of the things I
          built while learning.
        </p>
        <p className="mt-4">
          I like understanding things properly rather than quickly. When I get
          stuck I read the documentation, try the smallest version of the
          problem I can, and write down what I find so I do not have to find
          it twice.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-bold">Now</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Studying for school.</li>
          <li>Learning React and TypeScript by rebuilding small things I use.</li>
          <li>Keeping this site up to date as I go.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-bold">Contact</h2>
        <p className="mt-3">
          Email:{" "}
          <a href="mailto:sunvi@sunvizamin.bro.bd">sunvi@sunvizamin.bro.bd</a>
        </p>
        <p className="mt-2">
          You can write to me any time. I read everything, and I reply to most
          of it.
        </p>
      </section>

      <footer className="mt-16 text-sm text-[#555]">
        <p>Kushtia, Bangladesh. Last updated October 2026.</p>
      </footer>
    </main>
  );
}
