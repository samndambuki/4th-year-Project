import React,{useState} from "react";
import Constants from "../../utilities/Constants";
import DoctorCreateForm from "../../components/DoctorCreateForm";
import DoctorUpdateForm from "../../components/DoctorCreateForm";

export default function IndexDoctors(){

    const[doctors,setDoctors] = useState([]);
    const[showingCreateNewDoctorForm,setshowingCreateNewDoctorForm] = useState(false);
    const[doctorCurrentlyBeingUpdated,setdoctorCurrentlyBeingUpdated] = useState(null);


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

    return (
        <div className="container">
            <div className="row-min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-Items-center">
                    {(showingCreateNewDoctorForm === false && doctorCurrentlyBeingUpdated === null) && (
                        <div>
                        <h1>Doctors Registration</h1>
                        <div className="mt-5">
                            <button onClick={getDoctors} className="btn btn-dark btn-lg w-100">
                                Get Doctors From Server
                            </button>
                            <button onClick={() => setshowingCreateNewDoctorForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">
                                Register new Doctor
                            </button>
                        </div>
                        </div>
                    )} 
                    
                    {(doctors.length>0 && showingCreateNewDoctorForm === false && doctorCurrentlyBeingUpdated === null) && renderDoctorsTable()}
                    {showingCreateNewDoctorForm && <DoctorCreateForm onDoctorCreated={onDoctorCreated}/>}
                    {doctorCurrentlyBeingUpdated !== null && <DoctorUpdateForm doctor={doctorCurrentlyBeingUpdated} onDoctorUpdated={onDoctorUpdated}/>}
                </div>
            </div>
            </div>
    );


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
                                SpecialtyId
                            </th>
                      
                            <th scope="col">
                                SpecialtyName
                            </th>
                       
                            <th scope="col">
                                Availability
                            </th>
                       
                            <th scope="col">
                                CRUD OPERATIONS
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
                            <td>{doctor.specialtyId}</td>
                            <td>{doctor.specialtyName}</td>
                            <td>{doctor.availability}</td>
                            <td>
                                <button onClick={()=>setdoctorCurrentlyBeingUpdated(doctor)} className="btn btn-dark btn-lg mx-3 my-3">Update</button>
                                <button className="btn btn-secondary btn-lg">Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setDoctors([])} className="btn btn-dark btn-lg w-100">
                    Empty Doctors Table
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
        getDoctors();
    }

    function onDoctorUpdated(updatedDoctor){
        setdoctorCurrentlyBeingUpdated(null);
        if(updatedDoctor === null){
            return;
        }

        let doctorsCopy = [...doctors];

        const index = doctorsCopy.findIndex((doctorsCopyDoctor,currentIndex)=> {
            if(doctorsCopyDoctor.doctorId === updatedDoctor.doctorId)
            {
                return true;
            }
        });
        if(index !== -1){
            doctorsCopy[index] = updatedDoctor;
        }
        setDoctors(doctorsCopy);
        alert(`Doctor Successfully Updated.After clicking OK look for the Doctor with name "${updatedDoctor.doctorName}" in the table below to see the updates`);


    }
}