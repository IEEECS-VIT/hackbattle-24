"use client";
import React, { useState } from "react";
import Accordion from "./Accordion.js";

const HackFaqItems = [
  {
    title: "Where can I register for HackBattle?",
    content: (
      <>
        You can register for HackBattle on the official Gravitas website.
      </>
    ),
  },
  {
    title: "What is the team size for HackBattle?",
    content: (
      <>
        The team size should be between 3 to 6 members.
      </>
    ),
  },
  {
    title: "What should I do if I don’t have a team for HackBattle?",
    content: (
      <>
        If you don’t have a team before the event, don’t worry! You can either form a team beforehand, 
        or we’ll pair you with others who are also without a team before HackBattle begins.
      </>
    ),
  },
  {
    title: "Will there be any sessions during HackBattle?",
    content: (
      <>
        Yes, there will be a tech talk by an industry expert to enhance your skills, along with some fun 
        activities to keep the energy up!
      </>
    ),
  },
  {
    title: "Will there be breaks during the event?",
    content: (
      <>
        Yes, there will be scheduled breaks for breakfast, lunch, and dinner.
      </>
    ),
  },
  {
    title: "What should I bring to HackBattle?",
    content: (
      <>
        Make sure to bring your laptop, charger, water bottle, power bank, extension cord, and ID card. 
        These essentials will help you stay prepared throughout the event.
      </>
    ),
  },
  {
    title: "Will students get OD (On Duty) for attending HackBattle?",
    content: (
      <>
        Yes, students will receive OD for participating in the hackathon. ID cards will be scanned at 
        regular intervals during the event.

      </>
    ),
  },
  {
    title: "Is HackBattle fresher-friendly?",
    content: (
      <>
        Yes, the hackathon is fresher-friendly! Seniors will be present to guide you, although they won’t 
        assist with the projects directly.
      </>
    ),
  },
];

const Faq = () => {
  const [selected, setSelected] = useState("HackBattle");
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active FAQ

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active FAQ
  };

  const getItems = () => {
    return HackFaqItems;
  };

  return (
    <div
      className="relative bg-[#683fd4] font-pixeboy flex min-h-screen w-screen flex-col items-center justify-around p-2 text-2xl sm:p-4 ws:flex-row md:p-10"
      id="faq"
    >
      {/* Background Image */}
      {/* <img
        src="/purple.png"
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        alt="Background"
      /> */}

      {/* Content in front of the background */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center my-12">
        <p className="text-[10vh] lg:text-[20vh]">FAQS</p>
      </div>

      {/* Accordion Component */}
      <div className="relative z-10 flex justify-center w-[90vw] lg:w-[65vw]">
        <Accordion
          items={getItems()}
          activeIndex={activeIndex}
          onClick={handleAccordionClick}
        />
      </div>
    </div>
  );
};

export default Faq;
