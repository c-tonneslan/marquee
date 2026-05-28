# marquee

A kinetic typography playground. Type a phrase, pick a treatment (slide, blur, weight, jitter, split), watch each glyph animate independently. Built on Framer Motion variants plus a variable-weight Inter, so the `weight` preset walks the font axis instead of swapping static cuts.

```sh
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/lib/presets.ts` — Framer Motion variant generators, one per preset
- `src/components/Stage.tsx` — splits the input string into per-glyph motion spans
- `src/components/Playground.tsx` — input + preset switcher
