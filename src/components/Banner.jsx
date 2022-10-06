import React from "react";
import { useNavigate } from "react-router-dom";
import BannerBg from "../assets/pictures/milanBg.jpg";
import "../styles/Banner.css";
import Navbar from "./Navbar";

const Banner = () => {
  var nav = useNavigate();

  const handleClub = () => {
    nav("/clubs/register");
  };
  const handleUser = () => {
    nav("/user/register");
  };

  return (
    <>
    
      <div className="banner-container" style={{ backgroundImage: BannerBg }}>
      <Navbar />
        <div className="banner-inner">
          <div className="banner-content">
            <h1 className="banner-header1">MILAN</h1>
            <h2 className="banner-subtitle">Where HELP meets NEED</h2>
          </div>

          <div className="banner-Buttons">
            <button
              type="button"
              className="btn btn-primary banner-Buttons_btn1"
              onClick={() => {
                handleClub();
              }}
            >
              Continue as a Club
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleUser();
              }}
            >
              Continue as a User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
