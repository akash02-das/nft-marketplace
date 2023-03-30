import React from "react";

import avatar from "../../Assets/avatar.png";
import dot from "../../Assets/Dot.png";
import ethereum from "../../Assets/ethereum.png";
import liveAuction from "../../Assets/live-auction.png";
import unsplash1 from "../../Assets/unsplash_1.png";
import unsplash2 from "../../Assets/unsplash_2.png";
import unsplash3 from "../../Assets/unsplash_3.png";
import Button from "../../Utils/CustomButton/Button";
import "./Banner.css";
import CountPlus from "./CountPlus";

const Banner = () => {
  return (
    <div id="banner">
      <div className="banner-wrapper">
        <div className="banner-left">
          <h1>Discover, and collect Digital Art NFTs</h1>
          <p>
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>

          <div className="left-bottom">
            <img src={dot} alt="" />
            <span>
              <Button
                text="explore now"
                width={209}
                height={65}
                fontSize={20}
                bgColor="#3d00b7"
                color="#ffffff"
                margin="0 0 30px 53px"
                padding="18px 38px"
              />
            </span>
            <div className="count-wrapper">
              <CountPlus count="98" type="artwork" />
              <CountPlus count="12" type="auction" />
              <CountPlus count="15" type="artist" />
            </div>
          </div>
        </div>
        <div className="banner-right">
          <img className="unsplash-3" src={unsplash3} alt="" />
          <img className="unsplash-2" src={unsplash2} alt="" />
          <img className="unsplash-1" src={unsplash1} alt="" />
          <img className="live-auction" src={liveAuction} alt="" />
          <div className="top-info">
            <h2>Abstr Gradient NFT</h2>
            <div className="avatar-info">
              <img src={avatar} alt="avatar" />
              <h6>Arkhan17</h6>
            </div>
          </div>
          <div className="bottom-info">
            <div className="bottom-child">
              <p>Current Bid</p>
              <span>
                <img src={ethereum} alt="" />
                <p>0.25 ETH</p>
              </span>
            </div>
            <div className="bottom-child">
              <p>Ends in</p>
              <span>
                <p>12h 43m 42s</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
