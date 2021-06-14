const Slide = ({ children, index, currentSlide }) => {
  return (
    <div className={`slide ${index === currentSlide ? "slide--active" : ""}`}>
      {children}
    </div>
  );
};

export default Slide;
