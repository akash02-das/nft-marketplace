import React from "react";

import "./Button.css";

const Button = ({
  text,
  width,
  height,
  fontSize,
  bgColor,
  color,
  margin,
  padding,
}) => {
  return (
    <button
      className="button"
      style={{
        width,
        height,
        fontSize,
        backgroundColor: bgColor,
        color,
        margin,
        padding,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
