import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "../components/Sub-components/MainPage";
import Login from "../components/Sub-components/authUser/Login"
import Signup from "../components/Sub-components/authUser/Signup"
import Errorpage from "../components/Sub-components/ErrorPage";

// ***it is not a function
const route = (user)=>{
    return(
    <Routes>
    {/* if user is present then navigate to /  else /login or /signup */}
        <Route path="/" element={ user ? <MainPage /> : <Navigate to="/login"/>} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to={'/'}/>} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={'/'} />} />
        {/* for routes other then mentioned */}
        <Route path="/*" element={<Errorpage />} />
    </Routes>
    )
}



export default route;



