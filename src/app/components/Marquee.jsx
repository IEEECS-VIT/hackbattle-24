"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Marquee() {
  const [scroll, setScroll] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((scroll) => (scroll + 3) % 250);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="font-pixeboy relative w-full h-fit py-20 rotate-3 overflow-hidden"
      ref={ref}
    >
      {["#FFC43E", "#FB624C", "#FF88BE"].map((color, index) => (
        <div
          key={index}
          className="whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(-${scroll}px)` }}
        >
          <div
            className={`content p-2 text-xl inline-block ${
              index === 0
                ? "border-t-2"
                : index === 1
                ? "border-2"
                : "border-b-2"
            } border-black`}
            style={{ backgroundColor: color }}
          >
            {Array.from({ length: 39 }).map((_, i) => (
              <span
                key={i}
                className={`px-${
                  index === 0 ? "4" : index === 1 ? "[0.85rem]" : "[1.65rem]"
                }`}
              >
                {index === 0
                  ? "SYNTHESIZE"
                  : index === 1
                  ? "MATERIALIZE"
                  : "OPTIMIZE"}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
