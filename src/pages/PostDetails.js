import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const postUrl = "http://localhost/wordpress/wp-json/wp/v2/posts/";
const mediaUrl = "http://localhost/wordpress/wp-json/wp/v2/media/";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [postImg, setPostImg] = useState({});

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(`${postUrl}${id}`);
        const post = await response.json();
        setPost(post);

        const response2 = await fetch(`${mediaUrl}${post.featured_media}`);
        const postImg = await response2.json();
        setPostImg(postImg);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostDetails();
  }, [id]);

  if (!post) {
    return <p>no post available</p>;
  }
  return (
    <section className="px-24 flex">
      <div className="h-[800px] bg-center bg-no-repeat bg-cover flex-1" style={{ backgroundImage: `url(${postImg.source_url})` }}></div>
      <div className="flex-1 ml-20 flex flex-col items-start justify-center space-y-6">
        <h2 className="text-3xl tracking-widest font-bold uppercase">{post.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="hero-desc"></div>
      </div>
    </section>
  );
};

export default PostDetails;
