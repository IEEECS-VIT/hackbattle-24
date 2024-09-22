"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Discord from "../../../public/discord_logo.svg";

export default function Navbar({ setGoogleVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authStatus, setAuthStatus] = useState(null);

  // Check auth status from localStorage on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem("AccessToken");
    if (accessToken) {
      setAuthStatus("authenticated");
    } else {
      setAuthStatus("unauthenticated");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle login/logout behavior
  const handleAuthButton = () => {
    if (authStatus === "unauthenticated") {
      setGoogleVisible(true); // Show Google login modal
    } else {
      localStorage.removeItem("AccessToken"); // Log out by removing token
      setAuthStatus("unauthenticated"); // Update state
    }
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
      <ul className="hidden md:flex items-center lg:gap-12 md:gap-6 text-black font-bold text-3xl tracking-wider">
        <Link href="/">
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
        <Link href="/timeline">
          <li className="hover:underline">Timeline</li>
        </Link>
        <li>
          <a href="https://discord.gg/Yj77zdEH" target="_blank">
            <Image src={Discord} width={40} height={40} alt="Discord Logo" />
          </a>
        </li>
      </ul>

      <div className="flex gap-4 lg:px-4 md:p-0">
        {/* Login/Logout Button */}
        <button
          className="block md:block bg-customBlue text-[#F5E6DA] font-pixeboy text-3xl px-4 py-1 rounded-sm border-2 border-black shadow-[4px_4px_0px_#333] hover:bg-blue-700"
          onClick={handleAuthButton}
        >
          {authStatus === "unauthenticated" ? "Login" : "Logout"}
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
      </div>
      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-6xl font-bold font-pixeboy z-[1001]">
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
            <li className="hover:underline cursor-pointer text-center">
              <a href="/#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="hover:underline cursor-pointer text-center">
              <a href="/#tracks" onClick={toggleMenu}>
                Tracks
              </a>
            </li>
            <li className="hover:underline cursor-pointer text-center">
              <a href="/#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="hover:underline cursor-pointer text-center">
              <a href="/#faq" onClick={toggleMenu}>
                FAQ
              </a>
            </li>
            <li className="hover:underline cursor-pointer text-center">
              <a href="/timeline" onClick={toggleMenu}>
                Timeline
              </a>
            </li>
            <li>
              <a href="https://discord.gg/Yj77zdEH" target="_blank">
                <Image
                  src={Discord}
                  width={35}
                  height={35}
                  alt="Discord Logo"
                  className="mx-auto"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
