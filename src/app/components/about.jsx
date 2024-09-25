"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Pacman from "../../assets/pacmanvid-unscreen.gif";
import PacmanCircles from "../../assets/pacmanCircles.svg";

export default function About() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const textRef = useRef(null);

  // State to store the multiplier based on the screen size
  const [scrollMultiplier, setScrollMultiplier] = useState(70); // Default for laptop

  useEffect(() => {
    const handleResize = () => {
      // Adjust the multiplier based on screen width
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile screens
        setScrollMultiplier(80);
      } else {
        // Laptop or larger screens
        setScrollMultiplier(70);
      }
    };

    // Call on initial load
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const blueWords = ["36-hour", "IEEECS-VIT,","challenges", "sessions", "activities"];

  const fillColor = "#FFA33C";
  const blueColor = "#15F5BA"; // Color to fill certain words with

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

  // Calculate marginTop based on scroll percentage for Pacman movement
  const pacmanMarginTop = `${scrollPercentage * scrollMultiplier}vh`;

  // Calculate the clip path or mask effect for PacmanCircles based on scroll
  const clipPathValue = `inset(${scrollPercentage * 100}% 0 0 0)`; // Clip the top progressively as you scroll

  return (
    <div
      className="bg-[#6F3CDC] w-full h-[100vh] flex items-center font-pixeboy relative"
      id="about"
    >
      <div className="w-[90%] sm:w-[60%]  ml-[5%]" ref={textRef}>
        <p className="text-7xl md:text-8xl ">ABOUT</p>
        <p className="lg:text-[calc(4vh+1rem)] text-[calc(2.5vh+1rem)]">
          {textElements}
        </p>
      </div>

      {/* Pacman Circles with Masking Effect */}
      <div
        className="absolute right-[5%] hidden sm:block"
        style={{
          clipPath: clipPathValue, // Masking effect as you scroll down
          transition: "clip-path 0.1s ease", // Smooth transition
        }}
      >
        <Image src={PacmanCircles} height={580} />
      </div>

      {/* Pacman Image */}
      <div
        className="absolute right-[1%] top-[2.5%] lg:top-[2%] lg:right-[3.5%] hidden sm:block"
        style={{ marginTop: pacmanMarginTop }}
      >
        <Image src={Pacman} height={200} className="rotate-90 mt-4" />
      </div>
    </div>
  );
}
