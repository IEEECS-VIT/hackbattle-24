"use client";

import { useState } from "react";

export default function Card() {
    
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center gap-10 lg:gap-32 items-center ]">
            <div className="w-[80vw] xl:w-[35vw] md:w-[65vw] lg:w-[40vw] h-[35vh] lg:h-[45vh] border-black border-4 rounded-lg shadow-[-10px_10px_0_0_#3E8BFF] lg:shadow-[15px_15px_0_0_#3E8BFF] relative bg-red-700 lg:mb-[39vh]">
                <div className="bg-[#28B6BA] h-[8vw] md:h-[6vh] lg:h-[8vh] flex justify-between border-black border-b-1 pl-[1vw]">
                <div
    className="font-pixeboy lg:mt-1 text-[5vw] ml-4 lg:ml-5 lg:text-[2vw] bg-transparent border-none focus:outline-none"
>{`<Github Link>`}
</div>

                    <div className="font-pixeboy text-[6vw]  mr-2 lg:mr-7 lg:mt-0 lg:text-[3vw]">
                        {`o o o X `}
                    </div>
                </div>
                <input
    type="text"
    className="absolute bg-white text-[4vw] sm:w-[70vw] sm:h-[20vh] w-[65vw] md:w-[57vw] font-pixeboy lg:w-[30vw]  h-[38vw] mt-8 ml-6 md:h-[23vh] lg:h-[29vh] md:mt-6 lg:mt-[3vh] md:ml-6 lg:mr-[15vh] rounded-xl border border-gray-300 px-4 py-2 focus:outline-none"
/>
</div>

            <div className="w-[80vw] xl:w-[28vw] md:w-[65vw] lg:w-[20vw] h-[35vh] lg:h-[55vh] border-black border-4 rounded-lg shadow-[-2vw_2vw_0_0_#8471fb] lg:shadow-[1vw_1vw_0_0_#8471fb] 
 relative bg-[#ffb7e5] mt-12 lg:mt-0 lg:mb-[35vh]">
                <div className="bg-[#f86dc1] h-[8vw] md:h-[6vh] lg:h-[8vh] flex justify-between border-black border-b-2 pl-[1vw]">
                <div
    className="font-pixeboy lg:mt-1 text-[5vw] ml-24 lg:ml-12 lg:text-[3vw] bg-transparent border-none focus:outline-none"
    
>{`<DESCRIPTION>`}
</div>

                    
                </div>
                <div className="flex flex-col relative ">
                <input
  type="text"
  className="absolute font-pixeboy text-[3vw] sm:w-[70vw] sm:h-[20vh] sm:mt-3  bg-white w-[70vw] mt-3 ml-3 md:w-[58vw] lg:w-[25vw] h-[40vw] md:h-[20vh] lg:h-[33vh] md:mt-4 lg:mt-[3vh] md:ml-6 lg:ml-[3vh] rounded-xl border border-gray-300 px-4 py-2 focus:outline-none"
/>

                    <div className="border border-[#8471fb] flex-col items-center justify-center mt-[45vw] md:mt-[23vh] lg:mt-[38vh] "></div>
                    <div className="bg-[#8471fb] flex-col border border-gray-500 p-1.5 w-[45vw] mt-1 rounded-lg lg:w-[20vw]"></div>
                </div>
            </div>
        </div>
    );
}
