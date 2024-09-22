import React from "react";
import Draggable from "react-draggable";

export default function LeaveTeamPopup({ visible, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onCancel}
      ></div>
      <Draggable handle=".handle">
        <div className="relative z-50 w-[65vw] sm:h-[35vh] h-[25vh] lg:h-[42.5vh] lg:w-[40.77vw] border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000] bg-white">
          <div className="bg-[#28B6BA] h-[2vh] lg:h-[3vh] flex justify-between items-center border-black border-b-2 px-[0.5vw] handle cursor-move">
            <img
              src="/yellow-circles.svg"
              alt="Yellow Circles"
              className="h-[1vh] lg:h-[2vh] w-auto"
            />
            <button
              onClick={onCancel}
              className="text-black hover:bg-red-300 transition-colors duration-200 w-4 h-4 flex items-center justify-center rounded-full bg-red-600 border border-black font-bold text-xs"
            >
              &#x2715;
            </button>
          </div>

          <div className="flex flex-col justify-evenly w-[90%] ml-[2.5vw] sm:items-center h-[90%] font-pixeboy text-[3vh] lg:text-[5vh]">
            <p className="text-center sm:text-[3.9vh] text-[2.5vh] mb-[2vh]">
              Are you sure you want to leave the team?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="rounded-lg sm:text-[3.9vh] text-[2.5vh] px-[4vw] py-[1vh] h-[5vh] sm:h-[10vh] text-black border-black border-2 bg-[#3E8BFF] transition-colors duration-200 hover:opacity-90"
                onClick={onConfirm}
              >
                Yes
              </button>

              <button
                className="rounded-lg sm:text-[3.9vh] text-[2.5vh] px-[4vw] h-[5vh] sm:h-[10vh] text-black border-black border-2 bg-[#F5ED02] transition-colors duration-200 hover:opacity-90"
                onClick={onCancel}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
