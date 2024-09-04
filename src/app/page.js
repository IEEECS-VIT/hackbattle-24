import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Card from "./components/cards";
import TeamCode from "./components/Teamcode";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TeamCode/>
      <Marquee />
      <Card/>
    </main>
  );
}
