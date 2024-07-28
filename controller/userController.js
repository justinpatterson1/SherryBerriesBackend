import express from 'express';
const router = express.Router()
import {loginUpdate,loginUser,updateUserCart,getUserCart,deleteAUser,updateAUser,createAuser,getAUser,getAllUsers} from '../services/userServices.js'
import {checkSchema} from 'express-validator'
import { userValidation } from '../validators/UserValidation.js';
import { model } from 'mongoose';

router.get("/",getAllUsers);
router.get("/cart/:id",getUserCart)
router.get("/:id",getAUser);
router.post("/",checkSchema(userValidation),createAuser);
router.put("/:id",updateAUser);
router.delete("/:id",deleteAUser);
router.post("/auth",loginUser)
router.post("/update/:id",loginUpdate)
router.put("/:id/:cartid",updateUserCart)

export default router;