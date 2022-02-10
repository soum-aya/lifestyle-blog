import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const postUrl = "http://localhost/wordpress/wp-json/wp/v2/posts/";
const mediaUrl = "http://localhost/wordpress/wp-json/wp/v2/media/";

const PostDetails = () => {
  const { loading } = useGlobalContext();
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
        console.log(error.data);
      }
    };
    fetchPostDetails();
  }, [id]);

  if (loading || !post) {
    return <ReactLoading className="text-center mx-auto" type="bars" color={"#9b9b9b"} height={48} width={100} delay={50} />;
  }
  return (
    <section className="px-24 grid grid-cols-2 gap-2">
      <div className="h-[800px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${postImg.source_url})` }}></div>
      <div className=" ml-20 my-16 flex flex-col items-start justify-center space-y-6">
        <h2 className="text-3xl tracking-widest font-bold uppercase">{post.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="hero-desc"></div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="col-span-2"></div>
    </section>
  );
};

export default PostDetails;
