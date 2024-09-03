import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Notifs from "./components/Notifs";

export default function Home() {
  return (
    <main className="overflow-hidden w-full">
      <Navbar />
      <Marquee />
    </main>
  );
}
