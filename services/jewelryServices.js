import jewelryModel from '../model/jewelryModel.js'
import { v4 as uuidv4 } from 'uuid';
// const {v4} = uuid
import multer from 'multer'
import multerS3 from 'multer-s3'
//import {s3Client} from "../libs/s3Client.js"
import  {S3Client , PutObjectCommand} from  "@aws-sdk/client-s3";

const getAllJewelry=(req,res)=>{

//     // jewelryModel.find({catergory:req.query.catergory})
//     // .then((jewelry)=>{
//     //         res.json({
//     //             message:'All Jewelry have been returned',
//     //             data:jewelry,
//     //             length:jewelry.length
//     //         }) 
//     //     })
//     //     .catch(err=>{
//     //         res.status(404).json({
//     //             message:"Jewelry was not returned",
//     //             data:err
//     //         })
//     //     })
 
//         switch( req.query.catergory ){
//             case 'Nose-Ring': 
//             jewelryModel.find({catergory:'Nose-Ring'})
//             .skip((req.query.page-1)*4)
//             .limit(4)
//                 .then((jewelry)=>{
//                     res.json({
//                         message:'All Jewelry have been returned',
//                         data:jewelry,
//                         length:jewelry.length
//                     }) 
//                 })
//                 .catch(err=>{
//                     res.status(404).json({
//                         message:"Jewelry was not returned",
//                         data:err
//                     })
//                 })
//                 break;
//                 case 'Belly-Ring':
//                     jewelryModel.find({catergory:'Belly-Ring'})
//                          .skip((req.query.page-1)*4)
//                         .limit(4)
//                             .then((jewelry)=>{
//                                 res.json({
//                                     message:'All Jewelry have been returned',
//                                     data:jewelry,
//                                     length:jewelry.length
//                                 }) 
//                             })
//                             .catch(err=>{
//                                 res.status(404).json({
//                                     message:"Jewelry was not returned",
//                                     data:err
//                                 })
//                             })
//                 break;
//                 case 'Tongue-Ring':
//                     jewelryModel.find({catergory:'Tongue-Ring'})
//                         .skip((req.query.page-1)*4)
//                         .limit(4)
//                             .then((jewelry)=>{
//                                 res.json({
//                                     message:'All Jewelry have been returned',
//                                     data:jewelry,
//                                     length:jewelry.length
//                                 }) 
//                             })
//                             .catch(err=>{
//                                 res.status(404).json({
//                                     message:"Jewelry was not returned",
//                                     data:err
//                                 })
//                             })
//                 break;
//                 case'Nipple-Ring':
//                 jewelryModel.find({catergory:'Nipple-Ring'})
//                     .skip((req.query.page-1)*4)
//                     .limit(4)
//                     .then((jewelry)=>{
//                     res.json({
//                         message:'All Jewelry have been returned',
//                         data:jewelry,
//                         length:jewelry.length
//                     }) 
//                     })
//                     .catch(err=>{
//                     res.status(404).json({
//                         message:"Jewelry was not returned",
//                         data:err
//                     })
//                     })
//                     break;
//                 default:
//                     jewelryModel.find()
//                     .then((jewelry)=>{
//                         res.json({
//                             message:'All Jewelry have been returned',
//                             data:jewelry,
//                             length:jewelry.length
//                         }) 
//                     })
//                     .catch(err=>{
//                         res.status(404).json({
//                             message:"Jewelry was not returned",
//                             data:err
//                         })
//                     })
//         }
    
            
            // if(req.query.search){

                
            //         jewelryModel.find({name:{$regex: new RegExp(req.query.search)}})
            //         .limit(12)
            //         .then((jewelry)=>{
            //             res.json({
            //                 message:'All Jewelry have been returned',
            //                 data:jewelry,
            //                 length:jewelry.length
            //             }) 
            //         })
            //         .catch(err=>{
            //             res.status(404).json({
            //                 message:"Jewelry was not returned",
            //                 data:err
            //             })
            //         })
            // }

       // }

//    if(req.query.catergory === "Nose-Ring") {

//         jewelryModel.find({catergory:'Nose-Ring'})
//         .limit(4)
//             .then((jewelry)=>{
//                 res.json({
//                     message:'All Jewelry have been returned',
//                     data:jewelry,
//                     length:jewelry.length
//                 }) 
//             })
//             .catch(err=>{
//                 res.status(404).json({
//                     message:"Jewelry was not returned",
//                     data:err
//                 })
//             })

//     } else if(req.query.catergory ==="Belly-Ring"){

//         jewelryModel.find({catergory:'Belly-Ring'})
//         .limit(4)
//             .then((jewelry)=>{
//                 res.json({
//                     message:'All Jewelry have been returned',
//                     data:jewelry,
//                     length:jewelry.length
//                 }) 
//             })
//             .catch(err=>{
//                 res.status(404).json({
//                     message:"Jewelry was not returned",
//                     data:err
//                 })
//             })


//     }else if(req.query.catergory === 'Tongue-Ring'){

//         jewelryModel.find({catergory:'Tongue-Ring'})
//         .limit(4)
//             .then((jewelry)=>{
//                 res.json({
//                     message:'All Jewelry have been returned',
//                     data:jewelry,
//                     length:jewelry.length
//                 }) 
//             })
//             .catch(err=>{
//                 res.status(404).json({
//                     message:"Jewelry was not returned",
//                     data:err
//                 })
//             })


//     }else if(req.query.catergory === 'Nipple-Ring'){

//         jewelryModel.find({catergory:'Nipple-Ring'})
//         .limit(4)
//             .then((jewelry)=>{
//                 res.json({
//                     message:'All Jewelry have been returned',
//                     data:jewelry,
//                     length:jewelry.length
//                 }) 
//             })
//             .catch(err=>{
//                 res.status(404).json({
//                     message:"Jewelry was not returned",
//                     data:err
//                 })
//             })


    
//     }
//         else {
//         jewelryModel.find()
//         .then((jewelry)=>{
//             res.json({
//                 message:'All Jewelry have been returned',
//                 data:jewelry,
//                 length:jewelry.length
//             }) 
//         })
//         .catch(err=>{
//             res.status(404).json({
//                 message:"Jewelry was not returned",
//                 data:err
//             })
//         })
//     }

jewelryModel.find({catergory:{$ne:'Waistbead'}})
            .then((jewelry)=>{
            res.json({
                message:'All Jewelry has been returned',
                data:jewelry
            })
        })
        .catch(err => {
            res.status(404).json({
                message : `Cannot return jewelry`,
                err : err
            })

        })

   
}


