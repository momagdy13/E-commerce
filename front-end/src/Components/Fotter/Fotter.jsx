import React from "react";
import "./Fotter.css";
import fotter_logo from "../Assets/logo_big.png";
import instgram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";

export default function Fotter() {
  return (
    <div className="fotter">
      <div className="fotter-logo">
        <img src={fotter_logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <div>
        <ul className="fotter-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="fotter-social-icons">
        <div className="fotter-icons-container">
          <img src={instgram_icon} alt="" />
        </div>
        <div className="fotter-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="fotter-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="fotter-copy-right">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
}
