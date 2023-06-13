const mongoose = require("mongoose");

const keeperSchema = new mongoose.Schema({
    title : String,
    content : String,
    author : String,
    email : String,
    createdOn : String,
    updatedOn : String
})

module.exports = mongoose.model("Keeper",keeperSchema);