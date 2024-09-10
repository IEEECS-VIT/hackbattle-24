"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Pacman from "../../assets/aboutPacman.svg";

export default function About() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const textTop = rect.top + scrollTop;
        const textHeight = rect.height;
        const viewportMiddle = scrollTop + windowHeight / 2;
        const coloringStart = textTop + textHeight * 0.2;
        const coloringEnd = textTop + textHeight * 0.8;

        // Calculate scroll percentage
        const scrollPosition = Math.max(0, viewportMiddle - coloringStart);
        const coloringRange = coloringEnd - coloringStart;
        const percentage = Math.min(
          1,
          Math.max(0, scrollPosition / coloringRange)
        );
        setScrollPercentage(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = [
    "Join",
    "the",
    "adrenaline-pumping",
    "36-hour",
    "HackBattle",
    "by",
    "IEEECS-VIT,",
    "where",
    "tech",
    "innovators",
    "gather",
    "for",
    "groundbreaking",
    "challenges,",
    "keynote",
    "sessions,",
    "and",
    "engaging",
    "activities",
    "that",
    "ignite",
    "creativity",
    "and",
    "drive",
    "innovation.",
  ];

  const blueWords = ["36-hour", "challenges", "sessions", "activities"];

  const fillColor = "red";
  const blueColor = "#3E8BFF"; // Color to fill certain words with

  const textElements = words.map((word, index) => (
    <span
      key={index}
      className="word"
      style={{
        color:
          scrollPercentage > index / words.length
            ? blueWords.includes(word)
              ? blueColor
              : fillColor
            : "white",
        transition: "color 0.3s ease",
      }}
    >
      {word}{" "}
    </span>
  ));

  return (
    <div className="bg-[#6F3CDC] w-full h-[100vh] flex items-center font-pixeboy relative ">
      <div className="w-[60%] ml-[5%]" ref={textRef}>
        <p className="text-6xl md:text-8xl">ABOUT</p>
        <p className="text-3xl md:text-6xl">{textElements}</p>
      </div>
      <div className="absolute right-[5%]">
        <Image src={Pacman} height={580} />
      </div>
    </div>
  );
}
