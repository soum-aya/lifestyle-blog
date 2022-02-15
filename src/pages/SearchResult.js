import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import ReactLoading from "react-loading";
import { useGlobalContext } from "../context";
import Footer from "../components/Footer";

const searchUrl = "http://localhost/wordpress/wp-json/wp/v2/posts?per_page=5&search=";

const SearchResult = () => {
  const [searchPosts, setSearchPosts] = useState([]);
  const { loading, setLoading } = useGlobalContext();
  const { word } = useParams();

  const fetchSearchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${searchUrl}${word}`);
      const searchPosts = await response.json();
      setSearchPosts(searchPosts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchPosts();
    return () => {
      setSearchPosts([]);
    };
  }, [word]);

  if (loading) {
    return <ReactLoading className="text-center mx-auto" type="bars" color={"#9b9b9b"} height={48} width={100} delay={50} />;
  }
  if (searchPosts.length === 0) {
    return (
      <div className="text-center my-10">
        <h1 className=" font-extrabold text-2xl tracking-wide capitalize">nothing found</h1>
        <p className="text-xl">please try again with some different keywords.</p>
      </div>
    );
  }
  return (
    <section>
      <div className="mx-24">
        <h1 className="text-center my-4 font-extrabold text-2xl tracking-wide">search results for: {word}</h1>
        {searchPosts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
      <Footer />
    </section>
  );
};

export default SearchResult;
