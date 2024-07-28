import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
firstname:{
    type:String,
    require:true
},
lastname:{
    type:String,
    require:true
    
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
  
},
cart:[
    {
       
       name:String,
       price:Number,
       img:[{type:String}],
       quantity:{type:Number,Default:1},
       order:String
       
       
    }
  ],
})

const userModel = mongoose.model("users",userSchema);
export default userModel;