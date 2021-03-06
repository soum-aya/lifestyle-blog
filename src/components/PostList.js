import React from "react";
import Post from "./Post";
import { FaCaretDown } from "react-icons/fa";
import ReactLoading from "react-loading";
import { useGlobalContext } from "../context";

function PostList() {
  const { posts, pageNum, setPageNum, allPosts, nextPosts } = useGlobalContext();

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
        {nextPosts.length < 5 ? (
          <p className="mb-12 capitalize text-lg font-semibold">no more posts to load!</p>
        ) : (
          <button className="flex items-center bg-nav-hover text-white uppercase px-10 py-4 mb-12 font-medium" onClick={() => setPageNum(pageNum + 1)}>
            load more
            <FaCaretDown className="flex-inline" />
          </button>
        )}
      </div>
    </section>
  );
}

export default PostList;
