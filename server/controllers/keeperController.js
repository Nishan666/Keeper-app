const kepperModel = require("../models/kepperModel")

const date = new Date();

module.exports.getKeeper = async (req,res)=>{
    const keeper = await kepperModel.find()
    res.send(keeper);
}

module.exports.saveKeeper = async (req, res) => {
    data = req.body;
    kepperModel
        .create({ title: data.title, content: data.content, author: data.author,email : data.email, createdOn: date, updatedOn : date})
    .then((data)=>{
        console.log("Added Sucessfully...");
        console.log(data);
        res.status(200).json(data)
    })
}

module.exports.updateKeeper = async (req, res) => {
    const data =  req.body;
    kepperModel
        .findByIdAndUpdate(data._id, { title: data.title, content: data.content, author: data.author,email : data.email, updatedOn: date })
        .then((data) => {
            console.log("Update Sucessfully...");
            res.status(200).json(data)
        })
        .catch((err)=>console.log(err))
}

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