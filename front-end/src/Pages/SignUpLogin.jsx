import React, { useState } from "react";
import "./Css/SignUpLogin.css";
import axios from "axios";
export default function SignUpLogin() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    await axios
      .post("http://localhost:4000/login", formData)
      .then((response) => {
        console.log(response.data.errors);
        localStorage.setItem("token", response.data.token);
        if (response.data.success) {
          window.location.replace("/");
        }
      })
      .catch((response) => {
        console.log(response.message);
      });
  };
  const signup = async () => {
    await axios
      .post("http://localhost:4000/sign", formData)
      .then((response) => {
        if (response) {
          window.location.replace("/");
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="singuplogin">
      <div className="container">
        <h1>{state} </h1>
        <div className="login-filds">
          {state === "Signup" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandle}
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandle}
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandle}
            placeholder="Your Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>

        {state === "Login" ? (
          <p className="loginsignup">
            Creating an account?{" "}
            <span
              onClick={() => {
                setState("Signup");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="loginsignup">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}

        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuem i agree the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
