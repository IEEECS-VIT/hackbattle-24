export default function Tracks() {
  return (
    <section className="h-[100vh]  bg-[#FFC642] flex items-center justify-center">
      <img
        src="trackpixel.svg"
        alt="Overlay Image"
        className="absolute w-full h-full object-cover"
      />

      <img
        src="pagedown.svg"
        alt="pagedown"
        className="absolute h-full  w-screen object-contain"
      />
      <p className="bg-white p-4 text-5xl border-black border-2 w-[30vh] h-[15vh] mr-[5%] text-center font-pixeboy mb-[20px]">
        TRACKS
      </p>
    </section>
  );
}
