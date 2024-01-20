import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to={"/"} style={{textDecoration:'none'}}>Shop</Link> {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link to={"/mens"}style={{textDecoration:'none'}}>Mens</Link> {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Womens");
          }}
        >
          <Link to={"/womens"}style={{textDecoration:'none'}}>Womens</Link>
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to={"/kids"}style={{textDecoration:'none'}}>Kids</Link> {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
