import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Subnav from "./components/Subnav";
import Home from "./pages/Home";
import About from "./pages/About";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Subnav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="post/:id" element={<PostDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
