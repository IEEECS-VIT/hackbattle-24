export default function RegisterForm() {
    return (
        <div className="m-4 box-border w-full border border-black shadow-custom mx-auto mb-24">
            <div className="border-b border-black h-8 p-px flex items-center justify-between bg-top-bg">
                <div className="p-2 flex">
                    <div className="w-3 h-3 bg-circle-bg rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-circle-bg rounded-full border border-black mr-1.5"></div>
                    <div className="w-3 h-3 bg-circle-bg rounded-full border border-black"></div>
                </div>
            </div>

            <div className="flex">
                {/* Left column for image with overlay */}
                <div className="w-2/5 flex items-center justify-center bg-register-bg bg-form-bg relative">
                    {/* Overlay using pseudo-element */}
                    <div className="overlay w-full h-full absolute top-0 left-0 opacity-50"></div>
                    {/* SVG Image can be placed here */}
                    {/* <img src="path-to-your-svg-image.svg" alt="Decorative" className="relative z-10" /> */}
                </div>

                {/* Right column for form */}
                <div className="w-3/5 p-8 flex flex-col justify-center">
                    <form action="#">
                        <div className="flex flex-col space-y-6">
                            <input className="p-3 border border-black" type="text" name="fullName" placeholder="FULL NAME" required />
                            <input className="p-3 border border-black" type="text" name="registerNo" placeholder="REGISTRATION NUMBER" required />
                            <input className="p-3 border border-black" type="text" name="email" placeholder="EMAIL" required />
                            <input className="p-3 border border-black" type="text" name="team" placeholder="TEAM NAME" required />
                            <input className="p-3 border border-black" type="text" name="referral" placeholder="REFERRAL CODE" />
                            <input className="p-3 border border-black" type="text" name="mobile" placeholder="MOBILE NUMBER" />
                        </div>
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="w-32 p-2 bg-blue-500 text-white">REGISTER</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    );
}
