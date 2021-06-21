import PropTypes from "prop-types";
import styles from "../../styles/Carousel.module.scss";
const Dot = ({ onClick, index, currentSlide }) => {
  return (
    <button
      onClick={() => onClick(index)}
      className={`${styles.nav__dot} ${
        index === currentSlide ? styles["nav__dot--active"] : ""
      }`}
    />
  );
};

export default Dot;

Dot.propTypes = {
  onClick: PropTypes.func,
  index: PropTypes.number,
  currentSlide: PropTypes.number,
};
