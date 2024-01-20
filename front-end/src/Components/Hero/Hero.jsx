import React from "react";
import "./Hero.css";
import hand_Icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={hand_Icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
}
