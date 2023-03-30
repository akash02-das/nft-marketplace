import React from "react";

import "./AmazeNft.css";

const AmazeCard = ({ icon, title, description }) => {
  return (
    <div className="card-wrapper">
      <img src={icon} alt="" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AmazeCard;
