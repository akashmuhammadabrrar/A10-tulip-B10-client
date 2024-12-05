import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Slider></Slider>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
