import React from "react";
import Post from "./Post";
import { FaCaretDown } from "react-icons/fa";
import ReactLoading from "react-loading";
import { useGlobalContext } from "../context";

function PostList() {
  const { posts, pageNum, setPageNum, allPosts, loading } = useGlobalContext();

  if (!posts) {
    return <ReactLoading className="text-center mx-auto" type="bars" color={"#9b9b9b"} height={48} width={100} delay={50} />;
  }

  return (
    <section>
      <div className="mx-24">
        {posts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        {posts.length <= allPosts.length ? (
          <button className="flex items-center bg-nav-hover text-white uppercase px-8 py-4 text-sm mb-8" onClick={() => setPageNum(pageNum + 1)}>
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
