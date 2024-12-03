import React from 'react'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import BlogPage from '@/components/BlogPage'
const page = () => {
  return (
    <div>
      <Hero />
      <Featured/>


<div className="xl:w-[95%] w-[95%] mx-auto mt-[3%]">
        <BlogPage />
      </div>

</div>
  )
}

export default page