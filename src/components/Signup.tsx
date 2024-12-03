import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
const Signup = ({ isOpen, onClose }: any) => {
  return (
    <>
      <section
        className={`fixed top-0 left-0 h-full w-full z-50 flex justify-center mt-10  items-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[80vh] lg:py-0">
          <div className="w-[40rem] bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end items-center">
              <RxCross1
                className="text-white h-6 w-6 m-3 cursor-pointer"
                onClick={onClose}
              />
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-200 md:text-[28px] dark:text-white">
                Sign Up to Get Started
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                  >
                    Enter Your full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="flex justify-between space-x-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-400 dark:text-gray-300"
                      >
                        I agree to the{" "}
                        <span className="text-gray-200 hover:underline cursor-pointer">
                          Terms and Conditions
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="border-[0.5px] opacity-30 w-[43%] border-gray-300"></span>
                  <span className="text-white text-[18px]">or</span>
                  <span className="border-[1px] opacity-30  w-[43%] border-gray-300"></span>
                </div>

                <div className="flex justify-center items-center cursor-pointer">
                  <span className="flex border-gray-600  text-white py-2 px-3">
                    {" "}
                    <FcGoogle className="h-6 w-6 mr-2" /> Continue With Google
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full  text-white bg-[#F2613F]  hover:bg-white hover:text-[#F2613F] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-white opacity-75 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/modal"
                    className="font-medium text-white opacity-100 hover:underline dark:text-primary-500"
                  >
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
