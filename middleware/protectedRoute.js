const jwt = require("jsonwebtoken")

exports.protectRoute = (req,res,next)=>{

    const token = req.header("x-auth-header")

    if(!token){

        res.status(401).json({
            message:"You are not authorized"
        })
    }
    else {

        try {
            jwt.verify(token,process.env.JWT_TOKEN)
            next();
        } catch (error) {
            res.status(401).json({
                message:'Incorrect Token'
            })
        }
       
    }
}