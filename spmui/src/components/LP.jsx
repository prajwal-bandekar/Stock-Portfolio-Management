import React from "react";
import "./LP.css";
import './Button.css'
// import { Link } from "react-router-dom";
// import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const LP = () => {
  return (
    <>
    {/* PAGE 1 */}
      <div id="parentdiv">
        <div id="nav">
          <div id="nav-left">
            <h4>*Logo* InvestMitra</h4>
          </div>

          <div id="nav-right">
            <h4>Home</h4>
            <h4>About us</h4>
            <h4>Contact Us</h4>
          </div>
        </div>

        <div id="herosection">
          <h1>Track Your </h1>
          <br /> 

          <h2 id="h2Invest">Investments</h2>
          <br />
        
          <h5>
            Monitor your stock market portfolio in real-time <br/>with our intuitive
            and stylish tracker.
          </h5>
          <br />
          
          {/* <Link to="/Signup"></Link> */}
          {/* <button id="button">Get Started</button>  */}
          <button class="button-86" role="button">Get Started</button>

        
          
        </div>
      </div>

      {/* PAGE 2 */}

      <div id="parentdiv2">
        <div id="header">
        <h1><span id="KeySpan">Key</span> <span id="FeaturesSpan">Features</span> </h1>
        <h5>Our portfolio tracker offers a range of features designed to help you stay on top of your investments.</h5>
        </div>
        <div id="tab">
          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
          <i class="fa-regular fa-bell fa-2xl"></i>
            <h1 className="h1tab">Real Time Updates</h1>
            <h5 className="h5tab">Get updates on your stocks in your <br/> portfolio in real-time.</h5></div>

          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
         <i class="fa-solid fa-magnifying-glass-chart fa-2xl"></i>
            <h1 className="h1tab">Detailed Analysis</h1>
            <h5 className="h5tab">Access detailed analysis of <br/> your portfolio's  performance.</h5></div>

          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
            <i class="fa-regular fa-bell fa-2xl"></i>
            <h1 className="h1tab">Custom Alerts</h1>
            <h5 className="h5tab">Set custom alerts for your stocks  <br/>and never miss a market move.</h5></div>
        </div>
      </div>

      {/* PAGE 3 */}
      <div id="parentdiv3">
      <div id="header">
        <h1>Testimonials</h1>
        <h5>Don't just take our word for it. Hear what our users have to say.</h5>
        </div>

      <div id="tab-container">

      <div className="tabs"> 
      <img src="https://avatars.githubusercontent.com/u/8151169?v=4" alt="" />
      <h1>Erlich Bachman</h1>
      <h6>Chief Evangelist Officer at Pied Piper, Ex Aviato</h6>
      <p>"InvestMitra, the ultimate game changer for managing 
            my stock portfolio, Now offcourse, I don't need to keep every of my investments written on my hand.
             I've got skin in the tech game, owning a solid 10% of Pied Piper. And let's not forget, I have made strategic 
            moves like selling Aviato in the end, based on my very good track record, I Highly recommend this to everyone, because missing a 
            market move is so last season!"</p>
      <p></p>
      </div>

      <div className="tabs">
      <img src="https://pbs.twimg.com/profile_images/731951677859868674/2iRz4Ikp_400x400.jpg" alt="" />
      <h1>Gavin Belson</h1>
      <h6>Investor, Ex CEO Hooli</h6>
      <p>"An unparalleled masterpiece in the realm of stock portfolio management! InvestMitra,
         With its cutting-edge features, I can effortlessly gauge how much ground I need to cover 
         in stock performance to outshine even the likes of Jeff Bezos. The features are nothing 
         short of revolutionary – a Hooli-level advantage in navigating the intricate landscape of investments.It is offcourse still in question
         whether it is Hooli property or not as it's still contested in court.."</p>
      </div>

      <div className="tabs">
      <img src="https://i.scdn.co/image/ab67706c0000da84a8f856841e132a9c0f6dff19" alt="" />
      <h1>Rus Hanneman</h1>
      <h6>Member of the three comma club and Investor</h6>
      <p>People, let me tell you, this app InvestMitra, is the Elon Musk of portfolio trackers!
         It's like having a rocket strapped to my investments - real-time updates, custom alerts
          that hit harder than a SpaceX launch, and my tres comma club? Oh, it's thriving! 
          Thanks to InvestMitra, I'm not just tracking stocks; I'm cruising in my latest ride 
          This app is not just a tool; it's the fuel for my financial journey. Get on the rocket ship, or you'll be left behind!</p>

      </div>

     
      </div>

      </div>

      {/* Page 4 */}
      <div id="footer">
        <div className="newsletter">Sign up for our News letter to keep <br/>
         up-to-date with the latest trends in the market. <br/>
         {/* Add SendGrID API Here */}
         <input type="email" placeholder="Sign up using your email here"/> <button id="newsbutton">Submit</button>
         </div>
        
        <div className="socials">
          <h3 id="findushere">Find us here  </h3>
          <div id="socialLink"> 
          <a href="https://www.instagram.com/" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank">FaceBook</a>
          <a href="https://www.twitter.com/" target="_blank">Twitter</a>
          <a href="https://in.linkedin.com/" target="_blank">LinkedIn</a>
          </div>
          
          <br />
          <h4 id="address">Address <br /></h4>
          <h6 id="addressLink">
          03/11, Developer Brain Avenue, <br /> 
          BTM 2'nd Stage, <br /> 
          Bengaluru, Karnataka, <br /> 
          India - 560076 <br /> 
          </h6>
          
          
        </div>
      </div>
    </>
  );
};

export default LP;
