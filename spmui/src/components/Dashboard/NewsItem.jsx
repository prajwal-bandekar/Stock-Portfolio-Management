import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/NewsItem.css";

const NewsItem = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [page, setPage] = useState(1);

  let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=9&apiKey=${api_key}`;
  // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=9&apiKey=${api_key}`;
  const [data, setData] = useState([]);



  const handlePrevios=()=>{

  }

  const handleNext=()=>{
    
  console.log(this.state.page)
  }

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.articles);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <h1>Latest Top News</h1>
      <h6 id="h6">Here are the latest news related to stocks and business.</h6>
      <div className="container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.urlToImage} alt="Image Not Found" />
            <br />
            <h5>{item.title}</h5>
            <p>{item.description.substring(0, 150)}...</p>
            <p>
              <a href={item.url} target="_">
                Read More <i class="fa-solid fa-circle-chevron-right"></i>
              </a>
            </p>
          </div>
        ))}
      </div>
<br />
      <div className="button-navigate">
        <button onClick={handlePrevios}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={handleNext}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
