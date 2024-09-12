import TeamCode from "./Code";
import Card from "./track_single_component"

export default function Tracks() {
  return (
    <section className="relative min-h-[100vh] bg-[#FFC642] flex flex-col items-center justify-center md:p-6">
      {/* Title */}
      <p className="bg-[#FFC642] pt-2 text-6xl w-full sm:w-[50vw] h-[10vh] text-center font-pixeboy mt-3 mb-6">
        TRACKS
      </p>

      {/* Container for the cards */}
      <div className="w-full flex flex-wrap justify-center gap-12 lg:gap-24 p-4 pb-10">
        <Card title="AI/ML" imageSrc="./fluent-mdl2_robot.svg" />
        <Card title="AI/ML" imageSrc="./fluent-mdl2_robot.svg" />
        <Card title="AI/ML" imageSrc="./fluent-mdl2_robot.svg" />
        <Card title="AI/ML" imageSrc="./fluent-mdl2_robot.svg" />
        <Card title="AI/ML" imageSrc="./fluent-mdl2_robot.svg" />
      </div>
    </section>
  );
}