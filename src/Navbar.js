import React from "react";
import { social } from "./data";
import { FaBars, FaSearch, FaCaretDown } from "react-icons/fa";
import logo from "./images/logo.svg";
import { useGlobalContext } from "./context";

function Navbar() {
  const { openSubmenu, closeSubmenu } = useGlobalContext();

  const handleSubnav = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav onMouseOver={handleSubnav}>
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
              <button className="link-btn link" onMouseOver={openSubmenu}>
                categories
                <FaCaretDown />
              </button>
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
