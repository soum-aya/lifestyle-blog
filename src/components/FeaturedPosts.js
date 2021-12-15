import React, { useRef } from "react";
import { useGlobalContext } from "../context";
import SingleFeaturedPost from "./SingleFeaturedPost";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedPosts = () => {
  const { posts } = useGlobalContext();

  const NextArrow = ({ className, onClick }) => {
    return (
      <button className={className} style={{ fontSize: "40px", display: "block", right: "5px", zIndex: "1", height: "40px", width: "40px", opacity: "1", color: "black" }} onClick={onClick}>
        <FaArrowRight />
      </button>
    );
  };
  const PrevArrow = ({ className, onClick }) => {
    return (
      <div className={className} style={{ fontSize: "40px", display: "block", left: "5px", zIndex: "1", height: "40px", width: "40px", opacity: "1", color: "black" }} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (posts.length < 1) {
    return <p>no posts</p>;
  }
  return (
    <section className="featured-posts">
      <h2 className="featured-posts-title">Featured posts</h2>
      <div className="featured-posts-center">
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
