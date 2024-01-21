import React from "react";
import { Link } from "react-router-dom";
import '../components/Authentication/Styles/LandingPage.css'


const LandingPage = () => {
  return (
    <>
      <div id="landingpage">
        <h1>
        Welcome to Wealthify? Tracking and Investing made easy
        </h1>
        
<br /> <br/>
<Link to="/Signup"> Click here to Sign up for a new account</Link>
<br />
<Link to="/Login-Via-Email">Click here to Log in Via Email</Link>
<br />
<Link to="/Login-Via-Phone">Click here to Log in Via Phone</Link>

        
      </div>
    </>
  );
};

export default LandingPage;
