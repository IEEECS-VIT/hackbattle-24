export default function Block({ src, icon, role }) {
  return (
    <div className="border-2 border-black text-center w-[30vw] relative overflow-hidden shadow-[-10px_10px_0_0_#000000] lg:shadow-[-10px_-10px_0_0_#000000]">
      <img src={src} className="absolute top-0 left-0 h-full w-full object-cover z-0" alt="Background" />
      <div className="relative z-10 p-4 mt-4">
        <h2 className="text-[5vh] text-white font-pixeboy">{role}</h2>
        <div className="bg-white border-white rounded-full w-[15vw] h-[30vh] flex items-center justify-center mx-auto mt-4">
          <img src={icon} className="size-32" alt="Icon" />
        </div>
      </div>
      <div className="flex space-x-4 justify-center relative my-8 ">
        <button className="bg-[#3E8BFF] text-white px-4 py-2 border-2 border-black font-pixeboy w-[9vw] h-[8vh] text-[4vh]">REGISTER</button>
        <button className="bg-[#4CAF50] text-white px-4 py-2 border-2 border-black font-pixeboy w-[9vw] h-[8vh] text-[4vh]">LOG IN</button>
      </div>
    </div>
  );
}
