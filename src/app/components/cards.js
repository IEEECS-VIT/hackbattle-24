"use client";

import { useState } from "react";

export default function Card() {
    
    return (
        <div className="min-h-screen flex flex-col lg:flex-col xl:flex-row justify-center  gap-10 lg:gap-[17%] items-center ">
            <div className="w-[135%]  md:w-[65vw] xl:w-[47vw] h-[29vh] lg:mt-[40%] lg:w-[100%] xl:mt-[20%] xl:h-[45vh] border-black border-4 rounded-lg shadow-[10px_10px_0_0_#3E8BFF] lg:shadow-[15px_15px_0_0_#3E8BFF] md:shadow-[15px_15px_0_0_#3E8BFF]  relative bg-red-700 lg:mb-[39vh]">
                <div className="bg-[#28B6BA] h-[8vw] md:h-[6vh] lg:h-[8vh] flex justify-between border-black border-b-1 pl-[1vw]">
                <div
    className="font-pixeboy lg:mt-2 text-[5vw] md:ml-[3%] md:mt-[-1%] lg:ml-[2%] xl:text-[2vw] lg:text-[4vw] bg-transparent border-none focus:outline-none"
>{`<Github Link>`}
</div>

                    <div className="font-pixeboy xl:text-[3vw] lg:text-[7vw] text-[5vw] md:mr-[2%] md:mt-[-2%] lg:mr-[11%] lg:mt-0 lg:text-[3vw]">
                        {`o o o X `}
                    </div>
                </div>
                <textarea
  className="absolute bg-white text-[4vw] md:text-[130%] lg:text-[1.5vw] sm:w-[90%] sm:mt-2 sm:h-[60%] w-[90%] md:w-[90%] font-pixeboy lg:w-[90%] md:mt-2 md:h-[60%] h-[70%] mt-3 ml-3 md:h-[70%] xl:h-[29vh] lg:h-[18vh]  xl:mt-[3vh] md:ml-6 lg:mr-[15vh] rounded-xl border border-gray-300 px-4 py-2 focus:outline-none overflow-y-auto whitespace-nowrap"
/>

</div>

<div className="w-[120%] xl:w-[35vw] md:w-[80%] lg:w-[100%] h-[140%] lg:h-[65vh] xl:mt-[20%] border-black border-4 rounded-lg shadow-[2vw_2vw_0_0_#8471fb] lg:shadow-[1vw_1vw_0_0_#8471fb] md:shadow-[15px_15px_0_0_#3E8BFF] relative bg-[#ffb7e5] mt-12 lg:mt-0 lg:mb-[30vh]">
  <div className="bg-[#f86dc1] h-[9vw] md:h-[7vh] lg:h-[9vh] flex justify-between border-black border-b-2 pl-[1vw]">
    <div className="font-pixeboy lg:mt-2 xl:text-[2vw] lg:text-[6vw] ml-14 lg:ml-12 lg:text-[2.5vw] lg:ml-[20%] bg-transparent border-none focus:outline-none">
      {`<DESCRIPTION>`}
    </div>
  </div>
  <div className="flex flex-col relative">
    <textarea
      className="absolute font-pixeboy text-[4vw]  md:text-[140%] lg:text-[1.3vw] sm:mt-3 bg-white w-[95%] mt-2 ml-1.5 md:w-[95%] lg:w-[95%] h-[80%] md:h-[80%] lg:h-[42vh] md:mt-3 lg:mt-[2vh] md:ml-[3%] lg:ml-[3%] rounded-xl border border-gray-300 px-4 py-2 focus:outline-none overflow-x-auto overflow-y-auto whitespace-nowrap"
    />
    <div className="border border-[#8471fb] flex-col items-center justify-center md:mb-[3%]  md:mt-[65%] mt-[85%] mb-[2%] md:mt-[25vh] lg:mt-[45vh] "></div>
    <div className="bg-[#8471fb] flex-col border border-gray-500 p-1 w-[70%] mb-[7%] rounded-lg lg:w-[25vw] ml-1"></div>
  </div>
</div>

        </div>
    );
}
