import fs from "fs";
import path from "path";
import Image from "next/image";
import { BlogTypes } from "../../../../types/type";
import CommentsSection from "@/components/Comment";
async function fetchBlogData(id: string): Promise<BlogTypes | null> {
  const filePath = path.join(process.cwd(), "public", "data", "blogsData.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileContent);
  return blogs.find((blog: BlogTypes) => blog.id.toString() === id) || null;
}
const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await fetchBlogData(id);
  if (!blog) {
    return <p>Blog not found!</p>;
  }
  const {
    title,
    image,
    category,
    author,
    authorPic,
    published_date,
    reading_time,
    content,
    tags,
  } = blog;
  return (
    <div className="container mx-auto my-12 p-6 xl:pt-24 pt-14">
      <div className="md:w-[90%] mx-auto w-[98%]  md:pt-36 pt-24 md:px-0 px-7">
        <h1 className="xl:text-[35px] text-[23px] leading-[25px] xl:leading-[50px] font-bold mb-8 font-inter text-center text-gray-500 xl:w-[80%]  mx-auto md:text-[27px] 2xl:text-[42px]">
          {title}
        </h1>
        <div className="flex justify-center mb-8">
          <Image
            src={image}
            alt={title}
            height={300}
            width={300}
            className="rounded-lg xl:h-[300px] xl:w-[550px] h-[200px] w-[300px] md:h-[230px] md:w-[450px] lg:h-[300px] lg:w-[500px] object-cover shadow-xl"
          />
        </div>
        <div className="text-gray-600 mb-4">
          <p className="flex items-center mb-4 justify-center">
            <Image
              src={authorPic}
              alt={author}
              height={200}
              width={200}
              className="xl:w-14 xl:h-14 h-10 w-10 2xl:h-16 2xl:w-16 rounded-full mr-2"
            />
            <span className="text-gray-500 pt-4 text-[12px] xl:text-[13px] 2xl:text-[16px] whitespace-nowrap mb-4">
              {author}
            </span>
            <pre className="pt-4 mb-4"> |</pre>
            <span className="ml-2 pt-4 text-gray-500 text-[12px] xl:text-[13px] 2xl:text-[16px]  whitespace-nowrap mb-4">
              {published_date}
            </span>
          </p>
          <p className="mb-2 text-center  text-[12px] -mt-3 text-gray-500 2xl:text-[16px] ">
            {reading_time}
          </p>
          <p className="mb-2 text-center text-gray-500 text-[13px] 2xl:text-[16px]">
            Category: {category}
          </p>
          <div className="tags mt-2 text-center">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-gray-200 md:py-1 text-gray-700 xl:text-[13px] xl:px-2 xl:py-1 text-[12px] 2xl:text-[16px] px-2 rounded mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="content mt-4 text-gray-500 xl:text-[13px] text-[13px] font-inter">
          {Array.isArray(content) && content.length > 0 ? (
            content.map((section: string, index: number) => (
              <div key={index} className="mb-6">
                <p>{section}</p>
              </div>
            ))
          ) : (
            <p>No content available.</p>
          )}
        </div>
        <CommentsSection />
      </div>
    </div>
  );
};

export default BlogDetails;
