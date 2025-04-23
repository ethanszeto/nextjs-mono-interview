import { callApi } from "@/lib/api";
import { BlogCard, BlogCardProps } from "@/components/general/BlogCard";

export default async function Home() {
  /**
   * Task 1:
   *
   * How can I GET the list of all blogs from the backend API, using the callAPI function?
   *
   * Backend URL: http://localhost:3000/api/all-blogs
   * API Documentation:
   */
  const { data, ok } = await callApi("GET", "http://localhost:3000/api/all-blogs");

  /**
   * Task 2:
   *
   * Now that I have my list of blogs, how can I display them
   * using the BlogCard component?
   */

  return (
    <>
      {ok ? (
        data.map((blog: BlogCardProps, key: number) => (
          <BlogCard title={blog.title} content={blog.content} author={blog.author} date={blog.date} key={key}></BlogCard>
        ))
      ) : (
        <p>Failed to get blogs</p>
      )}
    </>
  );
}
