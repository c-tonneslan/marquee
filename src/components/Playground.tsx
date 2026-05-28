"use client";

import { useState } from "react";
import { presets } from "@/lib/presets";
import { Stage } from "./Stage";

const SEED = "kinetic typography.";

export function Playground() {
  const [text, setText] = useState(SEED);
  const [preset, setPreset] = useState("slide");

  const current = presets.find((p) => p.id === preset) ?? presets[0];

  return (
    <div className="playground">
      <Stage text={text || " "} preset={preset} />

      <div className="controls">
        <div className="control-row">
          <label htmlFor="phrase" className="control-label">
            phrase
          </label>
          <input
            id="phrase"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 40))}
            className="phrase-input"
            placeholder="Type something..."
            maxLength={40}
          />
        </div>

        <div className="presets">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => setPreset(p.id)}
              className={`preset-btn ${p.id === preset ? "active" : ""}`}
              type="button"
            >
              {p.label}
            </button>
          ))}
        </div>

        <p className="blurb">{current.blurb}</p>
      </div>
    </div>
  );
}
