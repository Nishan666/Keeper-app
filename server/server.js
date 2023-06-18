const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const kepperRoutes = require("./routes/kepperRoutes");
const userRoute = require("./routes/userRouter");

require('dotenv').config()

const app = express();
const PORT = process.env.port || 5000;

//  warning -> body-parser deprecated undefined extended: provide extended option server.js:14:20
// app.use(bodyParser.urlencoded());
// so use the below code 
app.use(express.urlencoded({ extended: true }))


app.use(bodyParser.json());

app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected To MongoDB"))
    .catch((err) => console.log(err))

app.use('/',kepperRoutes);
app.use('/user', userRoute)

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
