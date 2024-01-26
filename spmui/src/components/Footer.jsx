import React from 'react'
import './Styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div id="footer">
        <div className="newsletter">
          Sign up for our News letter to keep <br />
          up-to-date with the latest trends in the market. <br />
          {/* Add SendGrID API Here */}
          <input
            type="email"
            placeholder="Sign up using your email here"
          />
          <button class="button-54">
            Submit
          </button>
          {/* <button id="newsbutton">Submit</button> */}
        </div>

        <div className="socials">
          <h3 id="findushere">Find us here </h3>
          <div id="socialLink">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              FaceBook
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <br />
          <h4 id="address">
            Address <br />
          </h4>
          <h6 id="addressLink">
            03/11, Developer Brain Avenue, <br />
            BTM 2'nd Stage, <br />
            Bengaluru, Karnataka, <br />
            India - 560076 <br />
          </h6>
        </div>
      </div>
    </>
  )
}

export default Footer