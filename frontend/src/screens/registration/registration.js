import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";

function Registration(){

    const[firstname,setFirstName] = useState('');
    const[lastname,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[username,setUserName] = useState('');
    const[userpassword,setUserPassword] = useState('');

    const handleFirstNameChange = (value) => 
    {
        setFirstName(value);
    }

    const handleLastNameChange = (value) => 
    {
        setLastName(value);
    }

    const handleEmailAddressChange = (value) => 
    {
        setEmail(value);
    }

    const handleUserNameChange = (value) => 
    {
        setUserName(value);
    }

    const handlePasswordChange = (value) => 
    {
        setUserPassword(value);
    }

    const handleSave = () => {
        const data = {
            firstName : firstname,
            lastName : lastname,
            emailAddress : email,
            userName : username,
            password : userpassword
        }

        const url = 'https://localhost:7031/api/Authentication/register-user';

        axios.post(url,data).then((result) => {
                alert(result.data);
        }).catch((error)=>{
            alert(error);
        })
            }

    return(
        <Fragment>

        <div><>Registration</></div>

        <label>First Name</label>
        <input type="text" id="txtfirstname" placeholder="Enter your First Name" onChange={(e)=> handleFirstNameChange(e.target.value)}/><br></br>

        <label>Last Name</label>
        <input type="text" id="txtlastname" placeholder="Enter your Last Name" onChange={(e)=> handleLastNameChange(e.target.value)}/><br></br>

        <label>Email Address</label>
        <input type="text" id="txtemail" placeholder="Enter your Email Address" onChange={(e)=> handleEmailAddressChange(e.target.value)}/><br></br>

        <label>User Name</label>
        <input type="text" id="txtusername" placeholder="Enter your UserName" onChange={(e)=> handleUserNameChange(e.target.value)}/><br></br>

        <label>Password</label>
        <input type="text" id="txtpassword" placeholder="Enter your Password" onChange={(e)=> handlePasswordChange(e.target.value)}/><br></br>

        <button onClick={()=> handleSave()}>Save</button>

        </Fragment>
    )
}

export default Registration;