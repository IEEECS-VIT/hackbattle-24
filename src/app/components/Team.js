"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TeamNew from "./TeamNew";
import Code from "./Code";
import Loading from "./loading";
import toast from "react-hot-toast";
import isAuth from "./isAuth";
import { useRouter } from "next/navigation";
// import LeaveTeamPopup from "./LeaveTeamPopup";
import SubmissionPopup from "./submissionPopup";
import Notifs from "./Notifs";

function Team() {
  const [teamData, setTeamData] = useState(null);
  const [codePopup, setCodePopup] = useState(false);
  // const [leavePopup, setLeavePopup] = useState(false);
  const [submissionPopup, setSubmissionPopup] = useState(false); // State for SubmissionsPopup
  const [loading, setLoading] = useState(false);
  const [notifPopup, setNotifPopup] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [cleared, setCleared] = useState(false);
  const router = useRouter();

  function routeToHome() {
    router.push("/");
  }

  useEffect(() => {
    if (localStorage.getItem("UserStatus") === "0") {
      return;
    }
    const accessToken = localStorage.getItem("AccessToken");
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get-team`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTeamData(res.data);
        if (res.data.status === 0) {
          setNotifPopup(false);
        } else if (res.data.status === 1) {
          setNotifPopup(true);
          setCurrentReview(2);
          setCleared(false);
        } else if (res.data.status === 2) {
          setNotifPopup(true);
          setCurrentReview(2);
          setCleared(true);
        } else if (res.data.status === 3) {
          setNotifPopup(true);
          setCurrentReview(3);
          setCleared(false);
        } else if (res.data.status === 4) {
          setNotifPopup(true);
          setCurrentReview(3);
          setCleared(true);
        }
        toast.success("Team data fetched successfully!");
      })
      .catch((error) => {
        if (
          error.response &&
          (error.response?.status === 404 || error.response?.status === 400)
        ) {
          const errorMessage =
            error.response.data?.error || "Error fetching team details";
          toast.error(errorMessage);
        } else {
          toast.error("Error fetching team details. Please try again.");
        }
        routeToHome();
      });
  }, []);

  const handleLeaveTeam = () => {
    setLeavePopup(false);
    const accessToken = localStorage.getItem("AccessToken");
    setLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/leave-team`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => {
        setLoading(false);
        toast.success("You have left the team.");
        routeToHome();
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          (error.response.status === 400 || error.response.status === 404)
        ) {
          const errorMessage =
            error.response.data?.error || "Error leaving the team.";
          toast.error(errorMessage);
        } else {
          toast.error("Error leaving the team. Please try again.");
        }
      });
  };

  const renderTeamMembers = () => {
    const teamMembers = teamData.teamMembers
      .map((member) => ({
        name: member.name,
        position: member.isLeader ? "Team Leader" : "Team Member",
        logo: member.isLeader ? "/pacmanteam.svg" : "/pacmanmember.svg",
      }))
      .sort((a) => (a.position === "Team Leader" ? -1 : 1));

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
      {(!teamData || loading) && <Loading />}
      <button className="absolute left-[3vw] top-[3vh]" onClick={routeToHome}>
        <img
          src="/back-arrow.svg"
          alt="arrow"
          className="md:h-20 md:w-20 h-24 w-16"
        />
      </button>

      <div className="text-center">
        <p className="font-pixeboy md:text-5xl text-3xl glow-text text-white p-2">
          HACKBATTLE 2024
        </p>
        <p className="font-pixeboy md:text-5xl text-3xl  mt-8">
          {"Your team : "}
          {teamData ? teamData.teamName : "Loading..."}
        </p>
        {teamData && teamData.teamMembers.length < 3 && (
          <p className="text-[1.1rem] text-sans text-yellow-200 font-bold">
            *Teams should have at least 3 members to participate
          </p>
        )}
        <div className="md:absolute md:right-[3vw] md:top-[3vh] mt-[2vw] md:mt-0 space-x-4">
          {/* <button
            className="bg-[#F5ED02] border-2 border-black p-3 text-3xl font-pixeboy"
            onClick={() => setLeavePopup(true)}
          >
            Leave Team
          </button> */}
          <button
            className="bg-[#F5ED02] border-2 border-black p-3 text-3xl font-pixeboy"
            onClick={() => setSubmissionPopup(true)} // Button to trigger SubmissionsPopup
          >
            Submissions
          </button>
        </div>
      </div>

      <div
        className={`flex justify-around items-center flex-wrap lg:flex-row flex-col lg:gap-y-16 gap-y-8 mt-12 md:mb-0 pb-8 ${
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
      {/* <LeaveTeamPopup
        visible={leavePopup}
        onConfirm={handleLeaveTeam}
        onCancel={() => setLeavePopup(false)}
      /> */}
      <SubmissionPopup
        visible={submissionPopup}
        onConfirm={() => setSubmissionPopup(false)} // Close popup after submission
        onCancel={() => setSubmissionPopup(false)} // Cancel submission popup
      />
      <Notifs
        visible={notifPopup}
        reviewNumber={currentReview}
        cleared={cleared}
        setVisibility={setNotifPopup}
      />
    </div>
  );
}

export default isAuth(Team);
