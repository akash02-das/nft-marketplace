import React from "react";

import searchIcon from "../../Assets/search-icon.svg";
import Button from "../../Utils/CustomButton/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <h1 className="logo">nfters</h1>

        <ul className="nav-links">
          <li>marketpalce</li>
          <li>resource</li>
          <li>about</li>
        </ul>

        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <button type="text">
            <img src={searchIcon} alt="search-icon" srcset="" />
          </button>
        </div>

        <Button
          text="upload"
          width={131}
          height={50}
          fontSize={14}
          bgColor="#3d00b7"
          color="#ffffff"
          margin="0 20px"
          padding="18px 40px"
        />
        <Button
          text="connect wallet"
          width={156}
          height={50}
          fontSize={14}
          bgColor="#ffffff"
          color="#3d00b7"
          margin=""
          padding="18px 19px"
        />
      </div>
      <div className="nav-border"></div>
    </>
  );
};

export default Navbar;
