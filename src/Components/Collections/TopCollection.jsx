import React from "react";

import ethereumBlack from "../../Assets/ethereum-black.png";
import "./Collections.css";

const TopCollection = ({
  number,
  avatar,
  name,
  amount,
  percentage,
  percentageColor,
}) => {
  return (
    <div className="top-collection">
      <h2>{number}</h2>
      <img src={avatar} alt="" />
      <div>
        <h4>{name}</h4>
        <div className="ethereum">
          <img src={ethereumBlack} alt="" />
          <p>{amount}</p>
        </div>
      </div>
      <h2
        className="percentage"
        style={{ color: percentageColor }}
      >{`+${percentage}%`}</h2>
    </div>
  );
};

export default TopCollection;
