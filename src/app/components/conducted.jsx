"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Conducted() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="h-screen relative flex flex-col items-center justify-around overflow-hidden">
      <img
        src="desk-6.svg"
        alt="bg"
        className="absolute w-full h-full object-cover z-[-1] opacity-90"
      />
      <h1
        className="absolute top-0 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-crackman text-center text-black mt-4"
        data-aos="fade-down"
      >
        CONDUCTED BY
      </h1>
      <div className="md:hidden flex flex-col items-center justify-center gap-8 mt-20">
        <img
          src="./bglogo.cms"
          alt="BG Logo"
          className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
          data-aos="zoom-in"
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
          src="./techgreenlogo.jpg"
          alt="Tech Green Logo"
          className="w-56 h-56 sm:w-40 sm:h-40 object-contain"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
      </div>
      <img
        src="./bglogo.cms"
        alt="BG Logo"
        className="hidden md:block absolute top-[11%] left-[17%] md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
        data-aos="fade-right"
      />
      <img
        src="./creamlogo.png"
        alt="Cream Logo"
        className="hidden md:block absolute top-[11%] right-[14%] md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
        data-aos="fade-left"
      />
      <img
        src="./easelogo.jpg"
        alt="Ease Logo"
        className="hidden md:block absolute left-[17%] bottom-[22%] md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
        data-aos="fade-up-right"
      />
      <img
        src="./techgreenlogo.jpg"
        alt="Tech Green Logo"
        className="hidden md:block absolute right-[12%] bottom-[29%] md:w-48 md:h-48 lg:w-[270px] lg:h-auto object-contain"
        data-aos="fade-up-left"
      />
    </section>
  );
}
