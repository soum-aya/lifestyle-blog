import React, { useState, useContext, useEffect } from "react";

const allPostsUrl = "http://localhost/wordpress/wp-json/wp/v2/posts";
const postsUrl = "http://localhost/wordpress/wp-json/wp/v2/posts?page=";
const AppUrl = "http://localhost/wordpress/wp-json";
const mediaUrl = "http://localhost/wordpress/wp-json/wp/v2/media/";

const socialsUrl = "http://localhost/wordpress/wp-json/wp/v2/socials";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [socials, setSocials] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [appInfo, setAppInfo] = useState({});
  const [logoDetails, setLogoDetails] = useState({});

  const [pageNum, setPageNum] = useState(1);
  const [allPosts, setAllPosts] = useState([]);

  const fetchSocials = async () => {
    setLoading(true);
    try {
      const response = await fetch(socialsUrl);
      const socials = await response.json();
      setSocials(socials);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSocials();
  }, []);

  const fetchallPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(allPostsUrl);
      const allPosts = await res.json();
      setAllPosts(allPosts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${postsUrl}${pageNum}`);
      const newPosts = await response.json();
      setPosts([...posts, ...newPosts]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSiteInfo = async () => {
    setLoading(true);
    try {
      const response1 = await fetch(AppUrl);
      const appInfo = await response1.json();
      setAppInfo(appInfo);
      const response2 = await fetch(`${mediaUrl}${appInfo.site_logo}`);
      const logoDetails = await response2.json();
      setLogoDetails(logoDetails);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteInfo();
    fetchallPosts();
  }, []);

  useEffect(() => {
    document.title = appInfo.name;
  });

  useEffect(() => {
    fetchPosts();
  }, [pageNum]);

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
  return <AppContext.Provider value={{ isSubmenuOpen, openSubmenu, closeSubmenu, isSearchOpen, openSearch, closeSearch, posts, appInfo, logoDetails, setPageNum, pageNum, allPosts, loading, setLoading, socials }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
