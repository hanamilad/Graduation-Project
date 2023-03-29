import React from "react";
import Header from "./Header";
import Navbar1 from "./Navbar1";
import Mainsection from "../sesction/Mainsection";
const Home = () => {
  return (
    <div className="home">
      <Navbar1 />
      <Header />
      <Mainsection />
    </div>
  );
};

export default Home;
