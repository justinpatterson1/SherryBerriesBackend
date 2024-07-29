const validateJewelry = {
    name:{
        notEmpty:{
            errorMessage:"Please provide name for jewelry"
        },
        isString:{
            errorMessage:"Name must be a word or a letter"
        }
    },
    color:{
        notEmpty:{
            errorMessage:"Please enter color of jewelry"
        }
    },
    catergory:{
        notEmpty:{
            errorMessage:"Please enter jewelry category"
        }
    },
    price:{
        // isInt:{
        //     errorMessage:"Price must be a number"
        // },
        notEmpty:{
            errorMessage:"Please enter the price of jewelry"
        }
    },
    Quantity:{
        // isInt:{
        //     errorMessage:"Quantity must be a number"
        // },
        notEmpty:{
            errorMessage:"Please enter the quantity of jewelry"
        }
    },
    bodyPart:{
        notEmpty:{
            errorMessage:"Please enter the body part for jewelry"
        }
    }
}


export{validateJewelry}