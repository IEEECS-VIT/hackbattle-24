"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ loginAction }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute flex items-center justify-between bg-white border-b-2 border-black h-[8vh] md:h-[10vh] px-2 md:px-10 w-full font-pixeboy z-[1000]">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="ieeecslogo.svg"
            width={150}
            height={150}
            alt="IEEE Computer Society Logo"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-12 text-black font-bold text-3xl tracking-wider">
        <Link href="/">
          {" "}
          <li className="hover:underline">Home</li>
        </Link>
        <li className="hover:underline">
          <a href="/#tracks">Tracks</a>
        </li>
        <li className="hover:underline">
          <a href="/#about">About</a>
        </li>
        <li className="hover:underline">
          <a href="/#faq">FAQ</a>
        </li>
        {/* <li className="hover:underline">Team</li> */}
        <Link href="/timeline">
          {" "}
          <li className="hover:underline">Timeline</li>
        </Link>
        <Link href="/sponsors">
          {" "}
          <li className="hover:underline">Sponsors</li>
        </Link>
      </ul>

      {/* Login Button - Hidden on Mobile */}
      <button
        className="block md:block bg-customBlue text-[#F5E6DA] font-pixeboy text-3xl px-4 py-1 rounded-sm border-2 border-black shadow-[4px_4px_0px_#333] hover:bg-blue-700 hover:cursor-not-allowed"
        onClick={loginAction}
      >
        LOGIN
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden block " onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? "cross-icon.svg" : "burger-menu.svg"}
          width={50}
          height={50}
          alt={isMenuOpen ? "Close Menu" : "Open Menu"}
        />
      </button>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-6xl font-bold font-pixeboy z-[1001]">
          {/* Cross Icon in the Full-Screen Menu */}
          <button className="absolute top-5 right-5" onClick={toggleMenu}>
            <Image
              src="cross-icon.svg"
              width={75}
              height={75}
              alt="Close Menu"
            />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col gap-8 mt-12">
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              Home
            </li>
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              Tracks
            </li>
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              About
            </li>
            <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              FAQ
            </li>
            {/* <li
              className="hover:underline cursor-pointer text-center"
              onClick={toggleMenu}
            >
              Team
            </li> */}
            {/* <button className=" bg-customBlue text-[#F5E6DA] font-pixeboy text-5xl  py-1 rounded-sm border-2 border-black shadow-[4px_4px_0px_#333] hover:bg-blue-700">
              LOGIN
            </button> */}
          </ul>
        </div>
      )}
    </nav>
  );
}
