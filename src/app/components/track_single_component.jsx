import React from "react";
import Image from "next/image";

function Card({ title, imageSrc }) {
  return (
    <div data-aos="zoom-in" className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-10px_10px_0_0_#644997] w-[60%] md:w-[60%] lg:w-[20%] h-[75%]">
      <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[1.5vw] lg:pl-[0.5vw]">
        <div className="relative w-[10vw] h-[3vh] lg:w-[5vw] lg:h-[4vh]"> {/* Make this wrapper responsive */}
          <Image
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            fill
            className="object-contain" // Maintain aspect ratio and contain within the div
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-[20vh] lg:h-[35vh] font-pixeboy text-[5vh] lg:text-[5vh]">
        <div className="relative w-[70%] md:w-[70%] lg:w-[50%] h-[60%] mb-2 mt-6"> {/* Responsive image wrapper */}
          <Image 

            src={imageSrc}
            alt="sponsor"
            fill
            className="object-contain" // Responsively scale the image while maintaining aspect ratio
          />
        </div>
        <p className="text-[1.42rem] md:text-[1.90rem] lg:text-4xl text-center text-yellow-500">{title}</p>
      </div>
    </div>
  );
}

export default Card;
