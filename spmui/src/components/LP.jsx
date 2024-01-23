import React from "react";
import "./LP.css";
// import { Link } from "react-router-dom";
// import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const LP = () => {
  return (
    <>
    {/* PAGE 1 */}
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

          <h5>
            Monitor your stock market portfolio in real-time with our intuitive
            and stylish tracker.
          </h5>
          <br />
          
          {/* <Link to="/Signup"></Link> */}
          <button id="button">Get Started</button> 
          
        </div>
      </div>

      {/* PAGE 2 */}

      <div id="parentdiv2">
        <div id="header">
        <h1>Key Features</h1>
        <h5>Our portfolio tracker offers a range of features designed to help you stay on top of your investments.</h5>
        </div>
        <div id="tab">
          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
          <i class="fa-regular fa-bell fa-2xl"></i>
            <h1 className="h1tab">Real Time Updates</h1>
            <h5 className="h5tab">Get updates on your stocks in your <br/> portfolio in real-time.</h5></div>

          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
          <i class="fa-regular fa-clipboard fa-2xl"></i>
            <h1 className="h1tab">Detailed Analysis</h1>
            <h5 className="h5tab">Access detailed analysis of your portfolio's <br/> performance.</h5></div>

          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
            <i class="fa-regular fa-bell fa-2xl"></i>
            <h1 className="h1tab">Custom Alerts</h1>
            <h5 className="h5tab">Set custom alerts for your stocks and never <br/> miss a market move.</h5></div>
        </div>
      </div>
    </>
  );
};

export default LP;
