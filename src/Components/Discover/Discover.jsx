import React from "react";

import filter from "../../Assets/filter.png";
import unsplash1 from "../../Assets/unsplash_1.png";
import unsplash2 from "../../Assets/unsplash_2.png";
import unsplash3 from "../../Assets/unsplash_3.png";
import unsplash4 from "../../Assets/unsplash_4.png";
import Button from "../../Utils/CustomButton/Button";
import Category from "./Category";
import "./Discover.css";
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  return (
    <div id="discover">
      <div className="discover-wrapper">
        <h1>Discover more NFTs</h1>

        <div className="category-filter">
          <div className="categories">
            <Category name="all categories" color="#ffffff" bgColor="#3D00B7" />
            <Category
              name="art"
              color="#000000"
              bgColor="rgba(220, 220, 220, 0.2)"
            />
            <Category
              name="celebrities"
              color="#000000"
              bgColor="rgba(220, 220, 220, 0.2)"
            />
            <Category
              name="gaming"
              color="#000000"
              bgColor="rgba(220, 220, 220, 0.2)"
            />
            <Category
              name="sport"
              color="#000000"
              bgColor="rgba(220, 220, 220, 0.2)"
            />
            <Category
              name="music"
              color="#000000"
              bgColor="rgba(220, 220, 220, 0.2)"
            />
            <Category
              name="crypto"
              color="#000000"
              bgColor="rgba(220, 220, 220, 0.2)"
            />
          </div>

          <button className="filter">
            <img src={filter} alt="" />
            <span>all filter</span>
          </button>
        </div>

        <div className="card-items">
          <DiscoverCard nft={unsplash1} name="ArtCrypto" />
          <DiscoverCard nft={unsplash2} name="ArtCrypto" />
          <DiscoverCard nft={unsplash3} name="ArtCrypto" />
          <DiscoverCard nft={unsplash4} name="ArtCrypto" />
          <DiscoverCard nft={unsplash1} name="ArtCrypto" />
          <DiscoverCard nft={unsplash2} name="ArtCrypto" />
          <DiscoverCard nft={unsplash3} name="ArtCrypto" />
          <DiscoverCard nft={unsplash4} name="ArtCrypto" />
        </div>
        <div className="more-btn">
          <Button
            text="More NFTs"
            width={180}
            height={66}
            fontSize={20}
            bgColor="#ffffff"
            color="#3d00b7"
            margin=""
            padding="20px 37px"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
