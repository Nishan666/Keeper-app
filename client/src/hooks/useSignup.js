import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signupApi } from "../utils/authApi";

// useSignup custom hook ,which has signup logics
export const useSignup = () =>{

    const [error , setError] = useState(null);
    const [isLoading , setIsLoading] = useState(null);

    const {dispatch} = useAuthContext();

    // here email and password are user inputed data
    const signup = async(email ,password)=>{
        // make error and loading as null in the begining
        setIsLoading(null);
        setError(null);

        await signupApi(email , password)

        

        // if(returnedData.status === 'sucess'){
        //     localStorage.setItem("user",JSON.stringify(returnedData.data))
        //     dispatch({type : 'LOGIN' , payload: returnedData.data})
        //     setIsLoading(false)
        // }else{
        //     setIsLoading(false)
        //     setError(returnedData.data)
        //     console.log(returnedData.data);
        // }
    }
    return {signup , isLoading , error}
}