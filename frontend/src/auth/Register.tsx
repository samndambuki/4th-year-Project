import axios from "axios";
import { useState } from "react";
import Constants from "../utilities/Constants";
import DisplayErrors from "../utils/DisplayErrors";
import { authentcationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";

export default function Register(){

    const url = Constants.API_URL_CREATE_ACCOUNT;
    const[errors,setErrors] = useState<string[]>([]);


    async function register(credentials:userCredentials){
        try{
            setErrors([]);
            const response = await axios
            .post<authentcationResponse>(url,credentials);
            console.log(response.data);
        }
        catch( Error)
        {
           
        }
    }


    return(
        <>
        <h3>Register</h3>
        <DisplayErrors errors={errors}/>
        <AuthForm
        model={{email:'',password:''}}
        onSubmit={async values => await register(values)}
        />
        </>
    )
}