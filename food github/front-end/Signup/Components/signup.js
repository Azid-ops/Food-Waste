//Importing Packages
import React, { useState } from "react";

//Importing Files
import SignupPage from "../Pages/signup";

//Entry Point of this Page
const Signup = (props) => {


    const [firstName,setFirstName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [retype,setRetype] = useState("");
    const [userExist,setUserExist] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("User");


    const goto = () => {
        props.navigation.navigate("Signin");
    }

    const submitForm = async () => {
        try
        {
            const signedUpData = await fetch("http://192.168.74.186:5000/signup", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    firstName,email,password,retype,selectedLanguage
                })
            });
    
            if(signedUpData.status === 401)
            {
                setUserExist("User Already Exist");
            }
    
            if(signedUpData.status === 402)
            {
                setUserExist("Password Doesnot Match");
            }
    
            if(signedUpData.status === 403)
            {
                setUserExist("Enter a Valid Email");
            }

            if(signedUpData.status === 404)
            {
                setUserExist("Weak Password");
            }
    
            if(signedUpData.status === 200)
            {
                setUserExist("");
                props.navigation.navigate("Signin");
            }
        }
        catch(err)
        {
            alert(err);
        } 
    }

    //Calling to Signup Page
    return(
        <SignupPage 
            setFirstName={setFirstName} 
            setEmail={setEmail}
            setPassword={setPassword}
            setRetype={setRetype}
            submitForm={submitForm}
            userExist={userExist}
            goto={goto}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
        />
    )
}

//Exporting File
export default Signup;