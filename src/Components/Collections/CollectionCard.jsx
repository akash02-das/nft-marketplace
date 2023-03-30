import React from "react";

import avatar from "../../Assets/avatar.png";
import ethereumGreen from "../../Assets/ethereum-green.png";
import Button from "../../Utils/CustomButton/Button";
import "./Collections.css";

const CollectionCard = ({ image }) => {
  return (
    <div className="card-wrapper">
      <img src={image} alt="" />

      <div className="card-contents">
        <h2>The Futr Abstr</h2>
        <div className="right-content">
          <img src={avatar} alt="" />
          <div className="green-box">
            <img src={ethereumGreen} alt="" />
            <span>0.25 ETH</span>
          </div>
          <span>1 of 8</span>
        </div>
        <Button
          text="Place a bid"
          width={113}
          height={45}
          fontSize={12}
          bgColor="#ffffff"
          color="#3d00b7"
          margin="10px 0"
          padding="14px 19px"
        />
      </div>
    </div>
  );
};

export default CollectionCard;
