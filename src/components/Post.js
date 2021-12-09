import React from "react";

const Post = ({ title, excerpt }) => {
  return (
    <article>
      <h2>{title.rendered}</h2>
      <p>{excerpt.rendered}</p>
    </article>
  );
};

export default Post;
