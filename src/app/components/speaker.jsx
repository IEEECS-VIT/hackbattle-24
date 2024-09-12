import Image from "./Image";

export default function Speaker() {
  return (
    <section className="min-h-screen h-fit flex flex-col gap-6 p-[1rem] items-center relative bg-[#fb624c] md:p-[2rem]">
      <p className=" text-6xl sm:text-8xl md:text-9xl font-crackman text-black ">SPEAKERS</p>
      <div className=" md:h-[50%] h-fit  w-[99%] flex flex-col md:flex-row md:justify-around justify-center items-center md:items-center lg:space-x-2  mb-2 ">
        <Image img="/image 12.png"></Image>
        <Image img="/image 12.png"></Image>
        <Image img="/image 12.png"></Image>
      </div>
    </section>
  );
}
