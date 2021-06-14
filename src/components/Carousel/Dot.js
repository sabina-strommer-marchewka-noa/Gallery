const Dot = ({ onPick, index }) => {
  return <button onClick={() => onPick(index)} className="nav__dot" />;
};

export default Dot;
