import React from "react";
import logo from "../assets/logo.svg";
const Hero = () => {
  return (
    <header className="w-full flex justify-center item-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="artisumm_logo" className="w-16 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open("https://gauravgarwa.tech");
          }}
        >
          Gaurav Garwa
        </button>
      </nav>

      <h1 className="head_text">Summarize your articles</h1>
      <h2 className="desc">
        Summarize your favourite blog posts and articles to make reading on the
        move easier.
      </h2>
    </header>
  );
};

export default Hero;
