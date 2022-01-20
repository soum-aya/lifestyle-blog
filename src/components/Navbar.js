import React, { useState } from "react";
import { social } from "../data";
import { FaBars, FaSearch, FaCaretDown, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSubmenu, closeSubmenu, isSearchOpen, openSearch, closeSearch, logoDetails } = useGlobalContext();

  const handleSubnav = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav onMouseOver={handleSubnav} className="sticky w-full z-10 top-0 right-0 left-0 text-nav-gray bg-white shadow-nav-shadow">
      <div className="p-[20px] grid grid-cols-3 items-center md:p-0">
        <div>
          {isSearchOpen ? (
            <div className="hidden md:flex md:items-center md:min-h-[50px]">
              <button className="text-nav-gray bg-transparent border-transparent text-[24px] cursor-pointer  hover:text-nav-hover md:text-base md:py-[14px] md:px-5 ">
                <FaSearch />
              </button>
              <input type="text" className="border-0 bg-[#eeeeee] rounded-sm w-3/4 h-[25px] outline-0 md:h-auto md:w-[220px] md:ml-2 md:mr-1" />
              <FaTimes className="cursor-pointer text-2xl hover:text-nav-hover md:text-base" onClick={closeSearch} />
            </div>
          ) : (
            <div className="md:flex md:items-center md:min-h-[50px]">
              <button className="text-[24px] md:py-[14px] md:px-5 md:text-base md:hover:text-nav-hover" onClick={openSearch}>
                <FaSearch />
              </button>
              <ul className="hidden md:flex md:items-center">
                <li>
                  <Link to="/about" className="py-[14px] px-[20px] text-base font-extrabold capitalize hover:text-nav-hover">
                    about
                  </Link>
                </li>
                <li>
                  <button className="link-btn py-[14px] px-[20px] text-base font-extrabold capitalize md:bg-transparent md:cursor-pointer md:border-transparent md:hover:text-nav-hover" onMouseOver={openSubmenu}>
                    categories
                    <FaCaretDown className="hidden md:inline" />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/">
          <img src={logoDetails.source_url} className="h-auto w-[50px]  mx-auto" alt="logo" />
        </Link>
        <button className="cursor-pointer bg-transparent border-transparent text-nav-gray text-[24px] justify-self-end md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden md:justify-self-end md:max-h-[50px] md:flex md:items-center space-x-8">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url} className="md:text-nav-gray md:text-[28px]">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={isSearchOpen ? "flex items-center justify-center py-[45px] space-x-2 md:hidden" : "hidden"}>
        <button className="text-[24px]">
          <FaSearch />
        </button>
        <input type="text" className="border-0 bg-[#eeeeee] rounded-sm w-3/4 h-[25px] outline-0" />
        <FaTimes className="text-[24px] cursor-pointer" onClick={closeSearch} />
      </div>
      <ul className={isMenuOpen ? "flex items-center justify-evenly py-[25px] md:hidden" : "hidden"}>
        <li>
          <a href="/about" className={isSearchOpen ? "hidden" : "py-[14px] px-[20px] text-base font-extrabold capitalize"}>
            about
          </a>
        </li>
        <li>
          <a href="/about" className={isSearchOpen ? "hidden" : "py-[14px] px-[20px] text-base font-extrabold capitalize"}>
            categories
          </a>
        </li>
        <li>
          <a href="/about" className={isSearchOpen ? "hidden" : "py-[14px] px-[20px] text-base font-extrabold capitalize"}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
