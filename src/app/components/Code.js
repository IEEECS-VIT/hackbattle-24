"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";

export default function Code({ visible, code, setCodePopup }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset after 1.5 seconds
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50 ${
        visible ? "visible" : "hidden"
      }`}
    >
      <Draggable handle=".handle">
        <div className="relative w-[80vw] sm:w-[65vw] md:w-[50vw] lg:w-[35vw] h-auto border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000] bg-white z-60">
          <div className="bg-[#28B6BA] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[0.5vw] handle cursor-move">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[1vh] lg:h-[2vh]"
            />
          </div>
          <div className="flex flex-col items-center py-6 px-4 font-pixeboy text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <p className="mb-6 [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-[#3EB85D]">
              TEAM CODE
            </p>
            <div className="bg-[#FFC642] w-full inline-flex items-center justify-between text-white px-4 py-2 border-black border-2 rounded-lg glow-text">
              <p className="truncate flex-grow mr-2">{code}</p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <img
                  src="/copy-icon.svg"
                  alt="Copy Icon"
                  className={`h-6 sm:h-8 md:h-10 cursor-pointer transition-transform duration-200 ${
                    isCopied ? "scale-125" : ""
                  }`}
                  onClick={handleCopy}
                />
                <img
                  src="/qr-code.svg"
                  alt="QR Code"
                  className="h-6 sm:h-8 md:h-10"
                />
              </div>
            </div>
            {isCopied && (
              <p className="text-green-500 mt-2 text-sm">
                Copied to clipboard!
              </p>
            )}
            <button
              className="bg-[#3E8BFF] mt-6 px-6 py-2 text-white border-black border-2 text-xl sm:text-2xl md:text-3xl"
              onClick={() => {
                setCodePopup(false);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
