"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TeamNew from "./TeamNew";
import Code from "./Code";
import Loading from "./loading";
import toast from "react-hot-toast";
import isAuth from "./isAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Team() {
  const [teamData, setTeamData] = useState(null);
  const [codePopup, setCodePopup] = useState(false);
  const router = useRouter();
  function routeToHome() {
    router.push("/");
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-team`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTeamData(res.data);
        toast.success("Team data fetched successfully!");
      })
      .catch((error) => {
        toast.error("Error fetching team details. Please try again.");
        console.error("Error fetching team details:", error);
        routeToHome();
      });
  }, []);

  const renderTeamMembers = () => {
    const teamMembers = teamData.teamMembers.map((member) => ({
      name: member.name,
      position: member.isLeader ? "Team Leader" : "Team Member",
      logo: member.isLeader ? "/pacmanteam.svg" : "/pacmanmember.svg",
    }));

    const totalSlots = 6;
    const emptySlots = totalSlots - teamMembers.length;
    const allSlots = [
      ...teamMembers,
      ...Array(emptySlots).fill({
        name: "Add Member",
        position: "Team Member",
      }),
    ];

    return allSlots.map((slot, index) => (
      <TeamNew
        key={index}
        name={slot.name}
        position={slot.position}
        setCodePopup={setCodePopup}
      />
    ));
  };

  return (
    <div className="h-screen overflow-auto bg-[#FF553E] relative bg-[url('/pixel.svg')]">
      {!teamData && <Loading />}
      <button
        className="absolute left-[3vw] md:top-[9vh] top-[7vh] mt-1"
        onClick={routeToHome}
      >
        <Image
          src="/back-arrow.svg"
          alt="arrow"
          className="md:h-20 md:w-20 h-24 w-16"
        />
      </button>
      <p className="font-pixeboy md:text-5xl text-3xl glow-text text-white text-center mt-8">
        HACKBATTLE 2024
      </p>
      <p className="font-pixeboy md:text-5xl text-3xl text-center mb-[2vw] mt-8">
        {"Your team : "}
        {teamData ? teamData.teamName : "Loading..."}
      </p>

      <div
        className={`flex justify-around items-center flex-wrap lg:flex-row flex-col lg:gap-y-16 gap-y-8 mt-16 md:mb-0 mb-20 ${
          !teamData ? "opacity-30" : ""
        }`}
      >
        {teamData && renderTeamMembers()}
      </div>
      {teamData && (
        <Code
          visible={codePopup}
          code={teamData.teamCode}
          setCodePopup={setCodePopup}
        />
      )}
    </div>
  );
}

export default isAuth(Team);
