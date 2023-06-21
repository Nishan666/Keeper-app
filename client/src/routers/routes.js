import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../components/Sub-components/MainPage";
import Login from "../components/Sub-components/authUser/Login"
import Signup from "../components/Sub-components/authUser/Signup"
import Errorpage from "../components/Sub-components/ErrorPage";

// ***it is not a function
const route = (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* for routes other then mentioned */}
        <Route path="/*" element={<Errorpage />} />
    </Routes>
    )



export default route;



