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
        <div className="h-screen w-full bg-[#2EBF54] bg-[url('/p7.svg')] bg-repeat bg-center">
            <div className="flex justify-center lg:justify-normal items-center">
                <img className="hidden lg:block lg:ml-[4vw]" src="/p6.svg" alt="logo" />
                <p className="font-pixeboy h-[5.18vh] lg:ml-[22.5vw] lg:text-[7.58vh] text-shadow mt-[2vh] lg:mt-[0] mb-[3vh] text-[5.05vh] text-center text-white lg:text-shadowfinal">
                    <span className='text-with-border'>HACKBATTLE 2024</span>
                </p>
            </div>

            <div className="flex justify-center lg:mt-[1.5vh]">
                <div className="big-shadow">
                    <div className="flex bg-[#8C78F7] pt-[0.5vh] pb-[0.5vh] lg:h-[4vh]">
                        {[...Array(3)].map((_, index) => (
                            <img key={index} className="ml-[1.5vw] lg:ml-[1vw] lg:h-[2vh] lg:mt-[0.6vh]" src="/p1.svg" alt={`p1-${index}`} />
                        ))}
                    </div>

                    <div className="lg:flex">
                        <div className="border border-black w-[82.4vw] lg:w-[40vw] lg:h-[50vh] relative">
                            <div className="relative bg-[url('/p7.svg')] bg-repeat bg-center bg-[#FF553E] h-[30vh] lg:h-[72.32vh]">
                                <img className="ml-[2vw] h-[5vh] pt-[1.75vh] lg:h-[10.64vh]" src="/p2.svg" alt="p2" />
                                <div className="flex justify-center">
                                    <img className="absolute z-0 mt-[2vh] lg:mt-[4vh] lg:h-[30vh]" src="/p3.svg" alt="p3" />
                                    <img className="absolute z-40 h-[5vh] mt-[4vh] lg:h-[10vh] lg:mt-[9.2vh]" src="/p4.svg" alt="p4" />
                                    <img className="absolute z-20 h-[5vh] mt-[8vh] lg:mt-[17.2vh] lg:h-[10vh]" src="/p5.svg" alt="p5" />
                                </div>
                                <p className="mt-[17.5vh] lg:mt-[40vh] text-center font-pixeboy text-with-border text-[4.42vh] text-white lg:text-[7.58vh] pb-[2vh]">TEAM LEADER</p>
                            </div>
                        </div>

                        <div className="bg-white flex justify-center lg:w-[50vw]">
                            <div className="flex-col">
                                {[
                                    { placeholder: fullName },
                                    { placeholder: registrationNumber },
                                    { placeholder: email },
                                    { placeholder: teamName },
                                    { placeholder: referralCode },
                                    { placeholder: mobileNumber }
                                ].map((input, index) => (
                                    <div key={index}>
                                        <input 
                                            className="border-2 w-[75vw] lg:w-[45vw] text-[2.9vh] lg:text-[3.54vh] h-[4vh] lg:h-[6.07vh] mt-[2.5vh] lg:mt-[4vh] pl-[1vw] placeholder:text-black border-black font-mercutio"
                                            placeholder={input.placeholder}
                                        />
                                    </div>
                                ))}
                                
                                <div className="flex justify-center">
                                    <button className="bg-[#3E8BFF] h-[6.07vh] text-[3.54vh] mb-[2.5vh] lg:h-[7vh] pl-[1vw] pr-[1vw] lg:text-[5.91vh] border-[0.38vh] border-black flex items-center text-white text-with-border font-pixeboy">
                                        REGISTER
                                    </button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="flex font-mercutio justify-around lg:justify-center text-[2.56vh] text-white lg:mt-[2.5vh] lg:text-[3.79vh] lg:font-pixeboy lg:text-shadowfinal">
                Already Registered? 
                <span className="text-[#FFDA56] ml-[5vw] lg:ml-[2vw] lg:text-[3.79vh] lg:font-pixeboy">Log In</span>
            </div>
        </div>
    );
};

export default Page;
