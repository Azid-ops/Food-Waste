const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donateFood = new Schema({
    foodName:{
        type:"String",
        required:true
    },
    link:{
        type:"String",
        required:true
    },
    location:{
        type:"String",
        required:true
    },
    quantity:{
        type:"String",
        required:true
    },
    isDonated:{
        type:"bool",
        required:true
    }
});

module.exports = mongoose.model("DonateFood", donateFood);