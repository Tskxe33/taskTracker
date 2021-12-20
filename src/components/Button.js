import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
