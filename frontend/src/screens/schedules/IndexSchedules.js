import React,{useState} from "react";
import Constants from "../../utilities/Constants";

export default function IndexSchedules(){

    const[schedules,setSchedules] = useState([]);
  
    function getSchedules(){
        const url = Constants.API_URL_GET_ALL_SCHEDULES;
        fetch(url,{
            method:'GET'
    })
        .then(response=>response.json())
        .then(schedulesFromServer => {
            setSchedules(schedulesFromServer);
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
                        <h1>Schedule Registration</h1>

                        <div className="mt-5">
                            
                            <button onClick={getSchedules} className="btn btn-secondary btn-lg w-100 mt-4">
                                Get Schedules From Server
                            </button>

                        </div>
                        </div>
                    )} 
                    
                     {(schedules.length>0) && renderSchedulesTable()}
                   
                </div>
            </div>
            </div>
    );

    function renderSchedulesTable(){
        return(
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">
                                ScheduleId(PK)
                            </th>
        
                            <th scope="col">
                              Doctor Id
                            </th>
                        
                            <th scope="col">
                              Doctor Name
                            </th>

                            <th scope="col">
                              Specialty Id
                            </th>

                            <th scope="col">
                              Specialty Name
                            </th>

                            <th scope="col">
                                Availability
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule)=>(
                            <tr key={schedule.scheduleId}>
                            <th scope="row">{schedule.doctorId}</th>
                            <td>{schedule.doctorName}</td>
                            <td>{schedule.specialtyId}</td>
                            <td>{schedule.specialtyName}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => setSchedules([])} className="btn btn-dark btn-lg w-100">
                    Empty Specialties Table
                </button>
            </div>
        );
    }
}