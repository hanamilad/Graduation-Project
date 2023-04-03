import React from "react";
import "./Header.css";
import Select from "react-select";
import { datacity, databed, min_price, max_price } from "./Data";

const Header = () => {
  const hed = document.querySelectorAll(".buy-rent .btn");
  console.log(hed);
  hed.forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      el.classList.add("active");
    });
  });
  return (
    <div className="Header">
      <form action="" className="formheader">
        <div className="buy-rent">
          <div className="buy btn ">Buy</div>
          <div className="rent btn">Rent</div>
        </div>
        <div className="search">
          <input
            type="search"
            className="form-control"
            placeholder="City or Town or District"
          />
          <Select options={datacity} placeholder="City or Town or District" />
          <Select isMulti options={databed} placeholder="Bed" />
          <Select isMulti options={databed} placeholder="Bath " />
          <Select options={min_price} placeholder="Min-price " />
          <Select options={max_price} placeholder="Max-price " />
          <button className="submitbtn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
