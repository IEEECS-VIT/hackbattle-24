import TeamCode from "./Teamcode";

export default function Tracks() {
  return (
    <section className=" relative h-[100vh]  bg-[#FFC642] flex items-center justify-center">
      <img
        src="trackpixel.svg"
        alt="Overlay Image"
        className="absolute w-full h-full object-cover"
      />
      <img
        src="pagedown.svg"
        alt="pagedown"
        className="absolute h-full  w-screen object-contain z-0"
      />
      <p className="bg-white p-4 text-5xl border-black border-2 w-[30vh] h-[15vh] mr-[5%] text-center font-pixeboy mb-[20px]">
        TRACKS
      </p>

      <div className="w-[15vw] h-[25vh] lg:h-[30vh] lg:w-[17vw] bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] z-10 absolute top-[5%] left-[25%]">
        <div className="bg-[#FFF] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-4 pl-[0.5vw]">
          <img
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            className="h-[1vh] lg:h-[2vh]"
          />
        </div>

        <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
          <img src="./fluent-mdl2_robot.svg" alt="" className="h-[40%] mb-2" />
          <p className="text-5xl text-yellow-500">AI/ML</p>
        </div>
      </div>
      <div className="w-[15vw] h-[25vh] lg:h-[30vh] lg:w-[17vw] bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] z-10 absolute top-[5%] left-[55%]">
        <div className="bg-[#FFF] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-4 pl-[0.5vw]">
          <img
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            className="h-[1vh] lg:h-[2vh]"
          />
        </div>

        <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
          <img src="./fluent-mdl2_robot.svg" alt="" className="h-[40%] mb-2" />
          <p className="text-5xl text-yellow-500">AI/ML</p>
        </div>
      </div>
      <div className="w-[15vw] h-[25vh] lg:h-[30vh] lg:w-[17vw] bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] z-10 absolute top-[40%] right-[20%]">
        <div className="bg-[#FFF] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-4 pl-[0.5vw]">
          <img
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            className="h-[1vh] lg:h-[2vh]"
          />
        </div>

        <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
          <img src="./fluent-mdl2_robot.svg" alt="" className="h-[40%] mb-2" />
          <p className="text-5xl text-yellow-500">AI/ML</p>
        </div>
      </div>
      <div className="w-[15vw] h-[25vh] lg:h-[30vh] lg:w-[17vw] bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] z-10 absolute top-[45%] left-[15%]">
        <div className="bg-[#FFF] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-4 pl-[0.5vw]">
          <img
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            className="h-[1vh] lg:h-[2vh]"
          />
        </div>

        <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
          <img src="./fluent-mdl2_robot.svg" alt="" className="h-[40%] mb-2" />
          <p className="text-5xl text-yellow-500">AI/ML</p>
        </div>
      </div>
      <div className="w-[15vw] h-[25vh] lg:h-[30vh] lg:w-[17vw] bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] z-10 absolute bottom-[9%] left-[37%]">
        <div className="bg-[#FFF] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-4 pl-[0.5vw]">
          <img
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            className="h-[1vh] lg:h-[2vh]"
          />
        </div>

        <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
          <img src="./fluent-mdl2_robot.svg" alt="" className="h-[40%] mb-2" />
          <p className="text-5xl text-yellow-500">AI/ML</p>
        </div>
      </div>
    </section>
  );
}
