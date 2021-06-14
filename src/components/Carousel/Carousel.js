import React from "react";
import "./Carousel.scss";
import Slide from "./Slide";

const Carousel = ({ data }) => {
  return (
    <div className="carousel">
      <button className="carousel__arrow carousel__arrow--left">
        {/*https://www.flaticon.com/free-icon/double-left-arrows-symbol_54227*/}
        <svg
          className="carousel__arrow-icon"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 612 612"
        >
          <g>
            <g id="_x34__11_">
              <g>
                <path d="M124.172,305.975L342.365,87.781c20.079-20.079,20.079-52.644,0-72.722c-20.079-20.079-52.644-20.079-72.723,0	L15.062,269.639c-20.079,20.079-20.079,52.644,0,72.723l254.58,254.58c20.079,20.078,52.644,20.078,72.723,0	c20.079-20.079,20.079-52.644,0-72.723L124.172,305.975z M431.395,305.694l165.371-165.982c20.308-20.359,20.308-53.408,0-73.768	c-20.309-20.359-53.204-20.359-73.513,0L321.139,268.823c-20.309,20.359-17.047,35.266,3.032,55.345L523.253,545.47	c20.309,20.359,53.204,20.359,73.513,0c20.308-20.359,20.308-53.408,0-73.768L431.395,305.694z" />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </button>
      {data.map((item, i) => (
        <Slide key={item.id} index={i}>
          {item.content}
        </Slide>
      ))}

      <button className="carousel__arrow carousel__arrow--right">
        {/*https://www.flaticon.com/free-icon/fast-forward-double-right-arrows-symbol_54366*/}
        <svg
          className="carousel__arrow-icon"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 612.02 612.02"
        >
          <g>
            <g id="_x35__11_">
              <g>
                <path d="M596.96,269.674L342.381,15.094c-20.079-20.079-52.644-20.079-72.723,0c-20.079,20.079-20.079,52.644,0,72.723				L487.852,306.01L269.658,524.202c-20.079,20.079-20.079,52.644,0,72.723s52.644,20.079,72.723,0L596.96,342.346				C617.039,322.317,617.039,289.753,596.96,269.674z M290.858,254.258L88.744,41.238c-20.309-21.378-53.204-21.378-73.513,0				s-20.309,56.058,0,77.462l165.371,174.289L15.231,467.278c-20.309,21.379-20.309,56.083,0,77.462s53.204,21.379,73.513,0				L290.858,331.72C311.167,310.342,311.167,275.662,290.858,254.258z" />{" "}
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
