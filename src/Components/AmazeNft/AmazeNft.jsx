import React from "react";

import cardTick from "../../Assets/card-tick.png";
import chartSquare from "../../Assets/chart-square.png";
import AmazeCard from "./AmazeCard";
import "./AmazeNft.css";

const amazeCardData = {
  fastTitle: "Fast Transaction",
  fastDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
  growthTitle: "Growth Transaction",
  growthDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
};

const AmazeNft = () => {
  const { fastTitle, fastDescription, growthTitle, growthDescription } =
    amazeCardData;

  return (
    <div className="amaze-wrapper">
      <div className="amaze-child">
        <h1>The amazing NFT art of the world here</h1>
        <AmazeCard
          icon={cardTick}
          title={fastTitle}
          description={fastDescription}
        />
        <AmazeCard
          icon={chartSquare}
          title={growthTitle}
          description={growthDescription}
        />
      </div>
    </div>
  );
};

export default AmazeNft;
