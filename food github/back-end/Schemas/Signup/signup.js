const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const registerUser = new Schema({
    firstName:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    retype:{
        type:"String",
        required:true
    },
    selectedLanguage:{
        type:'String',
        required:true
    }
});

module.exports = mongoose.model("registerUser", registerUser);