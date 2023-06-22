const kepperModel = require("../models/kepperModel")

// send all the note from db
module.exports.getKeeper = async (req,res)=>{
    //from middleware
    const user_id = req.user._id
    
    const keeper = await kepperModel.find({user_id : user_id}).sort({createdAt : -1})   //sort -> show acessending order of createdAT
    res.status(200).json(keeper);
}

// save the returned note to db
module.exports.saveKeeper = async (req, res) => {
    //from middleware
    const user_id = req.user._id

    data = req.body;
    kepperModel
        .create({ title: data.title, content: data.content,user_id : user_id})
    .then((data)=>{
        console.log("Added Sucessfully...");
        res.status(200).json(data)
    })
}

// update the existing note based on returned _id
module.exports.updateKeeper = async (req, res) => {
    //from middleware
    const user_id = req.user._id

    const data =  req.body;
    kepperModel
        .findByIdAndUpdate(data._id, { title: data.title, content: data.content , user_id :user_id})
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