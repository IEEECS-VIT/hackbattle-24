import Navbar from "../components/Navbar";

export default function Timeline() {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative w-screen h-[70vh] bg-[#5AD178] overflow-hidden">
        <img
          src="pixelated-filter.svg"
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>
      <section className="relative w-screen h-[50vh] bg-[#FEC46F] overflow-hidden">
        <img
          src="pixelated-filter.svg"
          alt="Overlay Image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>
      {/* Text container positioned absolutely */}
      <div className="absolute top-[calc(79vh-1rem)] left-1/2 transform -translate-x-1/2">
        <h1 className="text-4xl font-bold text-white">TASK SUBMISSION</h1>
      </div>
    </main>
  );
}
