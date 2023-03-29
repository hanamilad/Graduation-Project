import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/counterSlice";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";

const Loginbage = () => {
  const [email, setemail] = useState("");
  const [pas, setpas] = useState("");
  const dispatch = useDispatch();
  const users = (e) => {
    e.preventDefault()
    dispatch(
      login({
        email: email,
        name:email.slice(0,1),
        pas: pas,
        loggin: true,
      })
    );
    window.location.href="http://localhost:3000/";

  };
  return (
    <div className="Login" id="login">
      <Link to="/" className="title-Name">SpaceKey HomeLaunch</Link>
      <form action="" onSubmit={(e) => users(e)}>
        <div className="logation mb-3">
          <NavLink to="/log" activeClassName="active">
            <div className="Log active " >
              Login
            </div>
          </NavLink>
          <NavLink to="/rej" activeClassName="active">
            <div className="Resgistration ">
              Resgistration
            </div>
          </NavLink>
        </div>
        <div className="email mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="passowrd mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm a password "
            required
            value={pas}
            onChange={(e) => setpas(e.target.value)}
          />
        </div>
        <div className="raido mb-3">
          <div className="radioinput">
            <label htmlFor="check">Remmber me </label>
            <input type="checkbox" name="check" id="check" />
          </div>
          <Link to="/forget">Forget password?</Link>
        </div>
        <input
        onClick={()=>console.log("jas")}
          type="submit"
          value="Login Now"
          className="btn btn-primary mb-3 form-control"
        />
        <div className="newaccount">
          Dont have an account?{" "}
          <span>
            <Link to="/rej" className="">
              signup now
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Loginbage;
