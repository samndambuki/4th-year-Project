import React,{useState} from "react"
import Constants from "../utilities/Constants";


export default function DoctorUpdateForm(props){

    const initialFormData = Object.freeze({
        doctorname:props.doctor.doctorName,
        email:props.doctor.email,
        phonenumber:props.doctor.phoneNumber,
        specialtyid:props.doctor.specialtyId,
        specialtyname:props.doctor.specialtyName,
        availability:props.doctor.availability
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

    const doctorToUpdate = {
        doctorId :props.doctor.doctorId,
        doctorName:formData.doctorname,
        email:formData.email,
        phoneNumber:formData.phonenumber,
        specialtyId:formData.specialtyid,
        specialtyName:formData.specialtyname,
        availability:formData.availability
    };

    const url = Constants.API_URL_UPDATE_DOCTOR;

    fetch(url,{
        method:'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(doctorToUpdate)
})
    .then(response=>response.json())
    .then(responseFromServer => {
        console.log(responseFromServer);
    })
    .catch((error)=>{
        console.log(error);
        alert(error);
    });

    props.onDoctorUpdated(doctorToUpdate);

};

      return(
            <form className="w-100 px-5">
                <h1 className="mt-5">
                    Updating the doctor "{props.doctor.doctorName}"
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
                    <label className="h3 form-label">Doctor's Specialty Id</label>
                    <input value={formData.specialtyid} name="specialtyid" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Specialty Name</label>
                    <input value={formData.specialtyname} name="specialtyname" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Availability</label>
                    <input value={formData.availability} name="availability" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                    Submit
                </button>

                <button onClick={()=>(props.onDoctorUpdated(null))} className="btn btn-secondary btn-lg w-100 mt-3">
                    Cancel
                </button>

            </form>
    );
}