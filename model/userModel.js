const mongoose = require("mongoose");
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
  
}

})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;