export default function RegisterForm({ role }) {
    // Define styles based on the role
    const isTeamLeader = role === 'teamLeader';
    const bgColor = isTeamLeader ? '#ff553e' : '#ffc43e'; 
    const roleText = isTeamLeader ? 'TEAM LEADER' : 'TEAM MEMBER';
    const iconSrc = isTeamLeader ? '/formLeader.svg' : '/formMember.svg'; // Replace with your actual SVG file names

    return (
        <div className="m-4 mt-16 box-border w-full shadow-custom mx-auto mb-8">
            <div className="h-8 p-px flex items-center justify-between bg-[#8378f7]">
                <div className="p-2 flex">
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-[#f1d624] rounded-full border border-black"></div>
                </div>
            </div>

            <div className="border border-black flex">
                {/* Left column for image with overlay */}
                <div className="w-2/5 flex items-center justify-center bg-register" style={{ backgroundColor: bgColor }}>
                    <div className="overlay w-full h-full absolute top-0 left-0 opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Including the SVG from the public folder */}
                        <img 
                            src={iconSrc} 
                            alt={`${roleText} Icon`} 
                            className="w-2/3 mb-4" 
                        />
                        <br />
                        <h1 
                            className="text-5xl text-center font-pixeboy text-white" 
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
                            {roleText}
                        </h1>
                    </div>
                </div>

                {/* Right column for form */}
                <div className="w-3/5 p-8 flex flex-col justify-center bg-white">
                    <form action="#">
                        <div className="flex flex-col space-y-6 font-mercutio text-black">
                            <input 
                                className="p-3 border border-black placeholder-black" 
                                style={{ letterSpacing: '0.1em' }} 
                                type="text" 
                                name="fullName" 
                                placeholder="FULL NAME" 
                                required 
                            />
                            <input 
                                className="p-3 border border-black placeholder-black" 
                                style={{ letterSpacing: '0.1em' }} 
                                type="text" 
                                name="registerNo" 
                                placeholder="REGISTRATION NUMBER" 
                                required 
                            />
                            <input 
                                className="p-3 border border-black placeholder-black" 
                                style={{ letterSpacing: '0.1em' }} 
                                type="text" 
                                name="email" 
                                placeholder="EMAIL" 
                                required 
                            />
                            <input 
                                className="p-3 border border-black placeholder-black" 
                                style={{ letterSpacing: '0.1em' }} 
                                type="text" 
                                name="team" 
                                placeholder="TEAM NAME" 
                                required 
                            />
                            <input 
                                className="p-3 border border-black placeholder-black" 
                                style={{ letterSpacing: '0.1em' }} 
                                type="text" 
                                name="referral" 
                                placeholder="REFERRAL CODE" 
                                required 
                            />
                            <input 
                                className="p-3 border border-black placeholder-black" 
                                style={{ letterSpacing: '0.1em' }} 
                                type="text" 
                                name="mobile" 
                                placeholder="MOBILE NUMBER" 
                                required 
                            />
                        </div>
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="w-40 p-2 bg-blue-500 text-white font-pixeboy text-3xl border border-black">REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
