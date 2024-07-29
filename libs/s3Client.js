import {S3Client } from "@aws-sdk/client-s3";
// Set the AWS Region.
; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3Client({
     region: process.env.REGION ,
     credentials:{
        accessKeyId:process.env.AWSACCESSKEYID,
        secretAccessKey:process.env.AWSSECRETACESSKEY
     }
});
export  { s3Client };