import Navigation from "./screens/navigationBar/NavigationBar";
import "./App.css";
import IndexDoctors from "./screens/doctors/IndexDoctors";
import { BrowserRouter as Router,Route,Routes,BrowserRouter } from "react-router-dom";
import IndexPatients from "./screens/patients/IndexPatients";
import IndexSpecialties from "./screens/specialties/IndexSpecialties";
import IndexSchedules from "./screens/schedules/IndexSchedules";

export const Routing = () => {
 return(
  <BrowserRouter>
    <Routes>
    <Route path="/" 
    element={<Navigation/>}
    />
    <Route path="/doctor" 
    element={<IndexDoctors/>}
    />   
    <Route path="/patient" 
    element={<IndexPatients/>}
    />   
    <Route path="/specialties" 
    element={<IndexSpecialties/>}
    /> 
     <Route path="/schedules" 
    element={<IndexSchedules/>}
    /> 
     </Routes>
  </BrowserRouter>
 );
}


