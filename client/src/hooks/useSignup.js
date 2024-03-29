import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signupApi } from "../utils/authApi";

// useSignup custom hook ,which has signup logics
export const useSignup = () =>{

    const [error , setError] = useState(null);
    const [isLoading , setIsLoading] = useState(null);

    // from reducer
    const {dispatch} = useAuthContext();

    // here email and password are user inputed data
    const signup = async(email ,password)=>{
        // make error and loading as null in the begining
        setIsLoading(null);
        setError(null);

        // doing the signup logic
        // it returns data->info and status->sucess or error
        const {info, status} = await signupApi(email, password)

        if(status === 'sucess'){
            // store data to localStorage    browser->inspect->applications->localStorage ->key-user
            localStorage.setItem("user",JSON.stringify(info))
            // dispatch data to  change universal state
            dispatch({type : 'LOGIN' , payload: info})
            // setIsLoading to false  ->open signup btn
            setIsLoading(false)
        }else{
            setIsLoading(false)
            // setError to error ->shown below signup btn
            setError(info)
            console.log(info);
        }
    }
    return {signup , isLoading , error}
}