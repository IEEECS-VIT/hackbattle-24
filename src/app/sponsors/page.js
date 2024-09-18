"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      {/* Desktop View */}
      <div className="relative w-full min-h-screen hidden lg:block bg-[#35167C]">
        
        {/* Background Image (absolute positioning behind the sponsor image) */}
        <div className="absolute inset-0 z-0 pt-12"> {/* Positioned absolutely to fill the screen */}
          <Image
            src="/sponsors-bg.svg"
            alt="Sponsors Background"
            layout="fill"   // Makes the image fill its container
            objectFit="cover"  // Ensures it covers the container
            objectPosition="center"  // Centers the image
          />
        </div>

        {/* Sponsors Image */}
        <div className="relative z-10 pt-12"> {/* Positioned relative to be on top of the background */}
          <Image
            src="/sponsors.svg"
            alt="Sponsors"
            layout="responsive"  // Maintain the aspect ratio of the image
            width={1700}         // Set a custom width (adjust based on your image's resolution)
            height={1120}        // Set a custom height (adjust based on your image's resolution)
            objectFit="contain"  // Ensures the image doesn't get cut off
            objectPosition="center"  // Centers the image
          />
        </div>

      </div>

      {/* Mobile View */}
      <div className="relative w-full min-h-screen lg:hidden block pt-12">
      <div className="absolute inset-0 z-0 pt-4"> {/* Positioned absolutely to fill the screen */}
          <Image
            src="/sponsors-bg.svg"
            alt="Sponsors Background"
            layout="fill"   // Makes the image fill its container
            objectFit="cover"  // Ensures it covers the container
            objectPosition="center"  // Centers the image
          />
        </div>

        {/* Sponsors Image */}
        <div className="relative z-10 pt-4"> {/* Positioned relative to be on top of the background */}
          <Image
            src="/sponsors-mobile.svg"
            alt="Sponsors"
            layout="responsive"  // Maintain the aspect ratio of the image
            width={1700}         // Set a custom width (adjust based on your image's resolution)
            height={1120}        // Set a custom height (adjust based on your image's resolution)
            objectFit="contain"  // Ensures the image doesn't get cut off
            objectPosition="center"  // Centers the image
          />
        </div>
      </div>

    </div>
  );
}
