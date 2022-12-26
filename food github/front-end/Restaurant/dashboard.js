import React, { useEffect, useState } from "react";
import {Image, Text, ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import Foody from '../assets/adaptive-icon.png';

const Dashboard = (props) => {

    const [data,setData] = useState([]);

    const addMoreFood = () => {
        props.navigation.navigate("Add More Food");
    }


    const donateMyFood = async(id) => {
        try{
            await fetch('http://192.168.74.186:5000/confirmDonation', 
            {
                method:"POST",
                headers:{
                    'Content-Type':'applicaton/json'
                },
                body:JSON.stringify({
                    id,data
                })
            })
        }
        catch(err)
        {
            alert(err);
        }
    }

    useEffect(()=>{
        (
            async() => {
                try
                {
                    const final = await fetch('http://192.168.74.186:5000/getKitchenData', 
                    {
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            'Content-Type':'applicaton/json'
                        }
                    })
                    const newData = await final.json();
                    setData(newData);
                }
                catch(err)
                {
                    console.log(err);
                }
                
            }
        )();  
    })
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.donate}>Food Available In Your Kitchen</Text>
                {
                    data.length === 0 ? 
                        <View>
                            <View style={styles.details}>
                                <TouchableOpacity onPress={addMoreFood} style={styles.foodMore}>
                                    <Text style={styles.myFood}>Add More Food</Text>
                                </TouchableOpacity>
                            </View>
                        </View>:
                    data.map((key)=>{
                        return(
                            <View>
                                {/* <Image  style={styles.myImage} source={{Foody}} /> */}
                                <View style={styles.details}>
                                    <Text style={styles.food}>Food: {key.foodName}</Text>
                                    <Text style={styles.food}>Address: {key.location}</Text>
                                    <Text style={styles.food}>Quantity: {key.quantity}</Text>
                                    {/* <TouchableOpacity onPress={() => donateMyFood(key._id)} style={styles.foodDonate}>
                                        <Text style={styles.myFood}>Donate</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={styles.delete}>
                                        <Text style={styles.myFood}>Delete</Text>
                                    </TouchableOpacity> */}
                                    <TouchableOpacity onPress={addMoreFood} style={styles.foodMore}>
                                        <Text style={styles.myFood}>Add More Food</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
                
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    myImage:{
        width:"90%",
        height:350,
        borderRadius:10,
        marginTop:40
    },
    container:{
        alignItems:"center",
        width:"80%",
        backgroundColor:"silver",
        borderRadius:20,
        justifyContent:"center",
        marginLeft:60,
        marginTop:20,
        
    },
    food:{
        marginLeft:60,
        marginTop:10,
        fontSize:18
    },
    donate:{
        marginTop:20,
        fontSize:25
    },
    foodDonate:{
       marginTop:10,
       marginLeft:58,
       backgroundColor:"green",
       alignItems:"center",
       width:"50%",
       paddingTop:10,
       paddingBottom:10,
       paddingLeft:20,
       paddingRight:20,
       borderRadius:10
    },

    foodMore:{
        marginTop:10,
        marginLeft:58,
        backgroundColor:"green",
        alignItems:"center",
        width:"80%",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
     },
     delete:{
        marginTop:10,
        marginLeft:58,
        backgroundColor:"red",
        alignItems:"center",
        width:"50%",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
     },
    myFood:{
        fontSize:18,
        color:"white"
    },
    details:
    {
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:"red",
        paddingBottom:10,
        width:"90%"
    }
})

export default Dashboard;