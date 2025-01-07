"use client";

import React, { useState } from "react";
import Image from "next/image";


const About = () => {
  const [showStory, setShowStory] = useState(false);

  const toggleStory = () => {
    setShowStory(!showStory);
  };

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/team.webp"
          alt="about-image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-black/50"></div>

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10  ">
          <h1 className="text-[1rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] font-bold leading-snug tracking-wide drop-shadow-lg animate__animated animate__fadeIn w-full  mx-auto whitespace-nowrap">
            Meet Your Guiding Stars
          </h1>
          <p className="text-sm md:text-xl font-light mt-4 w-full mx-auto drop-shadow-md animate__animated animate__fadeIn animate__delay-1s">
            Discover the story behind me and my incredible team!
          </p>
        </div>
      </div>
      {/* About Content */}
      <div className="mt-16 px-6 lg:px-16 text-center">
        <div className="relative">
          <h2 className="text-[1.5rem]  md:text-[2.5rem] font-bold text-gray-800 mb-6">
            A Passionate Team Crafting Extraordinary Journeys
          </h2>
        </div>
        <p className="text-base md:text-xl font-light text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 animate__animated animate__fadeIn animate__delay-2s">
          Our team is a dynamic blend of passionate explorers, visionary
          storytellers, and creative trailblazers, all united by one mission: to
          share the awe-inspiring beauty of the world with you. Each member
          brings their own unique spark, talent, and perspective, ensuring that
          every journey we embark on is an unforgettable experience. Together,
          we create not just memories, but stories that last a lifetime, waiting
          for you to discover.
        </p>


        {/* My Story Button */}
        <button
          onClick={toggleStory}
          className="mt-6 md:px-6 md:py-3 px-4 py-2 bg-gradient-to-r from-[#F2613F] to-[#FF814A] text-white rounded-full md:text-lg text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {showStory ? "Hide My Story" : "Read My Story"}
        </button>

        {showStory && (
          <div className="mt-10 bg-gradient-to-r from-[#F8E1D4] via-[#FFF2E4] to-[#F8E1D4] p-8 rounded-lg shadow-xl text-left max-w-4xl mx-auto relative overflow-hidden animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex items-center justify-center mb-8">
              <div className="w-1/3 relative">
                <Image
                  src="/stories.jpg" 
                  alt="My Story Image"
                  layout="intrinsic"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-[1.5rem] font-bold text-gray-800 mb-4 text-center">
              🌟 My Story: From Dreams to Reality 🌟
            </h3>
            <div className="border-b-2 border-dashed border-[#F2613F] my-4"></div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              My journey began with a simple dream—to explore the world and
              share its beauty with others. With each destination, I discovered
              not just breathtaking landscapes but stories that connected me
              with the heart and soul of cultures across the globe.
            </p>
            <div className="flex items-center justify-center my-4">
              <div className="w-10 h-10 bg-[#F2613F] text-white rounded-full flex items-center justify-center shadow-lg animate__animated animate__pulse animate__infinite">
                ✈️
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Over the years, I gathered a team of like-minded adventurers who
              shared my vision. Together, we strive to bring you experiences
              that inspire, educate, and create lasting memories.
            </p>
            <div className="border-b-2 border-dashed border-[#F2613F] my-4"></div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Today, my story continues to unfold, and I invite you to be a part
              of it. Lets explore the world together, one journey at a time.
            </p>
          </div>



        )}
      </div>


      <div>

<div className="mt-16 bg-gradient-to-r from-[#F2613F] to-[#FF814A] text-white p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Our Achievements
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="text-center">
      <div className="text-4xl font-bold">50+</div>
      <p className="text-sm">Destinations Explored</p>
    </div>
    <div className="text-center">
      <div className="text-4xl font-bold">10K+</div>
      <p className="text-sm">Happy Clients</p>
    </div>
    <div className="text-center">
      <div className="text-4xl font-bold">100+</div>
      <p className="text-sm">Stories Shared</p>
    </div>
  </div>
</div>

</div>
    </section>
  );
};

export default About;
