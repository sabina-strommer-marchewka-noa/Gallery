import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";
import Dot from "./Dot";
import Autoslide from "./Autoslide";

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
    <div className="carousel">
      <ArrowLeft onLeft={handleLeft} />
      {data.map((item, i) => (
        <Slide key={item.id} index={i} currentSlide={currentSlide}>
          {item.content}
        </Slide>
      ))}

      <ArrowRight onRight={handleRight} />
      <div className="nav">
        {data.map((item, i) => (
          <Dot
            onPick={handlePick}
            key={item.id}
            index={i}
            currentSlide={currentSlide}
          />
        ))}
        <Autoslide
          onAutoslide={handleAutoslide}
          isAutoslideActive={slideInterval === null}
        />
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  data: PropTypes.array,
};
