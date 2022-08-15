import React from "react";
import "./home.css";
import Hotels from "./Hotels";
import Header from "./Nav";

const Home = () => {
  return (
    <div>
      <Header/>
        <Hotels />
    </div>
  );
};

export default Home;
