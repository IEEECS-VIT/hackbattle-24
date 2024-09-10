import Image from "./Image";

export default function Speaker() {
  return (
    <section className="min-h-screen h-fit flex flex-col justify-center items-center relative bg-[#fb624c] md:p-0 p-4">
      {/* <img
        src="desk-4.svg"
        alt="overlay"
        className="absolute w-full h-full object-cover md:h-[120%] lg:h-[100%] z-[-1]"
      /> */}
      <p className="md:absolute  top-[30px] text-6xl md:text-9xl font-crackman text-black mb-2 md:mb-28">SPEAKERS</p>
      <div className=" md:h-[50%] h-fit  w-[90%] flex flex-col md:flex-row md:justify-around justify-center items-center md:items-center lg:space-x-2  mb-2 flex-shrink"> 
          <Image img="/image 12.png"></Image>
          <Image img="/image 12.png"></Image>
          <Image img="/image 12.png"></Image>
      </div>
    </section>
  );
}
