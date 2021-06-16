import PropTypes from "prop-types";
const Slide = ({ children, index, currentSlide }) => {
  return (
    <div className={`slide ${index === currentSlide ? "slide--active" : ""}`}>
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
