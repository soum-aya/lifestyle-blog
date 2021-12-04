import React from "react";
import { useGlobalContext } from "./context";
import { links } from "./data";

const Subnav = () => {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      <ul className="sublinks link">
        {links[1].subLinks.map((sublink, index) => {
          const { label, url } = sublink;
          return (
            <li key={index}>
              <a href={url}>{label}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Subnav;
