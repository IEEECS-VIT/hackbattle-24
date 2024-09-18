export default function TeamNew({ position = "Team Member", name = "Add Member" }) {
    // Determine if it's the Team Leader or Team Member
    const isTeamLeader = position === "Team Leader";
    const isTeamMember = name === "Add Member";
  
    // Set defaults when no props are provided
    const backgroundColor = isTeamLeader
      ? "#3E8BFF"
      : isTeamMember
      ? "#848C95"
      : "#2EBF54"; // Default background
  
    const buttonColor = isTeamLeader
      ? "#FF553E"
      : isTeamMember
      ? "#FFC43E"
      : "#FFC43E"; // Default button color
  
    const pacmanSrc = isTeamLeader
      ? "/pacmanteam.svg"
      : isTeamMember
      ? "/pacmanaddmember.svg"
      : "/pacmanmember.svg"; // Default image
  
    return (
      <div className="flex items-center justify-center h-fit">
        <div
          className={`border-black border-4 shadow-[-10px_10px_0_0_#000000] lg:shadow-[-20px_20px_0_0_#000000] xl:w-[35vw] xl:h-[18vw] bg-[${backgroundColor}] w-[75vw] h-[22vh] lg:w-[40vw] sm:h-[28vh]`}
        >
          <div
            className={`bg-[${backgroundColor}] h-[4vw] md:h-[2vh] lg:h-[3vh] flex items-center border-black border-b-2 pl-[1vw]`}
          >
            <img
              src="/redcircles.svg"
              alt="Red Circles"
              className="xl:h-[1vh] xl:w-[2vw] lg:h-[2vh] lg:w-[3vw] sm:h-[9vh] sm:w-[6vw] h-[15vh] w-[15vw]"
            />
          </div>
          <div className="border-white border-4 xl:m-6 xl:h-[13vw] sm:h-[20vh] h-[16vh] m-4">
            <div className="float-left">
              <button
                className={`bg-[${buttonColor}] rounded-2xl border-black border-2 xl:w-[8vw] xl:h-[2vw] lg:w-[12vw] sm:h-[4vh] md:w-[14vw] xl:mt-5 xl:ml-5 lg:mt-4 lg:ml-4 w-[25vw] h-[6vw] mt-3 ml-3 font-pixeboy`}
              >
                {position}
              </button>
              <p className="font-mercutio 2xl:text-6xl lg:text-5xl text-white xl:ml-8 xl:mt-4 text-4xl ml-5 min-w-[15vw] max-w-[17vw] break-words text-left leading-tight">
                {name}
              </p>
            </div>
            <div className="float-right">
              <div className="lg:h-[9vw] lg:w-[9vw] sm:h-[13vw] sm:w-[13vw] h-[18vw] w-[18vw] bg-white rounded-full lg:mt-[5vh] xl:mt-[3.5vh] sm:mt-[4vh] mt-[3vh] mr-[2vw] flex justify-center items-center border-black border-2">
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
  