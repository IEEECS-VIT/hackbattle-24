"use client";

import TeamMember from "./TeamMember";
import AddMember from "./AddMember";
import TeamLeader from "./TeamLeader";
import { useEffect } from "react";
import axios from "axios";
import TeamNew from "./TeamNew";
import local from "next/font/local";

export default function Team() {
  function routeToHome() {
    window.location.href = "/";
  }
  function getTeamDetails(accessToken) {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-team`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching team details:", error);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    getTeamDetailst(token);
  }, []);

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
        <TeamNew
          name="Aniruddha Neema"
          position="Team Leader"
          logo="/pacmanteam.svg"
        />
        <TeamNew
          name="Aniruddha Neema"
          position="Team Member"
          logo="/pacmanmember.svg"
        />
        <TeamNew
          name="Aniruddha Neema"
          position="Team Member"
          logo="/pacmanaddmember.svg"
        />
        <TeamNew />
        <TeamNew />
        <TeamNew />
      </div>
    </div>
  );
}
