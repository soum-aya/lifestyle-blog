import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const url1 = "http://localhost/wordpress/wp-json/wp/v2/posts/9";
const url2 = "http://localhost/wordpress/wp-json/wp/v2/media/10";

function Hero() {
  const [heroPost, setHeroPost] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  const fetchHeropost = async () => {
    try {
      const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);
      const heroPost = await response1.json();
      const imgUrl = await response2.json();
      setHeroPost(heroPost);

      setImgUrl(imgUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeropost();
  }, []);
  const { id } = heroPost;
  if (heroPost.length < 1) {
    return <p>no hero posts</p>;
  }
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-container">
          <div className="hero-info">
            <img src={logo} className="hero-logo" alt="logo" />
            <div className="hero-post">
              <h2 className="hero-title">{heroPost.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: heroPost.content.rendered.substring(0, 249) }} className="hero-desc"></div>

              <Link to={`/post/${id}`} className="read-more read-more-hero ">
                read more
                <FaCaretRight style={{ marginLeft: "6px", fontSize: "20px" }} />
              </Link>
            </div>
          </div>
        </article>
        <div className="hero-image" style={{ backgroundImage: `url(${imgUrl.source_url})` }}></div>
      </div>
    </section>
  );
}

export default Hero;
