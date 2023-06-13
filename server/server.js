const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const routes = require("./routes/kepperRoutes")

require('dotenv').config()

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected To MongoDB"))
    .catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
