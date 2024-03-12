import React, { useState } from "react";
import Navbar from "../Navbar";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [nos, setNos] = useState();
  const [category, setCategory] = useState();
  const [cmp, setCmp] = useState();
  const [total, setTotal] = useState();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  const stock_key = process.env.REACT_APP_API_KEY_Stock;

  // Function to handle search term change and fetch results
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    fetchSearchResults(e.target.value);
  };

  // Function to fetch search results
  const fetchSearchResults = (term) => {
    let searchURL = `https://financialmodelingprep.com/api/v3/search?exchangeShortName=NSE&query=${term}&apikey=${stock_key}`;
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error("Error fetching search results: ", error));
  };

  // Function to handle selecting a search result
  const handleSelect = (result) => {
    // Assuming 'result' contains the data you want to set in state
    // Update the state accordingly, e.g. setCategory(result.currency)
    console.log("Selected result:", result);
  };

  return (
    <>
      <Navbar />
      <div id="dash-main">
        <div id="dash-right">
          <h1 id="ys-h1">Your Stocks</h1>
          <h6>Here are the stocks you are currently tracking</h6>
          <div className="add-div">
            <span>
              <i className="fa-solid fa-magnifying-glass" id="icon-hover"></i>{" "}
              <input
                id="i1"
                type="text"
                placeholder="Select your Stock"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchResults.length > 0 && (
                <ul className="dropdown">
                  {searchResults.map((result) => (
                    <li key={result.symbol} onClick={() => handleSelect(result)}>
                      {result.name}
                    </li>
                  ))}
                </ul>
              )}
            </span>

            <span>
              <i className="fa-solid fa-hashtag" id="icon-hover"></i>
              <input
                id="i2"
                value={nos}
                type="number"
                placeholder="No. of Stocks"
                onChange={(e) => {
                  setNos(e.target.value);
                }}
              />
            </span>

            <span>
              <i className="fa-solid fa-list" id="icon-hover"></i>
              <input
                id="i3"
                value={category}
                type="text"
                placeholder="Category"
                onChange={(e) => {
                  setCategory(e.target.value.toUpperCase());
                }}
              />
            </span>

            <span>
              <i className="fa-solid fa-indian-rupee-sign" id="icon-hover"></i>
              <input
                id="i4"
                value={cmp}
                type="number"
                placeholder="Current Market Price"
                onChange={(e) => {
                  setCmp(e.target.value);
                }}
              />
            </span>

            <span>
              <i className="fa-solid fa-money-bill" id="icon-hover"></i>
              <input
                id="i5"
                value={total}
                type="number"
                placeholder="Total Invested"
                onChange={(e) => {
                  setTotal(e.target.value);
                }}
              />
            </span>

            <button id="addbtn">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
