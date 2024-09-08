import React from 'react';
import PropTypes from 'prop-types';

// Define the props with default values
const Shubham = ({
  fullName = "FULL NAME",
  registrationNumber = "REGISTRATION NUMBER",
  email = "EMAIL",
  teamName = "TEAM NAME",
  referralCode = "REFERRAL CODE",
  mobileNumber = "MOBILE NUMBER",
}) => {
  return (
    <>
      <div className="relative p-8 bg-[#2ebf54] bg-[url('/p7.svg')] bg-repeat bg-center h-screen flex flex-col items-center justify-center overflow-hidden">
        <img 
          src="/p6.svg" 
          alt="p6" 
          className="hidden lg:block lg:ml-[4vw]" 
        />
        <h1 
          className="text-5xl text-center font-pixeboy text-white mt-8" 
          style={{ 
            textShadow: `
              1px 1px 0 #000, 
              -1px -1px 0 #000, 
              1px -1px 0 #000, 
              -1px 1px 0 #000, 
              0.2rem 0.2rem 0 #ff0000, 
              0.2rem -0.2rem 0 #0D9C9F
            ` 
          }}
        >
          <span className="text-with-border">HACKBATTLE 2024</span>
        </h1>
        <div className="bg-[#8C78F7] pt-[0.5vh] pb-[0.5vh] lg:h-[4vh] flex">
          <img className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="p1.svg" alt="p1" />
          <img className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="p1.svg" alt="p1" />
          <img className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="p1.svg" alt="p1" />
        </div>
        <div className="bg-white flex lg:flex-row flex-col justify-center lg:w-[50vw]">
          <div className="border border-black w-[82.395833333333332vw] h-auto lg:w-[40vw] lg:h-[50vh] relative">
            <div className="relative bg-[url('/p7.svg')] bg-repeat bg-center bg-[#FF553E] h-[30vh] lg:h-[72.32vh]">
              <img className="ml-[2vw] h-[5vh] pt-[1.75vh] lg:h-[10.642225031605562vh]" src="p2.svg" alt="p2" />
              <div className="flex justify-center lg:mt-[0vh]">
                <img className="absolute z-0 mt-[2vh] lg:mt-[4vh] lg:h-[30vh]" src="p3.svg" alt="p3" />
                <img className="absolute z-40 h-[5vh] mt-[4vh] lg:h-[10vh] lg:mt-[9.2vh]" src="p4.svg" alt="p4" />
                <img className="absolute z-20 h-[5vh] mt-[8vh] lg:mt-[17.2vh] lg:h-[10vh]" src="p5.svg" alt="p5" />
              </div>
              <p className="mt-[17.5vh] lg:mt-[40vh] text-center font-pixeboy text-shadowfinal text-with-border text-[4.424778761061947vh] text-white text-shadow lg:text-shadowpinkish pb-[2vh] lg:text-[7.585335018963337vh]">TEAM LEADER</p>
            </div>
          </div>
          <div className="flex-col lg:ml-8">
            <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={fullName} />
            <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={registrationNumber} />
            <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={email} />
            <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={teamName} />
            <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={referralCode} />
            <input className="border-2 w-[75vw] text-[2.907711757269279vh] h-[4vh] border-black mt-[2.5vh] pl-[1vw] mb-[2.5vh] lg:w-[45vw] lg:h-[6.06826801517067vh] lg:mt-[4vh] placeholder:text-black lg:text-[3.5398230088495577vh] font-mercutio" placeholder={mobileNumber} />
            <div className="flex justify-center mt-8">
              <button className="bg-[#3E8BFF] h-[6.06826801517067vh] text-[3.5398230088495577vh] mb-[2.5vh] lg:h-[7vh] pl-[1vw] pr-[1vw] lg:text-[5.914032869785082vh] border-[0.37926675094816686vh] border-black flex items-center text-white text-with-border font-pixeboy">REGISTER</button>
            </div>
          </div>
        </div>
        <div className="flex font-mercutio lg:text-with-border justify-around text-[2.5605562579013906vh] text-white lg:justify-center lg:mt-[2.5vh] mt-[2.5vh] lg:text-[3.7926675094816686vh] lg:font-pixeboy lg:text-shadowfinal">
          Already Registered? <a href="#" className="text-yellow-300">Log In</a>
        </div>
      </div>
    </>
  );
};

// Define PropTypes for the component
Shubham.propTypes = {
  fullName: PropTypes.string,
  registrationNumber: PropTypes.string,
  email: PropTypes.string,
  teamName: PropTypes.string,
  referralCode: PropTypes.string,
  mobileNumber: PropTypes.string,
};

export default Shubham;
