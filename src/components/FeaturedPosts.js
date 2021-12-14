import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import SingleFeaturedPost from "./SingleFeaturedPost";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeaturedPosts = () => {
  const { posts } = useGlobalContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = posts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  if (posts.length < 1) {
    return <p>no posts</p>;
  }
  return (
    <section className="featured-posts">
      <h2 className="featured-posts-title">Featured posts</h2>
      <div className="featured-posts-center">
        {posts.map((post, postIndex) => {
          let position = "nextSlide";
          if (postIndex === index) {
            position = "activeSlide";
          }
          if (postIndex === index - 1 || (index === 0 && postIndex === posts.length - 1)) {
            position = "lastSlide";
          }
          console.log(post);
          return <SingleFeaturedPost key={post.id} {...post} className={position} />;
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaArrowLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default FeaturedPosts;
