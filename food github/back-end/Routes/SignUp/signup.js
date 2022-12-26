//Importing Packages
const express = require("express");
const Router = express.Router();

//Importing Files
const Signup = require('../../Schemas/Signup/signup');

Router.post("/signup", (req,res,next)=> {

    const {firstName,email,password,retype,selectedLanguage } = req.body;
    
    const saveUserData = new Signup({
        firstName,email,password,retype,selectedLanguage
    });

    Signup.findOne({email}).then(user=>{
        if(!user)
        {
            if(email.includes("@gmail.com"))
            {
                if(password === retype)
                {
                    if(password.length > 5)
                    {
                        saveUserData.save().then(output=>{
                            return res.status(200).json({
                                message:"You are Good to Go"
                            });
                        }).catch(err=>{
                            return console.log(err);
                        });
                    }
                    else
                    {
                        return res.status(404).json({
                            message:"Password is weak"
                        });
                    }
                    
                }
                else
                {
                    return res.status(402).json({
                        message:"Password does not match"
                    });
                }
            }
            else
            {
                return res.status(403).json({
                    message:"Not a Valid Email"
                });
            }
            
        }
        else
        {
            return res.status(401).json({
                message:"User already not exist"
            });
        }
    }).catch(err=>{
        return console.log(err);
    });
});

module.exports = Router;