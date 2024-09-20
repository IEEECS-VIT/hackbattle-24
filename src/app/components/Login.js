import Image from "next/image";
import Block from "./Block";

export default function Registration() {
  const routeToHome = () => {
    // Add your navigation logic here
  };
  return (
    <div>
      <button
        className="absolute left-[3vw] md:top-[4vh] top-[1vh] mt-0 z-30"
        onClick={routeToHome}
      >
        <img
          src="/back-arrow.svg"
          alt="arrow"
          className="md:h-20 md:w-20 h-18 w-16"
        />
      </button>
      <div className="relative h-screen w-full hidden lg:block">
        <img src="/login.jpg" className="h-full w-full absolute z-0 object-cover" alt="Background" />
        {/* <img src="/ieee-cs-logo.svg" alt="IEEE CS Logo" className="z-10 absolute top-2 left-4" /> */}
        <p className="z-20 absolute left-1/2 transform -translate-x-1/2 text-white text-[11vh] font-pixeboy glow-text text-center">
          Hackbattle 2024
        </p>

        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-col border-4 border-black w-[90vw] bg-white shadow-[-20px_20px_0_0_#000000] h-[80vh] z-10 mt-20">
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

      <div className="relative h-screen w-full lg:hidden">
        <img src="/teal.jpg" className="h-full w-full absolute z-0 object-cover" alt="Background" />
        {/* <img src="/ieee-cs-logo.svg" alt="IEEE CS Logo" className="z-10 absolute top-2 left-4 h-[8vh]" /> */}
        <p className="z-30 relative top-16  text-white text-[5vh] font-pixeboy glow-text text-center">
          Hackbattle 2024
        </p>

        <div className="flex flex-col items-center justify-center h-full space-y-8 z-20 ">
          <div className="relative flex flex-col items-center pb-4 justify-between border-4 border-black w-[80vw] bg-white shadow-[-10px_10px_0_0_#000000] h-[38vh]">
            <div className="bg-[#8C78F7] h-[3vh] w-full flex border-black border-b-2 ">
              <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1.5vh] ml-[.5vh] mt-[.5vh]" />
            </div>
            <Block src="/red2.jpg" icon="red-icon.svg" role="team leader" />
          </div>
          <div className="relative flex flex-col items-center pb-4 justify-between border-4 border-black w-[80vw] bg-white shadow-[-10px_10px_0_0_#000000] h-[38vh]">
            <div className="bg-[#8C78F7] h-[3vh] w-full flex border-black border-b-2 ">
              <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1.5vh] ml-[.5vh] mt-[.5vh]" />
            </div>
            <Block src="/yellow2.jpg" icon="blue-icon.svg" role="team member" />
          </div>
        </div>
      </div>
    </div>
  );
}
