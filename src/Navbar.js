import React, { useState } from "react";
import { social } from "./data";
import { FaBars, FaSearch, FaCaretDown, FaTimes } from "react-icons/fa";
import logo from "./images/logo.svg";
import { useGlobalContext } from "./context";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSubmenu, closeSubmenu, isSearchOpen, openSearch, closeSearch } = useGlobalContext();

  const handleSubnav = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav onMouseOver={handleSubnav}>
      <div className="nav-center">
        <div className="nav-search">
          {isSearchOpen ? (
            <div className="search-form">
              <button className="search-icon">
                <FaSearch />
              </button>
              <input type="text" className="search-input" />
              <FaTimes className="search-close" onClick={closeSearch} />
            </div>
          ) : (
            <div className="search-links">
              <button className="search-icon" onClick={openSearch}>
                <FaSearch />
              </button>
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
          )}
        </div>
        <img src={logo} className="nav-logo" alt="logo" />
        <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
      <div className={isSearchOpen ? "search-form-responsive" : "search-form-responsive-none"}>
        <button className="search-icon">
          <FaSearch />
        </button>
        <input type="text" className="search-input" />
        <FaTimes className="search-close" onClick={closeSearch} />
      </div>
    </nav>
  );
}

export default Navbar;
