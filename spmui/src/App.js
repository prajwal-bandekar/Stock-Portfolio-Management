import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import SignupForm from './components/Authentication/SignupForm.jsx'
import LoginEmail from './components/Authentication/LoginEmail';
import LoginPhone from './components/Authentication/LoginPhone';



function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage/>} />
            <Route path='/Signup' element={<SignupForm/>} />
            <Route path='/Login-Via-Email' element={<LoginEmail/>} />
            <Route path='/Login-Via-Phone' element={<LoginPhone/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
