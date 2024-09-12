"use client";
import React, { useState } from "react";
import Accordion from "./Accordion.js";

const HackFaqItems = [
  {
    title: "What is ARCS?",
    content: (
      <>
        ARCS is the flagship event of IEEE-CS which has Hackbattle and Cicada as
        its two main events. It is a platform for students to showcase their
        technical skills and knowledge.
      </>
    ),
  },
  {
    title: "Where can we register?",
    content: (
      <>
        Registrations will be open soon, stay tuned to our social media handles
        for updates. We will be updating the registration links on our website
        as well.
      </>
    ),
  },
  {
    title: "When are the events?",
    content: (
      <>
        ARCS will be hosted during pre-gravitas, the dates for the same will be
        announced soon.
      </>
    ),
  },
  {
    title: "Where can we register?",
    content: (
      <>
        Registrations will be open soon, stay tuned to our social media handles
        for updates. We will be updating the registration links on our website
        as well.
      </>
    ),
  },
  {
    title: "When are the events?",
    content: (
      <>
        ARCS will be hosted during pre-gravitas, the dates for the same will be
        announced soon.
      </>
    ),
  },
  {
    title: "Will ODs be provided to participants?",
    content: (
      <>
        Yes, ODs will be provided to all participants of both the events for the
        whole duration of the event.
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
    <div className="relative bg-[#683fd4] font-pixeboy flex min-h-screen w-screen flex-col items-center justify-around p-2 text-2xl sm:p-4 ws:flex-row md:p-10">
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
