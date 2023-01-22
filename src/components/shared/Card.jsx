import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //   return (
  //     <div className={`card ${reverse && 'reverse'}`}>
  //      {children}
  //     </div>
  //   )
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
// there can be conditional class where the styling is in css or conditional styling where we introduce the style in the .jsx itself. when doing conditional styling reverse-->true is passed in feedbacklist func. and using ternary operator styling is set.
