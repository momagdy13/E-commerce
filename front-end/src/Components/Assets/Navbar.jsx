import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.pnj";
import cart_icon from "../Assets/cart_icon.pnj";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
    </div>
  );
}
