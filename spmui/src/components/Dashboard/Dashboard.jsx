// import React, { useState } from "react";
// import Navbar from "../Navbar";
// import "../Styles/Dashboard.css";

// const Dashboard = () => {
//   const [nos, setNos] = useState();
//   const [category, setCategory] = useState();
//   const [cmp, setCmp] = useState();
//   const [total, setTotal] = useState();

//   // const stock_key= process.env.REACT_APP_API_KEY_Stock;
// // API Hit is only 25 per day very less to even test and integrate, ignore this
//   // let searchURL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=adani&apikey=${stock_key}`

//   return (
//     <>
//       <Navbar />
//       <div id="dash-main">
//         <div id="dash-right">
//           <h1 id="ys-h1">Your Stocks</h1>
//           <h6>Here are the stocks your are currently tracking</h6>
//           <div className="add-div">
//             <span>
//               <i class="fa-solid fa-magnifying-glass" id="icon-hover"></i>{" "}
//               <input
//               id="i1"
//               type="text"
//               placeholder="Select your Stock" />
//             </span>

//             <span>
//               <i class="fa-solid fa-hashtag" id="icon-hover"></i>
//               <input
//                 id="i2"
//                 value={nos}
//                 type="number"
//                 placeholder="No. of Stocks"
//                 onChange={(e) => {
//                   setNos(e.target.value);
//                 }}
//               />
//             </span>

//             <span>
//               <i class="fa-solid fa-list" id="icon-hover"></i>
//               <input
//                 id="i3"
//                 value={category}
//                 type="text"
//                 placeholder="Category"
//                 onChange={(e) => {
//                   setCategory(e.target.value.toUpperCase());
//                 }}
//               />
//             </span>

//             <span>
//               <i class="fa-solid fa-indian-rupee-sign" id="icon-hover"></i>
//               <input
//                 id="i4"
//                 value={cmp}
//                 type="number"
//                 placeholder="Current Market Price"
//                 onChange={(e) => {
//                   setCmp(e.target.value);
//                 }}
//               />
//             </span>

//             <span>
//               <i class="fa-solid fa-money-bill" id="icon-hover"></i>
//               <input
//                 id="i5"
//                 value={total}
//                 type="number"
//                 placeholder="Total Invested"
//                 onChange={(e) => {
//                   setTotal(e.target.value);
//                 }}
//               />
//             </span>

//             <button id="addbtn">Add</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
// import stockData from "./stocks.json"; // Importing stock data directly
// import "../Styles/Dashboard.css";

// const Dashboard = () => {
//   const [nos, setNos] = useState("");
//   const [category, setCategory] = useState("");
//   const [cmp, setCmp] = useState("");
//   const [total, setTotal] = useState("");
//   const [matchingStocks, setMatchingStocks] = useState([]);

//   useEffect(() => {
//     // Fetching data from stocks.json file
//     setMatchingStocks(stockData);
//   }, []);

//   const handleSearch = (query) => {
//     const results = stockData.filter((stock) =>
//       stock["Company Name"].toLowerCase().includes(query.toLowerCase())
//     );
//     setMatchingStocks(results.slice(0, 5));
//   };

//   const handleAdd = () => {
//     // Add logic to handle adding stock
//     // You can access the values of nos, category, cmp, and total here
//     // For example:
//     console.log("Adding stock with values:", nos, category, cmp, total);
//   };

