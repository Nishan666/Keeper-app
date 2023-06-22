const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const kepperRoutes = require("./routes/kepperRoutes");
const userRoute = require("./routes/userRouter");

// use .env data using process.env.
require('dotenv').config()

const app = express();

const PORT = process.env.port || 5000;

//  warning -> body-parser deprecated undefined extended: provide extended option server.js:14:20
// app.use(bodyParser.urlencoded());
// so use the below code 
app.use(express.urlencoded({ extended: true }))


app.use(bodyParser.json());

// used to rectify some of axios errors
app.use(cors());

// log the requested path and method
app.use((req , res , next)=>{
    console.log(req.path , req.method);
    next();
})

// connect to db
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected To MongoDB"))
    .catch((err) => console.log(err))

// define base routes for kepper and user data
app.use('/api/keeper',kepperRoutes);
app.use('/user', userRoute)

// start listening to port 5000
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
