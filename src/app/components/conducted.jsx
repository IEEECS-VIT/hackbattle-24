import TeamCode from "./Code";
import Card from "./spon_single_component";

export default function Tracks() {
  return (
    <section
      className="relative min-h-[40vh] bg-[#35B857] flex flex-col items-center justify-center"
      id="tracks"
    >
      {/* Title */}
      <p className="bg-[#35B857] pt-2 text-7xl w-full sm:w-[50vw] h-[10vh] text-center font-crackman mt-4 mb-8">
        SPONSORED BY
      </p>

      {/* Container for the cards */}
      <div className="w-full flex flex-wrap justify-center gap-12 lg:gap-8 p-4 pb-8 mt-4 ">
        {/* First row with 1 image */}
        <div className="w-full flex justify-center">
          <Card title="" imageSrc="./technogreen_new.svg" />
        </div>
        {/* Second row with 2 images */}
        <div className="w-full flex justify-center space-x-12">
          <Card title="" imageSrc="./burger_king_pixel.svg" />
          <Card title="" imageSrc="./easemytrip_new.svg" />
          
        </div>
      </div>
    </section>
  );
}