//   return (
//     <>
//       <Navbar />
//       <div id="dash-main">
//         <div id="dash-right">
//           <h1 id="ys-h1">Your Stocks</h1>
//           <h6>Here are the stocks you are currently tracking</h6>
//           <div className="add-div">
//             <span>
//               <i className="fa-solid fa-magnifying-glass" id="icon-hover"></i>{" "}
//               <input
//                 id="i1"
//                 type="text"
//                 placeholder="Select your Stock"
//                 onChange={(e) => handleSearch(e.target.value)}
//               />
//               <ul className="dropdown">
//                 {matchingStocks.map((stock) => (
//                   <li key={stock["ISIN Code"]}>{stock["Company Name"]}</li>
//                 ))}
//               </ul>
//             </span>
//             <span>
//               <i className="fa-solid fa-hashtag" id="icon-hover"></i>
//               <input
//                 id="i2"
//                 type="number"
//                 value={nos}
//                 placeholder="No. of Stocks"
//                 onChange={(e) => setNos(e.target.value)}
//               />
//             </span>
//             <span>
//               <i className="fa-solid fa-list" id="icon-hover"></i>
//               <input
//                 id="i3"
//                 type="text"
//                 value={category}
//                 placeholder="Category"
//                 onChange={(e) => setCategory(e.target.value.toUpperCase())}
//               />
//             </span>
//             <span>
//               <i className="fa-solid fa-indian-rupee-sign" id="icon-hover"></i>
//               <input
//                 id="i4"
//                 type="number"
//                 value={cmp}
//                 placeholder="Current Market Price"
//                 onChange={(e) => setCmp(e.target.value)}
//               />
//             </span>
//             <span>
//               <i className="fa-solid fa-money-bill" id="icon-hover"></i>
//               <input
//                 id="i5"
//                 type="number"
//                 value={total}
//                 placeholder="Total Invested"
//                 onChange={(e) => setTotal(e.target.value)}
//               />
//             </span>
//             <button id="addbtn" onClick={handleAdd}>Add</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import stockData from "./stocks.json"; // Importing stock data directly
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [nos, setNos] = useState("");
  const [category, setCategory] = useState("");
  const [cmp, setCmp] = useState("");
  const [total, setTotal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [matchingStocks, setMatchingStocks] = useState([]);

  useEffect(() => {
    // Initially, show empty matching stocks
    setMatchingStocks([]);
  }, []);

  const handleSearch = (query) => {
    // Update searchQuery state
    setSearchQuery(query);

    // Filter stock data based on search query
    const results = stockData.filter((stock) =>
      stock["Company Name"].toLowerCase().includes(query.toLowerCase())
    );

    // Set matching stocks state
    setMatchingStocks(results.slice(0, 5)); // Limit to 5 results
  };

  const handleSelectStock = (stockName) => {
    // Update selectedStock state and clear matching stocks
    setSelectedStock(stockName);
    setMatchingStocks([]);
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
                value={selectedStock || searchQuery} // Display selected stock or search query
                onChange={(e) => handleSearch(e.target.value)}
              />
              {matchingStocks.length > 0 && (
                <ul className="dropdown">
                  {matchingStocks.map((stock) => (
                    <li
                      key={stock["ISIN Code"]}
                      onClick={() => handleSelectStock(stock["Company Name"])}
                    >
                      {stock["Company Name"]}
                    </li>
                  ))}
                </ul>
              )}
            </span>
            <span>
              <i className="fa-solid fa-hashtag" id="icon-hover"></i>
              <input
                id="i2"
                type="number"
                value={nos}
                placeholder="No. of Stocks"
                onChange={(e) => setNos(e.target.value)}
              />
            </span>
            <span>
              <i className="fa-solid fa-list" id="icon-hover"></i>
              <input
                id="i3"
                type="text"
                value={category}
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value.toUpperCase())}
              />
            </span>
            <span>
              <i className="fa-solid fa-indian-rupee-sign" id="icon-hover"></i>
              <input
                id="i4"
                type="number"
                value={cmp}
                placeholder="Current Market Price"
                onChange={(e) => setCmp(e.target.value)}
              />
            </span>
            <span>
              <i className="fa-solid fa-money-bill" id="icon-hover"></i>
              <input
                id="i5"
                type="number"
                value={total}
                placeholder="Total Invested"
                onChange={(e) => setTotal(e.target.value)}
              />
            </span>
            {/* <button id="addbtn" onClick={handleAdd}>
              Add
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;