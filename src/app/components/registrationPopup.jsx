"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "./loading";
import Image from "next/image";

export default function RegistrationPopup({
  visible,
  isLeader,
  teamName,
  setTeamName,
  teamCode,
  setTeamCode,
  setPopupVisible,
  joinId,
}) {
  const [loading, setLoading] = useState(false);
  const isValidTeamName = (name) => /^[a-zA-Z0-9_ ]+$/.test(name);

  useEffect(() => {
    const handleJoinId = async () => {
      if (joinId) {
        const accessToken = localStorage.getItem("AccessToken");
        if (accessToken) {
          try {
            setLoading(true);
            await joinTeam(accessToken, joinId);
          } catch (error) {
            toast.error("Error joining team. Please try manually.");
          } finally {
            setLoading(false);
          }
        } else {
          toast.error("Please log in to join a team.");
        }
      }
    };

    handleJoinId();
  }, [joinId]);

  async function createTeam(accessToken, teamName) {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/create-team`,
        { teamName: teamName },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 201) {
        toast.success("Team created successfully!");
        window.location.href = "/team";
      }
    } catch (error) {
      toast.error("Error creating team. Please try again.");
      console.error("Error creating team:", error);
    } finally {
      setLoading(false);
    }
  }

  async function joinTeam(accessToken, teamCode) {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/join-team`,
        { teamCode: teamCode },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Joined team successfully!");
        window.location.href = "/team";
        return true;
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage =
          error.response.data?.error ||
          "Bad Request. Please check the team code.";
        toast.error(errorMessage);
      } else {
        toast.error("Error joining team. Please try again.");
      }
      console.error("Error joining team:", error.response || error);
    } finally {
      setLoading(false);
    }
    return false;
  }

  const handleDone = async () => {
    const accessToken = localStorage.getItem("AccessToken");
    if (!accessToken) {
      toast.error("No access token found. Please login.");
      return;
    }

    if (isLeader) {
      if (teamName.trim()) {
        if (isValidTeamName(teamName)) {
          await createTeam(accessToken, teamName);
        } else {
          toast.error(
            "Only letters, numbers, spaces, and underscores are allowed."
          );
        }
      } else {
        toast.error("Team name cannot be empty.");
      }
    } else {
      if (teamCode.trim()) {
        await joinTeam(accessToken, teamCode);
      } else {
        toast.error("Team code cannot be empty.");
      }
    }
    setPopupVisible(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50 ${
        visible ? "visible" : "hidden"
      }`}
    >
      <div className="relative w-[65vw] h-[35vh] lg:h-[45vh] lg:w-[35vw] border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000] bg-white z-60">
        <div className="bg-[#28B6BA] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[0.5vw]">
          <Image
            src="/yellow-circles.svg"
            alt="Yellow Circles"
            className="h-[1vh] lg:h-[2vh]"
          />
        </div>
        {loading ? ( // Show loading component while loading
          <Loading />
        ) : (
          <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
            {isLeader ? (
              <>
                <p className="py-[5vh] [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-[#3EB85D]">
                  ENTER TEAM NAME
                </p>
                <input
                  type="text"
                  className="bg-[#FFC642] w-[50vw] lg:w-[30vw] px-[2vw] py-[1vh] border-black border-2 rounded-lg text-black font-pixeboy text-[2vh] lg:text-[4vh] text-center placeholder:text-black"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter team name"
                  required
                />
              </>
            ) : (
              <>
                <p className="py-[5vh] [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-[#3EB85D]">
                  ENTER TEAM CODE
                </p>
                <input
                  type="number"
                  className="bg-[#FFC642] w-[50vw] lg:w-[30vw] px-[2vw] py-[1vh] border-black border-2 rounded-lg text-black font-pixeboy text-[2vh] lg:text-[4vh] text-center placeholder:text-black"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  placeholder="Enter team code"
                />
              </>
            )}
            <div className="flex mt-[5vh] gap-[2vw]">
              <button
                className="bg-[#3E8BFF] px-[1vw] py-[.5vh] text-white border-black border-2"
                onClick={handleDone}
                disabled={loading}
              >
                {loading ? "Loading..." : "Done"}
              </button>
              <button
                className="bg-red-500 px-[1vw] py-[.5vh] text-white border-black border-2"
                onClick={() => setPopupVisible(false)}
                disabled={loading}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
