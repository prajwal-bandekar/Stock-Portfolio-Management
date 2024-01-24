import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "./Styles/Login.css";

const LoginEmail = () => {
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/advisor/login-via-email?email=${email}&password=${password}`
      )
      .then(() => {
        alert("User Logged in SucessFully");
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong Credentials entered");
      });
  };

  return (
    <>
      <div id="box-parent">
        <div id="box-child">
          <Form id="form">

            <label>Email address</label> 
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <label id="checkbox"><input type="checkbox" /> Keep me logged in </label>
  

            <button type="submit" id="loginbutton" onClick={handleLogin}>
              Log in
            </button>

          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginEmail;
