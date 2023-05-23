import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const Signup = () => {
  const [value, setValue] = useState();
  return (
    <div className="Signup" id="Signup">
      <Link to="/" className="title-Name">
        SpaceKey HomeLaunch
      </Link>
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src="./images/signup.jpg" alt="signup" />
          </div>
          <div className="right">
            <h2 className="from_heading">Create Account</h2>
            <input
              type="text"
              className="input"
              placeholder="Username"
              name="username"
            />
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="email"
            />
            <input
              type="password"
              className="input"
              placeholder="password"
              name="password"
            />
            <input
              type="password"
              className="input"
              placeholder="confirm Password"
              name="confirm Password"
            />
            <PhoneInput
              placeholder="Enter phone number"
              className="input"
              value={value}
              onChange={setValue}
              numberInputProps={{ name: "phone" }}
            />
            <Link to="/log" className="btn">Sign Up</Link>
            <p className="text">
              Already Have Account ? <Link to="/log">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
