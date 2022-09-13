import React,{useState} from "react";
import PatientCreateForm from "../../components/PatientCreateForm";

export default function IndexPatients(){

    const[showingCreateNewPatientForm,setshowingCreateNewPatientForm] = useState(false);

    return (
        <div className="container">
            <div className="row-min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-Items-center">
                    {(showingCreateNewPatientForm === false) && (
                        <div>
                        <h1>Patient's Registration</h1>

                        <div className="mt-5">
                            
                            <button onClick={() => setshowingCreateNewPatientForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">
                                Register new Patient
                            </button>
                        </div>
                        </div>
                    )} 
                    {showingCreateNewPatientForm && <PatientCreateForm onPatientCreated={onPatientCreated}/>}
                </div>
            </div>
            </div>
    );
    
    function onPatientCreated(createdPatient){
        setshowingCreateNewPatientForm(false);
        if(createdPatient === null){
            return;
        }
        alert(`Patient "${createdPatient.patientname}" successfully Registered`)
    }
}