export const userValidation = {
    firstname:{
        notEmpty:{
            errorMessage:"Firstname field must be filled"
        },
        isString:{
            errorMessage:"Firstname must be a string"
        }
    },
    lastname:{
        notEmpty:{
            errorMessage:"Firstname field must be filled"
        },
        isString:{
            errorMessage:"Firstname must be a string"
        }
    },
    email:{
        exists:{
            errorMessage:"An email address must be provided"
        },
        isEmail:{
            errorMessage:'Email provided is not valid'
        },

    },
    password:{
        exists:{
            errorMessage:"A password must be provided"
        },
        isLength:{
            options:{
                min:5,
            },
        
            errorMessage:'Password must be longer than 5 characters'
        }
    }

}