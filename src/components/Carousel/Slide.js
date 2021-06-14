const Slide = ({ children, index }) => {
  return (
    <div className={`slide ${index === 0 ? "slide--active" : ""}`}>
      {children}
    </div>
  );
};

export default Slide;
