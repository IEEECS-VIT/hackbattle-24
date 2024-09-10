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

        // Calculate scroll percentage
        const scrollPosition = Math.max(0, scrollTop - textTop + windowHeight);
        const percentage = Math.min(
          1,
          scrollPosition / (textHeight + windowHeight)
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

  const blueWords = [
    // Add the words you want to color blue here
    "36-hour",
    "challenges",
    "sessions",
    "activities",
  ];

  const fillColor = "red"; // Default color to fill the text with
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
        <p className="text-8xl">ABOUT</p>
        <p className="text-6xl">{textElements}</p>
      </div>
      <div className="absolute right-[5%]">
        <Image src={Pacman} height={580} />
      </div>
    </div>
  );
}
