import axios from "axios"
import { useContext, useState } from "react";
import Constants from "../utilities/Constants";
import DisplayErrors from "../utils/DisplayErrors";
import { authentcationResponse, userCredentials } from "./auth.models"
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm"
import { getClaims, saveToken } from "./handleJWT";
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    const [errors,setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const navigate = useNavigate();
    


    const url = Constants.API_URL_LOGIN_ACCOUNT;

    async function login(credentials:userCredentials)
    {
        try
        {
            setErrors([]);
            const response = await axios
            .post<authentcationResponse>(url,credentials);
            saveToken(response.data);
            update(getClaims());
            navigate('/home');
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