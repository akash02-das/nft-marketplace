import React from "react";

import facebook from "../../Assets/facebook.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";
import Button from "../../Utils/CustomButton/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="footer-wrapper">
          <div className="contact">
            <h2>nfters</h2>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div className="links">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>

          <div className="market-place">
            <h4>market place</h4>
            <div className="market">
              <a href="#">All NFTs</a>
              <a href="#">New</a>
              <a href="#">Art</a>
              <a href="#">Sports</a>
              <a href="#">Utility</a>
              <a href="#">Music</a>
              <a href="#">Domain Name</a>
            </div>
          </div>

          <div className="my-account">
            <h4>my account</h4>
            <div className="account">
              <a href="#">Profile</a>
              <a href="#">Favorite</a>
              <a href="#">My Collections</a>
              <a href="#">Settings</a>
            </div>
          </div>

          <div className="stay-loop">
            <h4>stay in the loop</h4>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="subscribe">
              <input type="text" />
              <Button
                text="Subscribe Now"
                width={150}
                height={46}
                fontSize={13}
                bgColor="#2639ED"
                color="#ffffff"
                margin=""
                padding="20px 27px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <p className="copyright">Copyright © 2023 Akash Das</p>
    </>
  );
};

export default Footer;
