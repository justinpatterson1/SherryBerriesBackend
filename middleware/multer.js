const multer = require("multer")
const multerS3 = require("multer-s3")
const s3Client = require("../libs/s3Client.js")

exports.uploadS3 = multer({
   
        storage: multerS3({
          s3: s3Client,
          bucket: "sherry-berries-repo",
          acl: "public-read",
          metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
          },
          key: function (req, file, cb) {
            cb(null, file.originalname)
          }
        })
      
    
})