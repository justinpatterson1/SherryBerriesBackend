const jewelryModel = require('../model/jewelryModel.js')
const { v4: uuidv4 } = require('uuid');
const multer = require('multer')
const multerS3 = require('multer-s3')
const{s3Client} = require("../libs/s3Client.js")
const  {S3Client , PutObjectCommand} = require( "@aws-sdk/client-s3");

exports.getAllJewelry=(req,res)=>{
    jewelryModel.find()
        .then((jewelry)=>{
            res.json({
                message:'All Jewelry have been returned',
                data:jewelry,
                length:jewelry.length
            }) 
        })
        .catch(err=>{
            res.status(404).json({
                message:"Jewelry was not returned",
                data:err
            })
        })
}

exports.getAJewelry = (req,res) =>{
    jewelryModel.findById(req.params.id)
        .then((jewelry)=>{
            res.json({
                message:`Item of ID:${req.params.id} has been found`,
                data:jewelry
            })

        })
        .catch(err => {
            res.status(404).json({
                message : `ID:${req.params.id} could not be found`,
                err : err
            })

        })



}

exports.addNewJewelry = (req,res) =>{
    
    const s3Client = new S3Client({
        region: process.env.REGION ,
        credentials:{
           accessKeyId:process.env.AWSACCESSKEYID,
           secretAccessKey:process.env.AWSSECRETACESSKEY
        }
    })

    const newJewelryProduct = new jewelryModel(req.body)

    newJewelryProduct.save()
    .then((jewelry)=>{
        const fileName = `${uuidv4()}_${req.files.img.name}`

        
        const params = {
                Bucket: process.env.BUCKET_NAME,
                Key: fileName,
                Body:req.files.img.data
        }

      // console.log(fileName)

      
        s3Client.send(new PutObjectCommand(params),function(err, data) {
            if (err) {
                console.log(err)
                throw err;
                
            }

            console.log(params.Key)

                newJewelryProduct.img = process.env.REPO+params.Key
                newJewelryProduct.save()
                     .then((jewelry) => {
                        res.json({
                            message:'New item has been created',
                            data:jewelry
                        })
                        console.log(req.body)
                    })
               

        
                });
})
            
            .catch(err =>{
                res.status(500).json({
                    message:'product was not uploaded',
                    err:err
                })
         })
        
       
}




exports.deleteOneJewelry = (req,res) =>{
    jewelryModel.findByIdAndDelete({_id:req.params.id})
    .then((jewelry)=>{
        res.json({
            message:`${req.params.id} has been removed`,
            data:jewelry,
            length:jewelry.length
        })
    })
    .catch(err => {
        res.status(404).json({
            message:`${req.params.id} was not able to be deleted`
        })
    })
}

exports.updateOneJewelry = (req,res) =>{
    const update = req.body;
    jewelryModel.findByIdAndUpdate(req.params.id,update,{new:true})
        .then((jewelry)=>{
            res.json({
                message:`${req.params.id} has been updated`,
                date:jewelry
            })
        })
        .catch(err=>{
            res.status(404).json({
                message:`${req.params.id} was not updated`
            })
        })
}

