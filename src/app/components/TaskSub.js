"use client";

import Card from "./cards";

export default function TaskSub() {
  return (
    <div className="relative w-screen h-screen bg-[#FEC46F] overflow-hidden">
      <img
        src="pixelated-filter.svg"
        alt="Overlay Image"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Text container */}
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-[4vh] md:text-[10vh] text-center font-bold text-customBlue font-crackman">
          TASK SUBMISSION
        </h1>

        {/* Card Component */}
        <Card />
      </div>
    </div>
  );
}
