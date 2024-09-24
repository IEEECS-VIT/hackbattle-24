        export default function ProjectDescription() {
            return (
                <div className="relative shadow-[15px_15px_0_0_#644997] h-[30vh] md:h-[50vh] w-[80vw] md:w-[40vw] rounded-lg lg:w-[30vw] mt-[5vh]">
                    <div className="absolute  w-full h-full bg-pink-500 rounded-lg z-[-1]"></div>

                    <div className="relative h-full w-full bg-pink-300 rounded-lg shadow-xl flex flex-col">
                        <div className="flex justify-evenly items-center bg-pink-500 px-4 py-2 rounded-t-lg">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            </div>
                            <div className="text-purple-700 font-pixeboy text-[2.8vh] md:text-[3.85vh] ml-4">{`<DESCRIPTION>`}</div>
                            <button className="text-black hover:bg-red-300 transition-colors duration-200 w-4 h-4 flex items-center justify-center rounded-full bg-red-600 border border-black font-bold text-xs ml-auto">
                                &#x2715;
                            </button>
                        </div>

                        <div className="flex-grow flex justify-center items-center bg-pink-200 p-4">
                            <textarea
                                placeholder="TEAM NAME&#10;PROJECT IS ABOUT..."
                                className="w-full text-[2.4vh] md:text-[2.8vh] font-pixeboy h-full rounded-lg bg-white text-black text-center border-none resize-none outline-none shadow-md"
                            />
                        </div>

                        <div className="h-6 bg-pink-400 rounded-b-lg">
                            <div className="w-1/3 h-2 bg-purple-500 rounded-full mt-2 ml-4"></div>
                        </div>
                    </div>
                </div>
            );
        }
