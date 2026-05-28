import { Playground } from "@/components/Playground";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <p className="kicker">MARQUEE &middot; KINETIC TYPOGRAPHY</p>
        <h1 className="title">Type that moves.</h1>
        <p className="lede">
          A tiny playground for motion-on-letters. Type a phrase, pick a
          treatment, watch each glyph animate independently. Built on
          Framer Motion variants and a variable-weight Inter, so the
          weight preset actually walks the font axis instead of swapping
          static cuts.
        </p>
      </header>

      <Playground />

      <footer className="meta">
        <span>
          built by{" "}
          <a href="https://github.com/c-tonneslan" target="_blank" rel="noreferrer">
            charlie tonneslan
          </a>
        </span>
        <span>
          <a
            href="https://github.com/c-tonneslan/marquee"
            target="_blank"
            rel="noreferrer"
          >
            source
          </a>
        </span>
      </footer>
    </main>
  );
}
