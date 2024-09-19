"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Card from "../components/cards";

export default function Timeline() {
  const [type, setType] = useState(2);

  const handleChangeState = (newState) => {
    if (newState >= 1 && newState <= 5) {
      setType(newState);
    }
  };

  return (
    <div className="overflow-hidden ">
      <Navbar />
      <section className="relative w-screen h-[100vh] md:h-[100vh] bg-[#5AD178] overflow-hidden">
        {/* Dynamically use images based on the `type` state */}
        <div className="hidden lg:block" > 
        <div className="absolute inset-0 flex justify-center items-center mt-[20vh]">
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
        </div>
        <div className="w-full h-[60vh] block lg:hidden">
        <div className="absolute inset-0 flex justify-center items-center mt-[10vh]">
        <Image
            src={`state${type}timelinemobile.svg`}
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
        </div>
      </section>
      
    </div>
  );
}
