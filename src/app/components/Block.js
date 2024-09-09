export default function Block({ src, icon, role }) {
  return (
    <div className="border-2 border-black text-center h-[28vh] w-[60vw] lg:w-[35vw] lg:h-[60vh] relative overflow-hidden lg:shadow-[-10px_-10px_0_0_#000000] shadow-[-5px_-5px_0_0_#000000]">
      <img src={src} className="absolute top-0 left-0 h-full w-full object-cover z-0 " alt="Background" />
      <div className="relative z-10 p-4 lg:mt-4">
        <h2 className="text-[4vh] lg:text-[6vh] text-white font-pixeboy">{role}</h2>
        <div className="bg-white border-white rounded-full w-[22vw] lg:w-[15vw] h-[10vh] lg:h-[30vh] flex items-center justify-center mx-auto mt-0">
          <img src={icon} className="size-16 lg:size-32" alt="Icon" />
        </div>
      </div>
      <div className="flex space-x-4 justify-center relative lg:my-8 ">
        <button className="bg-[#3E8BFF] text-white border-2 border-black font-pixeboy w-[25vw] h-[5vh] text-[2.5vh] lg:w-[13.5vw] lg:h-[8vh] lg:text-[6vh]">REGISTER</button>
        <button className="bg-[#4CAF50] text-white border-2 border-black font-pixeboy w-[25vw] h-[5vh] text-[2.5vh] lg:w-[13.5vw] lg:h-[8vh] lg:text-[6vh]">LOG IN</button>
      </div>
    </div>
  );
}
