import React from "react";

import avatar1 from "../../Assets/avatar1.png";
import ethereumBlack from "../../Assets/ethereum-black.png";
import unsplash10 from "../../Assets/unsplash_10.png";
import unsplash11 from "../../Assets/unsplash_11.png";
import unsplash4 from "../../Assets/unsplash_4.png";
import unsplash5 from "../../Assets/unsplash_5.png";
import unsplash6 from "../../Assets/unsplash_6.png";
import unsplash7 from "../../Assets/unsplash_7.png";
import unsplash8 from "../../Assets/unsplash_8.png";
import unsplash9 from "../../Assets/unsplash_9.png";
import CollectionCard from "./CollectionCard";
import "./Collections.css";
import TopCollection from "./TopCollection";

const Collections = () => {
  return (
    <div id="collections">
      <div className="collection-wrapper">
        <div className="collection-column1">
          <img src={unsplash4} alt="" />
          <div className="column1-bottom">
            <img src={avatar1} alt="" />
            <div className="bottom-left">
              <h2>The Futr Abstr</h2>
              <p>10 in the stock</p>
            </div>
            <div className="bottom-right">
              <p>Highest Bid</p>
              <span>
                <img src={ethereumBlack} alt="" />
                <p>0.25 ETH</p>
              </span>
            </div>
          </div>
        </div>

        <div className="collection-column2">
          <CollectionCard image={unsplash5} />
          <CollectionCard image={unsplash6} />
          <CollectionCard image={unsplash7} />
        </div>

        <div className="collection-column3">
          <h2>Top Collections over</h2>
          <p>Last 7 days</p>

          <div className="top-collections">
            <TopCollection
              number="1"
              avatar={unsplash8}
              name="CryptoFunks"
              amount="19,769.39"
              percentage="26.52"
              percentageColor="#14C8B0"
            />
            <div style={{ border: "1px solid #F0F0F0" }}></div>
            <TopCollection
              number="2"
              avatar={unsplash9}
              name="Cryptix"
              amount="2,769.39"
              percentage="10.52"
              percentageColor="#FF002E"
            />
            <div style={{ border: "1px solid #F0F0F0" }}></div>
            <TopCollection
              number="3"
              avatar={unsplash10}
              name="Frensware"
              amount="9,232.39"
              percentage="2.52"
              percentageColor="#14C8B0"
            />
            <div style={{ border: "1px solid #F0F0F0" }}></div>
            <TopCollection
              number="4"
              avatar={unsplash11}
              name="PunkArt"
              amount="3,769.39"
              percentage="1.52"
              percentageColor="#14C8B0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
