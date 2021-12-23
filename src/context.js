import React, { useState, useContext, useEffect } from "react";

const url = "http://localhost/wordpress/wp-json/wp/v2/posts";
const AppUrl = "http://localhost/wordpress/wp-json";
const logoUrl = "http://localhost/wordpress/wp-json/wp/v2/media/";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [appInfo, setAppInfo] = useState({});
  const [logoDetails, setLogoDetails] = useState({});

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
      const response1 = await fetch(AppUrl);
      const appInfo = await response1.json();
      setAppInfo(appInfo);
      const response2 = await fetch(`${logoUrl}${appInfo.site_logo}`);
      const logoDetails = await response2.json();
      setLogoDetails(logoDetails);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchSiteInfo();
  }, []);

  useEffect(() => {
    document.title = appInfo.name;
  });

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
  return <AppContext.Provider value={{ isSubmenuOpen, openSubmenu, closeSubmenu, isSearchOpen, openSearch, closeSearch, posts, appInfo, logoDetails }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
