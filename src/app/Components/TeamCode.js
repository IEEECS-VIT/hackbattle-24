export default function TeamCode() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-[65vw] h-[35vh] border-black border-4 border-l-8 border-b-8">
          <div className="bg-[#28B6BA] h-[2vh] flex items-center border-black border-b-2 pl-[0.5vw]">
            <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh]" />
          </div>
          <div className="flex flex-col items-center h-[38vh] font-pixeboy text-[3vh]">
            <p className="py-[5vh] [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-[#3EB85D]">TEAM CODE</p>
            <p className="bg-[#FFC642] w-[50vw] inline-flex items-center justify-between text-white px-[2vw] border-black border-2 rounded-lg glow-text">PKQ23456
                <img src="/copy-icon.svg" alt="Copy Icon" className="ml-2 h-[3vh]" />
                <img src="/qr-code.svg" alt="QR Code" className="ml-2 h-[3vh]" />
            </p>

            <button className="bg-[#3E8BFF] mt-[5vh] px-[2vw] text-white border-black border-2">Done</button>
            </div>

        </div>
      </div>
    );
  }
  