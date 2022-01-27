import React, { useState, useEffect } from "react";

export const Social = ({ acf, featured_media }) => {
  const mediaUrl = `http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`;

  const [socialImg, setSocialImg] = useState({});
  const fetchSocialImg = async () => {
    try {
      const response = await fetch(mediaUrl);
      const socialImg = await response.json();
      setSocialImg(socialImg);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSocialImg();
  }, []);

  return (
    <li>
      <a href={acf.accountlink}>
        <img src={socialImg.source_url} className="h-9" />
      </a>
    </li>
  );
};
