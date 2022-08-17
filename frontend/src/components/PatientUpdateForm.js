import React,{useState} from "react"
import Constants from "../utilities/Constants";


export default function PatientUpdateForm(props){

    const initialFormData = Object.freeze({
        patientname:props.patient.patientName,
        email:props.patient.email,
        phonenumber:props.patient.phoneNumber,
        password:props.patient.password,
        gender:props.patinet.gender,
        location:props.patient.location
});
    const [formData,setFormData] = useState(initialFormData);

const handleChange =(e) =>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value,

    });
};

const handleSubmit = (e) =>{
    e.preventDefault();

    const patientToUpdate = {
        patientId :props.patient.patientId,
        patientName:formData.patientname,
        email:formData.email,
        phoneNumber:formData.phonenumber,
        password:formData.password,
        gender:formData.gender,
        location:formData.location
    };

    const url = Constants.API_URL_UPDATE_PATIENT;

    fetch(url,{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(patientToUpdate)
})
    .then((response)=>response.json())
    .then((responseFromServer) => {
        console.log(responseFromServer);
    })
    .catch((error)=>{
        console.log(error);
        alert(error);
    });

    props.onPatientUpdated(patientToUpdate);

};

      return(
            <form className="w-100 px-5">
                <h1 className="mt-5">
                    Updating the patient "{props.patient.patientName}"
                </h1>
                <div className="mt-5">
                    <label className="h3 form-label">Patient's Name</label>
                    <input value={formData.patientname} name="patientname" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Patient's Email</label>
                    <input value={formData.email} name="email" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Patient's Password</label>
                    <input value={formData.password} name="password" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Patient's PhoneNumber</label>
                    <input value={formData.phonenumber} name="phonenumber" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Patient's gender</label>
                    <input value={formData.gender} name="gender" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Patient's Location</label>
                    <input value={formData.location} name="location" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                    Submit
                </button>

                <button onClick={()=>(props.onPatientUpdated(null))} className="btn btn-secondary btn-lg w-100 mt-3">
                    Cancel
                </button>

            </form>
    );
}