import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <button style={{ background: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
