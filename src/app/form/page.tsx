import React from 'react';

interface PageProps {
    fullName?: string;
    registrationNumber?: string;
    email?: string;
    teamName?: string;
    referralCode?: string;
    mobileNumber?: string;
}

const Page: React.FC<PageProps> = ({
    fullName = "FULL NAME",
    registrationNumber = "REGISTRATION NUMBER",
    email = "EMAIL",
    teamName = "TEAM NAME",
    referralCode = "REFERRAL CODE",
    mobileNumber = "MOBILE NUMBER",
}) => {
    return (
        <>
        <div className="h-screen w-full bg-[#2EBF54] bg-[url('/p7.svg')] bg-repeat bg-center">
        <div className="flex justify-center lg:justify-normal items-center">
          <img className="hidden lg:block lg:ml-[4vw]" src="p6.svg" />
          <p className="font-pixeboy h-[5.183312262958281vh] lg:ml-[22.5vw] lg:text-[7.585335018963337vh] text-shadow mt-[2vh] lg:mt-[0] mb-[3vh] text-[5.056890012642225vh] text-center text-[#FFFFFF] text-shadow lg:text-shadowfinal">
            <span className='text-with-border'>HACKBATTLE 2024</span>
          </p>
        </div>
        <div className="flex justify-center lg:mt-[1.5vh]">
          <div className="big-shadow">
            <div>
              <div className="flex bg-[#8C78F7] pt-[0.5vh] pb-[0.5vh] lg:h-[4vh]">
                <img className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="p1.svg" alt="p1" />
                <img className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="p1.svg" alt="p1" />
                <img className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="p1.svg" alt="p1" />
              </div>
            </div>
            <div className="lg:flex">
              <div className="border border-black w-[82.395833333333332vw] h-[] lg:w-[40vw] lg:h-[50vh] relative">
                <div className="relative bg-[url('/p7.svg')] bg-repeat bg-center bg-[#FF553E] h-[30vh] lg:h-[72.32vh]">
                  <img className="ml-[2vw] h-[5vh] pt-[1.75vh] lg:h-[10.642225031605562vh]" src="p2.svg" />
                  <div className="flex justify-center lg:mt-[0vh]">
                    <img className="absolute z-0 mt-[2vh] lg:mt-[4vh] lg:h-[30vh]" src="p3.svg" alt="p3" />
                    <img className="absolute z-40 h-[5vh] mt-[4vh] lg:h-[10vh] lg:mt-[9.2vh]" src="p4.svg" alt="p4" />
                    <img className="absolute z-20 h-[5vh] mt-[8vh] lg:mt-[17.2vh] lg:h-[10vh]" src="p5.svg" alt="p5" />
                  </div>
                  <p className="mt-[17.5vh] lg:mt-[40vh] text-center font-pixeboy text-shadowfinal text-with-border text-[4.424778761061947vh] text-white text-shadow lg:text-shadowpinkish pb-[2vh] lg:text-[7.585335018963337vh]">TEAM LEADER</p>
                </div>
              </div>

              <div className="bg-white flex justify-center lg:w-[50vw]">
                <div className="flex-col">
                  <div >
                    <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={fullName} />
                  </div>
                  <div>
                    <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={registrationNumber} />
                  </div>
                  <div>
                    <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={email} />
                  </div>
                  <div>
                    <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={teamName} />
                  </div>
                  <div>
                    <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={referralCode} />
                  </div>
                  <div>
                    <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] mb-[2.5vh] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio  " placeholder={mobileNumber} />
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#3E8BFF] h-[6.06826801517067vh] text-[3.5398230088495577vh] mb-[2.5vh] lg:h-[7vh] pl-[1vw] pr-[1vw] lg:text-[5.914032869785082vh]  border-[0.37926675094816686vh] border-black flex items-center text-white text-with-border font-pixeboy">REGISTER</button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <div className="flex font-mercutio justify-around text-[2.5605562579013906vh] text-white lg:justify-center lg:mt-[2.5vh] mt-[2.5vh] lg:text-[3.7926675094816686vh] lg:font-pixeboy lg:text-shadowfinal">
          Already Registered? <span className="text-[2.5605562579013906vh] text-[#FFDA56] ml-[5vw] lg:text-[3.7926675094816686vh] font-mercutio lg:ml-[2vw] lg:font-pixeboy">Log In</span>
        </div>
        </div>
        </>
    );
};

export default Page;







