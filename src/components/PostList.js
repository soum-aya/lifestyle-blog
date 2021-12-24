import React from "react";
import Post from "./Post";
import { FaCaretDown } from "react-icons/fa";
import { useGlobalContext } from "../context";

function PostList() {
  const { posts, pageNum, setPageNum, allPosts } = useGlobalContext();
  if (!posts) {
    return <p>no posts</p>;
  }
  return (
    <section>
      <div className="mx-24">
        {posts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        {pageNum <= allPosts.length ? (
          <button className="flex items-center bg-nav-hover text-white uppercase px-8 py-4 text-sm mb-8" onClick={() => setPageNum((prev) => prev + 4)}>
            load more
            <FaCaretDown className="flex-inline" />
          </button>
        ) : (
          <p className="mb-8 capitalize text-lg font-semibold">no more posts to load!</p>
        )}
      </div>
    </section>
  );
}

export default PostList;
