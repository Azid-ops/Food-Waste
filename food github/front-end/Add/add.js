//Importing PAckages
import React, {useState} from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-gesture-handler";


const Add = (props) => {

    const [foodName,setFoodName] = useState("");
    const [location,setLocation] = useState("");
    const [quantity,setQuantity] = useState("");
    const [link,setLink] = useState("");


    const submit = async () => {
        try{
            await fetch("http://192.168.74.186:5000/donateFood", {
                method:"POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify({
                    foodName,location,quantity,link
                })
            })
        }
        catch(err)
        {
            alert(err);
        }
        
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.register}>
                    Add Food
                </Text>


                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Food Name"
                    onChangeText={setFoodName}
                />

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Image Link"
                    onChangeText={setLink}
                />

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Location"
                    onChangeText={setLocation}
                />

                <TextInput 
                    style={styles.enterField} 
                    placeholder="Enter Quantity"
                    onChangeText={setQuantity}
                />

                <TouchableOpacity 
                    style={styles.signupButton}
                    onPress={submit}
                >
                    <Text 
                        style={styles.signupButtonText}
                        onPress={props.signedInData}
                    >
                        Donate
                    </Text>
                </TouchableOpacity>

                {
                    props.userExist ? 
                    <Text 
                        style={styles.errorText}
                        onPress={props.submitForm}
                    >
                        {props.userExist}
                    </Text> : null
                }

            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingTop:150,
        height:700
    },
    register:{
        fontSize:25,
        color:"black",
        fontWeight:"bold"

    },
    enterField:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"gray",
        width:"90%",
        height:"15%",
        marginTop:20,
        padding:10,
        color:"black",
        fontSize:15,
        borderRadius:10,
    },
    signupButton:{
        width:"90%",
        alignItems:"center",
        backgroundColor:"blue",
        marginTop:50,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10
    },
    signupButtonText:{
        color:"white",
        fontSize:25
    },
    errorText:{
        color:"red",
        fontSize:18,
        marginTop:20
    }
})

export default Add;