"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TeamNew from "./TeamNew";

export default function Team() {
  const [teamData, setTeamData] = useState(null);

  function routeToHome() {
    window.location.href = "/";
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    console.log(accessToken);

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-team`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTeamData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching team details:", error);
      });
  }, []);

  if (!teamData) {
    return <div>Loading...</div>;
  }
  const teamMembers = [
    {
      name: teamData.teamLeader.name,
      position: "Team Leader",
      logo: "/pacmanteam.svg",
    },
    ...teamData.teamMembers.map((member) => ({
      name: member.name,
      position: member.isLeader ? "Team Leader" : "Team Member",
      logo: member.isLeader ? "/pacmanteam.svg" : "/pacmanmember.svg",
    })),
  ];

  // Ensure there are always 6 TeamNew components
  const totalSlots = 6;
  const emptySlots = totalSlots - teamMembers.length;
  const allSlots = [...teamMembers, ...Array(emptySlots).fill({})];

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
        {allSlots.map((slot, index) => (
          <TeamNew
            key={index} // Use index as key if you don’t have a unique identifier
            name={slot.name || ""}
            position={slot.position || ""}
            logo={slot.logo || ""}
          />
        ))}
      </div>
    </div>
  );
}
