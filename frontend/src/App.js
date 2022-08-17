import Navigation from "./screens/navigationBar/NavigationBar";
import "./App.css";
import Home from "./screens/Home/Home";
import IndexDoctors from "./screens/doctors/IndexDoctors";
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";
import IndexPatients from "./screens/patients/IndexPatients";

export default function App(){
 return(
  <BrowserRouter>
  <Routes>
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


