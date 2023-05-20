import React from "react";
import Header from "./Header";
import Navbar1 from "./Navbar1";
import Mainsection from "../sesction/Mainsection";
import Footer from "../footer/footer";
import "./Header.css";
import Select from "react-select";
import { datacity } from "../../Json/Data";
import { useRef } from "react";
const Home = () => {
  const proerty = useRef();
  const flex = useRef();

  return (
    <div className="home">
      <div className="DIVADD">
        <i
          className="fa-solid fa-circle-plus Addpropertis"
          onClick={() => {
            flex.current.style.display = "block";
          }}
          onMouseOut={() => {
            proerty.current.style.display = "none";
          }}
          onMouseEnter={() => {
            proerty.current.style.display = "block";
          }}
        ></i>
        <span className="ref" ref={proerty}>
          Add proerty
        </span>

        <div className="CardAdd" ref={flex}>
          <form action="">
            <label htmlFor="Add proerty">Titel:</label>
            <input
              required
              type="text"
              id="Add proerty"
              placeholder="Add Titel for proerty"
              className="form-control"
              name="Titel"
            />
            <br />
            <div className="flex">
              <div className="">
                <label htmlFor="Add Type">Type:</label>
                <Select options={datacity} placeholder="type" name="Type" />
              </div>
              <div className="">
                <label htmlFor="Your name">Your name:</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="">
                <label htmlFor="Add Price">Price:</label>
                <input
                  type="number"
                  id="Add Price"
                  className="form-control"
                  name="Price"
                />
              </div>
              <div className="">
                <label htmlFor="AddBedrooms">Bedrooms:</label>
                <input
                  type="number"
                  id="AddBedrooms"
                  className="form-control"
                  name="Price"
                />
              </div>
              <div className="">
                <label htmlFor="AddBathrooms">Bathrooms:</label>
                <input
                  type="number"
                  id="AddBathrooms"
                  className="form-control"
                  name="Bathrooms"
                />
              </div>
              <div className="">
                <label htmlFor="AddPropertySize">PropertySize:</label>
                <input
                  type="number"
                  id="AddPropertySize"
                  className="form-control"
                  name="PropertySize"
                />
              </div>
            </div>
            <br />
            <label htmlFor="Addnumber">number:</label>
            <input
              type="number"
              id="Addnumber"
              className="form-control"
              name="number"
            />
            <br />
            <label htmlFor="Addlocation">location:</label>
            <input
              type="text"
              id="Addlocation"
              className="form-control"
              name="location"
            />
            <br />
            <label htmlFor="moreDescription">MoreDescription:</label>
            <input
              type="text"
              id="moreDescription"
              className="form-control"
              name="moreDescription"
            />
            <br />
            <label htmlFor="Addphoto">photo:</label>
            <input type="file" name="imgs" />
            <div className="buttons">
              <button
                className="btn btn-danger"
                onClick={() => {
                  flex.current.style.display = "none";
                }}
              >
                close
              </button>
              <button className="btn btn-success" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Navbar1 />
      <Header />
      <Mainsection />
      <Footer />
    </div>
  );
};

export default Home;
