import React, {useState} from "react";
import { Text, View, StyleSheet,ScrollView, Button } from "react-native";

const StateScreen = (props) => {
    let [Counter, setCounter] = useState(0); // setCounter used to change counter
    return (       
        <View>
            <Text>{Counter}</Text>
            <Button
                title="Increase"
                onPress={function(){
                    setCounter(Counter++)
                }}
            />

            <Button
                title="Decrease"
                onPress={function(){
                    setCounter(Counter--)
                }}
            />

            <Button 
                title = 'Go To State Screen Box' 
                onPress={function(){
                props.navigation.navigate("State Screen Box");                 
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

export default StateScreen;