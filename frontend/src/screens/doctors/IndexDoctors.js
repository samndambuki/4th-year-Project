import React,{useState} from "react";
import Constants from "../../utilities/Constants";
import DoctorCreateForm from "../../components/DoctorCreateForm";
import SpecialtyCreateForm from "../../components/SpecialtyCreateForm";
import ScheduleCreateForm from "../../components/ScheduleCreateForm";
import Authorized from "../../auth/Authorized";

export default function IndexDoctors(){

    const[doctors,setDoctors] = useState([]);
    const[patients,setPatients] = useState([]);
    const[showingCreateNewDoctorForm,setshowingCreateNewDoctorForm] = useState(false);
    const[showingCreateNewSpecialtyForm,setshowingCreateNewSpecialtyForm] = useState(false);
    const[showingCreateNewScheduleForm,setshowingCreateNewScheduleForm] = useState(false);
    
    function getDoctors(){
        const url = Constants.API_URL_GET_ALL_DOCTORS;
        fetch(url,{
            method:'GET'
    })
        .then(response=>response.json())
        .then(doctorsFromServer => {
            setDoctors(doctorsFromServer);
        })
        .catch((error)=>{
            console.log(error);
            alert(error);
        });
    }

    function getPatients(){
        const url = Constants.API_URL_GET_ALL_PATIENTS;
        fetch(url,{
            method:'GET'
    })
        .then(response=>response.json())
        .then(patientsFromServer => {
            setPatients(patientsFromServer);
        })
        .catch((error)=>{
            console.log(error);
            alert(error);
        });
    }

    return (
        
        <div className="container">
            <div className="row-min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-Items-center">

                    {/* <Authorized
                    role="doctor"

                    authorized={
                        <> */}

                    {(showingCreateNewDoctorForm === false) && (showingCreateNewSpecialtyForm === false) && 
                    (showingCreateNewScheduleForm === false) &&
                     (
                        
                        <div>
                        <h1>Doctor's Page</h1>

                        <div className="mt-5">

                            <button onClick={getDoctors} className="btn btn-dark btn-lg w-100">
                                Get Doctors Report
                            </button>

                            <button onClick={() => setshowingCreateNewDoctorForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">
                                Register Doctor For Service
                            </button>

                            <button onClick={() => setshowingCreateNewSpecialtyForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">
                                Register Doctor's Specialty
                            </button>

                            <button onClick={() => setshowingCreateNewScheduleForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">
                                Register Doctor's Schedule
                            </button>

                            <button onClick={getPatients} className="btn btn-secondary btn-lg w-100 mt-4">
                                Get Patients Report
                            </button>

                        </div>
                        </div>
                    )} 

                {(patients.length>0) && renderPatientsTable()}
                    {(doctors.length>0) && renderDoctorsTable()}
                    {showingCreateNewDoctorForm && <DoctorCreateForm onDoctorCreated={onDoctorCreated}/>}
                    
                    {showingCreateNewScheduleForm && <ScheduleCreateForm onScheduleCreated={onScheduleCreated}/>}
                    {showingCreateNewSpecialtyForm && <SpecialtyCreateForm onSpecialtyCreated={onSpecialtyCreated}/>}  
                        {/* </>
                    }

                    /> */}

                </div>
            </div>
            </div>
    );

    function renderPatientsTable(){
        return(
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">
                                PatientId(PK)
                            </th>
        
                            <th scope="col">
                                PatientName
                            </th>
                        
                            <th scope="col">
                                Email
                            </th>

                            <th scope="col">
                                PhoneNumber
                            </th>
                        
                            <th scope="col">
                                Gender
                            </th>
                      
                            <th scope="col">
                              Location
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient)=>(
                            <tr key={patient.patientId}>
                            <th scope="row">{patient.patientId}</th>
                            <td>{patient.patientName}</td>
                            <td>{patient.email}</td>
                            <td>{patient.phoneNumber}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.location}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setPatients([])} className="btn btn-dark btn-lg w-100">
                    Empty Patients Report
                </button>
            </div>
        );
    }



    function renderDoctorsTable(){
        return(
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">
                                DoctorId(PK)
                            </th>
        
                            <th scope="col">
                                DoctorName
                            </th>
                        
                            <th scope="col">
                                Email
                            </th>
                       
                            <th scope="col">
                                PhoneNumber
                            </th>
                        
                            <th scope="col">
                                Gender
                            </th>
                      
                            <th scope="col">
                                Facility
                            </th>
                       
                            <th scope="col">
                                Facility Location
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor)=>(
                            <tr key={doctor.doctorId}>
                            <th scope="row">{doctor.doctorId}</th>
                            <td>{doctor.doctorName}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phoneNumber}</td>
                            <td>{doctor.gender}</td>
                            <td>{doctor.facility}</td>
                            <td>{doctor.facilityLocation}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setDoctors([])} className="btn btn-dark btn-lg w-100">
                    Empty Doctors Report
                </button>
            </div>
        );
    }

    function onDoctorCreated(createdDoctor){
        setshowingCreateNewDoctorForm(false);
        if(createdDoctor === null){
            return;
        }
        alert(`Doctor "${createdDoctor.doctorname}" successfully Registered`)
    }

    function onScheduleCreated(createdSchedule){
        setshowingCreateNewScheduleForm(false);
        if(createdSchedule === null){
            return;
        }
        alert(`Schedule "${createdSchedule.availability}" successfully Created`)
    }


    function onSpecialtyCreated(createdSpecialty){
        setshowingCreateNewSpecialtyForm(false);
        if(createdSpecialty === null){
            return;
        }
        alert(`Specialty "${createdSpecialty.specialtyName}" successfully Registered`)
    }
}