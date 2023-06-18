import React, { useState } from "react";
import "./login.css"

import { signupUser } from "../../../utils/userApi";

const Signup = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signupUser(formData)
        setFormData({ email: "", password: "" })
    }

    return (
            <div id="formContent">
                <form onSubmit={handleSubmit}>
                    <input type="emial" id="email" className="fadeIn second" name="email" placeholder="email" onChange={handleChange} value={formData.email} />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={handleChange} value={formData.password} />
                    <div className="submitBTN" id="submit">
                    <input type="submit"  className="btn" value="Sign Up" />
                    </div>
                </form>
            </div>
    )
}

export default Signup;


