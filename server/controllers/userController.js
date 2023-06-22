require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// createToken can be used for both login and signup
const createToken = (_id)=>{
    // token is created based on _id
    return jwt.sign({ _id: _id }, process.env.SECRETS, {expiresIn: "3d"})
}

// signupUser function on post request on /user/signup
const signupUser = async (req, res) => {
    // destructuring
    const {email , password } = req.body
    
    try {
        // signup is from static , which check for existing same user and hash password
        const user = await User.signup(email , password)
        // creating jwt token
        const token = createToken(user._id)
        console.log("signUp sucessful");
        res.status(200).json({email , token})
    } catch (error) {
        console.log(error.message);
    res.status(400).json({error : error.message}) 
    }
}

const loginUser = async (req, res) => {
    // destructuring
    const {email , password} = req.body

    try {
        // login is from static , which check for user with same emial and verify the password
        const user = await User.login(email , password)
        // creating jwt token
        const token = createToken(user._id)
        res.status(200).json({email , token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = { loginUser, signupUser };