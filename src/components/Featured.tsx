"use client";
import { useState } from "react";
import Image from "next/image";

const Featured = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="md:mt-16 mt-8 bg-gray-100 py-12 px-6 lg:px-12">
      {/* Featured Heading */}
      <div className="flex items-center mb-14">
        <div className="flex-grow h-[2px] bg-gray-300"></div>
        <h1 className="mx-4 text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-800 whitespace-nowrap">
          Featured
        </h1>
        <div className="flex-grow h-[2px] bg-gray-300"></div>
      </div>

      {/* News Channels */}
      <div className="flex justify-center md:mt-0 -mt-8 md:flex-row md:ml-0 xsm:ml-[8rem] sm:ml-[6rem] xs:ml-[4rem] flex-col md:gap-8 gap-0 mb-12">
        <Image
          src="/bbc.png"
          alt="BBC Travel"
          height={30}
          width={30}
          className="w-32 h-auto  filter grayscale"
        />
        <Image
          src="/ng.png"
          alt="National Geographic"
          height={30}
          width={30}
          className="md:w-32 md:h-24 w-28 h-24 filter grayscale"
        />
        <Image
          src="/lonely_image.png"
          alt="Travel + Leisure"
          height={30}
          width={30}
          className="w-32 h-auto  filter grayscale"
        />
        <Image
          src="/nbc.png"
          alt="Conde Nast Traveler"
          height={30}
          width={30}
          className="md:w-32 h-auto w-28 mb-8 filter grayscale"
        />
      </div>

      {/* Featured Content */}
      <div className="md:mt-28 mt-6 flex items-center lg:flex-row flex-col-reverse gap-12">
        <div className="lg:flex-1 relative w-full h-[200px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
          <Image
            src="/featured.avif"
            alt="Featured Image"
            fill
            className="object-cover shadow-lg shadow-gray-600 hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h1 className="md:text-3xl lg:text-[2rem] xl:text-4xl xsm:text-[1.7rem] text-2xl font-bold italic ml-5">
            Unveiling Wonders: Explore, Relax, and Discover the Beauty Around
            You
          </h1>
          <p className="lg:text-xl md:text-lg xsm:text-base text-base font-light ml-5">
            Embark on a journey that redefines the way you see the world.
            Picture yourself wandering through tranquil forests, gazing at
            sunrises over majestic mountains, or losing yourself in the charm of
            bustling city streets. Each destination offers a blend of culture,
            history, and unique experiences that create unforgettable memories.
            {showMore && (
              <>
                <span>
                  {" "}
                  Whether its the thrill of adventure or the solace of
                  relaxation, every place has a story to tell. Unearth hidden
                  gems, savor exotic cuisines, and connect with locals whose
                  warmth and hospitality will touch your soul. The journey isnt
                  just about reaching new places; its about the moments that
                  transform you along the way.
                  <br />
                  Take a deep dive into the mysteries of ancient ruins, the
                  tranquility of crystal-clear beaches, or the vibrant nightlife
                  of global capitals. Let your curiosity guide you to
                  destinations you have only dreamed of, and make every step an
                  opportunity to create lifelong memories.
                </span>
              </>
            )}
          </p>
          <button
            className=" lg:left-[-6.5rem] xl:left-[-7rem] md:relative md:left-44 md:text-pretty md:py-4 md:px-5 py-2 px-4 text-sm xsm:ml-32 sm:ml-28  xs:ml-24 border-none rounded-lg w-max bg-slate-900 text-white hover:bg-gray-500 hover:scale-110 transition-all duration-300"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
