"use client";

import Image from "next/image";
import Pacman from "../../assets/yellowPacman.svg";
import abstractbg from "../../assets/landingbg.svg";
import Marquee from "./Marquee";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function Landing() {
  return (
    <>
      <main className="bg-[#0375F9] w-full h-[100vh] flex items-center font-pixeboy overflow-hidden">
        <section className="flex flex-col gap-4  ml-[10%] w-[20%] justify-start">
          <img
            src="bigassPackman.svg"
            alt="packman"
            className="absolute right-[10%] top-[20%] z-10 h-[60%]"
          />
          <Image
            width={120}
            height={120}
            src={Pacman}
            alt="Pacman"
            className="absolute left-0 mt-[20px]"
          ></Image>
          <div>
            <p className="font-crackman text-8xl text-black">HACK</p>
            <p className="font-crackman text-8xl">BATTLE</p>
          </div>
          <button className="bg-[#F5ED02] border-2 border-black max-w-[250px]  py-3 text-3xl">
            REGISTER NOW!
          </button>
          <p className=" text-2xl text-white">TIME REMAINING...</p>
          <FlipClockCountdown
            digitBlockStyle={{
              color: "black",
              backgroundColor: "yellow",
              height: 30,
              width: 20,
              fontSize: 20,
              fontWeight: 600,
            }}
            dividerStyle={{
              backgroundColor: "black",
              color: "black",
              height: 3,
            }}
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          />
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
