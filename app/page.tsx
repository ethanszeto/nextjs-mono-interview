import { BlogCard, BlogCardProps } from "@/components/general/BlogCard";

export default async function Home() {
  /**
   * Question 1:
   * How can I get the total list of blogs from the internal API?
   *
   * Question 2:
   * How can I display all the blogs on the home page?
   */
  const response = await fetch("http://localhost:3001/api/all-blogs", { method: "GET" });
  const data = await response.json();

  return (
    <>
      {data.blogs.map((blog: BlogCardProps, key: number) => {
        return <BlogCard key={key} title={blog.title} content={blog.content} author={blog.author} date={blog.date} />;
      })}
    </>
  );
}
