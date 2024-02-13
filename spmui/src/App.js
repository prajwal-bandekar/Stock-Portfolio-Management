import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LP from "./components/LP";
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from './components/LandingPage';
import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import SignupForm from "./components/Authentication/SignupForm.jsx";
import LoginEmail from "./components/Authentication/LoginEmail";
import LoginPhone from "./components/Authentication/LoginPhone";
import Dashboard from "./components/Dashboard/Dashboard";
import News from "./components/Dashboard/News";
// import News from "./components/Dashboard/News";

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
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </BrowserRouter>

      {/* Tesing LP here */}
      {/* <LP /> */}
      {/* <News/> */}
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
