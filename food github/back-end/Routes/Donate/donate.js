//Importing Packages
const express = require("express");
const Router = express.Router();

//Importing Files
const Donation = require('../../Schemas/Donate/donate');

Router.post("/donateFood", (req,res,next)=> {

    const {foodName,link,location,quantity} = req.body;

    const Donate = new Donation({
        foodName,link,location,quantity,isDonated:"false"
    })

    Donate.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    });

});

module.exports = Router;