import axios from "axios";

// const baseURL = "https://keeper-8jjv.onrender.com"
const baseURL = "http://localhost:5000/user"



const signupUser = (user) => {
    axios
        .post(`${baseURL}/signup`, user)
        .then((result) => {
            alert(result.data.mssg)
            console.log(result.data.accessToken);
        })
}

const loginUser = (user) => {
    axios
        .post(`${baseURL}/login`, user)
        .then((result) => {
            alert(result.data.mssg)
            console.log(result.data.accessToken);
        })
}



export { signupUser , loginUser }