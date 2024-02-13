import React from "react";
import './Styles/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div id="parentdiv">
    <div id="nav">
        <div id="nav-left">
          <h4>*Logo* InvestMitra</h4>
        </div>

        <div id="nav-right">
          <h4 className="linkNavBar"> <Link to="/">Home</Link></h4>
            <h4 className="linkNavBar"><Link to="/about">About us</Link></h4>
            <h4 className="linkNavBar"><Link to="/dashboard">Dashboard</Link></h4>
            <h4 className="linkNavBar"><Link to="/news">News</Link></h4>
            <h4 className="linkNavBar" onClick={scrollToFooter}>Contact Us</h4>
        </div>
      </div>
    </div>
    {/* <ul id="border-bottom"></ul> */}
    </>
  );
};

export default Navbar;
