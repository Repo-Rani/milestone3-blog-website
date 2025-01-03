import React, { useState } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

import { navProps } from "../../types/type";

export const MobileNav = ({ showNav, closeNav }: navProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>

      {/* Navigation Drawer */}
      <div
        className={`text-white ${navOpen}  transform transition-all duration-500 delay-300 fixed flex flex-col h-full w-[80%] sm:w-[60%] bg-black space-x-6 z-[10000]`}
      >
        <div className="flex items-center space-x-10 mt-20">
          <ul className="flex flex-col items-center justify-center  gap-5 text-white md:ml-[9rem]">
            {/* Navigation Links */}
            {routes.map((route, index) => (
              <li
                key={index}
                className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[20px] hover:text-[#F2613F] transition-all duration-200 hover:scale-105"
              >
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}

            <div className="flex flex-col items-center gap-4 ml-12 mt-4">
              <button
                className="rounded-lg text-[#F2613F] py-[0.2rem] px-2 border border-transparent text-center text-md bg-white transition-all font-semibold shadow-md hover:shadow-lg focus:bg-white focus:shadow-none active:bg-white hover:text-white hover:bg-[#F2613F]"
              >
                <Link href="/login"> Log In</Link>
              </button>
              <button
                className="rounded-lg text-white py-[0.2rem] px-2 border border-transparent text-center text-md bg-[#F2613F] transition-all font-semibold shadow-md hover:shadow-lg focus:bg-white focus:shadow-none active:bg-white hover:text-[#F2613F] hover:bg-white"
              >
                <Link href="/signup"> Sign Up</Link>
              </button>
            </div>
          </ul>

          {/* Close Button */}
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 text-white"
          />
        </div>
      </div>
    </div>
  );
};
