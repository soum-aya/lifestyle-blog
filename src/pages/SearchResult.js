import React from "react";

import Post from "../components/Post";
import ReactLoading from "react-loading";
import { useGlobalContext } from "../context";

const SearchResult = () => {
  const { loading, searchPosts, searchTerm } = useGlobalContext();

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
        <h1 className="text-center my-4 font-extrabold text-2xl tracking-wide">search results for: {searchTerm}</h1>
        {searchPosts.map((item) => {
          return <Post key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default SearchResult;
