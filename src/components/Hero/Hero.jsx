import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="imagen paisaje" className="hero__image" />
      <h1 className="hero__title">Viajar lo hace Simple!</h1>
    </div>
  );
};

export default Hero;
