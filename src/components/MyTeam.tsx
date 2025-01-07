"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedToolTip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/i1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/i2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "/i3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/i4.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "/i5.avif",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "/i6.jpg",
  },
];

 function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
export default AnimatedTooltipPreview