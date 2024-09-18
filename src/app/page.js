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

<<<<<<< HEAD
      {/* <Tracks />
      <Speaker />
      <Conducted />
      <FAQ /> */}
=======
>>>>>>> 456f9a4ad7f90347a360dd8b90f4b88a66969bf7
    </main>
  );
}
