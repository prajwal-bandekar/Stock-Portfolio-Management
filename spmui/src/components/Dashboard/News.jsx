// import axios from "axios";
// import React from "react";
// import NewsItem from "./NewsItem";

// const News = () => {
//   let apiKey = process.env.REACT_APP_NEWS_API;

//   let fetchNews = (e) => {
//     e.preventDefault();

//     axios.get(
//       `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
//     );
//   };

//   return (
//     <>
//       <p>Business News</p>
//       <div className="container my-3">
//         <h3>Top headlines across tables</h3>

//         <div className="row">
//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>

//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>

//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>

//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>

//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>

//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>

//           <div className="col-md-4 mx-2">
//             <NewsItem title="BBC Earth" description="sdfghjkertyu dfghjcvbn" />
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default News;
