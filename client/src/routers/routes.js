import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../components/Sub-components/MainPage";
import Login from "../components/Sub-components/authUser/Login"
import Signup from "../components/Sub-components/authUser/Signup"
import Errorpage from "../components/Sub-components/ErrorPage";


const route = (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Errorpage />} />
    </Routes>
    )



export default route;



