import React from "react";

import "./SignUp.css";

const SignupCard = ({
  cardWidth,
  cardHeight,
  nft,
  nftCreator,
  nftWidth,
  nftCreatorWidth,
  nftHeight,
  nftCreatorHeight,
  top,
  left,
}) => {
  return (
    <div
      className="card-wrapper"
      style={{ width: cardWidth, height: cardHeight }}
    >
      <img
        src={nft}
        alt=""
        className="nft-img"
        style={{ width: nftWidth, height: nftHeight }}
      />
      <img
        src={nftCreator}
        alt=""
        className="avatar"
        style={{
          width: nftCreatorWidth,
          height: nftCreatorHeight,
          left,
          top,
        }}
      />
    </div>
  );
};

export default SignupCard;
