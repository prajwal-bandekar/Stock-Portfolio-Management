import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LP from "./components/LP";
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from './components/LandingPage';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import SignupForm from "./components/Authentication/SignupForm.jsx";
import LoginEmail from "./components/Authentication/LoginEmail";
import LoginPhone from "./components/Authentication/LoginPhone";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LP />} />
          <Route path="/advisor" element={<SignupForm />} />
          <Route path="/login-via-email" element={<LoginEmail />} />
          <Route path="/login-via-phone" element={<LoginPhone />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

      {/* Tesing LP here */}
      {/* <LP /> */}
    </div>
  );
}

export default App;
