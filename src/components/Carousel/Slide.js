import PropTypes from "prop-types";
import styles from "../../styles/Carousel.module.scss";
const Slide = ({ children, index, currentSlide }) => {
  return (
    <div
      className={`${styles.slide} ${
        index === currentSlide ? styles["slide--active"] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  currentSlide: PropTypes.number,
};
