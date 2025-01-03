"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Props } from "../../types/type";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setnavBg(true);
      } else {
        setnavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // Toggle Search Mode
  const handleSearchToggle = () => {
    setIsSearchActive(true);
  };

  // Close Search Mode
  const closeSearchMode = () => {
    setIsSearchActive(false);
  };

  return (
    <header
      className={`fixed ${
        navBg ? "bg-black" : "fixed"
      } h-[12vh] z-[20] w-full transition-all duration-200`}
    >
      <nav className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[90%] mx-auto">
        {/* If Search Mode is Active */}
        {isSearchActive ? (
          <div className="flex w-full items-center justify-between bg-black text-white p-2">
            {/* Search Input */}
            <div className="flex items-center w-full space-x-2">
              <FaSearch size={24} />
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                placeholder="Search..."
              />
            </div>
            {/* Close Button */}
            <IoClose
              size={30}
              className="cursor-pointer"
              onClick={closeSearchMode}
            />
          </div>
        ) : (
          <>
            {/* Logo */}
            <div className="flex items-center text-white space-x-2">
              <Image
                src="/logo.png"
                alt="logo"
                height={32}
                width={32}
                className="h-[25px] w-[25px] md:w-[32px] md:h-[32px] "
              />
              <div className="text-[18px] md:text-[1.5rem] font-bold italic flex items-center">
                <span className="md:text-[2rem] text-[1.5rem]">W</span>ander
                <span className="md:text-[2rem] text-[1.5rem]">V</span>isit
              </div>
            </div>

            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-6">
                <ul className="flex items-center justify-end xl:gap-5 gap-5 lg:gap-4 text-white">
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/blogs">Blog</Link>
                  </li>

                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Login and Signup Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="rounded-lg text-[#F2613F] py-[0.2rem] px-3 border border-transparent text-center text-lg bg-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-white focus:shadow-none active:bg-white hover:text-white hover:bg-[#F2613F]"
                >
                  <Link href="/login"> Login</Link>
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="rounded-lg text-white py-[0.2rem] px-3 border border-transparent text-center text-lg bg-[#F2613F] transition-all font-semibold shadow-md hover:shadow-lg focus:bg-white focus:shadow-none active:bg-white hover:text-[#F2613F] hover:bg-white"
                >
                  <Link href="/signup"> Sign Up</Link>
                </button>
              </div>

              {/* Login and Signup Modals */}

              {/* Search Button */}
              <button
                className="text-black text-lg px-3 py-1 rounded"
                onClick={handleSearchToggle}
              >
                <FaSearch
                  className="text-white hover:scale-110 hover:text-[#F2613F] transition-all duration-300 ease-linear"
                  size={28}
                />
              </button>

              {/* Burger Menu */}
              <HiBars3BottomRight
                onClick={openNav}
                className="w-8 h-8 cursor-pointer text-white lg:hidden"
              />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
