import React from "react";
import { useGlobalContext } from "../context";
import { Social } from "./Social";

const Footer = () => {
  const { logoDetails, socials } = useGlobalContext();
  return (
    <section className="py-16 border-t border-black px-24">
      <div className="grid grid-cols-4">
        <img src={logoDetails.source_url} alt="logo" className="block my-auto" />
        <ul className="col-span-2 flex items-center justify-center space-x-6 text-nav-gray text-lg capitalize font-semibold">
          <li>about</li>
          <li>partnerships</li>
          <li>contact</li>
          <li>privacy</li>
        </ul>
        <div className=" flex justify-center  border-l border-black py-12">
          <div className=" space-y-6">
            <ul className=" flex items-center space-x-8">
              {socials.map((social) => {
                return <Social key={social.id} {...social} />;
              })}
            </ul>
            <input type="text" className="border border-black rounded-sm outline-0 block mx-auto" />
            <p className="text-center text-nav-hover uppercase text-xs">join our newsletter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
