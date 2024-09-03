import Image from "next/image";
import Pacman from "../../assets/aboutPacman.svg";

export default function About() {
  return (
    <div className="bg-[#6F3CDC] w-full h-[100vh] flex  items-center font-pixeboy ">
      <div className="w-[60%] ml-[5%]">
        <p className="text-8xl">ABOUT</p>
        <p className="text-6xl text-[#BFC3C9]">
          Join the adrenaline-pumping 36-hour HackBattle by IEEECS-VIT, where
          tech innovators gather for groundbreaking challenges, keynote
          sessions, and engaging activities that ignite creativity and drive
          innovation .
        </p>
      </div>
      <div className="absolute right-[5%]">
        <Image src={Pacman} height={580}></Image>
      </div>
    </div>
  );
}
