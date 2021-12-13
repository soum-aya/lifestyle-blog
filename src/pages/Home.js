import React from "react";
import FeaturedPosts from "../components/FeaturedPosts";
import Hero from "../components/Hero";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <main onMouseOver={closeSubmenu}>
      <Hero />
      <FeaturedPosts />
      <PostList />
    </main>
  );
};

export default Home;
