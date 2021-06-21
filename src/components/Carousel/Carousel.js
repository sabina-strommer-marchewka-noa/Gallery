import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/Carousel.module.scss";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import Slide from "./Slide";
import Dot from "./Dot";
import Play from "./icons/Play";
import Pause from "./icons/Pause";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);

  const handleLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleRight = () => {
    setCurrentSlide((value) => {
      if (value === data.length - 1) {
        return 0;
      } else {
        return value + 1;
      }
    });
  };

  const handlePick = (currentIndex) => {
    setCurrentSlide(currentIndex);
  };

  const handleAutoslide = () => {
    if (slideInterval === null) {
      setSlideInterval(setInterval(() => handleRight(), 2800));
    } else {
      clearInterval(slideInterval);
      setSlideInterval(null);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <button
        onClick={handleLeft}
        className={`${styles.carousel__arrow} ${styles["carousel__arrow--left"]}`}
      >
        <ArrowLeft />
      </button>
      {data.map((item, i) => (
        <Slide key={item.id} index={i} currentSlide={currentSlide}>
          <img
            src={item.src}
            alt={item.alt}
            className={styles.carousel__image}
          />
        </Slide>
      ))}
      <button
        onClick={handleRight}
        className={`${styles.carousel__arrow} ${styles["carousel__arrow--right"]}`}
      >
        <ArrowRight />
      </button>

      <div className={styles.nav}>
        {data.map((item, i) => (
          <Dot
            onClick={handlePick}
            key={item.id}
            index={i}
            currentSlide={currentSlide}
          />
        ))}
        <button onClick={handleAutoslide} className={styles.nav__autoslide}>
          {slideInterval === null ? <Play /> : <Pause />}
        </button>
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  data: PropTypes.array,
};
