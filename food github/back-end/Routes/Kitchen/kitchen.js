//Importing Packages
const express = require("express");
const Router = express.Router();

//Importing Files
const Donation = require('../../Schemas/Donate/donate');

Router.get("/getKitchenData", (req,res,next)=> {

    Donation.find().then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = Router;