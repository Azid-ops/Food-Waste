//Importing PAckages
import React, { useState } from 'react';

//Importing Files
import SigninPage from '../pages/signin';

const Signin = (props) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("User");

    const goToSignUp = () => {
        props.navigation.navigate("Signup");
    }

    const signedInData = async () => {
        try
        {
            const statusCatcher = await fetch("http://192.168.74.186:5000/signin", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    email,password,selectedLanguage
                })
            });

            if(statusCatcher.status === 200)
            {
                props.navigation.navigate("User Dashboard");
            }

            if(statusCatcher.status === 201)
            {
                props.navigation.navigate("Restaurant Dashboard");
            }
        }
        catch(err)
        {
            alert(err);
        } 
    }

    return(
        <SigninPage 
            setPassword={setPassword} 
            setEmail={setEmail}
            email={email} 
            password={password}
            signedInData={signedInData}
            goToSignUp={goToSignUp}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
        />
    )
}

export default Signin;