import React,{useState} from "react"
import Constants from "../utilities/Constants";


export default function DoctorCreateForm(props){

    const initialFormData = Object.freeze({
        doctorname:"Enter Doctor's Name",
        email:"Enter Doctor's Email",
        phonenumber:"Enter Doctor's PhoneNumber",
        gender:"Enter Doctor's Gender",
        facility:"Enter Doctor's Facility",
        facilitylocation:"Enter Facility's Location"
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

    const doctorToCreate = {
        doctorId :0,
        doctorname:formData.doctorname,
        email:formData.email,
        phonenumber:formData.phonenumber,
        gender:formData.gender,
        facility:formData.facility,
        facilitylocation:formData.facilitylocation
    };

    const url = Constants.API_URL_CREATE_DOCTOR;

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(doctorToCreate)
})
    .then(response=>response.json())
    .then(responseFromServer => {
        console.log(responseFromServer);
    })
    .catch((error)=>{
        console.log(error);
        alert(error);
    });

    props.onDoctorCreated(doctorToCreate);

};

      return(
            <form className="w-100 px-5">
                <h1 className="mt-5">
                    Register Doctor To Offer Services
                </h1>
                <div className="mt-5">
                    <label className="h3 form-label">Doctor's Name</label>
                    <input value={formData.doctorname} name="doctorname" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Email</label>
                    <input value={formData.email} name="email" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's PhoneNumber</label>
                    <input value={formData.phonenumber} name="phonenumber" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Gender</label>
                    <input value={formData.gender} name="gender" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Facility</label>
                    <input value={formData.facility} name="facility" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Facility Location</label>
                    <input value={formData.facilitylocation} name="facilitylocation" type="text" className="form-control"
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