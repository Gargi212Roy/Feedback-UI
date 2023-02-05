import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  //it'll take props taht we need tp destructure: children----> wrap the component ROUND the text for the button , version --> primary or seconadry pertaining to a class, type---> whether a submit or regular, disabled---> if true  btn---> basic paddinga nd margin
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
