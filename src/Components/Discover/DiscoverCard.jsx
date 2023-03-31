import React from "react";

import avatarBorder3 from "../../Assets/avatar-border-3.png";
import avatarBorder4 from "../../Assets/avatar-border-4.png";
import avatarBorder5 from "../../Assets/avatar-border-5.png";
import avatarBorder6 from "../../Assets/avatar-border-6.png";
import ethereumGreen from "../../Assets/ethereum-green.png";

import "./Discover.css";

const DiscoverCard = ({ nft, name }) => {
  return (
    <div className="card-wrapper">
      <img src={nft} alt="" />

      <div className="avatars">
        <img src={avatarBorder3} alt="" className="avatar avatar-img1" />
        <img src={avatarBorder4} alt="" className="avatar avatar-img2" />
        <img src={avatarBorder5} alt="" className="avatar avatar-img3" />
        <img src={avatarBorder6} alt="" className="avatar avatar-img4" />
      </div>

      <h2>{name}</h2>
      <div className="ethereum-contents">
        <div className="ethereum">
          <img src={ethereumGreen} alt="" />
          <span>0.25 ETH</span>
        </div>
        <span className="number">1 of 321</span>
      </div>
      <div className="divider"></div>

      <div className="card-bottom">
        <div className="left-time">3h 50m 2s left</div>
        <span className="bid">Place a bid</span>
      </div>
    </div>
  );
};

export default DiscoverCard;
