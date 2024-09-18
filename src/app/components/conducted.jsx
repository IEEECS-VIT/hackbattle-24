import TeamCode from "./Code";
import Card from "./spon_single_component";

export default function Tracks() {
  return (
    <section
      className="relative min-h-[100vh] bg-[#35B857] flex flex-col items-center justify-center "
      id="tracks"
    >
      {/* Title */}
      <p className="bg-[#35B857] pt-2 text-6xl w-full sm:w-[50vw] h-[10vh] text-center font-pixeboy mt-3 mb-6">
        SPONSORED BY
      </p>

      <div className="w-full flex flex-wrap justify-center gap-12 lg:gap-28 p-4 pb-10">
        <Card title="Techknowgreen" imageSrc="./techgreenlogo.jpg" />
        <Card title="Cream Stone" imageSrc="./creamlogo.png" />
        <Card title="Burger King" imageSrc="./bglogo.cms" />

        <Card title="Ease My Trip" imageSrc="./easelogo.jpg" />
      </div>
    </section>
  );
}
