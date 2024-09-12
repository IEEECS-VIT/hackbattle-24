import React from "react";

function Card({ title, imageSrc }) {
  return (
    <div className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] sm:w-[45%] md:w-[30%] lg:w-[30%] h-[75%] w-[550px]">
      {/* Top Section */}
      <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[0.5vw]">
        <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[2vh] lg:h-[3vh]" />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center w-full h-[45vh] font-pixeboy text-[3vh] lg:text-[5vh]">
        <img src={imageSrc} alt="" className="h-[50%] mb-2" />
        <p className="text-5xl text-yellow-500">{title}</p>
      </div>
    </div>
  );
}

export default Card;
