require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const signupUser = async (req, res) => {
    await User.findOne({ email: req.body.email })
        .then((foundUser) => {
            if (foundUser) {
                console.log(foundUser);
                res.json({ mssg: `user already present` })
            } else {
                // notify. of salt rounds
                const salt = bcrypt.genSaltSync(10);
                // encryting the password to hash
                const hash = bcrypt.hashSync(req.body.password, salt);
                // creating access token (JWT)
                const accessToken = jwt.sign({ email: req.body.email }, process.env.REACT_APP_TOKEN, {
                    expiresIn: "9000s",
                })
                // creating new user in db
                User.create({ email: req.body.email, password: hash })
                    .then(() => res.json({ mssg: "signUp done", accessToken: accessToken }))
                    .catch((err) => res.json({ error: err }))
            }

        })
}

const loginUser = async (req, res) => {
    await User.findOne({ email: req.body.email })
        .then((foundUser) => {
            if (foundUser) {
                // isCorrect will return Boolean , true if the password matches else false
                const isCorrect = bcrypt.compareSync(req.body.password, foundUser.password);
                // creating access token (JWT)
                if (isCorrect) {
                    const accessToken = jwt.sign({ email: req.body.email }, process.env.REACT_APP_TOKEN, {
                        expiresIn: "9000s",
                    })
                    res.json({ mssg: 'Login Sucessfull' , accessToken: accessToken })
                    console.log('Login Sucessfull');
                } else {
                    res.json({ mssg: 'wrong password' })
                    console.log('wrong password');
                }
            } else {
                res.json({ mssg: "User not found" })
                console.log("User not found");
            }
        })
}

// const test = (req,res)=>{
//     const token = req.body.token;

//     const decode = jwt.verify(token,process.env.REACT_APP_TOKEN)
//     console.log(decode.email);
//     res.json({ mssg: decode.email})
// }


module.exports = { loginUser, signupUser };