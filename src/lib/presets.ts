import type { Variants, Transition } from "framer-motion";

export type Preset = {
  id: string;
  label: string;
  blurb: string;
};

export const presets: Preset[] = [
  {
    id: "slide",
    label: "Slide",
    blurb: "Each letter slides up from the line below, staggered by index.",
  },
  {
    id: "blur",
    label: "Blur",
    blurb: "Letters resolve from a heavy gaussian, fastest in the middle.",
  },
  {
    id: "weight",
    label: "Weight",
    blurb: "Each letter walks the variable-font weight axis on a loop.",
  },
  {
    id: "jitter",
    label: "Jitter",
    blurb: "Springs hold every letter loosely, so the line breathes.",
  },
  {
    id: "split",
    label: "Split",
    blurb: "Top and bottom halves of each glyph swap places.",
  },
];

export type LetterVariants = {
  variants: Variants;
  transition?: Transition;
  initial: string;
  animate: string;
};

export function variantsFor(preset: string, index: number): LetterVariants {
  switch (preset) {
    case "slide":
      return {
        variants: {
          rest: { y: "0%", opacity: 1 },
          play: { y: ["110%", "0%"], opacity: [0, 1] },
        },
        transition: {
          duration: 0.6,
          delay: index * 0.04,
          ease: [0.22, 1, 0.36, 1],
        },
        initial: "rest",
        animate: "play",
      };
    case "blur":
      return {
        variants: {
          rest: { filter: "blur(0px)", opacity: 1 },
          play: {
            filter: ["blur(20px)", "blur(0px)"],
            opacity: [0, 1],
          },
        },
        transition: {
          duration: 0.8,
          delay: index * 0.03,
          ease: "easeOut",
        },
        initial: "rest",
        animate: "play",
      };
    case "weight":
      return {
        variants: {
          rest: { fontWeight: 400 },
          play: {
            fontWeight: [200, 900, 200],
          },
        },
        transition: {
          duration: 3.2,
          delay: index * 0.08,
          repeat: Infinity,
          ease: "easeInOut",
        },
        initial: "rest",
        animate: "play",
      };
    case "jitter":
      return {
        variants: {
          rest: { x: 0, y: 0, rotate: 0 },
          play: {
            x: [0, 2, -2, 1, 0],
            y: [0, -3, 2, -1, 0],
            rotate: [0, 1.5, -1.5, 0.5, 0],
          },
        },
        transition: {
          duration: 2.2,
          delay: index * 0.05,
          repeat: Infinity,
          ease: "easeInOut",
        },
        initial: "rest",
        animate: "play",
      };
    case "split":
      return {
        variants: {
          rest: { rotateX: 0 },
          play: { rotateX: [0, 180, 360] },
        },
        transition: {
          duration: 2.4,
          delay: index * 0.06,
          repeat: Infinity,
          ease: "easeInOut",
        },
        initial: "rest",
        animate: "play",
      };
    default:
      return {
        variants: { rest: {}, play: {} },
        initial: "rest",
        animate: "rest",
      };
  }
}
