import express from 'express';
const router = express.Router()
import {updateOneJewelry,deleteOneJewelry,getAJewelry,getAllFeaturedJewelry,getJewelryCategory,getAllJewelry,getJewelryProducts,getJewelryColors,getJewelrySize,addNewJewelry, getAllWaistbeads} from '../services/jewelryServices.js';
// const {protectRoute} = require('../middleware/protectedRoute.js');
// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const {uploadS3} = require('../middleware/multer.js')
// const { model } = require('mongoose');

// const  {S3Client } = require( "@aws-sdk/client-s3");
// // Set the AWS Region.
// ; //e.g. "us-east-1"
// // Create an Amazon S3 service client object.
// const s3Client = new S3Client({
//      region: process.env.REGION ,
//      credentials:{
//         accessKeyId:process.env.AWSACCESSKEYID,
//         secretAccessKey:process.env.AWSSECRETACESSKEY
//      }
// });

// const upload = multer({
//     storage: multerS3({
//       s3: s3Client,
//       bucket: 'some-bucket',
//       metadata: function (req, file, cb) {
//         cb(null, {fieldName: file.fieldname});
//       },
//       key: function (req, file, cb) {
//         cb(null, Date.now().toString())
//       }
//     })
//   })

router.get("/",getAllJewelry);
router.get("/featured",getAllFeaturedJewelry);
router.get("/waistbead",getAllWaistbeads)
router.get("/products",getJewelryProducts);
router.post("/",addNewJewelry);
router.get("/:id",getAJewelry);

router.delete("/:id",deleteOneJewelry);
router.put("/:id",updateOneJewelry);


export default router;