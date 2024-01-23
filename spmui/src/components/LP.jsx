import React from "react";
import "./LP.css";
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
          <button id="button">Get Started</button> 
          
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
        <h1>Testi<span id="monials">monials</span></h1>
        <h5>Don't just take our word for it. Hear what our users have to say.</h5>
        </div>

      <div id="tab-container">

      <div className="tabs"> 
      <img src="https://avatars.githubusercontent.com/u/8151169?v=4" alt="" />
      <h1>Erlich Bachman</h1>
      <p>"InvestMitra, the ultimate game changer for managing 
            my stock portfolio, delivers real-time updates and custom alerts – hands down,
            the best damn portfolio tracker  I've ever used. I've got skin in the tech game, 
            owning a solid 10% of Pied Piper. And let's not forget, I have made strategic 
            moves like selling Aviato in the end. Highly recommend it because missing a 
            market move is so last season!"</p>
      <p></p>
      </div>

      <div className="tabs">
      <img src="https://pbs.twimg.com/profile_images/731951677859868674/2iRz4Ikp_400x400.jpg" alt="" />
      <h1>Erlich Bachman</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa facere dicta neque, aspernatur officia, dignissimos harum deleniti iste quod perferendis obcaecati placeat temporibus. Perferendis consequatur iste temporibus nulla ipsum?
      Eligendi labore voluptatibus aliquam quod ad ullam nihil maiores maxime sint minus veritatis ut tempore at quia animi, rerum quam eveniet magni. Sed, explicabo. Sequi modi nobis debitis aliquam consequuntur.</p>
      </div>

      <div className="tabs">
      <img src="https://i.scdn.co/image/ab67706c0000da84a8f856841e132a9c0f6dff19" alt="" />
      <h1>Erlich Bachman</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa facere dicta neque, aspernatur officia, dignissimos harum deleniti iste quod perferendis obcaecati placeat temporibus. Perferendis consequatur iste temporibus nulla ipsum?
      Eligendi labore voluptatibus aliquam quod ad ullam nihil maiores maxime sint minus veritatis ut tempore at quia animi, rerum quam eveniet magni. Sed, explicabo. Sequi modi nobis debitis aliquam consequuntur.</p>

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
          <a href="https://www.instagram.com/" target="_blank">Instagram </a>
          <a href="https://www.facebook.com/" target="_blank">FaceBook </a>
          <a href="https://www.twitter.com/" target="_blank">Twitter </a>
          <a href="https://in.linkedin.com/" target="_blank">LinkedIn </a>
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
