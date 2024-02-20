import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Styles/About.css'

const About = () => {
  return (
    <div className="mid">
   <Navbar />
   <br />
  
   <h1 className='mid-padding' >Welcome to [Company Name], your trusted partner in stock market portfolio management.</h1>
  <br /><br />
    <h4 className='mid-padding' id='h4color' >Our work ethic revolves around transparency, reliability, and dedication. We believe in providing straightforward solutions and
     actionable insights to help you make informed investment decisions. Your success is our success, and we are committed to
      delivering results with integrity. </h4>
    <br />
      <h4 className='mid-padding' id='h4color'>The culture at [Company Name] is one of collaboration and continuous learning. 
      We foster an environment where teamwork thrives, and everyone's contribution is valued. Embracing diversity,
       we celebrate different perspectives, knowing that it enriches our approach to portfolio management. </h4>
      <br />
      <h4 className='mid-padding' id='h4color'>With a commitment to simplicity, we've stripped away unnecessary complexities. 
       Our goal is to make stock market portfolio management accessible to all. 
       Trust us to be your partner on this financial journey, guiding you towards your investment goals. </h4>
       
       <br />
       <h3 className='mid-padding'>[Company Name] - Simplifying Stock Market Success.</h3>
   
   <br />
       <Footer/>
       </div>
  )
}

export default About