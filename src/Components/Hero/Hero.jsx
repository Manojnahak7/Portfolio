import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";
import Image from "./../../images/mypic.jpg";
export const Hero = () => {
  return (
    <section className="hero-section">
      <img src={Image} alt="Manoj Nahak" className="hero-image" />

      <h1 className="hero-name">
        Hi, I'm <span>Manoj Nahak</span>
      </h1>

      <h2 className="hero-typewriter">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Web Developer",
              "120+ Leetcode Problems Solved",
              "80+ GFG Problems Solved",
              "Java Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      </h2>
    </section>
  );
};
