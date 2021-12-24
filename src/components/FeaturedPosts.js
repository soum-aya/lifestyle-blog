import React, { useState } from "react";
import SingleFeaturedPost from "./SingleFeaturedPost";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react/cjs/react.development";

const tagsUrl = "http://localhost/wordpress/wp-json/wp/v2/tags";
const tagUrl = "http://localhost/wordpress/wp-json/wp/v2/posts?tags=";

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
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

  const fetchFeaturedPosts = async () => {
    try {
      const response = await fetch(tagsUrl);
      const tags = await response.json();

      const featuredPostTag = tags.filter((tag) => tag.name === "featured-post");
      const response1 = await fetch(`${tagUrl}${featuredPostTag[0].id}`);
      const featuredPosts = await response1.json();
      setFeaturedPosts(featuredPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  if (featuredPosts.length < 1) {
    return <p>no posts</p>;
  }
  return (
    <section className="featured-posts">
      <h2 className="featured-posts-title">Featured posts</h2>
      <Slider {...settings}>
        {featuredPosts.map((post) => {
          return <SingleFeaturedPost key={post.id} {...post} />;
        })}
      </Slider>
    </section>
  );
};

export default FeaturedPosts;
