const mongoose = require("mongoose");

// schema for the notes 
const keeperSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user_id :{
        type :String,
        required :true
    }
},{timestamps : true})
// by using timestamps : true , it add cretaedAt and updatedAt times

// create model and export the same
module.exports = mongoose.model("Keeper",keeperSchema);