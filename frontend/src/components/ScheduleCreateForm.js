import React, { useState } from "react";
import Constants from "../utilities/Constants";

export default function ScheduleCreateForm(props) {

  const initialFormData = Object.freeze({

    doctorId :"Input Doctor Id",
    doctorName: "Input Doctor Name",
    specialtyId:"Input Specialty Id",
    specialtyName: "Input Specialty Name",
    availability:"Input Doctor's Availability"

  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scheduleToCreate = {
      schedueId: 0,
      doctorId:formData.doctorId,
      doctorName:formData.doctorName,
      specialtyId:formData.specialtyId,
      specialtyName: formData.specialtyName,
      availability:formData.availability
    };

    const url = Constants.API_URL_CREATE_SCHEDULE;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scheduleToCreate),
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        console.log(responseFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    props.onScheduleCreated(scheduleToCreate);

  };

  return (
    <form className="w-100 px-5">
      <h1 className="mt-5">Create new Schedule</h1>
      <div className="mt-5">
        <label className="h3 form-label">Doctor Id</label>
        <input
          value={formData.doctorId}
          name="doctorId"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mt-4">
        <label className="h3 form-label">Doctor Name</label>
        <input
          value={formData.doctorName}
          name="doctorName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <label className="h3 form-label">Specialty Id</label>
        <input
          value={formData.specialtyId}
          name="specialtyId"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>


      <div className="mt-4">
        <label className="h3 form-label">Specialty Name</label>
        <input
          value={formData.specialtyName}
          name="specialtyName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <label className="h3 form-label">Availability</label>
        <input
          value={formData.availability}
          name="availability"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">
        Submit
      </button>
      <button
        onClick={() => props.onSpecialtyCreated(null)}
        className="btn btn-secondary btn-lg w-100 mt-3"
      >
        Cancel
      </button>
    </form>
  );
}