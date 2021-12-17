import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = ({ title, content, featured_media, id }) => {
  const mediaUrl = `http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`;
  // const categorieUrl = `http://localhost/wordpress/wp-json/wp/v2/categories/<${id}>`;

  const [postImg, setPostImg] = useState({});
  const fetchPostImg = async () => {
    try {
      const response = await fetch(mediaUrl);
      const postImg = await response.json();
      setPostImg(postImg);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPostImg();
  }, []);

  return (
    <article className="flex mb-32">
      <div className="h-[800px] bg-center bg-no-repeat bg-cover flex-1" style={{ backgroundImage: `url(${postImg.source_url})` }}></div>
      <div className="flex-1 ml-20 flex flex-col items-start justify-center space-y-6 ">
        <h2 className="text-3xl tracking-widest font-bold uppercase">{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: `${content.rendered.substring(0, 50)}...` }}></div>
        <Link to={`/post/${id}`} className="read-more ">
          read more
          <FaCaretRight style={{ marginLeft: "6px", fontSize: "20px" }} />
        </Link>
      </div>
    </article>
  );
};

export default Post;
