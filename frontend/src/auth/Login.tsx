import axios from "axios"
import { useState } from "react";
import Constants from "../utilities/Constants";
import DisplayErrors from "../utils/DisplayErrors";
import { authentcationResponse, userCredentials } from "./auth.models"
import AuthForm from "./AuthForm"

export default function Login()
{
    const [errors,setErrors] = useState<string[]>([]);

    const url = Constants.API_URL_LOGIN_ACCOUNT;

    async function login(credentials:userCredentials)
    {
        try
        {
            setErrors([]);
            const response = await axios
            .post<authentcationResponse>(url,credentials);
            console.log(response.data);
        }
        catch(error)
        {


        }

    }
    return(
        <>
        <h3>
            Login
        </h3>
        <DisplayErrors errors={errors}/>
        <AuthForm model={{email:'' ,password:''}}
        onSubmit={async values => await login(values)}
        />
        </>
    )
}