//Importing Packages
const express = require("express");
const Router = express.Router();

//Importing Files
const Donation = require('../../Schemas/Donate/donate');

Router.post("/confirmDonation", (req,res,next)=> {

    console.log("Coming here");
    const {id,data} = req.body;

    console.log(id,data);

});

module.exports = Router;