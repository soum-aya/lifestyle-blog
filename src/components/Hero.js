import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";

const url = "http://localhost/wordpress/wp-json/wp/v2/posts/9";

function Hero() {
  const [heroPost, setHeroPost] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  const fetchHeropost = async () => {
    try {
      const response = await fetch(url);
      const heroPost = await response.json();
      setHeroPost(heroPost);

      console.log(heroPost._links["wp:featuredmedia"][0].href);
    } catch (error) {
      console.log(error);
    }
  };

  // i have to use promises and use http://localhost/wordpress/wp-json/wp/v2/media/13 to fetch media
  // const url = `http://localhost/wordpress/wp-json/wp/v2/posts/9/media/${featured_media}`;

  // const fetchImgUrl = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const imgUrl = await response.json()[0].data.media_details.sizes.full.source_url;
  //     setImgUrl(imgUrl);
  //     console.log(imgUrl);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchHeropost();
    // fetchImgUrl();
  }, []);

  if (heroPost.length < 1) {
    return <p>no hero posts</p>;
  }
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <img src={logo} className="hero-logo" alt="logo" />
          <div className="hero-post">
            <h2 className="hero-title">{heroPost.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: heroPost.excerpt.rendered }} className="hero-desc"></div>
          </div>
        </article>
        {/* <div className="hero-image" style={{ backgroundImage: `url(${heroPost._links["wp:featuredmedia"][0].href})` }}></div> */}
        <img src={heroPost._links["wp:featuredmedia"][0].href} />
      </div>
    </section>
  );
}

export default Hero;
