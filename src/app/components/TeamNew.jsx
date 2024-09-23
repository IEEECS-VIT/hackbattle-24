export default function TeamNew({
  position = "Team Member",
  name = "Add Member",
  setCodePopup,
}) {
  const isTeamLeader = position === "Team Leader";
  const isAddMember = name === "Add Member";

  const backgroundColor = isTeamLeader
    ? "#3E8BFF"
    : isAddMember
    ? "#848C95"
    : "#2EBF54";

  const buttonColor = isTeamLeader ? "#FF553E" : "#FFC43E";

  const pacmanSrc = isTeamLeader
    ? "/pacmanteam.svg"
    : isAddMember
    ? "/pacmanaddmember.svg"
    : "/pacmanmember.svg";

  function handleClick() {
    if (isAddMember) {
      setCodePopup(true);
    }
  }

  return (
    <div
      className="flex items-center justify-center h-fit cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-16px_16px_0_0_#000000] xl:w-[30vw] xl:h-[15vw] bg-[${backgroundColor}] w-[75vw] h-[22vh] lg:w-[40vw] sm:h-[28vh]`}
      >
        <div
          className={`bg-[${backgroundColor}] h-[4vw] md:h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[1vw]`}
        >
          <img
            src="/redcircles.svg"
            alt="Red Circles"
            className="xl:h-[2vh] xl:w-[2vw] lg:h-[2vh] lg:w-[3vw] sm:h-[6vh] sm:w-[6vw] h-[7vh] w-[7vw]"
          />
        </div>
        <div className="border-white border-4 xl:m-3 xl:h-[11vw] sm:h-[20vh] h-[16vh] m-4 flex justify-between">
          <div className="flex flex-col justify-evenly">
            <div className="flex items-center">
              <button
                className={`bg-[${buttonColor}] rounded-2xl border-black border-2 xl:w-[8vw] xl:h-[2vw] lg:w-[12vw] sm:h-[4vh] md:w-[14vw] xl:mt-5 xl:ml-5 lg:mt-4 lg:ml-4 w-[25vw] h-[6vw] mt-3 ml-3 font-pixeboy`}
              >
                {position}
              </button>
            </div>
            <div className="font-mercutio lg:text-[2.5rem] text-white xl:ml-8 text-[1.7rem] ml-5 min-w-[15vw] max-w-[25vw] text-left leading-tight">
              {name}
            </div>
          </div>

          <div className="flex flex-col items-center p-4 justify-center">
            <div className="lg:h-[8vw] lg:w-[8vw] sm:h-[13vw] sm:w-[13vw] h-[15vw] w-[15vw] bg-white rounded-full flex justify-center items-center border-black border-2">
              <img
                src={pacmanSrc}
                alt="pacman"
                className="xl:h-20 xl:w-20 sm:w-16 sm:h-16 w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
