import TeamCode from "./Code";
import Card from "./spon_single_component";
import technoGreen from "../../../public/technogreen_new.svg";
import creamStone from "../../../public/creamstone_new.svg";
import burgerKing from "../../../public/burger_king_pixel.svg";
import easeMyTrip from "../../../public/easemytrip_new.svg";

export default function Tracks() {
  return (
    <section
      className="relative min-h-[40vh] bg-[#35B857] flex flex-col items-center justify-center"
      id="tracks"
    >
      {/* Title */}
      <p className="bg-[#35B857] pt-4 text-center w-full sm:w-[90vw] h-[12vh] font-pixeboy mt-4 mb-2 text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
        SPONSORED BY
      </p>

      {/* Container for the cards */}
      <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-8 p-4 pb-8 mt-4">
        {/* Cards all taking full width with gap between them */}
        <div className="w-full flex flex-col justify-center items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-12">
          <Card
            title=""
            imageSrc={technoGreen}
            className="w-full sm:w-auto"
          />
          <Card
            title=""
            imageSrc={creamStone}
            className="w-full sm:w-auto"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center space-y-6 sm:space-y-0 sm:flex-row sm:space-x-12">
          <Card
            title=""
            imageSrc={burgerKing}
            className="w-full sm:w-auto"
          />
          <Card
            title=""
            imageSrc={easeMyTrip}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
