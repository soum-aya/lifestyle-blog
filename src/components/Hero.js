import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { useGlobalContext } from "../context";

const tagsUrl = "http://localhost/wordpress/wp-json/wp/v2/tags";
const heroUrl = "http://localhost/wordpress/wp-json/wp/v2/posts?tags=";
const mediaUrl = "http://localhost/wordpress/wp-json/wp/v2/media/";

function Hero() {
  const [heroPost, setHeroPost] = useState([]);
  const [heroImg, setHeroImg] = useState({});
  const { logoDetails, loading, setLoading } = useGlobalContext();

  const fetchTags = async () => {
    setLoading(true);
    try {
      const response = await fetch(tagsUrl);
      const tags = await response.json();

      const heroTag = tags.filter((tag) => tag.name === "hero");
      const response1 = await fetch(`${heroUrl}${heroTag[0].id}`);
      const heroPost = await response1.json();
      setHeroPost(heroPost);

      const response2 = await fetch(`${mediaUrl}${heroPost[0].featured_media}`);
      const heroImg = await response2.json();
      setHeroImg(heroImg);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  if (loading || heroPost.length < 1) {
    return <ReactLoading className="text-center mx-auto" type="bars" color={"#9b9b9b"} height={48} width={100} delay={50} />;
  }

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-container">
          <div className="hero-info">
            <img src={logoDetails.source_url} className="hero-logo" alt="logo" />
            <div className="hero-post">
              <h2 className="hero-title">{heroPost[0].title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: heroPost[0].content.rendered.substring(0, 200) }} className="hero-desc"></div>

              <Link to={`/post/${heroPost[0].id}`} className="read-more read-more-hero ">
                read more
                <FaCaretRight style={{ marginLeft: "6px", fontSize: "20px" }} />
              </Link>
            </div>
          </div>
        </article>
        <div className="hero-image" style={{ backgroundImage: `url(${heroImg.source_url})` }}></div>
      </div>
    </section>
  );
}

export default Hero;
