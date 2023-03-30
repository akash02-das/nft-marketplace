import React from "react";

const CountPlus = ({ count, type }) => {
  return (
    <div className="count-plus">
      <h1>{`${count}K+`}</h1>
      <p>{type}</p>
    </div>
  );
};

export default CountPlus;
