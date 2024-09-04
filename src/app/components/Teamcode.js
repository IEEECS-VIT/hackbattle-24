"use client"; 

export default function TeamCode({ visible,code }) {
  return (
    <div className={`flex justify-center items-center h-screen ${visible ? 'visible' : 'hidden'}`}>
      <div className="w-[65vw] h-[35vh] lg:h-[45vh] lg:w-[35vw] border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000]">
        <div className="bg-[#28B6BA] h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[0.5vw] ">
          <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh] lg:h-[2vh]" />
        </div>
        <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh] lg:text-[5vh]">
          <p className="py-[5vh] [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-[#3EB85D]">TEAM CODE</p>
          <div className="bg-[#FFC642] w-[50vw] lg:w-[30vw] inline-flex items-center justify-between text-white px-[2vw] border-black border-2 rounded-lg glow-text">
            <p className="truncate">{code}</p>
            <div className="flex items-center gap-[1vw]">
              <img src="/copy-icon.svg" alt="Copy Icon" className="h-[3vh] lg:h-[4vh]" />
              <img src="/qr-code.svg" alt="QR Code" className="h-[3vh] lg:h-[4vh]" />
            </div>
          </div>
          <button className="bg-[#3E8BFF] mt-[5vh] px-[2vw] text-white border-black border-2">Done</button>
        </div>
      </div>
    </div>
  );
}
