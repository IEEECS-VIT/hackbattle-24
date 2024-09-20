"use client";
import React from "react";

export default function Marquee() {
  const colors = ["#FFC43E", "#FB624C", "#FF88BE"];
  const words = ["COLLABORATE", "CODE", "CONQUER"];

  return (
    <div className="font-pixeboy w-[101%] translate-x-[-0.25rem] overflow-x-clip text-3xl rotate-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`marquee-row ${
            index === 0 ? "border-t-2" : index === 1 ? "border-2" : "border-b-2"
          } border-black`}
          style={{ backgroundColor: color }}
        >
          <div className={`marquee-container ${index === 1 ? "reverse" : ""}`}>
            <div className="marquee-content">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="px-4">
                  {words[index]}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="px-4">
                  {words[index]}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .marquee-row {
          display: flex;
          overflow: hidden;
          width: 100%;
        }
        .marquee-container {
          display: flex;
          width: 200%;
        }
        .marquee-content {
          flex: 0 0 100%;
          display: flex;
          justify-content: space-around;
          animation: marquee 60s linear infinite;
        }
        .reverse .marquee-content {
          animation-direction: reverse;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </div>
  );
}
