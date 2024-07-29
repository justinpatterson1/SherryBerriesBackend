import mongoose from "mongoose";
const {Schema} = mongoose

const jewelrySchema = new Schema({
name:{
    type:String,
    require:true
},
size:{
    type:String,
    
},
color:{
    type:String,
    require:true
},
catergory:{
    type:String,
    require:true
},
img:[{
    type:String,
    require:true
}],
price:{
    type:Number,
    require:true
},
Quantity:{
    type:Number,
    require:true
},
bodyPart:{
    type:String
},
featured:{
    type:Boolean,
    default:false
}


})

const jewelryModel = mongoose.model("jewelry",jewelrySchema);
export default jewelryModel;