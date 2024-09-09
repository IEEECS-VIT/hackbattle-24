
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Card from "./components/cards";
import TeamCode from "./components/Teamcode";
import Landing from "./components/landing";
import About from "./components/about";
import Tracks from "./components/track";
import Speaker from "./components/speaker";
import Conducted from "./components/conducted";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <main className="overflow-hidden w-full">
      {/* <Navbar /> */}
      <Landing />
      <About />
      {/* <Tracks />
      <Speaker />
      <Conducted />
      <FAQ /> */}
    </main>
  );
}
