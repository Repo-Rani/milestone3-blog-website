"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  const videos = ["/3195812-uhd_3840_2160_25fps.mp4"]; 

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      
      <video
        autoPlay
        muted
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videos[0]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center max-w-[70rem] text-white z-10 top-1/2 translate-y-[-50%]">
        
        <h1 className="xsm:text-3xl sm:text-2xl text-xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 whitespace-nowrap">
          Explore. Dream. Discover.
        </h1>

        
        <p className="xsm:text-lg text-base  md:text-xl lg:2xl font-light max-w-3xl  md:mx-auto md:px-4 mb-6">
          Start a journey to breathtaking destinations. Discover adventure, relaxation, and rich cultural experiences.
        </p>

        {/* Button */}
        <Link href='/blog'>
        <button className="bg-transparent border-2 border-white text-white lg:py-3 lg:px-6 xsm:py-2 xsm:px-4 xs:py-2 xs:px-3 xs:text-sm md:text-lg xsm:text-base font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
          Start Exploring
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;