import React from "react";
import Header from "./Header";
import Navbar1 from "./Navbar1";
import Mainsection from "../sesction/Mainsection";
import Footer from "../footer/footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar1 />
      <Header />
      <Mainsection />
      <Footer />
    </div>
  );
};

export default Home;
