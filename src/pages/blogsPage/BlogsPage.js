import React from "react";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import Spinner from "../../utils/Spinner";
import { useGetBlogPostsQuery } from "../../features/blogPost/blogPostAPI";
import BlogCart from "../homePage/homePageComponents/BlogCart";
import Alert from "../../utils/Alert";

const BlogsPage = () => {
  const { data: getPosts, isLoading, error } = useGetBlogPostsQuery({ chunkLimit: 0, limit:0 },);
  // decide what to show based on the state
  let content = null;
  if (isLoading) content = <Spinner />;
  if (error) content = <Alert alert="Something went wrong" />;
  if (getPosts)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {getPosts.posts.map((post) => (
          <BlogCart key={post._id} blog={post} />
        ))}
      </div>
    );
  return (
    <>
      <PageTitleBanner title="Blog Page" />
      <div className="py-16 container mx-auto px-5">{content}</div>
    </>
  );
};

export default BlogsPage;
