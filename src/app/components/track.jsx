import TeamCode from "./Code";

export default function Tracks() {
  return (
    <section className="relative min-h-[100vh] bg-[#FFC642] flex flex-col items-center justify-center md:p-6">
      {/* Title */}
      <p className="bg-[#FFC642] pt-2 text-6xl w-full sm:w-[50vw] h-[10vh] text-center font-pixeboy mt-3 mb-10">
        TRACKS
      </p>

      {/* Container for the cards */}
      <div className="w-full flex flex-wrap justify-center  gap-8 p-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997]  sm:w-[45%] md:w-[30%] lg:w-[30%]  h-[75%] w-[550px]">
          <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[0.5vw]">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[2vh] lg:h-[3vh]"
            />
          </div>
          <div className="flex flex-col items-center w-full h-[45vh] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="./fluent-mdl2_robot.svg"
              alt=""
              className="h-[50%] mb-2"
            />
            <p className="text-5xl text-yellow-500">AI/ML</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997]  sm:w-[45%] md:w-[30%] lg:w-[30%] h-[75%] w-[550px]">
          <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[0.5vw]">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[2vh] lg:h-[3vh]"
            />
          </div>
          <div className="flex flex-col items-center w-full h-[45vh] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="./fluent-mdl2_robot.svg"
              alt=""
              className="h-[50%] mb-2"
            />
            <p className="text-5xl text-yellow-500">AI/ML</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997]  sm:w-[45%] md:w-[30%] lg:w-[30%] h-[75%] w-[550px]">
          <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[0.5vw]">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[2vh] lg:h-[3vh]"
            />
          </div>
          <div className="flex flex-col items-center w-full h-[45vh] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="./fluent-mdl2_robot.svg"
              alt=""
              className="h-[50%] mb-2"
            />
            <p className="text-5xl text-yellow-500">AI/ML</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997]  sm:w-[45%] md:w-[30%] lg:w-[30%] h-[75%] w-[550px]">
          <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[0.5vw]">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[2vh] lg:h-[3vh]"
            />
          </div>
          <div className="flex flex-col items-center w-full h-[45vh] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="./fluent-mdl2_robot.svg"
              alt=""
              className="h-[50%] mb-2"
            />
            <p className="text-5xl text-yellow-500">AI/ML</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center bg-blue-600 border-black border-4 shadow-[-5px_5px_0_0_#644997] lg:shadow-[-10px_10px_0_0_#644997] sm:w-[45%] md:w-[30%] lg:w-[30%] h-[75%] w-[550px]">
          <div className="bg-[#FFF] w-full h-[4vh] lg:h-[5vh] flex items-center border-black border-b-4 pl-[0.5vw]">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[2vh] lg:h-[3vh]"
            />
          </div>
          <div className="flex flex-col items-center w-full h-[45vh] font-pixeboy text-[3vh] lg:text-[5vh]">
            <img
              src="./fluent-mdl2_robot.svg"
              alt=""
              className="h-[50%] mb-2"
            />
            <p className="text-5xl text-yellow-500">AI/ML</p>
          </div>
        </div>
      </div>
    </section>
  );
}
