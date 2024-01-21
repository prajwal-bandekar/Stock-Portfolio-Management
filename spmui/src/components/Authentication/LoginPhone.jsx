import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Styles/Login.css";

const LoginPhone = () => {
  let [phone, setPhone] = useState(null);
  let [password, setPassword] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/advisor/login-via-phone?phone=${phone}&password=${password}`
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

            <label>Phone Number</label> 
            <input
              type="tel"
              placeholder="Enter Phone number"
              pattern="[6-9]\d{9}" required 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <br />

            <Button type="submit" onClick={handleLogin}>
              Sign in
            </Button>

          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPhone;




