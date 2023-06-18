import React, { useState } from "react";
import "./login.css"

import { loginUser } from "../../../utils/userApi";

const Login = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(formData)
        setFormData({ email: "", password: "" })
    }

    return (
            <div id="formContent">
                <form onSubmit={handleSubmit}>
                    <input type="emial" id="email" className="fadeIn second" name="email" placeholder="email" onChange={handleChange} value={formData.email} />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={handleChange} value={formData.password} />
                    <div className="submitBTN" id="submit">
                    <input type="submit"  className="btn" value="Log In" />
                    </div>
                </form>
            </div>
    )
}

export default Login;


