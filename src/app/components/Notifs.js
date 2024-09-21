
"use client";
import Image from "next/image";

import { useState } from "react";


export default function Notifs(props){
    const [cleared, setClear] = useState(props.cleared);

    return(
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-[80vw] xl:w-[35vw] md:w-[65vw] lg:w-[40vw] h-[35vh] lg:h-[45vh] border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000]">
                <div className="bg-[#28B6BA] h-[4vw] md:h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[1vw]">
                    <Image src="/yellow-circles.svg" alt="Yellow Circles" className="h-[2vw] md:h-[1vh] lg:h-[2vh]" />
                </div>
                <div className="font-pixeboy text-[8vw] md:text-6xl flex justify-center mt-[2vh] md:mt-6 flex-col items-center sm:gap-y-4 small:gap-y-5 gap-y-8">
                    <p className="text-black shadow-[#3EB85D]">REVIEW - 1</p>
                    {(cleared) ? (
                        <div className="w-[50vw] md:w-[30vw] xl:w-[25vw] lg:w-[30vw] md:h-[12vh] lg:h-[18vh] h-[10vh] small:h-[9vh] bg-[#45BB63] rounded-2xl flex justify-center items-center border-black border-2">
                            <p className="text-white md:text-4xl lg:text-6xl glow-text small:text-3xl">CLEARED!</p>
                        </div>
                    ) : (
                        <div className="w-[50vw] md:w-[30vw] xl:w-[25vw] lg:w-[30vw] md:h-[12vh] lg:h-[18vh] h-[10vh] small:h-[9vh] bg-[#FB624C] rounded-2xl flex justify-center items-center border-black border-2">
                            <p className="text-white md:text-4xl lg:text-6xl glow-text small:text-3xl">ELIMINATED</p>
                        </div>
                    )}
                    <div className="w-[25vw] md:w-48 md:h-[5vh] h-[3vh] bg-[#3E8BFF] border-2 border-black flex justify-center items-center lg:mt-2">
                        <p className="text-white text-[4vw] md:text-4xl">CLOSE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
