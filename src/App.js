import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Subnav from "./components/Subnav";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Subnav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
