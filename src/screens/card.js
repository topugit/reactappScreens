import React from "react";
import { Text, View, StyleSheet,ScrollView,Image, Button } from "react-native";
import CardDetail from "./component/cardDetails";

const Cards = (props) => {
    return (
        
            <View>
            <CardDetail title ="Beach" />
            <CardDetail title ="Forest" />
            <CardDetail title ="Mountain"/>

            <Button 
                title = 'Go To Storage Screen' 
                onPress={function(){
                props.navigation.navigate("Storage Screen");
                
                }}
            />
            </View>
       
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color:"blue",
    },
});
export default Cards;