const mongoose = require("mongoose");

// schema for the notes 
const keeperSchema = new mongoose.Schema({
    title : String,
    content : String,
    author : String,
    email : String,
},{timestamps : true})
// by using timestamps : true , it add cretaedAt and updatedAt times

// create model and export the same
module.exports = mongoose.model("Keeper",keeperSchema);