"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SideBarTypes } from "../../types/type";
const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState<SideBarTypes[]>([]);
  useEffect(() => {
    fetch("/data/blogsData.json")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <>
      <div className="">
        <div className="">
          <h3 className="text-[19px] 2xl:text-[26px] font-semibold px-4 text-gray-500 font-inter">
            Latest Blogs
          </h3>
          <div className="">
            {popularBlogs.slice(0, 5).map((blog, index) => (
              <div
                key={index}
                className="mb-2 my-2 border-b-2 border-spacing-56 px-4"
              >
                <h4 className="xl:text-[13px] text-[12px] font-medium mb-2 2xl:text-[16px]">
                  {blog.title}
                </h4>
                <button className="font-medium xl:text-[12px] text-[11px] inline-flex items-center hover:text-orange-500 underline pb-5 text-black  py-1 px-12 rounded-md 2xl:text-[15px]">
                  Learn More
                  <FaArrowRight className="ml-2 mt-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-[19px] font-semibold  2xl:text-[26px] px-4 mt-0 text-gray-500 font-inter">
          Popular Blogs
        </h3>
        <div className="">
          {popularBlogs.slice(6, 9).map((blog, index) => (
            <div
              key={index}
              className="mb-2 my-2 border-b-2 border-spacing-56 px-4"
            >
              <h4 className="xl:text-[13px] font-medium mb-2 text-[12px] 2xl:text-[16px]">
                {blog.title}
              </h4>
              <button className="font-medium text-[11px] xl:text-[12px] inline-flex items-center hover:text-orange-500 underline pb-5 text-black  py-1 px-12 rounded-md 2xl:text-[15px]">
                Learn More
                <FaArrowRight className="ml-2 mt-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-[19px] font-semibold  2xl:text-[26px] px-4 mt-0 text-gray-500 font-inter">
          Reader&apos;s Favorites
        </h3>
        <div className="">
          {popularBlogs.slice(10, 14).map((blog, index) => (
            <div
              key={index}
              className="mb-2 my-2 border-b-2 border-spacing-56 px-4"
            >
              <h4 className="xl:text-[13px] text-[12px] font-medium mb-2 2xl:text-[16px]">
                {blog.title}
              </h4>
              <button className="font-medium text-[11px] xl:text-[12px]inline-flex items-center hover:text-orange-500 underline pb-5 text-black  py-1 px-12 rounded-md 2xl:text-[15px]">
                Learn More
                <FaArrowRight className="ml-2 mt-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
