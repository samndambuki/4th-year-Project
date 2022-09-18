import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Constants from "../utilities/Constants";
import DisplayErrors from "../utils/DisplayErrors";
import { authentcationResponse, userCredentials } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJWT";

export default function Register(){

    const url = Constants.API_URL_CREATE_ACCOUNT;
    const[errors,setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const navigate = useNavigate();
    


    async function register(credentials:userCredentials){
        try{
            setErrors([]);
            const response = await axios
            .post<authentcationResponse>(url,credentials);
            saveToken(response.data);
            update(getClaims());
            navigate('/login');
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