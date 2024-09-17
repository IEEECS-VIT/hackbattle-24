"use client";

import TeamMember from "./TeamMember";
import AddMember from "./AddMember";
import TeamLeader from "./TeamLeader";
import { useEffect } from "react";
import axios from "axios";

export default function Team() {
  function getTeamDetails(userId) {}

  function routeToHome() {
    window.location.href = "/";
  }

  useEffect(() => {}, []);

  return (
    <div className="h-screen overflow-auto bg-[#FF553E] relative bg-[url('/pixel.svg')]">
      <img
        src="/ieee-cs-logo.svg"
        alt="logo"
        className="absolute left-[3vw] md:h-32 md:w-32 h-24 w-24"
      />
      <button
        className="absolute left-[3vw] md:top-[9vh] top-[7vh]"
        onClick={routeToHome}
      >
        <img
          src="/back-arrow.svg"
          alt="arrow"
          className="md:h-20 md:w-20 h-16 w-16"
        />
      </button>
      <p className="font-pixeboy md:text-5xl text-3xl glow-text text-white text-center mt-8">
        HACKBATTLE 2024
      </p>
      <p className="font-pixeboy md:text-7xl text-5xl text-center mb-[2vw]">
        YOUR TEAM!
      </p>
      <div className="flex justify-around items-center flex-wrap lg:flex-row flex-col lg:gap-y-16 gap-y-8">
        <TeamLeader name="your mom" />
        <TeamMember name="OKOK AAA" />
        <TeamMember name="OKOK AAA" />
        <AddMember />
        <AddMember />
        <AddMember />
      </div>
    </div>
  );
}
