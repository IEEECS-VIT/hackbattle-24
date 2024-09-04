import Image from "next/image";
import Block from "./Block";

export default function Registration() {
  return (
    <div className="relative h-screen w-full">
      <img src="/login.jpg" className="h-full w-full absolute z-0 object-cover" alt="Background" />
      <img src="/ieee-cs-logo.svg" alt="IEEE CS Logo" className="z-10 absolute top-2 left-4" />
      <p className="z-20 absolute  left-1/2 transform -translate-x-1/2 text-white text-[10vh] font-pixeboy glow-text">
        Hackbattle 2024
      </p>
      
      <div className="flex items-center justify-center h-full">
        <div className="relative flex flex-col items-center justify-center border-8 border-black w-[90vw] bg-white shadow-[20px_20px_0_0_#000000] h-[80vh] z-20 mt-20">
          <div className="bg-[#8C78F7] h-[2vh] lg:h-[4vh] w-full flex items-center border-black border-b-2 pl-[0.5vw]">
            <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[2vh]" />
          </div>
          <div className="lg:flex lg:justify-center lg:items-center lg:space-x-24 h-full">
            <Block src="/red2.jpg" icon="red-icon.svg" role="team leader" />
            <Block src="/yellow2.jpg" icon="blue-icon.svg" role="team member" />
          </div>
        </div>
      </div>
    </div>
  );
}
