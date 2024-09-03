import Image from "next/image";
import Pacman from "../../assets/yellowPacman.svg";
import abstractbg from "../../assets/landingbg.svg";
import Marquee from "./Marquee";
export default function Landing() {
  return (
    <>
      <main className="bg-[#0375F9] w-full h-[100vh] flex items-center font-pixeboy overflow-hidden">
        <section className="flex flex-col gap-4 ">
          <Image
            width={90}
            height={90}
            src={Pacman}
            alt="Pacman"
            className="absolute -left-10 "
          ></Image>
          <p className="">HACK</p>
          <p>BATTLE</p>
          <button className="bg-[#F5ED02] border-2 border-black px-3 py-2 text-3xl">
            REGISTER NOW!
          </button>
          <p className="text-white text-3xl">TIME REMAINING...</p>
          <p>TIme Component</p>
        </section>
        <Image
          src={abstractbg}
          alt="Abstract Background"
          // height={"50vh"}
          className="absolute top-5 h-[95%] right-0"
        ></Image>
      </main>
      <div className="absolute bottom-[-10%] w-full">
        <Marquee />
      </div>
    </>
  );
}
