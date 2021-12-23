import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleFeaturedPost = ({ content, featured_media, id }) => {
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
    <article className="card">
      <img src={featuredImg.source_url} className="featured-post-img" />
      <div className="featured-post-info">
        <div dangerouslySetInnerHTML={{ __html: `${content.rendered.substring(0, 40)}...` }} className="featured-post-desc"></div>
        <Link to={`/post/${id}`} className="read-more read-more-hero ">
          read more
          <FaCaretRight style={{ marginLeft: "6px", fontSize: "20px" }} />
        </Link>
      </div>
    </article>
  );
};

export default SingleFeaturedPost;
