import TaskSub from "../components/TaskSub";
import ProjectLink from "../components/ProjectLink";
import ProjectDescription from "../components/ProjectDescription";

export default function Submission() {
    return (
        <div className="h-screen md:pt-[5vh]  bg-[#FEC46F] bg-[url('/pfinal.svg')] bg-repeat bg-center flex flex-col items-center">
            <div className="flex justify-center mt-[2vh] h-16 items-center text-[4.5vh] sm:text-[5.5vh] md:text-[6.5vh] font-crackman">
                <p className="text-[#3E8BFF]">TASK SUBMISSION</p>
            </div>

            {/* Flex container updated for responsiveness */}
            <div className="w-full flex flex-col md:flex-row justify-around items-center gap-8 mt-8">
                <ProjectLink />
                <ProjectDescription />
            </div>

            {/* Submit button positioned with responsive adjustments */}
            <button className="mt-12 sm:mt-4 lg:mt-0 bg-[#F5ED02] border-2 border-black p-3 text-3xl font-pixeboy md:absolute md:left-[45vw] md:bottom-[10vh] sm:bottom-[5vh]">
                Submit
            </button>
        </div>
    );
}
