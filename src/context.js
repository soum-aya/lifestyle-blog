import React, { useState, useContext, useEffect } from "react";

const url = "http://localhost/wordpress/wp-json/wp/v2/posts";
const AppUrl = "http://localhost/wordpress/wp-json";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [appInfo, setAppInfo] = useState({});

  const fetchPosts = async () => {
    try {
      const response = await fetch(url);
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSiteInfo = async () => {
    try {
      const response = await fetch(AppUrl);
      const appInfo = await response.json();
      setAppInfo(appInfo);
      console.log(appInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchSiteInfo();
  }, []);

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };
  return <AppContext.Provider value={{ isSubmenuOpen, openSubmenu, closeSubmenu, isSearchOpen, openSearch, closeSearch, posts }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
