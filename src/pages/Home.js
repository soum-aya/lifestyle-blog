import React from "react";
import Hero from "../components/Hero";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <main onMouseOver={closeSubmenu}>
      <Hero />
      <PostList />
    </main>
  );
};

export default Home;
