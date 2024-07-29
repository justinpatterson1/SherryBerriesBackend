import jewelryModel from '../model/jewelryModel.js'
import { v4 as uuidv4 } from 'uuid';
// const {v4} = uuid
import multer from 'multer'
import multerS3 from 'multer-s3'
import {s3Client} from "../libs/s3Client.js"
import  {S3Client , PutObjectCommand} from  "@aws-sdk/client-s3";
import {validationResult,matchedData} from 'express-validator'

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

// jewelryModel.find({catergory:{$ne:'Waistbead'}})
//             .then((jewelry)=>{
//             res.json({
//                 message:'All Jewelry has been returned',
//                 data:jewelry
//             })
//         })
//         .catch(err => {
//             res.status(404).json({
//                 message : `Cannot return jewelry`,
//                 err : err
//             })

//         })

   jewelryModel.find({})
    .then((jewelry)=>{
        res.json({
            message:"All Jewelry have been returned",
            data:jewelry
        })
    }).catch((err)=>{
        res.status(400).json({
            message:err
        })
    })
}

const createNewJewelry =(req,res) =>{
    const result = validationResult(req)

    if(!result.isEmpty()) 
        return res.status(400).json({
            message:"Error occured when creating jewelry item ",
            error:result.array()
    })

    const data = matchedData(req);

    console.log(req)

    const newJewelryProduct = new jewelryModel(data)

    newJewelryProduct.save()
    .then((jewelry)=>{
        const fileName = `${uuidv4()}_${req.files.img.name}`

        
        const params = {
                Bucket: process.env.BUCKET_NAME,
                Key: fileName,
                Body:req.files.img.data
        }

       console.log(params)

      
        s3Client.send(new PutObjectCommand(params),(err,data)=>{
            if (err) {
                console.log(err)
                throw err;
                
            }

            console.log(params.Key)

                newJewelryProduct.img = process.env.REPO+params.Key

                console.log(newJewelryProduct)
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
export{getAllJewelry,createNewJewelry}
