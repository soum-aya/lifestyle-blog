import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";

const SingleFeaturedPost = ({ content, featured_media }) => {
  const url = `http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`;

  const [featuredImg, setFeaturedImg] = useState([]);
  const fetchFeaturedImg = async () => {
    try {
      const response = await fetch(url);
      const featuredImg = await response.json();
      setFeaturedImg(featuredImg);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFeaturedImg();
  }, []);
  return (
    <article>
      <div className="featured-post-img" style={{ backgroundImage: `url(${featuredImg.source_url})` }}></div>
      <div className="featured-post-info">
        <div dangerouslySetInnerHTML={{ __html: `${content.rendered.substring(0, 50)}...` }} className="featured-post-desc"></div>
        <a href="#" className="read-more featured-post-link">
          read more
          <FaCaretRight style={{ marginLeft: "6px", fontSize: "20px" }} />
        </a>
      </div>
    </article>
  );
};

export default SingleFeaturedPost;
