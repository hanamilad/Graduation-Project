import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Forgetpas = () => {
  return (
    <div className="Forget ">
      <Link to="/" className="title-Name">SpaceKey HomeLaunch</Link>
      <form action="">
        <p>
          Enter the email address associated with your account <br />
          and we will send you a link to reset your password
        </p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" />
        <br />
        <input
          type="submit"
          value="continue"
          className="form-control continue"
        />
        <div className="sign">
          {" "}
          Dont have an account? <Link to="/rej">sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Forgetpas;
