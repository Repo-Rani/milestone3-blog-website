"use client";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { BlogCardsPropTypes } from "../../types/type";
import Image from "next/image";
const BlogCards: React.FC<BlogCardsPropTypes> = ({
  blogs,
  currentPage,
  selectedCategory,
  pageSize,
}) => {
  const filteredBlogs = blogs.filter(
    (blog) => !selectedCategory || blog.category === selectedCategory
  );
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <div className="grid xsm:grid-cols-2  grid-cols-1 xl:grid-cols-3 gap-[1rem] w-[95%] mx-auto">
      {paginatedBlogs.map((blog, index) => (
        <Link
          key={index}
          href={`/blog/${blog.id}`}
          className="p-3 shadow-lg bg-white rounded cursor-pointer"
        >
          <div>
            <Image
              src={blog.image}
              alt={blog.title}
              height={200}
              width={200}
              className="w-full xl:h-[28vh] h-[30vh] md:h-[43vh] object-cover"
            />
          </div>
          <h2 className="mt-4 mb-2 text-[11px] 2xl:text-[16px] font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h2>
          <p className="mb-2 text-[11px] 2xl:text-[14px] text-gray-600">
            <FaUser className="inline-flex items-center mr-2 h-3 w-3 2xl:h-4 2xl:w-4 text-black" />
            {blog.author}
          </p>
          <p className="text-[11px] 2xl:text-[14px] text-gray-500 mb-[-5px]">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
