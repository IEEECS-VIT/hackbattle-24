import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main classname="bg-green-300 p-4">
      <Navbar />
      <Marquee />
    </main>
  );
}
