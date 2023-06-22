import React, { createContext, useEffect, useReducer } from "react";

// create -> context api
export const AuthContext = createContext();

//defining reducer function which has coustom state logic
// updating the state
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            // Returning all the user info
            // action.payload -> email and jwt Token
            return { user: action.payload }
        case 'LOGOUT':
            // making user as null
            return { user: null }
        default:
            return state;
    }
}

// it will run every time at the first because -> <AuthContextProvider><KeeperContextProvider><App></App> in index.js
export const AuthContextProvider = ({ children }) => {
    // here children is basically <KeeperContextProvider><App />

    const [state, dispatch] = useReducer(authReducer, { user: null })
    // initally state = {user : null}  there is no user

    // check localStorage for existing user on first load
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({type : 'LOGIN' , payload : user})   //user-> email and token
        }
    },[])

    // notifying the auth status
    console.log('AuthContext state : ' , state);

    return (
        // Provider -> context API 
        // {{ ...state, dispatch }} ->means  { dispatch , keeper }
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}