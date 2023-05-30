const jewelryModel = require('../model/jewelryModel.js')


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
    
    const newJewelryProduct = new jewelryModel(req.body)

    newJewelryProduct.save()
        .then((jewelry) => {
            res.json({
                message:'New item has been created',
                data:jewelry
            })
            console.log(req.body)
        })
        .catch(err=>{
            res.status(500).json({
             message:'Movie was not created',
             error:err
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