"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";

export default function Timeline() {
  const [type, setType] = useState(4);

  const handleChangeState = (newState) => {
    if (newState >= 1 && newState <= 4) {
      setType(newState);
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <section className="relative w-screen h-[20vh] md:h-[75vh] bg-[#5AD178] overflow-hidden">
        {/* Dynamically use images based on the `type` state */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src={`state${type}timeline.svg`}
            alt="state image"
            width={1200} // Adjust width to make the image smaller
            height={300} // Adjust height accordingly
            className="object-contain"
          />
        </div>
        <img
          src="pixelated-filter.svg"
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>
      <section className="relative w-screen h-[75vh] md:h-[50vh] bg-[#FEC46F] overflow-hidden">
        <img
          src="pixelated-filter.svg"
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>
      {/* Text container positioned absolutely */}
      <div className="absolute top-[calc(30vh-1rem)] md:top-[calc(80vh-1rem)] left-1/2 transform -translate-x-1/2">
        <h1 className="text-[4vh] md:text-[10vh] text-center font-bold text-customBlue font-crackman">
          TASK SUBMISSION
        </h1>
      </div>
    </div>
  );
}