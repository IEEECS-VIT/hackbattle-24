import TeamCode from "./Code";
import Card from "./spon_single_component"

export default function Tracks() {
  return (

    <section
      className="relative min-h-[100vh] bg-[#35B857] flex flex-col items-center justify-center "
      id="tracks"
    >
      {/* Title */}
      <p className="bg-[#35B857] pt-2 text-6xl w-full sm:w-[50vw] h-[10vh] text-center font-pixeboy mt-3 mb-6">
        SPONSORED BY
<<<<<<< HEAD
      </h1>
      <div className="md:hidden flex flex-col items-center justify-center gap-8 mt-20">
        <img
          src="./techgreenlogo.jpg"
          alt="Tech Green Logo"
          className="w-56 h-56 sm:w-40 sm:h-40 object-contain"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        <img
          src="./creamlogo.png"
          alt="Cream Logo"
          className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <img
          src="./easelogo.jpg"
          alt="Ease Logo"
          className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
        <img
          src="./bglogo.cms"
          alt="BG Logo"
          className="top-[15%] w-36 h-36 sm:w-40 sm:h-40 object-contain"
          data-aos="zoom-in"
        />
      </div>
      <img
        src="./techgreenlogo.jpg"
        alt="BG Logo"
        className="hidden md:block absolute top-[6%] left-[17%] md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
        data-aos="fade-right"
      />
      <img
        src="./creamlogo.png"
        alt="Cream Logo"
        className="hidden md:block absolute top-[6%] right-[14%] md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
        data-aos="fade-left"
      />
      <img
        src="./easelogo.jpg"
        alt="Ease Logo"
        className="hidden md:block absolute left-[17%] bottom-[21%] md:w-48 md:h-48 lg:w-56 lg:h-40 object-contain"
        data-aos="fade-up-right"
      />
      <img
        src="./bglogo.cms"
        alt="Tech Green Logo"
        className="hidden md:block absolute right-[12%] bottom-[20%] md:w-48 md:h-40 lg:w-[270px] lg:h-40 object-contain"
        data-aos="fade-up-left"
      />
=======
      </p>

      <div className="w-full flex flex-wrap justify-center gap-12 lg:gap-28 p-4 pb-10">
        <Card title="Techknowgreen" imageSrc="./techgreenlogo.jpg" />
        <Card title="Cream Stone" imageSrc="./creamlogo.png" />
        <Card title="Burger King" imageSrc="./bglogo.cms" />
        
        <Card title="Ease My Trip" imageSrc="./easelogo.jpg" />
      </div>
>>>>>>> a35e8d3ca9a4206630b42ed3a3df9dd969e82864
    </section>
  );
}