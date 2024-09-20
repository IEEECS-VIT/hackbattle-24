import TeamCode from "./Code";
import Card from "./track_single_component";

export default function Tracks() {
  return (
    <section
      className="relative min-h-[100vh] bg-[#FFC642] flex flex-col items-center justify-center "
      id="tracks"
    >
      {/* Title */}
      <p className="bg-[#FFC642] pt-2 text-6xl w-full sm:w-[50vw] h-[10vh] text-center font-pixeboy mt-3 mb-6">
        TRACKS
      </p>

      <div className="w-full flex flex-wrap justify-center gap-12 lg:gap-28 p-4 pb-10">
        <Card title="Game" imageSrc="./gamedev.svg" />
        <Card title="Fintech" imageSrc="./fintech.svg" />
        <Card title="Healthcare" imageSrc="./health.svg" />
        <Card title="Open Innovation" imageSrc="./openinn.svg" />
        <Card title="SDG (Sponsor Track)" imageSrc="./spontrack.svg" />
        <Card title="IoT" imageSrc="./iot.svg" />
      </div>
    </section>
  );
}
