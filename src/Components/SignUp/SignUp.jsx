import React from "react";

import avatarBorder1 from "../../Assets/avatar-border-1.png";
import avatarBorder2 from "../../Assets/avatar-border-2.png";
import unsplash1 from "../../Assets/unsplash_1.png";
import unsplash2 from "../../Assets/unsplash_2.png";
import unsplash3 from "../../Assets/unsplash_3.png";
import Button from "../../Utils/CustomButton/Button";
import "./SignUp.css";
import SignupCard from "./SignupCard";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="signup-wrapper">
        <div className="card-items">
          <span id="card-1">
            <SignupCard
              cardWidth="328px"
              cardHeight="334px"
              nft={unsplash1}
              nftCreator={avatarBorder1}
              nftWidth="300px"
              nftHeight="300px"
              nftCreatorWidth="80px"
              nftCreatorHeight="80px"
              left="250px"
              top="250px"
            />
          </span>
          <span id="card-2">
            <SignupCard
              cardWidth="235px"
              cardHeight="254px"
              nft={unsplash3}
              nftCreator={avatarBorder2}
              nftWidth="195px"
              nftHeight="214px"
              nftCreatorWidth="80px"
              nftCreatorHeight="80px"
              left="155px"
              top="170px"
            />
          </span>
          <span id="card-3">
            <SignupCard
              cardWidth="277px"
              cardHeight="285px"
              nft={unsplash2}
              nftCreator={avatarBorder2}
              nftWidth="241px"
              nftHeight="265px"
              nftCreatorWidth="72px"
              nftCreatorHeight="72px"
              left="205px"
              top="225px"
            />
          </span>
        </div>

        <div className="contents">
          <h1>Create and sell your NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <Button
            text="sign up now"
            width="212px"
            height="65"
            fontSize="20px"
            bgColor="#3d00b7"
            color="#ffffff"
            margin=""
            padding="20px 44px"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
