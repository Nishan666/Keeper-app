import axios from "axios";

// const baseURL = "https://keeper-8jjv.onrender.com"
const baseURL = "http://localhost:5000/user"



const signupApi =async (email , password) => {
    await axios
        .post(`${baseURL}/signup`, {email : email , password :password})
        .then((res) => {
            console.log(res );
        })
        .catch((error)=>{
            console.log(error.response.data.message);
        })
}

const loginApi = async(user) => {
    await axios
        .post(`${baseURL}/login`, user)
        .then((result) => {
            alert(result.data.mssg)
            console.log(result.data.accessToken);
        })
}



export { signupApi , loginApi }