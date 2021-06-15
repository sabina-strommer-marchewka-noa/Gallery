const Dot = ({ onPick, index, currentSlide }) => {
  return (
    <button
      onClick={() => onPick(index)}
      className={`nav__dot ${index === currentSlide ? "nav__dot--active" : ""}`}
    />
  );
};

export default Dot;
