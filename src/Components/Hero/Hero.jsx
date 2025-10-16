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
              "Java Developer @TalVoy Partners",
"Former SDE Intern @Talvoy Partners",
"Former Web Development Intern @Cognifyz Technologies",
              "Full Stack Developer",
               "Web Developer",
              "230+ Leetcode Problems Solved",
              "120+ GFG Problems Solved",
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
