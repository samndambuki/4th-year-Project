import React,{useState} from "react"
import Constants from "../utilities/Constants";


export default function DoctorCreateForm(props){

    const initialFormData = Object.freeze({
        patientname:"Enter Patient's Name",
        email:"Enter Patient's Email",
        phonenumber:"Enter Patient's PhoneNumber",
        gender:"Enter Patient's Gender",
        location:"Enter Patient's Location"
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

    const patientToCreate = {
        patientId :0,
        patientname:formData.patientname,
        email:formData.email,
        phonenumber:formData.phonenumber,
        gender:formData.gender,
        location:formData.location,
    };

    const url = Constants.API_URL_CREATE_PATIENT;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(patientToCreate)
})
    .then(response=>response.json())
    .then(responseFromServer => {
        console.log(responseFromServer);
    })
    .catch((error)=>{
        console.log(error);
        alert(error);
    });

    props.onPatientCreated(patientToCreate);

};

      return(
            <form className="w-100 px-5">
                <h1 className="mt-5">
                    Register For Consulation
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
                    <label className="h3 form-label">Patient's PhoneNumber</label>
                    <input value={formData.phonenumber} name="phonenumber" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Patient's Gender</label>
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

                <button onClick={()=>(props.onDoctorCreated(null))} className="btn btn-secondary btn-lg w-100 mt-3">
                    Cancel
                </button>

            </form>
    );
}