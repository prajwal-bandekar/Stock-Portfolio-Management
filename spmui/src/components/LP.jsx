import React from "react";
import "./LP.css";

const LP = () => {
  return (
    <>
      <div id="parentdiv">
        <div id="nav">
          <div id="nav-left">
            
            <h4>*Logo* InvestMitra</h4>
          </div>

          <div id="nav-right">
            <h4>Home</h4>
            <h4>About us</h4>
            <h4>Contact Us</h4>
          </div>
        </div>
        <div id="herosection">
          <h1>Track Your Investments</h1> 
          <br />
          <h5>Monitor your stock market portfolio in real-time with our intuitive and stylish tracker.</h5>
            <br />
            <button id="button">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default LP;
