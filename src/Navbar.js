import React from "react";
import { links, social } from "./data";
import { FaBars, FaSearch } from "react-icons/fa";
import logo from "./images/logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="search-links">
          <div className="nav-search">
            <button className="search-icon">
              <FaSearch />
            </button>
          </div>
          <ul className="links">
            <li>
              <a href="/about" className="link">
                about
              </a>
            </li>
            <li>
              <button className="link-btn link">categories</button>
            </li>
          </ul>
        </div>
        <img src={logo} className="nav-logo" alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
