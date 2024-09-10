"use client";

import Image from "next/image";
import Pacman from "../../assets/yellowPacman.svg";
import abstractbg from "../../assets/landingbg.svg";
import Marquee from "./Marquee";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function Landing() {
  // Set the event date and time (25th September 2024, 8:00 AM)
  const eventDate = new Date("2024-09-25T08:00:00");

  return (
    <>
      <main className="bg-[#0375F9] w-full h-[100vh] flex items-center font-pixeboy overflow-hidden">
        <section className="flex flex-col gap-4  lg:ml-[10%] ml-[5%] min-w-[350px] w-[20%] justify-start z-10">
          <img
            src="bigassPackman.svg"
            alt="packman"
            className="absolute lg:right-[10%] right-[5%] top-[20%] z-10 lg:h-[60%] md:h-[45%] md:block hidden"
          />
          <Image
            width={120}
            height={120}
            src={Pacman}
            alt="Pacman"
            className="absolute left-0 mt-[20px] lg:block hidden"
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
              height: 40,
              width: 30,
              fontSize: 30,
              fontWeight: 600,
            }}
            dividerStyle={{
              backgroundColor: "blue",
              color: "blue",
              height: 2,
            }}
            to={eventDate.getTime()}
          />
        </section>
        <Image
          src={abstractbg}
          alt="Abstract Background"
          // height={"50vh"}
          className="absolute top-5 h-[95%] right-0 md:max-w-[50%] md:opacity-[100] opacity-[10]  w-full"
        ></Image>
      </main>
      <div className="absolute bottom-[-10%] w-full z-10">
        <Marquee />
      </div>
    </>
  );
}
