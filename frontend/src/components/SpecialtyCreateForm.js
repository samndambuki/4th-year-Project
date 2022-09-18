import React, { useState } from "react";
import Constants from "../utilities/Constants";

export default function SpecialtyCreateForm(props) {

  const initialFormData = Object.freeze({

    doctorName: "Input Doctor Name",
    specialtyName: "Input Specialty Name",
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

    const specialtyToCreate = {
      specialtyId: 0,
      doctorName:formData.doctorName,
      specialtyName: formData.specialtyName
    };

    const url = Constants.API_URL_CREATE_SPECIALTY;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specialtyToCreate),
    })
      .then((response) => response.json())
      .then((responseFromServer) => {
        console.log(responseFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });

    props.onSpecialtyCreated(specialtyToCreate);
  };

  return (
    <form className="w-100 px-5">
      <h1 className="mt-5">Register Doctor's specialty</h1>
     
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
        <label className="h3 form-label">Specialty Name</label>
        <input
          value={formData.specialtyName}
          name="specialtyName"
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