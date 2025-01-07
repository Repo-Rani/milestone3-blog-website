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
    { name: "Adventure", bgColor: "#e89fd8", imageSrc: "/adventure.webp" },
    { name: "Beaches", bgColor: "#9feda1", imageSrc: "/beach.jpg" },
    { name: "Mountains", bgColor: "#f09b86", imageSrc: "/mountain.avif" },
    { name: "Travel Tips", bgColor: "#f1bc7a", imageSrc: "/travel.jpg" },
    { name: "City Guides", bgColor: "#a59ef0", imageSrc: "/city.jpg" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center w-full px-4 mb-8 gap-4 border-b-2 py-4 text-gray-900 font-semibold font-inter text-sm">
      <button
        onClick={() => onSelectCategory(null)}
        className={`py-2 px-4 rounded-md text-xs sm:text-sm md:text-base  ${
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
          className="flex items-center justify-center py-1 px-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg"
          style={{
            backgroundColor: category.bgColor,
          }}
        >
          <Image
            src={category.imageSrc}
            alt={category.name}
            height={20}
            width={20}
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full mr-2"
          />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
