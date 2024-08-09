import React from "react";
import "./header.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <>
      <div className="max-width header">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Zomato-logo"
          className="header-logo"
        />

        <div className="SearchContainer header-left">
          <div className="SearchLocationConatiner">
            <div className="location-wrapper">
              <div className="LocationIconBox">
                <FaLocationDot className="absolute-center loctaion-icon " />
                <div>Bangalore</div>
              </div>
              <FaCaretDown className="absolute-center " />
            </div>
            <div className="locationSeprate"></div>
            <div className="Search">
              <CiSearch className="absolute-center search-icon" />
              <input
                className="search-input"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div>
          </div>
          <div className="profile">
            <a href=".">Log in</a>
            <a href=".">Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
