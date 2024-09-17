"use client";

import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Tracks from "./components/track";
import Speaker from "./components/speaker";
import Conducted from "./components/conducted";
<<<<<<< HEAD
import FAQ from "./components/faq";
import Leader from "./components/Leader";
=======
import FAQ from "./components/Faq";
import { useState } from "react";
import Google from "./components/Google";
>>>>>>> 0837e073ef8a0133ad4c7dfe5476f96cdc357e32

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
      <Leader />
      
      

      {/* <Tracks />
      <Speaker />
      <Conducted />
      <FAQ /> */}
=======

>>>>>>> 0837e073ef8a0133ad4c7dfe5476f96cdc357e32
    </main>
  );
}
