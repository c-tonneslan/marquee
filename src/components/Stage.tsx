"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { variantsFor } from "@/lib/presets";

type Props = {
  text: string;
  preset: string;
};

export function Stage({ text, preset }: Props) {
  const key = `${preset}-${text}`;
  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <div className="stage" key={key}>
      <p className="phrase" aria-label={text}>
        {chars.map((c, i) => {
          const v = variantsFor(preset, i);
          return (
            <motion.span
              key={`${i}-${c}`}
              className="glyph"
              variants={v.variants}
              transition={v.transition}
              initial={v.initial}
              animate={v.animate}
              aria-hidden
            >
              {c === " " ? " " : c}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}
