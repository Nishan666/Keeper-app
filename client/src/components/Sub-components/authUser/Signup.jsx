import React, { useState } from "react";
import "./login.css"
import { useSignup } from "../../../hooks/useSignup";

// Signup page component
const Signup = () => {
    // useState to maintain email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup , error , isLoading} = useSignup();


    // onClick of submit Btn
    const handleSubmit = async (event) => {
        // prevent refreshing of page after form submit
        event.preventDefault();

        await signup(email , password);

        // clearing fields after submit
        // setEmail('')
        setPassword('')
    }

    return (
        <div id="formContent">
            <form onSubmit={handleSubmit}>
                {/* input area for email */}
                <input type="email" id="email" className="fadeIn second" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                {/* input area for password */}
                <input type="password" id="password" className="fadeIn third" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                {/* submit btn */}
                <div className="submitBTN" id="submit">
                    <input disabled={isLoading} type="submit" className="btn" value="Sign Up" />
                    {error && <div className="error">{error}</div>}
                </div>
            </form>
        </div>
    )
}

export default Signup;


