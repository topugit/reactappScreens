import React from "react";
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = (props) => {
   // console.log(props)
    return (
        <View>
            <Text style ={txtstyles.textStyle}>HomeScreen</Text>
            <Button 
                title = 'Go To List Screen' 
                onPress={function(){
                props.navigation.navigate("List");
                
                }}
            />
        </View>
    

    );
}

const txtstyles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'blue',
        },
    }
);

export default HomeScreen;