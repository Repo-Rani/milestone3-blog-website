import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
    <div className="bg-black pb-4">
    <div className="mt-[50px] py-5 flex flex-col lg:flex-row items-center justify-between text-white  gap-12 lg:gap-0">
      {/* Info Section */}
      <div className="flex-1 flex flex-col gap-5">
        {/* Logo */}
        <div className="flex items-center text-white space-x-2 md:ml-[4rem]  -ml-[-2rem]">
              <Image src="/logo.png" alt="logo" height={32} width={32} className="h-[25px] w-[25px] md:w-[32px] md:h-[32px]" />
              <div className="text-[1rem] lg:text-[1.5rem] font-bold  italic flex items-center">
                <span className="md:text-[2rem] text-[1.5rem]">W</span>ander
                <span className="md:text-[2rem] text-[1.5rem]">V</span>isit
              </div>
            </div>

        {/* Description */}
        <p className="font-light text-base italic md:ml-[4rem] ml-[2rem] ">
        Discover the wonders of the world, one unforgettable journey at a time. From breathtaking landscapes to hidden gems, lets embark on adventures that inspire, connect, and create lifelong memories. Your next great story begins here lets explore the endless beauty of travel together!        </p>

        {/* Icons */}
        <div className="mt-2  md:ml-[4rem] xsm:ml-[8rem] sm:ml-[6rem] ml-[4rem] flex gap-5">
          <Image src="/facebook.png" alt="facebook" width={28} height={28} />
          <Image src="/instagram.png" alt="instagram" width={28} height={28} />
          <Image src="/twitter.png" alt="twitter" width={28} height={28} />
          <Image src="/youtube.png" alt="youtube" width={28} height={28} />
        </div>
      </div>

      {/* Links Section */}
      <div className="flex-1 flex flex-row lg:flex-row justify-center gap-14 lg:gap-20 w-[70%] mx-auto ">
        {/* Links List */}
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold italic">Links</span>
          <ul className="flex flex-col gap-3">
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/blog">Blog</Link>
                  </li>
                 
                  <li className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
        </div>
        <div className="flex flex-col gap-3 font-light">
          <span className="font-bold italic">Tags</span>
          <Link href="/" className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">Destination</Link>
          <Link href="/" className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">Adventure</Link>
          <Link href="/" className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">Beaches</Link>
          <Link href="/" className="nav_link hover:text-[#F2613F] transition-all duration-200 hover:scale-105">Mountains</Link>
          


        </div>
        
       
      </div>

     
    </div>
     <div className="text-center">
     <p className=" text-sm text-white xxl:text-lg xl:text-lg ">
       &copy; 2024 LovelyPerfume | All rights reserved.
     </p>
   </div>
   </div>
   </>

  );
};

export default Footer;
