import React from "react";
import logo from "../images/logo.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <img src={logo} className="hero-logo" alt="logo" />
          <div>
            <h2>weekend roundup</h2>
            <p>lorem sjdfiqn qjfmi jksjfi jksdjfi kdjifj slkdjfi skdjfinfid fdsljdi kdjfij</p>
          </div>
        </article>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
