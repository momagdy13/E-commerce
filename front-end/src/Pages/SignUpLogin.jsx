import React from "react";
import "./Css/SignUpLogin.css";

export default function SignUpLogin() {
  return (
    <div className="singuplogin">
      <div className="container">
        <h1>Sign Up </h1>
        <div className="login-filds">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup">
          Already have an account? <span>Login here</span></p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuem i agree the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
