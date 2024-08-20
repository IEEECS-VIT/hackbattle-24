export default function TeamCode() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-[70vw] h-[40vh] border-black border-4">
          <div className="bg-[#28B6BA] h-[2vh] flex items-center">
            <img src="/yellow-circles.svg" alt="Yellow Circles" className="h-[1vh]" />
          </div>
          <div className="flex flex-col justify-center items-center h-[38vh] font-pixeboy text-[3vh]">
            <p>TEAM CODE</p>
            <p className="bg-[#FFC642] w-[50vw] inline-flex items-center justify-between px-2">PKQ23456
                <img src="/copy-icon.svg" alt="Copy Icon" className="ml-2 h-[3vh]" />
            </p>

            <button className="bg-[#3E8BFF]">Done</button>
            </div>

        </div>
      </div>
    );
  }
  