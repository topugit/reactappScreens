import React from "react";
import { Text, View, StyleSheet,ScrollView,Image, Button } from "react-native";

const CardDetail = (props) =>{
    let CardImageSrc = undefined;
    if (props.title=="Beach") {
        CardImageSrc = require("../../../assets/beach.jpg")
    } else if(props.title=="Forest"){
        CardImageSrc = require("../../../assets/forest.jpg")
    }
    else {
        CardImageSrc = require("../../../assets/mountain.jpg")
    }
    return (
        <ScrollView>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{props.title}</Text>
                <Image 
                    source = {CardImageSrc}
                    style={styles.ImageStyle}
                />

            </View>
            </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color:"blue",
    },
    ImageStyle:{
        height:100,
        width:100,
        margin:5
    },
    viewStyle:{
        borderColor:"blue",
        borderWidth:5,
        margin:5,
        flexDirection:'row',
        alignSelf:"flex-end"

    },  
});

export default CardDetail;