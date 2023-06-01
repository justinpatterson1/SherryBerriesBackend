const userModel = require("../model/userModel");

exports.getAllUsers = (res,req) => {

    userModel.find()
        .then((user)=>{
            res.json({
                message:'All users have been returned',
                data:user,
                length:user.length
            })
        })
        .catch(err =>{
            res.status(404).json({
                message:'All users could not be returned',
                error:err
            })
        })
} 


exports.getAUser = (res,req) => {
    userModel.findById(req.params.id)
        .then((user)=>{
            res.json({
                message:`ID:${req.params.id} has been returned`,
                data:user
            })
        })
        .catch(err => {
            res.status(404).json({
                message:`User ID:${req.params.id} could not be found`,
                error:err
            })
        })
}

exports.createAuser = (res,req) => {
    const newUser = new userModel(req.params.body);

    newUser.save()
        .then((user)=>{
            res.json({
                message:'New user has been created'
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:"User was not created",
                error:err
            })
        })
}

exports.updateAUser = (res,req) =>{
    const update = req.params.body;
    userModel.findByIdAndUpdate(req.params.id,update,{id:req.params.id})
        .then((user)=>{
            res.json({
                message:`ID:${req.params.id} has been updated`,
                data:user
            })
        })
        .catch(err => {
            res.status(400).json({
                message:'Could not update user',
                error:err
            })
        })
}

exports.deleteAUser = (res,req) => {
    userModel.findByIdAndDelete({_id:req.params.id})
    .then((user)=>{
        res.json({
            message:`${req.params.id} has been removed`,
            data:user,
            length:user.length
        })
    })
    .catch(err => {
        res.status(404).json({
            message:`${req.params.id} was not able to be deleted`
        })
    })
}
