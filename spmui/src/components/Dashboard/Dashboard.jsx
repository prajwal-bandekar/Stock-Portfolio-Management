import React, { useState } from "react";
import Navbar from "../Navbar";
import "../Styles/Dashboard.css";
const Dashboard = () => {

const [nos,setNos] = useState();
const [category, setCategory] = useState();
const[cmp, setCmp] = useState();
const[total, setTotal] = useState();


  return (
    <>
      <Navbar />
      <div id="dash-main">
        <div id="dash-right">
          <h1 id="ys-h1">Your Stocks</h1>
          <h6>Here are the stocks your are currently tracking</h6>
          <div className="add-div">
            <span>
              <i class="fa-solid fa-magnifying-glass" id="icon-hover"></i>{" "}
              <input id="i1"  type="text" placeholder="Select your Stock" />
            </span>

            <span>
            <i class="fa-solid fa-hashtag" id="icon-hover"></i>
            <input id="i2" value={nos} type="number" placeholder="No. of Stocks" onChange={(e)=>{setNos(e.target.value)}} />
            </span>
            
            <span>
            <i class="fa-solid fa-list" id="icon-hover"></i>
            <input id="i3" value={category} type="text" placeholder="Category" onChange={(e)=>{setCategory(e.target.value.toUpperCase())}} />
            </span>

            <span>
            <i class="fa-solid fa-indian-rupee-sign" id="icon-hover"></i>
            <input id="i4" value={cmp} type="number" placeholder="Current Market Price" onChange={(e)=>{setCmp(e.target.value)}} />
            </span>
            
            <span>
            <i class="fa-solid fa-money-bill" id="icon-hover"></i>
            <input id="i5" value={total} type="number" placeholder="Total Invested" onChange={(e)=>{setTotal(e.target.value)}} />
            </span>
            
            <button id="addbtn">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
