import React from "react";
import { useRef } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { selector } from "../../redux/counterSlice";
import { logout } from "../../redux/counterSlice";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar1 = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const user = useSelector(selector);
  const Dispatch=useDispatch();
  const Out=()=>{
    console.log("hana")
    Dispatch(logout())
  }

  return (
    <header>
      <h3>
        <Link  to="/">
        <i class="fa-solid fa-house-signal"></i>
        SpaceKey <br />
        HomeLaunch
        </Link>
      </h3>
      <nav ref={navRef}>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/commercial">commercial</Link>
        <Link to="/Newproject">New project</Link>
        <Link to="/ourclint">Our clients</Link>
        {user ? (
          <>
          <Link to="/rej">
            <div className="btn Navloginbtn " onClick={()=>Out()}>Logout</div>
          </Link>
<Link to="/account" className="Nameuser">{user.name}</Link>
          
          </>
        ) : (
          <Link to="/log">
            <div className="btn Navloginbtn ">Login</div>
          </Link>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><i class="fa-solid fa-circle-xmark"></i></button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
      <i class="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Navbar1;
