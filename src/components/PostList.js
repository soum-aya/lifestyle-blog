import React from "react";
import Post from "./Post";
import { useGlobalContext } from "../context";

function PostList() {
  const { posts } = useGlobalContext();
  if (posts.length < 1) {
    return <p>no posts</p>;
  }
  return (
    <section>
      <div className="mx-24">
        {posts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default PostList;
