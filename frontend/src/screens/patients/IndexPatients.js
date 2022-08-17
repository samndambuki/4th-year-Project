import React,{useState} from "react";
import Constants from "../../utilities/Constants";
import PatientCreateForm from "../../components/PatientCreateForm";
import PatientUpdateForm from "../../components/PatientUpdateForm";

export default function IndexPatients(){

    const[patients,setPatients] = useState([]);
    const[showingCreateNewPatientForm,setshowingCreateNewPatientForm] = useState(false);
    const[patientCurrentlyBeingUpdated,setpatientCurrentlyBeingUpdated] = useState(null);


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

    function deletePatient(patientId){
        const url = Constants.API_URL_DELETE_PATIENT_BY_ID;

        fetch(url,{
            method:'DELETE',
    })
        .then((response) => response.json())
        .then((responseFromServer) => {
            console.log(responseFromServer);
            onPatientDeleted(patientId);
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
                    {(showingCreateNewPatientForm === false && patientCurrentlyBeingUpdated === null) && (
                        <div>
                        <h1>Patient's Registration</h1>
                        <div className="mt-5">
                            <button onClick={getPatients} className="btn btn-dark btn-lg w-100">
                                Get Patients From Server
                            </button>
                            <button onClick={() => setshowingCreateNewPatientForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">
                                Register new Patient
                            </button>
                        </div>
                        </div>
                    )} 
                    
                    {(patients.length>0 && showingCreateNewPatientForm === false && patientCurrentlyBeingUpdated === null) && renderPatientsTable()}
                    {showingCreateNewPatientForm && <PatientCreateForm onPatientCreated={onPatientCreated}/>}
                    {patientCurrentlyBeingUpdated !== null && <PatientUpdateForm patient={patientCurrentlyBeingUpdated} onPatientUpdated={onPatientUpdated}/>}
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
                                Password
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
                
                            <th scope="col">
                                CRUD OPERATIONS
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
                            <td>{patient.password}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.location}</td>
                            <td>
                                <button onClick={()=>setpatientCurrentlyBeingUpdated(patient)} className="btn btn-dark btn-lg mx-3 my-3">Update</button>
                                <button onClick={()=>{if(window.confirm(`Are you sure you wnat to delete the patient named"${patient.patientName}"?`)) 
                            deletePatient(patient.patientId)}} className="btn btn-secondary btn-lg">Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setPatients([])} className="btn btn-dark btn-lg w-100">
                    Empty Patients Table
                </button>
            </div>
        );
    }

    function onPatientCreated(createdPatient){
        setshowingCreateNewPatientForm(false);
        if(createdPatient === null){
            return;
        }
        alert(`Patient "${createdPatient.patientname}" successfully Registered`)
        getPatients();
    }

    function onPatientUpdated(updatedPatient){
        setpatientCurrentlyBeingUpdated(null);
        if(updatedPatient === null){
            return;
        }

        let patientsCopy = [...patients];

        const index = patientsCopy.findIndex((patientsCopyPatient,currentIndex)=> {
            if(patientsCopyPatient.patientId === updatedPatient.patientId)
            {
                return true;
            }
        });
        if(index !== -1){
            patientsCopy[index] = updatedPatient;
        }
        setPatients(patientsCopy);
        alert(`Patient Successfully Updated.After clicking OK look for the Patient with name "${updatedPatient.patientName}" in the table below to see the updates`);

    }

    function onPatientDeleted(deletedPatientPatientId){
        let patientsCopy = [...patients];

        const index = patientsCopy.findIndex((patientsCopyPatient,currentIndex)=> {
            if(patientsCopyPatient.patientId === deletedPatientPatientId)
            {
                return true;
            }
        });
        if(index !== -1){
            patientsCopy.splice(index,1);
        }
        setPatients(patientsCopy);
        alert('Patient Sucessfully Deleted.');
    }

}