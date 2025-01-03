"use client";

import React from "react";
import Image from "next/image";
import { CategorySelectionPropTypes } from "../../types/type";
import { CategorySelectionTypes } from "../../types/type";

const MenuCategories = ({
  onSelectCategory,
  activeCategory,
}: CategorySelectionPropTypes) => {
  const categories: CategorySelectionTypes[] = [
    { name: "Destinations", bgColor: "#84c6ea", imageSrc: "/destination.jpg" },
    { name: "Adventure", bgColor: "#e89fd8",  imageSrc: "/adventure.webp" },
    { name: "Beaches", bgColor: "#9feda1", imageSrc: "/beach.jpg" },
    { name: "Mountains", bgColor: "#f09b86", imageSrc: "/mountain.avif" },
    { name: "Travel Tips", bgColor: "#f1bc7a", imageSrc: "/travel.jpg" },
    { name: "City Guides", bgColor: "#a59ef0", imageSrc: "/city.jpg" },
  ];

  return (
    <div className="  w-[40%] md::w-[70%] xl:w-[100%] mx-auto px-2 mb-8 space-x-4 xl:flex xl:flex-row flex-col gap-y-6 xl:justify-center items-center border-b-2 py-1 text-gray-900 font-semibold font-inter text-[11px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      <button
        onClick={() => onSelectCategory(null)}
        className={`xl:ml-4 xl:px-4 xl:py-2 2xl:py-3 2xl:text-[17px] 2xl:px-7 py-1 px-0 rounded-md ${
          activeCategory ? "" : "active-button"
        }`}
        style={{ backgroundColor: "#E0E0E0" }}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category.name)}
          className={` flex items-center xl:px-4 xl:py-2 2xl:py-3 2xl:px-7 py-1 px-2 whitespace-nowrap xl:text-[11px] 2xl:text-[17px] rounded-md mr-4`}
          style={{
            backgroundColor: category.bgColor,
          }}
        >
          <Image
            src={category.imageSrc}
            alt={category.name}
            height={20}
            width={20}
            className="w-5 h-5 2xl:h-8 2xl:w-8 rounded-full mr-2"
          />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
