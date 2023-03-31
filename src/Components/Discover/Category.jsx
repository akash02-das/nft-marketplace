import React from "react";

import "./Discover.css";

const Category = ({ name, color, bgColor }) => {
  return (
    <button className="category" style={{ color, background: bgColor }}>
      {name}
    </button>
  );
};

export default Category;
