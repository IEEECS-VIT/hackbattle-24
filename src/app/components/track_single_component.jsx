import React from "react";
import Image from "next/image";

function Card({ title, imageSrc }) {
  return (
    <div data-aos="zoom-in" className="flex flex-col items-center  bg-blue-600 border-black border-4 shadow-[-10px_10px_0_0_#644997] w-[60%] md:w-[60%] lg:w-[20%] h-[75%]">
          <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[1.5vw] lg:pl-[0.5vw]">
            <Image
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              width={500}
              height={500}
              className="h-[2vh] lg:h-[3vh]"
            />
          </div>
          <div className="flex flex-col items-center w-full h-[20vh] lg:h-[35vh] font-pixeboy text-[5vh] lg:text-[5vh]">
            <Image
              src={imageSrc}
              alt=""
              width={500}
              height={500}
              className="h-[50%] mb-2 mt-6"
            />
            <p className="text-[1.42rem] md:text-[1.90rem] lg:text-4xl text-center text-yellow-500">{title}</p>
          </div>
        </div>
  );
}

export default Card;