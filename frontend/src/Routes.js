import Navigation from "./screens/navigationBar/NavigationBar";
import "./App.css";
import Home from "./screens/Home/Home";
import IndexDoctors from "./screens/doctors/IndexDoctors";
import { BrowserRouter as Router,Route,Routes,BrowserRouter } from "react-router-dom";
import IndexPatients from "./screens/patients/IndexPatients";
import { LogInPage } from "./screens/login/LogInPage";
import { SignUpPage } from "./screens/signup/SignUpPage";

export const Routing = () => {
 return(
  <BrowserRouter>
  <Routes>
    <Route path="/login"
    element={<LogInPage/>}
    />
     <Route path="/signup"
    element={<SignUpPage/>}
    />
    <Route path="/" 
    element={<Navigation/>}
    />
    <Route path="home" 
    element={<Home/>}
    />
    <Route path="doctor" 
    element={<IndexDoctors/>}
    />   
    <Route path="patient" 
    element={<IndexPatients/>}
    />   
  </Routes>
  </BrowserRouter>
 );
}


