import React,{useState} from "react";
import Constants from "../../utilities/Constants";

export default function IndexSpecialties(){

    const[specialties,setSpecialties] = useState([]);
  
    function getSpecialties(){
        const url = Constants.API_URL_GET_ALL_SPECIALTIES;
        fetch(url,{
            method:'GET'
    })
        .then(response=>response.json())
        .then(specialtiesFromServer => {
            setSpecialties(specialtiesFromServer);
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
                    { (
                        <div>
                        <h1>Specialty Registration</h1>

                        <div className="mt-5">
                            
                            <button onClick={getSpecialties} className="btn btn-secondary btn-lg w-100 mt-4">
                                Get Specialties From Server
                            </button>

                        </div>
                        </div>
                    )} 
                     {(specialties.length>0) && renderSpecialtiesTable()}
                   
                </div>
            </div>
            </div>
    );

    function renderSpecialtiesTable(){
        return(
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">
                                SpecialtyId(PK)
                            </th>
        
                            <th scope="col">
                              Specialty Name
                            </th>
                        
                            <th scope="col">
                              Doctor Id
                            </th>

                            <th scope="col">
                                Doctor Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {specialties.map((specialty)=>(
                            <tr key={specialty.specialtyId}>
                            <th scope="row">{specialty.specialtyId}</th>
                            <td>{specialty.specialtyName}</td>
                            <td>{specialty.doctorId}</td>
                            <td>{specialty.doctorName}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setSpecialties([])} className="btn btn-dark btn-lg w-100">
                    Empty Specialties Table
                </button>
            </div>
        );
    }
}