const express = require('express');
const router = express.Router()
const jewelryServices = require('../services/jewelryServices.js');
const {protectRoute} = require('../middleware/protectedRoute.js')
const { model } = require('mongoose');


router.get("/",protectRoute,jewelryServices.getAllJewelry);
router.post("/",jewelryServices.addNewJewelry);
router.get("/:id",jewelryServices.getAJewelry);
router.delete("/:id",jewelryServices.deleteOneJewelry);
router.put("/:id",jewelryServices.updateOneJewelry);


module.exports  = router;