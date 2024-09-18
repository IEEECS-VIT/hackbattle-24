"use client";

import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Tracks from "./components/track";
import Speaker from "./components/speaker";
import Conducted from "./components/conducted";
import FAQ from "./components/Faq";
import { useState } from "react";
import Google from "./components/Google";

export default function Home() {
  const [googleVisible, setGoogleVisible] = useState(false);

  return (
    <main className="overflow-hidden w-full">
      <Google
        visible={googleVisible}
        onClose={() => {
          setGoogleVisible(false);
        }}
      />
      <Navbar
        loginAction={() => {
          setGoogleVisible(true);
        }}
      />
      <Landing />
      <About />
      <Tracks />
      <Conducted />
      <FAQ />
<<<<<<< HEAD
=======
      <TaskSub />

      <Registration />
>>>>>>> a35e8d3ca9a4206630b42ed3a3df9dd969e82864
    </main>
  );
}
