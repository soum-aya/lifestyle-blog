import React from "react";
import { useGlobalContext } from "../context";
import { Social } from "./Social";

const Footer = () => {
  const { logoDetails, socials } = useGlobalContext();
  return (
    <section className="m-24">
      <div className="grid grid-cols-3 gap-3">
        <img src={logoDetails.source_url} className="hero-logo" alt="logo" />
        <ul>
          <li>about</li>
          <li>partnerships</li>
          <li>contact</li>
          <li>privacy</li>
        </ul>
        <div>
          <ul className="justify-self-end max-h-[50px] flex items-center space-x-8 pr-5">
            {socials.map((social) => {
              return <Social key={social.id} {...social} />;
            })}
          </ul>
          <input type="text" className="border-2 rounded-sm w-3/4 h-[25px] outline-0" />
          <p>join our newsletter</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
