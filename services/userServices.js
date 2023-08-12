const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.getAllUsers = (req,res) => {

    userModel.find()
        .then((user)=>{
            res.json({
                message:'All users have been returned',
                data:user,
                length:user.length
            })

            console.log(user)
        })
        .catch(err =>{
            res.status(404).json({
                message:'All users could not be returned',
                error:err
            })
        })
} 


exports.getAUser = (req,res) => {
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

exports.createAuser = (req,res) => {

   
    // const password = req.params.password
    const newUser = new userModel(req.body);

    bcrypt.genSalt(10)
        .then((salt)=>{
            bcrypt.hash(newUser.password,salt)
                .then((hash)=>{
                    newUser.password = hash

                    newUser.save()
                        .then((user)=>{
                            res.json({
                                message:'New user has been created',
                                data:user
                            })
                        })
                        .catch(err=>{
                            res.status(500).json({
                                message:"User was not created",
                                error:err
                            })
                        })
                })
                .catch(err =>{
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
    
}

exports.updateAUser = (req,res) =>{
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

exports.deleteAUser = (req,res) => {
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
            message:`${req.params.id} was not able to be deleted`,
            error:err

        })
    })
}

exports.loginUser = (req,res) =>{
    userModel.findOne()
        .where("email").equals(req.body.email)
            .then(user=>{

                console.log(user.password)
                bcrypt.compare(req.body.password,user.password)
                    .then((authorisedUser)=>{
                        console.log(authorisedUser)
                        if(authorisedUser==true){
                            const token = jwt.sign({
                                _id: user._id,
                                firstName:user.firstname,
                                lastName:user.lastname,
                                email:user.email ,
                                level:user.level
                            },process.env.JWT_TOKEN)

                            res.header('x-auth-header',token).json({
                                message:'You have been authenticated',
                                jwt:token
                            })
                        } else {
                            res.status(400).json({
                                message:'Email and/or password is incorrect',
                                err:err
                            })
                        }

                       
                    })
                    .catch(err=>{
                        res.json({
                            message:"invalid users credentials",
                            err:err
                        })
                    })
            })
            .catch(err =>{
                res.status(401).json({
                    message:'Email and/or password is incorrect.',
                    error:err
                })
            })

}