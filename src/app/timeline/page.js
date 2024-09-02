"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Timeline() {
  const [type, setType] = useState(0);

  return (
    <main className="relative">
      <Navbar />
      <section className="relative w-screen h-[70vh] bg-[#5AD178] overflow-hidden">
        <img
          src="state1timeline.svg"
          alt="state image"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <img
          src="pixelated-filter.svg"
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>
      <section className="relative w-screen h-[50vh] bg-[#FEC46F] overflow-hidden">
        <img
          src="pixelated-filter.svg"
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>
      {/* Text container positioned absolutely */}
      <div className="absolute top-[calc(72vh-1rem)] md:top-[calc(75vh-1rem)] left-1/2 transform -translate-x-1/2">
        <h1 className="text-[5vh] md:text-[10vh] text-center font-bold text-customBlue font-crackman">
          TASK SUBMISSION
        </h1>
      </div>
    </main>
  );
}
