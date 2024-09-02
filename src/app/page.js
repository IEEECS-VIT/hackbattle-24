import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Marquee />
    </main>
  );
}
