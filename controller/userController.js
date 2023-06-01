const express = require('express');
const router = express.Router()
const userServices = require('../services/userServices.js');
const { model } = require('mongoose');

router.get("/",userServices.getAllUsers);
router.get("/:id",userServices.getAUser);
router.post("/",userServices.createAuser);
router.put("/:id",userServices.updateAUser);
router.delete("/:id",userServices.deleteAUser);

module.exports = router;