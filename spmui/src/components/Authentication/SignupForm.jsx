import Form from "react-bootstrap/Form";
import "./Styles/Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer'

function SignupForm() {
  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [phone, setPhone] = useState(null);
  let [password, setPassword] = useState(null);

  let data = { name, email, phone, password };

  // Add a Function to handle the Submit click
  let handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone && password) {
      axios
        .post("http://localhost:8080/advisor", data)
        .then((res) => {
          alert("Advisor Account Created Sucessfully");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    } else {
      alert("Please fill all the fields in the form");
    }
  };

  return (
    <>
    <Navbar />
    <div id="box-parent">

      <div id="box-child">
        <Form>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label>Phone</label>
          <input
            type="tel"
            placeholder="Enter your Phone number"
            pattern="[6-9]\d{9}"
            required
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

          <label id="checkbox">
            <input type="checkbox" /> I have read and agree to the terms and
            services
          </label>
          
          <button id="signupbutton" onClick={handleSubmit}>
            Create Free Account
          </button>  <br/>

            <p>or</p>
            <Link to="/login-via-email"><button id="loginbutton">
            Login
          </button></Link>
          
        </Form>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default SignupForm;
