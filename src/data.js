import React from "react";
import { FaPinterest, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/about",
    text: "about",
  },
  {
    id: 2,
    url: "/categories",
    text: "categories",
    subLinks: [
      { label: "craft", url: "/craft" },
      { label: "style", url: "/style" },
      { label: "family", url: "/family" },
      { label: "taste", url: "/taste" },
      { label: "home", url: "/home" },
      { label: "travel", url: "/travel" },
      { label: "featured", url: "/featured" },
    ],
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.pinterest.com",
    icon: <FaPinterest />,
  },
  {
    id: 4,
    url: "https://www.facebook.com",
    icon: <FaFacebookSquare />,
  },
];
