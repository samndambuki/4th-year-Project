import React from "react";

export default function IndexDoctors(){
    return (
        <div className="container">
            <div className="row-min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-Items-center">
                    <h1>Hello Doctors</h1>
                    {renderDoctorsTable()}
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
                        </tr>
                        <tr>
                            <th scope="col">
                                DoctorName
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                Email
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                PhoneNumber
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                SpecialtyId
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                SpecialtyName
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                Availability
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                CRUD OPERATIONS
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Doctor 1 Name</td>
                            <td>Doctor 1 Email</td>
                            <td>Doctor 1 PhoneNumber</td>
                            <td>Doctor 1 SpecialtyId</td>
                            <td>Doctor 1 SpecialtyName</td>
                            <td>Doctor 1 Availability</td>
                            <td>
                                <button className="btn btn-dark btn-lg mx-3 my-3">Update</button>
                                <button className="btn btn-secondary btn-lg">Delete</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }

}