const getJewelryProducts = (req,res)=>{
jewelryModel.find({$or:[{color:req.query.color},{size:req.query.size}]})
        .skip((req.query.page-1)*16)
        .limit(16)
        .then((jewelry)=>{
            res.json({
                message:'All Jewelry has been returned',
                data:jewelry
            })
        })
        .catch(err => {
            res.status(404).json({
                message : `Cannot return jewelry`,
                err : err
            })

        })

   
}

const getJewelryColors = (req,res)=>{
    jewelryModel.find().distinct('color')
            .then((jewelry)=>{
                res.json({
                    message:'All Colors has been returned',
                    data:jewelry
                })
            })
            .catch(err => {
                res.status(404).json({
                    message : `Cannot return Colors`,
                    err : err
                })
    
            })
    
       
    }


    const getJewelrySize = (req,res)=>{
        jewelryModel.find().distinct('size')
                .then((jewelry)=>{
                    res.json({
                        message:'All Size has been returned',
                        data:jewelry
                    })
                })
                .catch(err => {
                    res.status(404).json({
                        message : `Cannot return Size`,
                        err : err
                    })
        
                })
        
           
        }


        const getJewelryCategory = (req,res)=>{
            jewelryModel.find().distinct('catergory')
                    .then((jewelry)=>{
                        res.json({
                            message:'All catergory has been returned',
                            data:jewelry
                        })
                    })
                    .catch(err => {
                        res.status(404).json({
                            message : `Cannot return catergory`,
                            err : err
                        })
            
                    })
            
               
            }
    

const getAllFeaturedJewelry = (req,res)=>{
    jewelryModel.find({featured:true})
        .limit(req.query.limit)
        .then((jewelry)=>{
            res.json({
                message:"Featured Jewelry returned",
                lenght:jewelry.length,
                data:jewelry
            })
        })
        .catch(err =>{
            res.status(400).json({
                message:'Cannot return featured Jewelry',
                err:err
            })
        })
}

const getAJewelry = (req,res) =>{
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




const addNewJewelry = (req,res) =>{

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

      
        s3Client.send(new PutObjectCommand(params),(err,data)=>{
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




const deleteOneJewelry = (req,res) =>{
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

const updateOneJewelry = (req,res) =>{
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


const getAllWaistbeads = (req,res) =>{
    jewelryModel.find({catergory:'Waistbead'})
    .then((jewelry)=>{
        res.json({
            message:'All waistbeads have been returned',
            data:jewelry,
            length:jewelry.length
        })
       
    })
    .catch((err)=>{
        res.status(404).json({
            message:err
        })
    })
}

export {getAllWaistbeads,updateOneJewelry,deleteOneJewelry,addNewJewelry,getAJewelry,getAllFeaturedJewelry,getJewelryCategory,getAllJewelry,getJewelryProducts,getJewelryColors,getJewelrySize}