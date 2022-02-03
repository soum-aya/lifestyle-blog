import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Subnav from "./components/Subnav";
import Home from "./pages/Home";
import About from "./pages/About";
import PostDetails from "./pages/PostDetails";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div>
      <Navbar />
      <Subnav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="post/:id" element={<PostDetails />}></Route>
        <Route path="search" element={<SearchResult />}></Route>
      </Routes>
    </div>
  );
}

export default App;
