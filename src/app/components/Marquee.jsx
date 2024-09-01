"use client";
import React, { useState, useRef } from "react";

export default function Marquee() {
  const [scroll, setScroll] = useState(0);
  const ref = useRef(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setScroll((scroll) => (scroll + 3) % 250);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" font-pixeboy relative w-screen max-w-full h-fit py-20  rotate-3 overflow-hidden"
      ref={ref}
    >
      <div
        className="  whitespace-nowrap will-change-transform  "
        style={{ transform: `translateX(-${scroll}px)` }}
      >
        <div className="content bg-[#FFC43E] p-2 text-xl inline-block  border-t-2 border-black">
          {Array.from({ length: 39 }).map((_, i) => (
            <span key={i} className="px-4">
              SYNTHESIZE
            </span>
          ))}
        </div>
      </div>
      <div
        className="  whitespace-nowrap will-change-transform "
        style={{ transform: `translateX(-${scroll}px)` }}
      >
        <div className="content bg-[#FB624C] p-2 text-xl inline-block border-2 border-black">
          {Array.from({ length: 39 }).map((_, i) => (
            <span key={i} className="px-[.85rem]">
              MATERIALIZE
            </span>
          ))}
        </div>
      </div>
      <div
        className=" whitespace-nowrap will-change-transform "
        style={{ transform: `translateX(-${scroll}px)` }}
      >
        <div className="content bg-[#FF88BE] p-2 text-xl inline-block border-b-2 border-black">
          {Array.from({ length: 39 }).map((_, i) => (
            <span key={i} className="px-[1.65rem]">
              OPTIMIZE
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
