const express = require("express");
const mongoose = require ("mongoose");
const fileUpload = require("express-fileupload")

const jewelryController = require('./controller/jewelryController.js');
const userController = require('./controller/userController.js')

if(process.env.NODE_ENV!="production")
{
    require("dotenv").config({path:"config/Keys.env"})
}



 app = express();

 app.use(express.json())

 app.use(fileUpload())



const PORT = process.env.PORT;

app.use("/jewelry",jewelryController );
app.use("/user", userController)

app.listen(PORT,()=>{
    mongoose.connect(process.env.MONGODB,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Mongoose is connected")
    })
    .catch(err => console.log(err))
    console.log(`Example app listening on port ${PORT}`)
})