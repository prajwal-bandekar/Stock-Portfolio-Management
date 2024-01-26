import React from "react";
import Navbar from "../Navbar";
import "../Styles/Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div id="dash-main">

        <div id="dash-left">
          <h1 id="h1left">Dashboard</h1>
          <h6 id="h6left">Manage your stocks here</h6>
          <br />
          <input type="text" placeholder="Add your stocks" />
          <br />
          <button id="dash-button">Add stock</button>
        </div>

        <div id="dash-right">
          <h1>Your stocks</h1>
          <h6>Here are the stocks your are currently tracking</h6>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
