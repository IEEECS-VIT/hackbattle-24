import TeamCode from "./Code";
import Card from "./spon_single_component";

export default function Tracks() {
  return (
    <section
      className="relative min-h-[100vh] bg-[#35B857] flex flex-col items-center justify-center"
      id="tracks"
    >
      {/* Title */}
      <p className="bg-[#35B857] pt-2 text-6xl w-full sm:w-[50vw] h-[10vh] text-center font-pixeboy mt-3 mb-6">
        SPONSORED BY
      </p>

      {/* Container for the cards */}
      <div className="w-full flex flex-wrap items-center justify-center gap-12 lg:gap-36 p-4 pb-12">
        <Card title="" imageSrc="./technogreen_new.svg" />
        <Card title="" imageSrc="./creamstone_new.svg" />
        <Card title="" imageSrc="./burger_king_pixel.svg"/>
        <Card title="" imageSrc="./easemytrip_new.svg" />
      </div>
    </section>
  );
}
