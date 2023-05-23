import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/counterSlice";

const Loginbage = () => {
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pas, setpas] = useState("");
  const dispatch = useDispatch();
  const users = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        name: email.slice(0, 1),
        pas: pas,
        loggin: true,
      })
    );
    Navigate("/");
  };
  return (
    <div className="Login" id="login">
      <Link to="/" className="title-Name">
        SpaceKey HomeLaunch
      </Link>
      <div className="container">
        <div className="form_container">
          <div className="left">
            <img className="img" src="./images/login.jpg" alt="login" />
          </div>
          <form className="right" onSubmit={(e) => users(e)}>
            <h2 className="from_heading">Members Log in</h2>
            <input
              type="text"
              className="input"
              placeholder="Email"
              name="Email"
              required
              //// when backend intgretion this will remove
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="Password"
              required
              //// when backend intgretion this will remove
              value={pas}
              onChange={(e) => setpas(e.target.value)}
            />
            <button type="submit" className="btn">
              Log In
            </button>
            <p className="text">or</p>
            <button className="google_btn">
              <img src="./images/google.png" alt="google icon" />
              <span>Sing in with Google</span>
            </button>
            <button className="Facebook_btn">
              <img src="./images/facebook.png" alt="Facebook icon" />
              <span>Sing in with Facebook</span>
            </button>
            <p className="text">
              New Here ? <Link to="/signup">Sing Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Loginbage;
