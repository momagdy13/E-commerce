import React from "react";
import "./Navbar.css";
import logo from '../Assets/logo.png'
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
