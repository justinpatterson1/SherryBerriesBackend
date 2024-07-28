import userModel from  "../model/userModel.js";
import bcrypt from  "bcrypt";
import jwt from "jsonwebtoken"; 
import {query,matchedData,validationResult,body} from 'express-validator'

const getAllUsers = (req,res) => {

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


const getAUser = (req,res) => {
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

const createAuser = (req,res) => {

    const result =  validationResult(req)

    if(result.errors.length!=0) return res.status(404).send({
        error:result.errors
    })

    const data = matchedData(req)

    userModel.findOne()
    .where("email").equals(data.email)
        .then(user=>{
            if(!user){
                const newUser = new userModel(data);

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
            } else {
                res.json({
                    message:`User with email ${data.email} already exists`
                })
            }
        })
        .catch(err=>{
            res.status(400).json({
                message:err
            })
        })

   
   
    // const password = req.params.password
  
    
}

const updateAUser = async(req,res) =>{
    const update = req.body
    console.log(update)
    try{

        const hashedPassword = await bcrypt.hash(update.password,10)
        update.password  = hashedPassword;
        console.log(update)
        userModel.findByIdAndUpdate(req.params.id,update,{new:true})
        .then((user)=>{
            res.json({
                message:`ID:${hashedPassword} has been updated`,
                data:true
            })
        })
        .catch(err => {
            res.status(400).json({
                message:'Could not update user',
                error:err
            })
        })

    } catch(err) {
        res.status(500).json({
            message:err
        })
    }
    // const update = req.body;
    // const salt =  bcrypt.genSalt(10);
    // const hash =  bcrypt.hash(update.password,salt);
    // update.password =  hash;
    // console.log(update)

    // bcrypt.genSalt(10)
    //     .then(salt =>{
    //         bcrypt.hash(update.password.toString(),salt)
    //         .then(hash=>{
    //             update.password = hash;

    //              userModel.findByIdAndUpdate(req.params.id,update,{new:true})
    //                 .then((user)=>{
    //                     res.json({
    //                         message:`ID:${req.params.id} has been updated`,
    //                         data:user
    //                     })
    //                 })
    //                 .catch(err => {
    //                     res.status(400).json({
    //                         message:'Could not update user',
    //                         error:err
    //                     })
    //                 })
    //         })
    //         .catch(err=>{
    //             res.status(400).json({
    //                 message:"Error while perfomring hash",
    //                 err:err
    //             })
               
    //         })
    //     })
        // userModel.findByIdAndUpdate(req.params.id,update,{new:true})
    //     .then((user)=>{
    //         res.json({
    //             message:`ID:${req.params.id} has been updated`,
    //             data:user
    //         })
    //     })
    //     .catch(err => {
    //         res.status(400).json({
    //             message:'Could not update user',
    //             error:err
    //         })
    //     })
}

const deleteAUser = (req,res) => {
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

const getUserCart = (req,res) =>{
    userModel.findById({_id:req.params.id},'cart')
    .then((user)=>{
        res.json({
            message:`User ${req.params.id} cart is returned`,
            data: user
        })
    })
    .catch(err =>{
        res.status(404).json({
            message:"Error retreiving user cart",
            error:err
        })
    })
}

const updateUserCart = (req,res) =>{
    //const update = req.body
    userModel.findById(req.params.id)
    .then((user)=>{
        
         let update = [...user.cart]
         let cartQuantity = update.cart.find((c)=>c._id ===req.params.cartid)
        // console.log(cartQuantity)
         //const cart = user.cart
        // cart = cart.find(c=>c._id = req.params.cartid)

        // cart.Quantity + 1

        // res.json({
        //     data:cart
        // })

        res.json({
            message:"user found",
            data:user
        })
       
    })
    .catch(err =>{
        res.status(404).json({
            message:"Error retreiving user cart",
            error:err
        })
    })
}


const loginUser = (req,res) =>{
    userModel.findOne()
        .where("email").equals(req.body.email)
            .then(user=>{

                console.log(user)
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

const loginUpdate = (req,res)=>{
    userModel.findById(req.params.id)
    .then((user)=>{
        bcrypt.compare(req.body.password,user.password)
            .then(pass=>{
                if(pass){
                    res.json({
                        message:true
                    })
                    
                } else {
                   res.json({message:false})
                }
            }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

export {loginUpdate,loginUser,updateUserCart,getUserCart,deleteAUser,updateAUser,createAuser,getAUser,getAllUsers}