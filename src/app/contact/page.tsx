import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FaqContact from "@/components/FaqContact";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <section>
      <div className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/contact2.jpg"
          alt="contact-image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute top-0 left-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        {/* Content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center md:max-w-[70rem]  text-white z-10 top-1/2 translate-y-[-50%] mt-14 ">
          <h1 className="text-[1rem] sm:text[1.5rem] md:text-[2rem] font-bold mb-4 whitespace-nowrap ">
            CONTACT
          </h1>
          <p className="text-[1rem] md:text-xl font-light w-[300px] md:max-w-3xl md:whitespace-nowrap md:relative md:left-[-70px] lg:left-[-100px] lg:mx-auto lg:px-4 mb-6">
            Send me your Questions, Comments and Suggestions!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-[#F2613F] font-extrabold md:text-3xl text-2xl mt-6">
          Get In Touch
        </h1>
      </div>
      <div className="relative xsm:left-[35%] xs:left-[30%] md:left-[40%] lg:left-[42%] xl:left-[45%] md:w-[10rem] w-[8rem] h-[5px] mt-2 bg-[#F2613F]"></div>
      <div className="flex items-center justify-center mt-9">
        <div className="flex-grow h-[2px] bg-gray-300"></div>
        <h1 className="mx-4  text-2xl md:text-4xl font-medium text-black italic whitespace-nowrap">
          Contact Form
        </h1>
        <div className="flex-grow h-[2px] bg-gray-300"></div>
      </div>

      <div className="flex flex-col justify-center items-center md:pl-0 md:pr-0 pl-6 pr-6  gap-3 mt-[1rem] w-[90%] mx-auto text-justify">
        <p className="md:text-xl text-gray-500 text-center ">
          Send me your questions, comments, or suggestions!
        </p>
        <p className="md:text-lg text-gray-500 md:w-[43rem] text-center ">
          If you would like to work with me or you have a question or comment,
          you can contact me using the form below. You can also find{" "}
          <span className="text-[#F2613F]">more info about me here</span>.
        </p>
        <p className="md:text-lg  text-gray-500 mb-7 text-center">
          Sometimes I am busy traveling, but I try to respond to any messages!
        </p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <FaFacebook className="w-7 h-7 hover:text-[#F2613F] hover:scale-105 transition-all duration-300" />
        <FaTwitter className="w-7 h-7 hover:text-[#F2613F] hover:scale-105 transition-all duration-300" />
        <FaInstagram className="w-7 h-7 hover:text-[#F2613F] hover:scale-105 transition-all duration-300" />
      </div>

      <div className="flex  justify-center mt-5 ">
        <ContactForm />
      </div>

      <p className="text-gray-500 text-center md:text-lg text-[14px] w-[80%] mx-auto mt-3">
        This site is protected by reCAPTCHA, and the Google
        <span className="text-[#F2613F]">Privacy Policy</span> and
        <span className="text-[#F2613F]">Terms of Service</span> apply.
      </p>

      <div className="flex items-center md:flex-row  flex-col justify-center mt-10 gap-7">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center hover:scale-105 duration-300 transition-all ease-out flex-col">
          <FaPhone className="w-4 h-4 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-md md:text-lg text-black font-bold -ml-3">
            0302-2886058
          </h1>
        </div>
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center hover:scale-105 duration-300 transition-all ease-out flex-col -mr-3">
          <FaEnvelope className="w-4 h-4 md:h-7 text-white " />
        </div>
        <div>
          <h1 className="text-md md:text-lg text-black font-bold">
            ranimiss968@gmail.com
          </h1>
        </div>
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center hover:scale-105 duration-300 transition-all ease-out flex-col -mr-3">
          <FaMap className="w-4 h-4 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-md md:text-lg text-black font-bold">
            North Karachi
          </h1>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-300 md:mt-20 mt-10"></div>

      <div className="flex mt-7 w-[90%] mx-auto">
        <FaqContact />
      </div>

      <div className="md:max-w-5xl max-w-[55rem] mx-auto text-center mt-28">
        <h2 className="lg:text-5xl md:text-4xl text-[1.2rem] font-bold mb-6 text-black">
          Subscribe to Our Newsletter
        </h2>
        <p className="md:text-base text-sm w-[70%] mx-auto  text-gray-400">
          Stay updated with the latest news, trends, and special offers. Dont
          miss out on our exciting updates.
        </p>
        <div className="mt-12 flex items-center overflow-hidden bg-gray-50 rounded-md md:max-w-xl sm:max-w-[20rem] max-w-[18rem] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="md:w-full w-[70%] bg-transparent md:py-3.5 md:px-4 py-2.5 md:text-left text-center text-gray-800 md:text-base text-sm focus:outline-none overflow-hidden"
          />
          <button className="bg-black hover:bg-white hover:text-black text-white text-base tracking-wide md:py-3.5 md:px-6 py-2 px-4 hover:shadow-md   transition-all ease-in-out hover:scale-105 duration-300 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
