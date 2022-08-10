import React,{useState} from "react";

export default function IndexDoctors(){
    const[doctors,setDoctors] = useState([]);
    function getDoctors(){
        const url = "https://localhost:7031/api/Doctors";
        fetch(url,{
            method:'GET'
    })
        .then(response=>response.json())
        .then(doctorsFromServer => {
            console.log(doctorsFromServer);
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
                    <div>
                    <h1>Doctors Registration</h1>
                    <div className="mt-5">
                        <button onClick={getDoctors} className="btn btn-dark btn-lg w-100">
                            Get Doctors From Server
                        </button>
                        <button onClick={() => {}} className="btn btn-secondary btn-lg w-100 mt-4">
                            Create new Doctor
                        </button>
                    </div>
                    </div>
                    {doctors.length>0 && renderDoctorsTable()}
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
                                <button className="btn btn-dark btn-lg mx-3 my-3">Update</button>
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

}