import React from "react";
import PropTypes from "prop-types";
//type impt to import prop types whether you want string/number/function. it is not a must

function Header({ text, bgColor, textColor }) {
  // now instead of text {props (the property that you are using)} can be used as long as you remember what prop it is. Now you can just type text instead of props.text in {}
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
    // when using styling components double second brackets are to be used and property names where words are separated by '-' is changed to camelCase(that's just how css in jsx works)
    <header style={headerStyles}>
      <div className="nav-container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//incase no props are sent
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
// specifying the type of prop and that it is a must
Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;

// use _rfce to not import react
