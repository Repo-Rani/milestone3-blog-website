
import React from 'react'
import Image from 'next/image'
import BlogPage from '@/components/BlogPage'
const Blog = () => {
  return (
    <>
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Image
        src="/blog.jpg"
        alt="blog-image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute top-0 left-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center max-w-[70rem] text-white z-10 top-1/2 translate-y-[-50%] mt-14 ">
        <h1 className="text-xl sm:text-[1.5rem] md:text-[2rem] font-bold mb-4 whitespace-nowrap">
          BLOG
        </h1>
        <p className="text-md  md:text-lg font-light max-w-3xl mx-auto px-4 mb-6">
          Recent travel blog posts
        </p>
      </div>

     
    </div>

    <div className="xl:w-[95%] w-[95%] mx-auto mt-[3%]">
        <BlogPage />
      </div>

 </>
  )
}

export default Blog;