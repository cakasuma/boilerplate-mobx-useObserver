import React from "react";
import "./home.scss";
import Stopwatch from "./stopwatch";

const Home = () => {
  return (
    <>
      <div className="home-title">Checkout boilerplate</div>
      <div className="home-wrapper">
        <Stopwatch />
      </div>
    </>
  );
};

export default Home;
