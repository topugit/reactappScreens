import React from "react";
import { Text, View, StyleSheet,ScrollView,Image, Button } from "react-native";
import {AsyncStorage} from 'react-native';

const StorageScreen = (props) =>{

    // Store Data as a string
    const setData = async(key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
                alert("Data Saved Successfully");
            
        } catch (error) {
            alert(error);
        }

    };

    const getData = async(key) => {
        try {
            const data = await AsyncStorage.getItem(key);
                if (data != null) {
                    alert(data);
                } else {
                    alert("No data assigned to this key")
                }
            
        } catch (error) {
            alert(error)
        }
    }

    const removeData = async(key)=>{
        try{
            await AsyncStorage.removeItem(key);
            alert("Data removed Successfully");
        }
        catch (error) {
            alert(error)
        }
    }


    return (
       
        <View>
            <Text>Storage Screen</Text>
            <Button 
                title="save Data"
                onPress={function(){
                    setData('CourseCode', 'Physics 102');
                }}
            />
            <Button 
                title="retrieve Data"
                onPress={function (){
                    getData('CourseCode');
                }}
            />

            <Button 
                title="Delete Data"
                onPress={function (){
                    removeData('CourseCode');
                }}
            /> 

               <Button 
                title = 'Go To State Screen' 
                onPress={function(){
                props.navigation.navigate("State Screen");                 
                }}
                style={{
                    backgroundColor:'red',
                    color:'white',
                    height:'100',
                    width:'100'
                }}
            />          
        </View>
       
    )
}

export default StorageScreen;