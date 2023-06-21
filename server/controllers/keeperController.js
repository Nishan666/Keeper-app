const kepperModel = require("../models/kepperModel")

const date = new Date();

// send all the note from db
module.exports.getKeeper = async (req,res)=>{
    const keeper = await kepperModel.find()
    res.status(200).json(keeper);
}

// save the returned note to db
module.exports.saveKeeper = async (req, res) => {
    data = req.body;
    kepperModel
        .create({ title: data.title, content: data.content,email : data.email})
    .then((data)=>{
        console.log("Added Sucessfully...");
        console.log(data);
        res.status(200).json(data)
    })
}

// update the existing note based on returned _id
module.exports.updateKeeper = async (req, res) => {
    const data =  req.body;
    kepperModel
        .findByIdAndUpdate(data._id, { title: data.title, content: data.content,email : data.email})
        .then((data) => {
            console.log("Update Sucessfully...");
            res.status(200).json(data)
        })
        .catch((err)=>console.log(err))
}

// delete the note from db
module.exports.deleteKeeper = async (req, res) => {
    const { _id } = req.body;
    kepperModel
        .findByIdAndDelete(_id)
        .then(() => {
            console.log("Delete Sucessfully...");
            res.status(200).json({_id :_id})
        })
        .catch((err) => console.log(err))
}