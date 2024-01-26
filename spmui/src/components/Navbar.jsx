import React from "react";
import './Styles/Navbar.css'

const Navbar = () => {
  return (
    <>
    <div id="parentdiv">
    <div id="nav">
        <div id="nav-left">
          <h4>*Logo* InvestMitra</h4>
        </div>

        <div id="nav-right">
          <h4 className="linkNavBar">Home</h4>
          <h4 className="linkNavBar">About</h4>
          <h4 className="linkNavBar">Contact Us</h4>
          {/* <h4 className="linkNavBar"> <Link to="/home">Home</Link></h4>
            <h4 className="linkNavBar"><Link to="/about">About us</Link></h4>
            <h4 className="linkNavBar"><Link to="/contact-us">Contact Us</Link></h4> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
