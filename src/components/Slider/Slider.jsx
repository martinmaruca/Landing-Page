import React from "react";
import { useInView } from "react-intersection-observer";
import "./Slider.css";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const redercontent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Paisaje" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p className="slider__subtitle">{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p className="slider__subtitle">{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Paisaje" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider__zoom " : "slider"} ref={ref}>
      {redercontent()}
    </div>
  );
};

export default Slider;
