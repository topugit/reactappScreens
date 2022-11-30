import React, {useState} from "react";
import { Text, View, StyleSheet,ScrollView, Button } from "react-native";

const CreateRGB = () => {
    let red     = Math.floor(Math.random()*255)
    let green   = Math.floor(Math.random()*255)
    let blue    = Math.floor(Math.random()*255)

    let str = 'rgb('+red+','+green+','+blue+')'
    return str;
}
const StateScreenBox = (props) => {
    let [Color, setColor] = useState('rgb(39,135,7)');
    return (       
        <View>
            <Text>State Screen BOX</Text>
            <Button 
                title="Change Color"
                onPress={function(){
                    setColor(CreateRGB())
                    }} 
            />
            {/* <View style ={{height: 100, width: 100, backgroundColor: "rgb(247,7,7)" }} /> */}
            <View style ={{height: 100, width: 100, backgroundColor: Color }} />

            <Button 
                title = 'Go To Input Components' 
                onPress={function(){
                props.navigation.navigate("Input Component");                 
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

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'red',
            
        },
        viewStyle:{
            backgroundColor: 'green',
            borderColor:'red',
            borderWidth: 5,
        }
    }
)

export default StateScreenBox;