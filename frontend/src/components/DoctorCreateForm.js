import React,{useState} from "react"
import Constants from "../../utilities/Constants";

export default function DoctorCreateForm(){
    const [formData,setFormData] = useState(initialFormData);

    const initialFormData = Object.freeze({
        doctorname:"Enter Doctor's Name",
        email:"Enter Doctor's Email",
        phonenumber:"Enter Doctor's PhoneNumber",
        specialtyid:"Enter Doctor's SpecialtyId",
        specialtyname:"Enter Doctor's SpecialtyName",
        availability:"Enter Doctor's Availability"
});

    return(
        <div>
            <form className="w-100 px-5">
                <h1 className="mt-5">
                    Create new Doctor
                </h1>
                <div className="mt-5">
                    <label className="h3 form-label">Doctor's Name</label>
                    <input value={formData.doctorname} name="doctorname" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Email</label>
                    <input value={formData.email} name="content" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's PhoneNumber</label>
                    <input value={formData.phonenumber} name="content" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Specialty Id</label>
                    <input value={formData.specialtyid} name="content" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Specialty Name</label>
                    <input value={formData.specialtyname} name="content" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <div className="mt-4">
                    <label className="h3 form-label">Doctor's Availability</label>
                    <input value={formData.availability} name="content" type="text" className="form-control"
                    onChange={handleChange}/>                    
                </div>

                <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
                    Submit
                </button>

                <button onClick={()=>(props.onDoctorCreated(null))} className="btn btn-secondary btn-lg w-100 mt-3">
                    Cancel
                </button>

            </form>
        </div>
    );
}