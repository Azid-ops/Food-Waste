//Importing Packages
const express = require("express");
const mongoose = require("mongoose");

//Importing Local Files
const Signup = require('./Routes/SignUp/signup.js');
const Signin = require('./Routes/SignIn/signin');
const Donate = require('./Routes/Donate/donate');
const Kitchen = require('./Routes/Kitchen/kitchen');
const ConfirmDonation = require('./Routes/Donate/confirm');

const app = express();

app.use(express.json());
app.use(Signup);
app.use(Signin);
app.use(Donate);
app.use(Kitchen);
app.use(ConfirmDonation);

mongoose.connect("mongodb+srv://Mahad:Mahad@cluster0.btoqm.mongodb.net/FoodWaste").then(result=>{
    app.listen(5000);
}).catch(err=>{
    console.log(err);
});