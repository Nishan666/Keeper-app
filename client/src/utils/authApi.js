import axios from "axios";

const baseURL = "https://keeper-8jjv.onrender.com/user"
// const baseURL = "http://localhost:5000/user"

// intraction with server for signup operation
const signupApi = async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/signup`, { email, password });
        return { info: response.data, status : "sucess" } // Return the response data on success
    } catch (error) {
        return {info :error.response.data.error ,status :  "error"} // Return the error message on failure
    }
};

// intraction with server for login operation
const loginApi = async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/login`, { email, password });
        return { info: response.data, status: "sucess" } // Return the response data on success
    } catch (error) {
        return { info: error.response.data.error, status: "error" } // Return the error message on failure
    }
}



export { signupApi , loginApi }