import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Rej = () => {
  return (
    <div className="Login">
      <form action="">
        <div className="logation mb-3">
          <Link to="/">
            <div className="Log ">Login</div>
          </Link>
          <Link to="/rej">
            <div className="Resgistration active">Resgistration</div>
          </Link>
        </div>
        <div className="name mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="email mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email "
            required
          />
        </div>
        <div className="pas mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Enter your password "
            required
          />
        </div>
        <div className="pas mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="confirm your password "
            required
          />
        </div>
        <div className="raid mb-3">
          <div className="radioinput">
            <label htmlFor="check">i accept all terms & conditions </label>
            <input type="checkbox" name="check" id="check" required />
          </div>
        </div>
        <input
          type="submit"
          value="Register now"
          className="btn btn-primary mb-3 form-control"
        />
        <div className="newaccount">
          Already have an account{" "}
          <span>
            <Link to="/" className="">
              Login now
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Rej;
