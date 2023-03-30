import React from "react";

import "./Featured.css";
import FeatureItem from "./FeatureItem";

const Featured = () => {
  return (
    <div id="featured">
      <div className="featured-wrapper">
        <h1>Collection Featured NFTs</h1>

        <div className="feature-item-wrapper">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </div>
    </div>
  );
};

export default Featured;
