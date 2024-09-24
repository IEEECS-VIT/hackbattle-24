"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Pacman from "../../assets/yellowPacman.svg";
import abstractbg from "../../assets/landingbg.svg";
import Marquee from "./Marquee";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import toast from "react-hot-toast";

export default function Landing({ loginStatus }) {
  const [authStatus, setAuthStatus] = useState(loginStatus);
  const [eventTime, setEventTime] = useState(new Date("2024-09-25T10:00:00"));
  const [isCountdownComplete, setCountdownComplete] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });

    const accessToken = localStorage.getItem("AccessToken");
    if (accessToken) {
      setAuthStatus("authenticated");
    } else {
      setAuthStatus("unauthenticated");
    }

    // Set the timer dynamically based on the current time
    const now = new Date();
    if (now < new Date("2024-09-25T10:00:00")) {
      setEventTime(new Date("2024-09-25T10:00:00"));
    } else if (now < new Date("2024-09-25T16:30:00")) {
      setEventTime(new Date("2024-09-25T16:30:00"));
    } else if (now < new Date("2024-09-25T23:00:00")) {
      setEventTime(new Date("2024-09-25T23:00:00"));
    } else if (now < new Date("2024-09-26T04:30:00")) {
      setEventTime(new Date("2024-09-26T04:30:00"));
    } else if (now < new Date("2024-09-26T14:00:00")) {
      setEventTime(new Date("2024-09-26T14:00:00"));
    } else {
      setCountdownComplete(true); // No more events
    }
  }, [loginStatus]);

  const handleButtonClick = () => {
    if (authStatus === "unauthenticated") {
      toast.error("Please login to join the team.");
    } else {
      window.location.href = "/team"; // Redirect to team/dashboard
    }
  };

  const getEventMessage = () => {
    const now = new Date();
    if (now < new Date("2024-09-25T10:00:00")) {
      return "HACK STARTS IN...";
    } else if (now < new Date("2024-09-25T16:30:00")) {
      return "REVIEW-0 AT 4:30 PM...";
    } else if (now < new Date("2024-09-25T22:30:00")) {
      return "REVIEW-1 AT 10:30 PM...";
    } else if (now < new Date("2024-09-26T04:30:00")) {
      return "REVIEW-2 AT 4:30 AM...";
    } else if (now < new Date("2024-09-26T14:00:00")) {
      return "REVIEW-3 AT 2:00 PM...";
    } else {
      return "ALL EVENTS COMPLETED";
    }
  };

  return (
    <>
      <main
        className="bg-[#0375F9] w-full h-[100vh] flex items-center font-pixeboy overflow-hidden"
        id="hero"
      >
        <section className="flex flex-col gap-4 lg:ml-[10%] ml-[5%] min-w-[350px] w-[20%] justify-start z-10">
          <img
            src="bigassPackman.svg"
            alt="packman"
            className="absolute lg:right-[10%] right-[5%] top-[20%] z-10 lg:h-[60%] md:h-[45%] md:block hidden"
            data-aos="fade-down"
          />
          <Image
            width={120}
            height={120}
            src={Pacman}
            alt="Pacman"
            className="absolute left-0 mt-[20px] lg:block hidden"
            data-aos="fade-down"
          />
          <div data-aos="zoom-in">
            <p className="text-3xl">techknowgreen presents.....</p>
            <p className="font-crackman sm:text-8xl text-7xl text-black">
              HACK
            </p>
            <p className="font-crackman sm:text-8xl text-7xl">BATTLE</p>
          </div>
          <button
            className={`bg-[#F5ED02] border-2 border-black max-w-[250px] p-3  text-3xl ${
              authStatus === "unauthenticated" ? "cursor-not-allowed" : ""
            }`}
            onClick={handleButtonClick}
          >
            {authStatus === "unauthenticated" ? "Join Team" : "Dashboard"}
          </button>

          {!isCountdownComplete && (
            <>
              <p className="text-2xl text-white" data-aos="fade-up">
                {getEventMessage()}
              </p>
              <FlipClockCountdown
                digitBlockStyle={{
                  color: "black",
                  backgroundColor: "yellow",
                  height: 40,
                  width: 30,
                  fontSize: 30,
                  fontWeight: 600,
                }}
                dividerStyle={{
                  backgroundColor: "blue",
                  color: "blue",
                  height: 2,
                }}
                to={eventTime.getTime()}
                onComplete={() => {
                  // Handle the next countdown event
                  setCountdownComplete(true);
                }}
              />
            </>
          )}
        </section>
        <Image
          src={abstractbg}
          alt="Abstract Background"
          className="absolute top-5 h-[95%] right-0 md:max-w-[50%] md:opacity-[100] opacity-[10] w-full hidden md:block"
          data-aos="fade-left"
          priority={true}
          loading="eager"
        />
      </main>
      <div className="absolute -bottom-[60px] w-full z-10 overflow-x-clip">
        <Marquee />
      </div>
    </>
  );
}
