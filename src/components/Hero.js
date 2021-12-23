import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const heroUrl = "http://localhost/wordpress/wp-json/wp/v2/posts?tags=9";
const url2 = "http://localhost/wordpress/wp-json/wp/v2/media/10";

function Hero() {
  const [heroPost, setHeroPost] = useState(null);
  // const [imgUrl, setImgUrl] = useState([]);
  const { logoDetails } = useGlobalContext();

  const fetchHeropost = async () => {
    try {
      const response1 = await fetch(heroUrl);
      const heroPost = await response1.json();
      if (heroPost) {
        setHeroPost(heroPost);
      } else {
        setHeroPost(null);
      }

      console.log(heroPost);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeropost();
  }, []);
  // const { id } = heroPost;
  if (!heroPost) {
    return <p>no hero post</p>;
  }
  return (
    <section className="hero">
      <div className="hero-center">
        <p>{heroPost.title.rendered}</p>
        {/* <article className="hero-container">
          <div className="hero-info">
            <img src={logoDetails.source_url} className="hero-logo" alt="logo" />
            <div className="hero-post">
              <h2 className="hero-title">{heroPost.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: heroPost.content.rendered.substring(0, 249) }} className="hero-desc"></div>

              <Link to={`/post/${id}`} className="read-more read-more-hero ">
                read more
                <FaCaretRight style={{ marginLeft: "6px", fontSize: "20px" }} />
              </Link>
            </div>
          </div>
        </article> */}
        {/* <div className="hero-image" style={{ backgroundImage: `url(${imgUrl.source_url})` }}></div> */}
      </div>
    </section>
  );
}

export default Hero;
