import React, { useState } from "react";
import { useGlobalContext } from "../context";
import SingleFeaturedPost from "./SingleFeaturedPost";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedPosts = () => {
  const { posts } = useGlobalContext();
  // const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (posts.length < 1) {
    return <p>no posts</p>;
  }
  return (
    <section className="featured-posts">
      <h2 className="featured-posts-title">Featured posts</h2>
      <div className="featured-posts-center">
        {/* <div className="controls">
          <button onCLick={sliderRef?.slickPrev}>
            <FaArrowLeft />
          </button>
          <button onCLick={sliderRef?.slickNext}>
            <FaArrowRight />
          </button>
        </div> */}
        <Slider {...settings}>
          {posts.map((post) => {
            return <SingleFeaturedPost key={post.id} {...post} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedPosts;
