import React from "react";

import avatar from "../../Assets/avatar.png";
import unsplash1 from "../../Assets/unsplash_1.png";
import unsplash2 from "../../Assets/unsplash_2.png";
import unsplash3 from "../../Assets/unsplash_3.png";
import unsplash4 from "../../Assets/unsplash_4.png";
import Button from "../../Utils/CustomButton/Button";

const FeatureItem = () => {
  return (
    <div className="feature-item">
      <div className="images-wrapper">
        <img className="img-md" src={unsplash1} alt="" />
        <div>
          <img className="img-sm" src={unsplash2} alt="" />
          <img className="img-sm" src={unsplash3} alt="" />
          <img className="img-sm" src={unsplash4} alt="" />
        </div>
      </div>

      <div className="feature-bottom">
        <h2>amazing collection</h2>

        <div className="bottom">
          <div className="bottom-left">
            <img src={avatar} alt="" />
            <span>by Arkhan</span>
          </div>
          <Button
            text="total 54 items"
            width={98}
            height={29}
            fontSize={11}
            bgColor=""
            color="#2639ED"
            margin="0 15px"
            padding="10px 6px"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
